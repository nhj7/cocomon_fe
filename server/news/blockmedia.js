const axios = require("axios");
const moment = require("moment");
moment.locale("ko")
const main = async () => {
    const arrNews = [];
    try {
        const result = await axios.get("https://www.blockmedia.co.kr/feed");
        const cheerio = require("cheerio")
        const $ = cheerio.load(result.data);
        const arrItems = $("item");
        for(let i = 0; i < arrItems.length; i++){
            //debugger;
            try {
                const title = arrItems[i].children[1].children[0].data.replace("\\t","").trim();
                const link = arrItems[i].children[4].data.replace("\\t","").trim();
                const pubdate = arrItems[i].children[7].children[0].data.replace("\\t","").trim();
                let pubDateFormat = null;
                try {
                    pubDateFormat = moment(pubdate).format("YYYY년 MM월 DD일 h:mm A");                    
                } catch (error) {
                    console.error(error);
                    pubDateFormat = pubdate;
                }
                console.log( title, link, pubdate, pubDateFormat);

                arrNews.push({
                    title : title
                    , link : link
                    , pubdate : pubdate
                    , pubDateFormat : pubDateFormat
                });
            } catch (error) {
                console.error("blockmedia crawling error", error);
            }           
        }

    } catch (error) {
        console.error("blockmedia crawling error",error);
    }    
    return arrNews;
}

//main();

module.exports = main;