//ecosystem.config.js
const config = {
  apps: [{
    name: 'cocomon',
    script: './startNuxt.js',
    // script: 'nuxt',
    // args : 'start',
    //instances: 'max',
    instances: 0,
    exec_mode: 'cluster',
    // exec_mode: 'fork',
    //wait_ready: true,
    //listen_timeout: 3000,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
    }   
    ]
}
module.exports = config;