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

const cheerio = require("cheerio");

(async () => {
    const _feed = await getAsync("feed")
    const feed = JSON.parse(_feed)

    for (let index = 0; index < feed.length; index++) {
        const element = feed[index];
        const $ = cheerio.load(element.content);
        const img = $("img");
        if( img.length > 0 ){
            
            console.log( `[![${element.title}](${img[0].attribs.src})](${element.link})` );
            debugger;
        }
        
    }
    console.log();

    debugger;

    redisClient.end();
})();



