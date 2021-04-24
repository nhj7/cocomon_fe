const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 7001

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
}

console.log(app);

// Listen the server
const result = app.listen(port, '0.0.0.0')

console.log(result);
// .then(() => {
//   console.log(`Server is listening on port: ${port}`)
// })