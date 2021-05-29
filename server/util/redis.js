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

const set = (key, value) => {
    redisClient.set(key, value);
}

const {promisify} = require('util');
const getAsync = promisify(redisClient.get).bind(redisClient);


const end = () => {
    redisClient.end(true);
}

const quit = () => {
    redisClient.quit();
}
module.exports = {
    rpush : rpush
    , ltrim : ltrim
    , end : end
    , set : set
    , getAsync : getAsync
    , quit : quit
}

//set("tmp","value11");

//quit();