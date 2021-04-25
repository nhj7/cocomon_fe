//ecosystem.config.js

const isProd = process.env.NODE_ENV == "production";

const config = {
  apps: [{
    name: 'cocomon',
    script: './node_modules/nuxt/bin/nuxt.js',
    args : 'start',
    instances: 2,
    exec_mode: `cluster`
    }]
}

module.exports = config;