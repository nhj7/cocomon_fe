import colors from 'vuetify/es5/util/colors'
import fs from 'fs'
import redirectSSL from 'redirect-ssl'

//let colors = require('vuetify/es5/util/colors')
//const fs = require( 'fs')

//export default {
//colors = colors.default;
//console.log(colors);

//module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

console.log(process.env);  
const config = {  
  ssr: true
  ,isDev: process.env.NODE_ENV !== 'production'
  ,server: {
    host: '0.0.0.0' // default: localhost
    , port: process.env.NODE_ENV == 'production' ? '4443' : ( process.env.httpPort || 8080 )
    , http : {
      
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - ${process.env.appName}`,
    title: `${process.env.appName}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "assets/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/util.js' },
    /*{ src: '~/plugins/client-only.js', mode: 'client' },
    { src: '~/plugins/server-only.js', mode: 'server' }*/
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-socket-io', 
    ['cookie-universal-nuxt', { alias: 'cookies' }],
    ['nuxt-vuex-localstorage', {
      mode: 'debug'
    }]
    
  ],
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'https://api.upbit.com/websocket/v1'
    }]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }, sepia : {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      } // end theme
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
      values : {sort: 'mdi-arrow-down'}
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    cache: true,
    hardSource: true,
  }, 
  publicRuntimeConfig: {
    baseURL: 'https://cocomon.kr'
    , appName: process.env.appName
    //, ip : Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family === 'IPv4' && !i.internal && i.address || []), [])), [])[0]
  }
  , privateRunTimeConfig: {
    ip: Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family === 'IPv4' && !i.internal && i.address || []), [])), [])[0]
  }
  , loading: {
    color: "blue",
    height: "5px"
  }, serverMiddleware: ['~/middleware-server/logger', { path: '/api', handler: '~/middleware-server/index.js' }]

}
if( process.env.NODE_ENV == "production"){
  config.server.https = {
    key: fs.readFileSync('/etc/letsencrypt/live/cocomon.kr/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/cocomon.kr/fullchain.pem')
  }
  config.serverMiddleware.push(
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
     })
  );
}


module.exports = config;