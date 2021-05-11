
// https://api.upbit.com/v1/market/all

const axios = require("axios");


(async () => {
    console.log("async start");
    // https://cors-nhj12311.herokuapp.com/

    //const result = await axios.get("https://api.upbit.com/v1/market/all?isDetails=true");
    //const result = await axios.get("https://m.naver.com");
    const result = await axios.get("https://cors-nhj12311.herokuapp.com/https://api.upbit.com/v1/market/all?isDetails=true",  { headers : {origin : '*'}  } );
    console.log(result);

    const arrUpbitMarkets = result.data;

    console.log(arrUpbitMarkets);

    const arrKrwMarkets = arrUpbitMarkets.filter(market => market.market.indexOf("KRW") > -1);
    const arrBtcMarkets = arrUpbitMarkets.filter(market => market.market.indexOf("BTC") > -1);

    console.log(arrKrwMarkets, arrBtcMarkets);

    const mapKrwMarkets = arrKrwMarkets.reduce( 
        (map, obj) => {
            map[obj.market] = obj;
            return map;
        }, {}
    )
    console.log(mapKrwMarkets);

    const existBtcMarkets =  arrBtcMarkets.filter( market => { return !mapKrwMarkets[ "KRW-"+market.market.split("-")[1] ] })

    console.log(existBtcMarkets);

    debugger;

})();

