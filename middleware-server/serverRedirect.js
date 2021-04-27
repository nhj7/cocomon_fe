const app = require('express')()
const port = 8080;

app.get('/', (req, res) => {
    console.log('redirectServer response!');
    res.send('redirectServer response!')
})

app.listen(port, () => {
    console.log(`redirect app listening at http://localhost:${port}`)
})