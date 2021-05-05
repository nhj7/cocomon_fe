var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  }); //setting cors 
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With"); next();
});
app.get('/', function (req, res) { res.send('Hellow Chating App Server'); }); //connection event handler 


// add redis
const redis = require('socket.io-redis');
io.adapter(redis({ host: '192.168.55.26', port: 6379 }));

io.on('connection', function (socket) {
    console.log('Connect from Client: ' + socket)
    socket.on('chat', function (data) {
        console.log('message from Client: ' + data.message)
        var rtnMessage = { message: data.message }; // 클라이언트에게 메시지를 전송한다 
        socket.emit('chat',  data);
        socket.broadcast.emit( 'chat', data );
    });
})
server.listen(3001, function () { console.log('socket io server listening on port 3001') })

// redis-server install https://dejavuqa.tistory.com/153
// https://library.gabia.com/contents/8018/
// https://engineering.linecorp.com/ko/blog/the-architecture-behind-chatting-on-line-live/
// https://bcho.tistory.com/899
// redis-cli monitor
// 