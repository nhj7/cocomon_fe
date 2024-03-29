# cocomon_fe

## Project Stack
nodejs 14+, nginx, nuxtjs, vuetify, pm2, github action, WAF(modsecurity)
## Build Setup

node LTS version add ppa. and install and link
$ sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install nodejs


```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

<br /><br />
## Screen Capture

![cocomon](/assets/images/cocomon.gif)

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

<br /><br />

## krwusd api 

https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD

<br /><br />

## upbit api 

https://api.upbit.com/v1/market/all
https://api.upbit.com/v1/ticker?markets=KRW-BTC

<br /><br />
## binance api

base url : https://api.binance.com/

coin info : /api/v1/exchangeInfo

ticker stream : wss://stream.binance.com:9443/ws/[btcusdt@miniTicker/ethusdt@miniTicker]

ticekr rest api : https://api.binance.com/api/v3/ticker/24hr/[symbol]

all ticker price : https://api.binance.com/api/v3/ticker/price

<br /><br />

### vuetify sort first descending.

https://stackoverflow.com/questions/63680088/make-vuetify-v-data-table-column-sort-first-in-descending-order-second-in-ascen

new vuetify -> nuxt.config.js

<pre>
icons: {
      iconfont: 'mdi', // default - only for display purposes
      values : {sort: 'mdi-arrow-down'}
},
</pre>

<br /><br />
## PM2 npm start

<pre>

npm run build

pm2 start npm --name "cocomon" -- start
pm2 reload echosystem.config.js --env production
pm2 reload echosystem.config.js --env production --only cocomon_dev
pm2 reload echosystem.config.js --env production --only cocomon
</pre>

pm2 logrotate use.
<pre>
pm2 set pm2-logrotate:rotateInterval '* * */1 * *'
</pre>

<br /><br />
## vuetify color theme. 

https://vuetifyjs.com/en/styles/colors/#material-colors

<br /><br />

## github action runner

1. github action service install

https://github.com/nhj7/cocomon_fe/settings/actions/runners/new?arch=x64&os=linux


2. github action service regist
https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service


<pre>
nohup ./run.sh &

sudo ./svc.sh install
sudo ./svc.sh start
sudo ./svc.sh status
sudo ./svc.sh stop
sudo ./svc.sh uninstall
</pre>

install dir 
/app/actions-runner/_work/cocomon_fe/cocomon_fe

<br />

## Https, SSL Certbot, LetsEncrypt install

certbot -d cocomon.kr --manual --preferred-challenges dns certonly

<br />

## env

  files(.env_main(prod), .env_dev(dev)) in the github action dir

```
appName=
httpPort=
sslPort=
redis_host=ip
redis_port=port
redis_password=passwd
```
<br />
<br />

## redis window service install 

https://raw.githubusercontent.com/MSOpenTech/redis/3.0/Windows%20Service%20Documentation.md

https://github.com/nuxt-community/gtm-module

<br /><br />

## mod security ref

https://www.nginx.com/blog/compiling-and-installing-modsecurity-for-open-source-nginx/


