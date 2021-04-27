const { loadNuxt, build } = require('nuxt')
const config = require('../nuxt.config.js')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = config.server.https ? 8080 : 4443;

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  // Render every route with Nuxt.js
  app.use(nuxt.render)
  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  if( config.server.https ){
    const https = require('https');
    https.createServer(config.server.https, app).listen(port);
  }else{
    // Listen the server
    app.listen(port, '0.0.0.0')
  }  
  console.log('Server listening on `localhost:' + port + '`.')
}
start()