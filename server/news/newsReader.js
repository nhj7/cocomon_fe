const Parser = require('rss-parser');
const parser = new Parser();
const moment = require("moment");
moment.locale("ko");
const main = async () => {
    const feed_blockmedia = await parser.parseURL('https://www.blockmedia.co.kr/feed');
    feed_blockmedia.items.forEach(item => {
        item.creator = "블록미디어"
    });
    const feed_tokenpost = await parser.parseURL('https://www.tokenpost.kr/rss');
    feed_tokenpost.items.forEach(item => {
        item.creator = "토큰포스트"
    });
    const feed_coindesk = await parser.parseURL('http://www.coindeskkorea.com/rss/allArticle.xml');
    feed_coindesk.items.forEach(item => {
        item.pubDate = item.pubDate.replace("KST","(KST)")
        item.creator = "코인데스크코리아"
    });
    const feed_coinpress = await parser.parseURL('https://www.coinpress.co.kr/feed/');
    feed_coindesk.items.forEach(item => {
        item.creator = "코인프레스"
    });
    // https://kr.coinness.com/newsflash.rss
    const feed_coinness = await parser.parseURL('https://kr.coinness.com/newsflash.rss');
    feed_coindesk.items.forEach(item => {
        item.creator = "coinness"
    });
    // array merge spread operator.
    const feed_all = [ ...feed_blockmedia.items, ...feed_tokenpost.items, ...feed_coindesk.items, ...feed_coinpress.items, ...feed_coinness.items]
    //console.log(feed_all);
  
    // feed_all.forEach(item => {
    //     console.log(item)
    // });

    const today = moment(new Date()).format("YYYYMMDD")

    //console.log("today", today);

    const feed_today = feed_all.filter( item => {
        let pubDate = null;
        try {
            pubDate = moment(new Date(item.pubDate)).format("YYYYMMDD");
            //console.log("pubDate", pubDate);
            if( pubDate == "Invalid date"){
                console.log("Invalid item", item);
            }

            item.pubDateFormat = moment(new Date(item.pubDate)).format("YYYY년 MM월 DD일 h:m A");
        } catch (error) {
            console.error("pubDate parse error" , item, error);
        }
        return today == pubDate;
    })

    

    feed_all.sort( (a, b) => { return new Date(b.pubDate) - new Date(a.pubDate) })
    feed_today.sort( (a, b) => { return new Date(b.pubDate) - new Date(a.pubDate) })

    feed_all.forEach(item => {
        //console.log(item)
    });

    return feed_all;

    //debugger;

  // http://www.coindeskkorea.com/rss/allArticle.xml

};

module.exports = main;

//main();