const redis = require('redis');
const redisClient = redis.createClient({
    host: '192.168.55.26'
    , port: 6379
});



redisClient.llen("chats", (err, n) => console.log(n))

redisClient.lrange("chats", -3, -1,  (err, arrData ) => { console.log(arrData) } )