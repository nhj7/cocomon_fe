const io = require("socket.io-client")
const socket = io("http://192.168.55.26:7777/", { transports: ['websocket'] } )


socket.on("connect", () => {
    console.log('socket.io connect', socket.connected); // true
});
socket.on("disconnect", (reason) => {
    console.log('socket.io disconnect',socket.connected, reason); // true
});
socket.on("chat", (msg, cb) => {
    /* Handle event */
    if( Array.isArray(msg) ){
        console.log("array", msg);
    }else{
        console.log("chat on", msg, cb);
    }
});

const sendMsg = () => {
    const chatMsg = {
        date : new Date()
        , message : "아닌데요?"
        , userInfo : {
            sh : "SYSTEM"
            , nickName : "CoCoBot"
            , icon : {
                color : "#1976D2FF"
                , name : "robot-outline"
            }
        }
    }
    socket.emit("chat", chatMsg, (res) => {
        console.log("chat", res);
    });
}

setTimeout(sendMsg, 1000);

