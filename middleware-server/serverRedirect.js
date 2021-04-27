const app = require('express')()
<<<<<<< HEAD:middleware-server/redirectServer.js
const port = 8080;
=======
const redirectSSL = require('redirect-ssl')
const port = 8080;

app.use(redirectSSL);

app.get('/', (req, res) => {
    console.log('redirectServer response!');
    res.send('redirectServer response!')
})

>>>>>>> 67014f77515799a3c5b6578d71ca6241ba616931:middleware-server/serverRedirect.js
app.listen(port, () => {
    console.log(`redirect app listening at http://localhost:${port}`)
})