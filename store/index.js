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

const pushData = (map, arr, obj, key) => {
    if (!map[obj[key]]) {
        map[obj[key]] = obj;
        //arr.$set(arr.length, obj);
        //arr.push(obj);
        //Object.assign(arr, obj);
        Vue.set(arr, arr.length, obj);
        //Vue.set(arr, arr.length, obj);
        //debugger;
        console.log("push!!!", obj[key]);
    } else {
        Object.assign(map[obj[key]], obj);
    }
};

export const mutations = {
    setTicker(state, ticker) {
        //state.ticker = ticker
        pushData( state.ticker.upbit.mapTicker, state.ticker.upbit.arrTicker, ticker, 'code');
    }, setConfig(state, obj){
        console.log("setConfig", obj);
        Object.assign(state.config, obj);
    }, setMarket(state, list){
        const obj = {};
        for(let i = 0; i < list.length;i++){
            obj[list[i].market] = list[i];
        }
        Object.assign(state.market.upbit, obj);
        
        //state.market.upbit
    }
}

export const getters = { 
    getUpbitList(state) { 
        // 회원정보 불러오기 
        return state.ticker.upbit.arrTicker; 
    }, 
};

export const strict = false;