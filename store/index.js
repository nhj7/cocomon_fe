import Vue from 'vue'

//store/index.js
export const state = () => ({
    ticker: {
        upbit : {
            mapTicker : {}
            , arrTicker : []
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
    }
}

export const getters = { 
    getUpbitList(state) { 
        // 회원정보 불러오기 
        return state.ticker.upbit.arrTicker; 
    }, 
};

