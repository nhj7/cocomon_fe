require("dotenv").config();

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

const rpush = (key, data) => {
    redisClient.rpush(key, JSON.stringify(data));
}

const ltrim = (key, start, stop ) => {
    redisClient.ltrim(key, start , stop);
}

const end = () => {
    redisClient.end(true);
}

module.exports = {
    rpush : rpush
    , ltrim : ltrim
    , end : end
}