const { loadNuxt, build } = require('nuxt')
const config = require('./nuxt.config.js')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const httpPort = 8080;
const httpsPort = 4443;
const port = config.server.https ? httpPort : httpsPort;

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  // Render every route with Nuxt.js
  app.use(nuxt.render)
  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }

  console.log(config);
  
  if( config.server.https ){
    const https = require('https');
    https.createServer(config.server.https, app).listen(httpsPort);
    console.log('Https Server listening on `localhost:' + httpsPort + '`.')
    
    const redirectApp = require('express')()
    const redirectSSL = require('redirect-ssl')
    redirectApp.use(redirectSSL);
    redirectApp.listen(httpPort, '0.0.0.0');
    console.log('Redirect Server listening on `localhost:' + httpPort + '`.')
  }else{
    // Listen the server
    app.listen(httpPort, '0.0.0.0')
    console.log('Http Server listening on `localhost:' + httpsPort + '`.')
  }  
  
}
start()