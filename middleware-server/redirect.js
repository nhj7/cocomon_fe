const app = require('express')()

console.log("process.env.httpPort", process.env.httpPort);

const port = 80;
const redirectSSL = require('redirect-ssl')
app.use(redirectSSL);
app.listen(port, () => {
    console.log(`redirect app listening at http://localhost:${port}`)
})
module.exports = app