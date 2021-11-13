
const marked = require("marked");

module.exports = async (wsServer) => {
    console.log("middleware-server.socket-io.js");
    if( !process.env.redis_host || !process.env.redis_port || !process.env.redis_password ){
        throw Error(".env not in redis server config.")
    }else{
        console.log('process.env.redis_host : redis_port', process.env.redis_host, process.env.redis_port );
    }
    
    const io = require('socket.io')(wsServer, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"],
            transports: ['websocket', 'polling'],
            credentials: true
        }
        , allowEIO3: true
    }); //setting cors 
    
    // add redis
    const redis_host = process.env.redis_host;
    const redis_port = process.env.redis_port;
    const redis_password = process.env.redis_password;
    const redis = require('redis');
    const redisClient = redis.createClient({
        host : redis_host
        , port : redis_port
        , password : redis_password
    });
    redisClient.on("error", function(error) {
        console.error(error);
    });

    const adapterRedis = require('socket.io-redis')({ host: redis_host, port: redis_port , password : redis_password });
    io.adapter(adapterRedis);
    // adapterRedis.pubClient.on('error', function(error){
    //     console.log("adapter pubClient error", error);
    // });
    // adapterRedis.subClient.on('error', function(error){
    //     console.log("adapter subClient error", error);
    // });

    io.of('/').adapter.on('error', function(error){
        console.log("io.of('/').adapter.on('error' retry", error );
        //const adapterRedisRetry = require('socket.io-redis')({ host: redis_host, port: redis_port , password : redis_password });
        //io.adapter(adapterRedisRetry);
    });

    io.on('connection',async (socket) => {
        console.log('Connect from Client : ' + socket);
        // last 100 chats client send.
        const datas = redisClient.lrange("chats", -150 ,-1, (err, arrData) => {
            //console.log("datas", arrData);
            const arrObj = [];
            if(arrData){
                for(let i = 0; i < arrData.length;i++){
                    arrObj.push(JSON.parse(arrData[i]));
                }
                socket.emit('chat', arrObj);
            }
        });

        socket.on('chat',  async (data) => {
            // try{
            //     const sockets = await io.of('/').adapter.allRooms();
            //     console.log('await suc', sockets);
            // }catch(e){ console.log('await error ', e) }
            console.log(`message from Client(${socket.handshake.address}): ` + data.message )

            data.message = marked(data.message);
            if( data.message.indexOf("<a") > -1 ){
                data.message = data.message.replace(/<a/gi,"<a target='_blank' ")
            }
            //var rtnMessage = { message: data.message }; // 클라이언트에게 메시지를 전송한다 
            data.date = new Date();
            socket.emit('chat', data);
            socket.broadcast.emit('chat', data);

            redisClient.rpush("chats", JSON.stringify(data));
            redisClient.ltrim('chats', -1000 , -1);
        }); // end on chat.
    }) // end io.on('connection')
}


