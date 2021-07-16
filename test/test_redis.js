const redis = require('redis');

require('dotenv').config()

console.log(process.env.redis_host);

const redisClient = redis.createClient({
    host: process.env.redis_host
    , port: process.env.redis_port
    , password : process.env.redis_password
});
const {promisify} = require('util');
const getAsync = promisify(redisClient.get).bind(redisClient);

(async () => {
    const feed = await getAsync("feed")
    console.log(JSON.parse(feed).length);

    debugger;

    redisClient.end();
})();



