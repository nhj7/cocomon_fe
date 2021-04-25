//ecosystem.config.js

const isProd = process.env.NODE_ENV == "production";

const config = {
  apps: [{
    name: 'cocomon',
    script: './node_modules/nuxt/bin/nuxt.js',
    args : 'start',
    //instances: 'max',
    instances: 0,
    exec_mode: 'cluster',
    //exec_mode: 'fork'
    wait_ready: true,
    listen_timeout: 3000
    }]
}


module.exports = config;