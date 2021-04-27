const app = require('express')()
const port = 8080;
app.listen(port, () => {
    console.log(`redirect app listening at http://localhost:${port}`)
})