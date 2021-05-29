//const bodyParser = require('body-parser')
const app = require('express')()
const redis = require('../server/util/redis')
app.all('/getJSON', (req, res) => {
  console.log(req.query)
  //res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
  res.json({ data: 'data', kr : "한글" })
})

app.all('/news', async (req, res) => {
  //console.log(req.query)
  //res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
  const feed = await redis.getAsync("feed");
  res.json({ feed: JSON.parse(feed) })
})

module.exports = app