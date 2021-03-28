import Vue from 'vue'
import { uuid } from 'vue-uuid'

//store/index.js
export const state = () => ({
    id : {
        cid : ''    // client id
        , sid : '' // session id
    }
    ,ticker: {
        upbit: {
            mapTicker: {}
            , arrTicker: []
        }, titleTicker : 'KRW-BTC'
    }, config: {
        isTickerColor: true
    }, market: {
        upbit: {
            krw : {

            }, btc : {

            }, usdt : {

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
    }
})

const pushData = (map, arr, obj, key, state) => {
    if (!map[obj[key]]) {
        obj.korean_name = state.market.upbit[obj.cd].korean_name;
        //obj = { name : obj.korean_name, data : obj }
        map[obj[key]] = obj;
        Vue.set(arr, arr.length, obj);
    } else {
        
        // const cpObj = { trade_price : obj.trade_price, 
        // signed_change_rate : obj.signed_change_rate,
        // acc_trade_price_24h : obj.acc_trade_price_24h }
        // map[obj[key]] = { ...map[obj[key]] , ...cpObj };
        
        Object.assign(map[obj[key]], { 
            tp : obj.tp, 
            scr : obj.scr,
            cr : obj.cr,
            atp24h : obj.atp24h
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
        state.market[exchangeName]['krw'] = list.map((market) => market.market).filter((market) => market.indexOf("KRW") > -1);
        state.market[exchangeName]['btc'] = list.map((market) => market.market).filter((market) => market.indexOf("BTC") > -1);
        state.market[exchangeName]['usdt'] = list.map((market) => market.market).filter((market) => market.indexOf("USDT") > -1);
        
        
    }, setShareData(state, data){
        Object.assign(state.data, data);
    }, setExchangeRate(state, obj) {
        console.log("setExchangeRate", obj);
        Object.assign(state.exchangeRate, obj);
    }, setId (state, obj){
        Object.assign(state.id, obj);
    }
}


export const getters = {
    getUpbitList(state) {
        // 회원정보 불러오기 
        return state.ticker.upbit.arrTicker;
    },
};

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        const v4 = uuid.v4();
        console.log("nuxtServerInit", 'sid', v4);
        commit('setId', { sid : v4 });
        this.$cookies.set("sid", v4);

        const cookiesRes = this.$cookies.getAll()
        console.log("cookiesRes", cookiesRes);
        if( cookiesRes.cid == undefined ){
            const cid = uuid.v4()
            console.log("create cid", cid );
            this.$cookies.set("cid", cid);
            commit('setId', { cid : cid });
        }
    }
}

Vue.util.comma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const strict = false;