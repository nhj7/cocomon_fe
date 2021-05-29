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
    env_production: {
      "NODE_ENV": "production",
      "httpPort": 7777,
      //"httpsPort": 4443,
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
    env_production: {
      NODE_ENV: "production",
      httpPort: 9999,
      //httpsPort: 8443,
    }
  }, {
    name: 'cocobot',
    script: './server/cocobot.js',
    // script: './node_modules/nuxt/bin/nuxt.js',
    // args: 'start',
    // script: 'nuxt',
    // args : 'start',
    //instances: 'max',
    instances: 1,
    //exec_mode: 'cluster',
    exec_mode: 'fork',
    //wait_ready: true,
    //listen_timeout: 3000,
    env_production: {
      NODE_ENV: "production",
      cocomode : "prod", 
      httpPort: 9999,
      //httpsPort: 8443,
    }
  }, {
    name: 'cocobot_dev',
    script: './server/cocobot.js',
    // script: './node_modules/nuxt/bin/nuxt.js',
    // args: 'start',
    // script: 'nuxt',
    // args : 'start',
    //instances: 'max',
    instances: 1,
    //exec_mode: 'cluster',
    exec_mode: 'fork',
    //wait_ready: true,
    //listen_timeout: 3000,
    env_production: {
      NODE_ENV: "production",
      cocomode : "dev",
      httpPort: 9999,
      //httpsPort: 8443,
    }
  }
  ]
}
module.exports = config;