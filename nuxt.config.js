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
console.log("nuxt.config.js configuaration start.");
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
  }, serverMiddleware: [
    '~/middleware-server/logger'
    , { path: '/api', handler: '~/middleware-server/index.js' }
    
  ]

}
if( process.env.NODE_ENV == "production"){
  config.server.https = {
    key: fs.readFileSync('/etc/letsencrypt/live/cocomon.kr/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/cocomon.kr/fullchain.pem')
  }


  process.env = {
    LESSOPEN : '| /usr/bin/lesspipe %s',
    MAIL: '/var/mail/github',
    USER: 'github',
    LANGUAGE: 'en_US:en',
    npm_config_user_agent: 'npm/7.11.1 node/v14.16.0 linux x64',
    npm_node_execpath: '/usr/local/bin/node',
    SHLVL: '1',
    npm_config_noproxy: '',
    HOME: '/home/github',
    OLDPWD: '/app/actions-runner/_work/cocomon_fe',
    npm_package_json: '/app/actions-runner/_work/cocomon_fe/cocomon_fe/package.json',
    npm_config_userconfig: '/home/github/.npmrc',
    COLOR: '1',
    npm_config_metrics_registry: 'https://registry.npmjs.org/',
    LOGNAME: 'github',
    _: '/usr/local/bin/npm',
    npm_config_prefix: '/usr/local',
    TERM: 'xterm',
    npm_config_cache: '/home/github/.npm',
    npm_config_node_gyp: '/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js',
    PATH: '/app/actions-runner/_work/cocomon_fe/cocomon_fe/node_modules/.bin:/app/actions-runner/_work/cocomon_fe/node_modules/.bin:/app/actions-runner/_work/node_modules/.bin:/app/actions-runner/node_modules/.bin:/app/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games',
    NODE: '/usr/local/bin/node',
    npm_package_name: 'cocomon_fe',
    DISPLAY: 'localhost:10.0',
    LANG: 'en_US.UTF-8',
    LS_COLORS: 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:',
    npm_lifecycle_script: 'nuxt start',
    SHELL: '/bin/bash',
    npm_package_version: '1.0.0',
    npm_lifecycle_event: 'start',
    LESSCLOSE: '/usr/bin/lesspipe %s %s',
    npm_config_globalconfig: '/usr/local/etc/npmrc',
    npm_config_init_module: '/home/github/.npm-init.js',
    PWD: '/app/actions-runner/_work/cocomon_fe/cocomon_fe',
    npm_execpath: '/usr/local/lib/node_modules/npm/bin/npm-cli.js',
    npm_command: 'run-script',
    INIT_CWD: '/app/actions-runner/_work/cocomon_fe/cocomon_fe',
    EDITOR: 'vi',
    NODE_ENV: 'production',
    _applied: 'true'
  }
  
}

/*
import { format, transports } from 'winston'
const { combine, timestamp, label, prettyPrint } = format

config.modules.push('nuxt-winston-log');

config.winstonLog = {
  useDefaultLogger: false,
  autoCreateLogPath: true,
  loggerOptions: {
    format: combine(
      label({ label: 'Custom Nuxt logging!' }),
      timestamp(),
      prettyPrint()
    ),
    transports: [new transports.Console()]
  }
}
*/


console.log("nuxt.config.js configuaration end.");

module.exports = config;