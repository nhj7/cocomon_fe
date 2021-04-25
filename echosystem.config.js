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
    //exec_mode: 'fork's
    wait_ready: true,
    listen_timeout: 3000,
    error_file : "/log/cocomon/err.log",
    out_file : "/log/cocomon/out.log"
    }]
}


module.exports = config;