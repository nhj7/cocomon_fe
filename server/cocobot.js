
const newsReader = require("./news/newsReader");

const getFeed = async () => {
    const feed = await newsReader();
    console.log("feed", feed);
}

getFeed();


const cron = require('node-cron');

// every 5 min news rss refresh
// cron.schedule('* */5 * * * *'
// , async () => {
//     console.log("every 5 min....");
//     const feed = await newsReader();
//     console.log("feed", feed);
// } 
// ,{ timezone: "Asia/Seoul" }
// );

cron.schedule('*/1 * * * *'
, async () => {
    console.log("every 1 min news reader.");
    const feed = await newsReader();
    console.log("feed", feed);
} 
,{ timezone: "Asia/Seoul" }
);