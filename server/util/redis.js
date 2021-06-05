require("dotenv").config();

// add redis
const redis_host = process.env.redis_host;
const redis_port = process.env.redis_port;
const redis_password = process.env.redis_password;
const redis = require('redis');

const retry_strategy = function(options) {
    if (options.error && (options.error.code === 'ECONNREFUSED' || options.error.code === 'NR_CLOSED')) {
        // Try reconnecting after 5 seconds
        console.error('The server refused the connection. Retrying connection...');
        return 5000;
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
        // End reconnecting after a specific timeout and flush all commands with an individual error
        return new Error('Retry time exhausted');
    }
    if (options.attempt > 50) {
        // End reconnecting with built in error
        return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
}

const redisClient = redis.createClient({
    host : redis_host
    , port : redis_port
    , password : redis_password
    , retry_strategy: retry_strategy
});
redisClient.on("error", function(error) {
    console.error("redisClient", error);
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