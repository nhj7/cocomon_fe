
const setTicker = (map, arr, obj, key) => {
    if( !map[obj[key]] ){
        map[obj[key]] = obj;
        arr.push(obj);
    }else{
        Object.assign(map[obj[key]], obj);
    }
}

const mapTicker = {};
const arrTicker = [];

const ii = { name : "나형주" , age : 33, addr : '서울'};

setTicker(mapTicker, arrTicker, ii, 'name');

console.log( arrTicker, mapTicker);

const ii2 = { name : "나형주" , age : 35, addr : '부산'};

setTicker(mapTicker, arrTicker, ii2, 'name');

console.log( arrTicker, mapTicker);