const Parser = require('rss-parser');
const parser = new Parser();
const moment = require("moment");
moment.locale("ko");
(async () => {
    const feed_blockmedia = await parser.parseURL('https://www.blockmedia.co.kr/feed');
  //console.log(feed.title);

//   feed_blockmedia.items.forEach(item => {
//     console.log(item)
//   });


    const feed_tokenpost = await parser.parseURL('https://www.tokenpost.kr/rss');
  //console.log(feed.title);

//   feed_tokenpost.items.forEach(item => {
//     console.log(item)
//   });

    const feed_coindesk = await parser.parseURL('http://www.coindeskkorea.com/rss/allArticle.xml');
    //console.log(feed.title);

    //   feed_coindesk.items.forEach(item => {
    //     console.log(item)
    //   });

    const feed_coinpress = await parser.parseURL('https://www.coinpress.co.kr/feed/');

    // https://kr.coinness.com/newsflash.rss

    const feed_coinness = await parser.parseURL('https://kr.coinness.com/newsflash.rss');

    const feed_all = [ ...feed_blockmedia.items, ...feed_tokenpost.items, ...feed_coindesk.items, ...feed_coinpress.items, ...feed_coinness.items]

    console.log(feed_all);
  
    // feed_all.forEach(item => {
    //     console.log(item)
    // });

    const today = moment(new Date()).format("YYYYMMDD")

    console.log("today", today);

    const feed_today = feed_all.filter( item => {
        let pubDate = null;
        try {
            pubDate = moment(item.pubDate).format("YYYYMMDD");
            console.log("pubDate", pubDate);
            if( pubDate == "Invalid date"){
                console.log("Invalid item", item);
            }
        } catch (error) {
            console.error("pubDate parse error" , item, error);
        }
        return today == pubDate;
    })

    feed_today.forEach(item => {
        console.log(item)
    });


    debugger;

  // http://www.coindeskkorea.com/rss/allArticle.xml

})();