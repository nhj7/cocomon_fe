const app = require('express')()
const redirectSSL = require('redirect-ssl')
app.use(redirectSSL);
module.exports = app