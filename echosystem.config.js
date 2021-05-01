//ecosystem.config.js
const config = {
  apps: [{
    name: 'cocomon',
    script: './startNuxt.js',
    // script: './node_modules/nuxt/bin/nuxt.js',
    // args: 'start',
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
      httpPort: 8081,
      httpsPort: 8443,
    },
    env_production: {
      NODE_ENV: "production",
      httpPort: 8080,
      httpsPort: 4443,
    }
  }, {
    name: 'cocomon_dev',
    script: './startNuxt.js',
    // script: './node_modules/nuxt/bin/nuxt.js',
    // args: 'start',
    // script: 'nuxt',
    // args : 'start',
    //instances: 'max',
    instances: 2,
    exec_mode: 'cluster',
    // exec_mode: 'fork',
    //wait_ready: true,
    //listen_timeout: 3000,
    env: {
      NODE_ENV: "production",
      httpPort: 8081,
      httpsPort: 8443,
    }
  }
  ]
}
module.exports = config;