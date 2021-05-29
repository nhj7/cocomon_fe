const redis = require('redis');

require('dotenv').config()

console.log(process.env.redis_host);

const redisClient = redis.createClient({
    host: process.env.redis_host
    , port: process.env.redis_port
    , password : process.env.redis_password
});





redisClient.llen("chats", (err, n) => console.log(n))

redisClient.lrange("chats", -3, -1,  (err, arrData ) => { console.log(arrData) } )

redisClient.end();

const subClient = redis.createClient({
    host: process.env.redis_host
    , port: process.env.redis_port
    , password : process.env.redis_password
});

subClient.subscribe("socket.io#/#", (err, msg) => {
    console.log(err, msg);
} )

subClient.on("subscribe", function(channel, count) {
    console.log('on subscribe', channel, count)
    //publisher.publish("a channel", "a message");
    //publisher.publish("a channel", "another message");
});


const msgpack = require("notepack.io");

subClient.on("messageBuffer", function(channel, message) {
    console.log('on message', channel, message  )

    const args = msgpack.decode(message);
    const [uid, packet, opts] = args;

    if (packet && packet.nsp === undefined) {
        packet.nsp = "/";
    }
    
    // opts.rooms = new Set(opts.rooms);
    // opts.except = new Set(opts.except);

    console.log('on messageBuffer', packet, opts);

    const chatMsg = packet.data[1]

    console.log(chatMsg);
    //publisher.publish("a channel", "a message");
    //publisher.publish("a channel", "another message");
});


const pubClient = redis.createClient({
    host: process.env.redis_host
    , port: process.env.redis_port
    , password : process.env.redis_password
});

pubClient.publish('Goorm Channel', '발행자 첫번째 메시지');