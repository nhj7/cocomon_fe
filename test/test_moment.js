const moment = require("moment")
moment.locale("ko")
console.log(moment(new Date("2021-05-21 22:30:53 (KST)")).format("YYYY년 MM월 DD일 h:m A"));

//console.log(new Date("Sat Mar 11 2017 11:30:00 GMT+0900 (KST)"));