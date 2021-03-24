import Vue from 'vue'

//store/index.js
export const state = () => ({
    ticker: {
        upbit : {
            mapTicker : {}
            , arrTicker : []
        }
    }, config : {
        isTickerColor : true
    }, market : {
        upbit : {

        }
    }
})

const pushData = (map, arr, obj, key, state) => {
    if (!map[obj[key]]) {
        obj.korean_name = state.market.upbit[obj.code].korean_name;
        map[obj[key]] = obj;        
        Vue.set(arr, arr.length, obj);        
        console.log("push!!!", obj[key]);
    } else {
        Object.assign(map[obj[key]], obj);
    }
};

export const mutations = {
    setTicker(state, ticker) {
        //state.ticker = ticker
        pushData( state.ticker.upbit.mapTicker, state.ticker.upbit.arrTicker, ticker, 'code', state);
    }, setConfig(state, obj){
        console.log("setConfig", obj);
        Object.assign(state.config, obj);
    }, setMarket(state, list){
        const obj = {};
        for(let i = 0; i < list.length;i++){
            obj[list[i].market] = list[i];
        }
        Object.assign(state.market.upbit, obj);
    }
}

export const getters = { 
    getUpbitList(state) { 
        // 회원정보 불러오기 
        return state.ticker.upbit.arrTicker; 
    }, 
};

export const strict = false;