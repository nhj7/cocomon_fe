

const cron = require('node-cron');

// every 5 min news rss refresh
cron.schedule('* */5 * * * *'
, async () => {
    console.log("every 5 min....");

    const news = require("./news/newsReader")();

    console.log(news);
} 
,{ timezone: "Asia/Seoul" }
);
