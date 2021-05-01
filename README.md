# cocomon_fe

## Build Setup

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
pm2 start npm --name "cocomon" -- start
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

github action service install
https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service


<pre>
nohup ./run.sh &
</pre>

install dir 
/app/actions-runner/_work/cocomon_fe/cocomon_fe

<br />

ffff