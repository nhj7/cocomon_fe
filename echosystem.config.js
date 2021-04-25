//ecosystem.config.js

const isProd = process.env.NODE_ENV == "production";

const config = {
  apps: [{
    name: 'cocomon',
    script: 'npm',
    args : isProd ? 'start' : 'run dev',
    instances: 2,
    exec_mode: `cluster`
    }]
}

module.exports = config;