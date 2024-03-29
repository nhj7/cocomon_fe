import Vue from 'vue'
import { uuid } from 'vue-uuid'

//store/index.js
export const state = () => ({
    id : {
        cid : ''    // client id
        , sid : '' // session id
    }
    ,ticker: {
        titleTicker : { market : '', trade_price : 0, signed_change_rate : 0 }
        , mode : 'KRW'
        , upbit: {
            mapTicker: {}
            , arrTicker: []
        }, binance : {
            mapTicker : {}
            , arrTicker : []
        } , curTicker : {
            mapTicker : {}
            , arrTicker : []
            , expanded : []
        }
    }, config: {
        isTickerColor: true
    }, market: {
        UBT: {
            KRW : {

            }, BTC : {

            }, USDT : {

            }, markets : []
        }, BNB : {
            USDT : {

            }
        }
    }, data : {

    }, exchangeRate : {
        KRWUSD : {

        }
    }, message : {
        isSnackbar : false,
        text : 'snacbar message',
        timeout : 1000,
    }, localStorage : { 
        favorCoinList : ["UBT-KRW-BTC"]
        , expandList : []
        , expandMap : {}
        , userInfo : {            
            sh : ''
            , nickName : ''
            , icon : {
                color : '#D2AA19FF'
                , name : 'currency-btc'
            }
          }
    }, socketIO : {
        socket : {}
        , connected : false
    } , chat : {
        chats : []
    }
})

const pushData = (map, arr, obj, key, state) => {
    //console.log("pushData");
    obj.kp = state.ticker.binance.mapTicker[obj.cd.split("-")[1]+"USDT" ] ?
        (((obj.tp / state.ticker.binance.mapTicker[obj.cd.split("-")[1]+"USDT" ].krwPrice ) - 1) * 100) .toFixed(2)
        : 0;
    
    if (!map[obj[key]]) {
        obj.korean_name = state.market.upbit[obj.cd].korean_name;
        //obj = { name : obj.korean_name, data : obj }
        map[obj[key]] = obj;
        //Vue.set(arr, arr.length, obj);
        //Object.freeze(obj);
        arr.push(obj);
    } else {
        Object.assign(map[obj[key]], { 
            tp : obj.tp, 
            scr : obj.scr,
            cr : obj.cr,
            atp24h : obj.atp24h,
            kp : obj.kp
        }); 
    }
};

export const mutations = {
    setTicker(state, ticker) {
        //state.ticker = ticker
        pushData(state.ticker.upbit.mapTicker, state.ticker.upbit.arrTicker, ticker, 'cd', state);
    }, setConfig(state, obj) {
        console.log("setConfig", obj);
        Object.assign(state.config, obj);
    }, setMarket(state, {exchangeName, list}) {
        console.log("setMarket", {exchangeName, list});
        for (let i = 0; i < list.length; i++) {
            state.market[exchangeName][list[i].market] = list[i];
        }
        state.market[exchangeName]['list'] = list;
        //state.market[exchangeName]['KRW'] = list.map((market) => market.market).filter((market) => market.indexOf("KRW") > -1);
        //state.market[exchangeName]['BTC'] = list.map((market) => market.market).filter((market) => market.indexOf("BTC") > -1);
        //state.market[exchangeName]['USDT'] = list.map((market) => market.market).filter((market) => market.indexOf("USDT") > -1);
        
        
    }, setShareData(state, data){
        Object.assign(state.data, data);
    }, setExchangeRate(state, obj) {
        console.log("setExchangeRate", obj);
        Object.assign(state.exchangeRate, obj);
    }, setId (state, obj){
        Object.assign(state.id, obj);
    } , setUserInfo ( state, obj) {
        Object.assign(state.localStorage.userInfo, obj);
    }
}


export const getters = {
    getUpbitList(state) {
        // 회원정보 불러오기 
        return state.ticker.upbit.arrTicker;
    },
};

export const actions = {
    async nuxtServerInit({ commit , state}, { req 
        , $winstonLog
    }) {
        const v4 = uuid.v4();
        //$winstonLog.info(`nuxtServerInit v4 ${v4}` );
        commit('setId', { sid : v4 });
        this.$cookies.set("sid", v4);

        //console.log("nuxtServerInit " , state.localStorage.userInfo);

        const cookiesRes = this.$cookies.getAll()
        let cid = cookiesRes.cid;
        let sh = cookiesRes.sh;
        //$winstonLog.info(`cookiesRes ${cookiesRes}`);
        if( cid == undefined || cid == '' ){
            cid = uuid.v4()
            //$winstonLog.info(`create cid ${cid}` );
            this.$cookies.set("cid", cid);
            commit('setId', { cid : cid });
        }
        const shortHash = require('short-hash');
        const new_sh = shortHash(cid);
        const ssh = shortHash(new_sh)
        this.$cookies.set("sh", new_sh);        
        commit('setId', { sh : new_sh });
    }
}

Vue.util.comma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const strict = false;