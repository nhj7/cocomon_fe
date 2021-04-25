//ecosystem.config.js

const isProd = process.env.NODE_ENV == "production";

const config = {
  apps: [{
    name: 'cocomon',
    script: './node_modules/nuxt/bin/nuxt.js',
    args : 'start',
    //instances: 'max',
    instances: 1,
    //exec_mode: `cluster`
    exec_mode: 'fork'
    }]
}


module.exports = config;