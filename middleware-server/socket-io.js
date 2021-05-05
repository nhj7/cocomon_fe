module.exports = async (wsServer) => {
    console.log("middleware-server.socket-io.js");
    const io = require('socket.io')(wsServer, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"],
            transports: ['websocket', 'polling'],
            credentials: true
        }
    }); //setting cors 
    
    // add redis
    const redis = require('redis');
    const redisClient = redis.createClient({
        host : '192.168.55.26'
        , port : 6379
    });
    redisClient.on("error", function(error) {
        console.error(error);
    });

    const socketIO_redis = require('socket.io-redis');
    const adapterRedis = socketIO_redis({ host: '192.168.55.26', port: 6379 });
    io.adapter(adapterRedis);
    // adapterRedis.pubClient.on('error', function(error){
    //     console.log("adapter pubClient error", error);
    // });
    // adapterRedis.subClient.on('error', function(error){
    //     console.log("adapter subClient error", error);
    // });

    io.of('/').adapter.on('error', function(error){
        console.log("io.of('/').adapter.on('error'", error );
    });

    io.on('connection',async (socket) => {
        console.log('Connect from Client : ' + socket)
        socket.on('chat',  async (data) => {

            try{
                const sockets = await io.of('/').adapter.allRooms();
                console.log('await suc', sockets);
            }catch(e){ console.log('await error ', e) }
            console.log('message from Client: ' + data.message )
            //var rtnMessage = { message: data.message }; // 클라이언트에게 메시지를 전송한다 
            socket.emit('chat', data);
            socket.broadcast.emit('chat', data);

            redisClient.rpush("chats", JSON.stringify(data));
            redisClient.ltrim('chats', -1000 , -1);
        });
    })
}


