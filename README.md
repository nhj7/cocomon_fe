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

## Screen Capture

![cocomon](/assets/images/cocomon.gif)

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## binance api

base url : https://api.binance.com/

coin info : /api/v1/exchangeInfo

ticker stream : wss://stream.binance.com:9443/ws/[btcusdt@miniTicker/ethusdt@miniTicker]

### vuetify sort first descending.

https://stackoverflow.com/questions/63680088/make-vuetify-v-data-table-column-sort-first-in-descending-order-second-in-ascen

new vuetify -> nuxt.config.js

<pre>
icons: {
      iconfont: 'mdi', // default - only for display purposes
      values : {sort: 'mdi-arrow-down'}
},
</pre>
