import Vue from 'vue'

//store/index.js
export const state = () => ({
    ticker: {
        upbit: {
            mapTicker: {}
            , arrTicker: []
        }
    }, config: {
        isTickerColor: true
    }, market: {
        upbit: {

        }
    }, data : {

    }
})

const pushData = (map, arr, obj, key, state) => {
    if (!map[obj[key]]) {
        obj.korean_name = state.market.upbit[obj.code].korean_name;
        //obj = { name : obj.korean_name, data : obj }
        map[obj[key]] = obj;
        Vue.set(arr, arr.length, obj);
        console.log("push!!!", obj[key]);
    } else {
        //map[obj[key]] = obj;
        // performance issue
        //Object.assign(map[obj[key]], obj);
        
        // const cpObj = { trade_price : obj.trade_price, 
        // signed_change_rate : obj.signed_change_rate,
        // acc_trade_price_24h : obj.acc_trade_price_24h }
        // map[obj[key]] = { ...map[obj[key]] , ...cpObj };
        
        Object.assign(map[obj[key]], { 
            trade_price : obj.trade_price, 
            signed_change_rate : obj.signed_change_rate,
            acc_trade_price_24h : obj.acc_trade_price_24h
        });
        
        /*
        map[obj[key]].trade_price = obj.trade_price;
        map[obj[key]].signed_change_rate = obj.signed_change_rate;
        map[obj[key]].acc_trade_price_24h = obj.acc_trade_price_24h;
        */
        /*
        <td
                    class="text-center" :class="[ $store.state.config.isTickerColor ? ( 0 > item.signed_change_rate ? 'blue--text' : 'red--text') : '' ]"
                  >{{ item.trade_price ? item.trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "" }}</td>
                  <td
                    class="text-center" :class="[ $store.state.config.isTickerColor ? ( 0 > item.signed_change_rate ? 'blue--text' : 'red--text') : '' ]"
                  >{{ ( 0 > item.signed_change_rate ? "" : "+" )+ Math.floor(item.signed_change_rate * 10000)/100 }}</td>
                  <td class="text-center">-</td>
                  <td class="text-center">{{ Math.floor(item.acc_trade_price_24h / 100000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>

                  */
    }
};

export const mutations = {
    setTicker(state, ticker) {
        //state.ticker = ticker
        pushData(state.ticker.upbit.mapTicker, state.ticker.upbit.arrTicker, ticker, 'code', state);
    }, setConfig(state, obj) {
        console.log("setConfig", obj);
        Object.assign(state.config, obj);
    }, setMarket(state, list) {
        const obj = {};
        for (let i = 0; i < list.length; i++) {
            obj[list[i].market] = list[i];
        }
        Object.assign(state.market.upbit, obj);
    }, setShareData(state, data){
        Object.assign(state.data, data);
    }
}

export const getters = {
    getUpbitList(state) {
        // 회원정보 불러오기 
        return state.ticker.upbit.arrTicker;
    },
};

export const actions = {
    async nuxtServerInit({ commit }) {
        console.log("nuxtServerInit");
        const { body } = await fetch('https://api.upbit.com/v1/market/all')
            .then(response => response.json())
        //commit('SET_ANNOUNCEMENT', body)
    }
}

export const strict = false;