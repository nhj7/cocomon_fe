//ecosystem.config.js
const config = {
  apps: [{
    name: 'cocomon',
    script: './startNuxt.js',
    // script: 'nuxt',
    // args : 'start',
    //instances: 'max',
    instances: 2,
    exec_mode: 'cluster',
    // exec_mode: 'fork',
    //wait_ready: true,
    //listen_timeout: 3000,
    //error_file : "/log/cocomon/err.log",
    //out_file : "/log/cocomon/out.log"
    }]
}
module.exports = config;