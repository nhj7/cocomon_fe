//const bodyParser = require('body-parser')
const app = require('express')()

//app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data', kr : "한글" })
})

process.send('ready');

module.exports = app