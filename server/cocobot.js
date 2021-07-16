
const newsReader = require("./news/newsReader");
const redis = require("./util/redis");

const io = require("socket.io-client")
const socket = io("http://localhost:7777/", { transports: ['websocket'] } )

socket.on("connect", () => {
    console.log("cocobot","socket.io connect", socket.connected); // true
});
socket.on("disconnect", (reason) => {
    console.log("cocobot","socket.io disconnect",socket.connected, reason); // true
});

const getFeed = async () => {
    const feed = await newsReader();
    const oldFeed = JSON.parse(await redis.getAsync("feed"));

    if( oldFeed != null && oldFeed.length > 0 && feed != null && feed.length > 0 ){
        if( oldFeed[0].title != feed[0].title ){
            console.log("new ", oldFeed[0].title, feed[0].title);

            const chatMsg = {
                date : new Date()
                , message : `[${feed[0].title}](${feed[0].url})` 
                , userInfo : {
                    sh : "SYSTEM"
                    , nickName : "CoCoBot"
                    , icon : {
                        color : "#1976D2FF"
                        , name : "robot-outline"
                    }
                }
            }
            socket.emit("chat", chatMsg, (res) => {
                console.log("cocobot","chat", res);
            });
        }
    }


    redis.set("feed", JSON.stringify(feed) );
    console.log("feed update", feed.length);
    return feed;
    //debugger;
}

(async () => {
    await getFeed();
})();


const cron = require('node-cron');
cron.schedule('*/1 * * * *'
, async () => {
    console.log("every 1 min news reader.");
    const feed = await getFeed();
} 
,{ timezone: "Asia/Seoul" }
);