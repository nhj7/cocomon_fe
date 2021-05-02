<template>
  <div>
    <v-card class="d-flex pa-1" outlined tile>
      <v-layout justify-center mb-1>
        <v-flex xs4>
          <v-select
            v-model="curruntExchange"
            :items="exchangeList"
            label="upbit"
            solo
            single-line
            hide-details="auto"
            height="2.2em"
            min-height="auto"
          ></v-select>
        </v-flex>
        <v-flex xs7 pl-1>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            solo
            hide-details="auto"
            clearable
            height="2.2em"
            dense
          ></v-text-field>
        </v-flex>
        <v-flex xs2 justify-center text-center>
          <v-btn
            @click="
                    Object.assign($store.state.message, {
                      isSnackbar: true,
                      text: '서비스 준비중입니다.',
                    })
                  "
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card class="d-flex pa-1" outlined tile>
      <v-tabs class="mb-1" v-model="tab" height="2em" centered grow @change="onTabChange">
        <v-tab v-for="item in assetTabs" :key="item.tab" @click="clickTab">{{ item.tab }}</v-tab>
      </v-tabs>
    </v-card>

    <v-data-table
      id="dtTicker"
      :headers="headers"
      :items="$store.state.ticker.curTicker.arrTicker"
      :items-per-page="2000"
      :search="search"
      item-key="market"
      dense
      mobile="false"
      mobile-breakpoint="0"
      hide-default-footer
      :expanded.sync="$store.state.ticker.curTicker.expanded"
      :single-expand="singleExpand"
      class="elevation-1"
      :loading="$store.state.ticker.curTicker.arrTicker.length == 0"
      loading-text="Loading... Please wait"
      fixed-header
      single-sort
      :sort-by="'acc_trade_price_24h'"
      :sort-desc="false"
      :custom-sort="customSort"
      :style="dtHeight"
    >
      <template v-slot:item="{ item }">
        <tr @click="toggleExpand(item)" class="row1">
          <td class="text-left" v-ripple>{{ item.korean_name }}</td>
          <td
            v-ripple
            :class="[
                    $store.state.config.isTickerColor
                      ? 0 > item.signed_change_price
                        ? 'fall--text'
                        : 'rise--text'
                      : '',

                    $store.state.config.isTickerColor ? ( item.ch==0?'':(item.ch > 0 ? 'row1-ch-rise' : 'row1-ch-fall' )) : ''
                  ]"
          >
            <span>
              {{ item.trade_price ?
              ( $store.state.ticker.mode == 'BTC' ? item.trade_price : $p_comma(item.trade_price, true)) : "" }}
            </span>
          </td>
          <td
            v-ripple
            :class="[
                    $store.state.config.isTickerColor
                      ? 0 > item.signed_change_price
                        ? 'fall--text'
                        : 'rise--text'
                      : '',
                  ]"
          >
            {{
            padRate(
            (0 > item.signed_change_price ? "-" : "+") +
            item.change_rate
            )
            }}
          </td>
          <td
            v-ripple
            :class="[
                    
                  ]"
          >{{ (item.kp>0?'+':(item.kp==0?'':'-')) + item.kp }}</td>
          <td v-ripple>
            {{
            Math.floor(item.acc_trade_price_24h / 100000000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
          </td>
        </tr>
        <!-- row2 -->
        <tr @click="toggleExpand(item)" class="row2">
          <td v-ripple class="text-left">{{ item.market }}</td>
          <td v-ripple :class="[item.ch==0?'':(item.ch > 0 ? 'row2-ch-rise' : 'row2-ch-fall' )]">
            {{
            $store.state.ticker.binance.mapTicker[
            item["market"].split("-")[1] + "USDT"
            ]
            ? $p_comma(
            $store.state.ticker.binance.mapTicker[
            item["market"].split("-")[1] + "USDT"
            ].krwPrice
            )
            : ""
            }}
          </td>
          <td v-ripple>{{ $p_comma(item.signed_change_price, 'Y') }}</td>
          <td v-ripple>
            {{ $store.state.ticker.binance.mapTicker[item["market"].split("-")[1] + "USDT"] ?
            $p_comma( (item.trade_price - $store.state.ticker.binance.mapTicker[item["market"].split("-")[1] + "USDT"].krwPrice), 'Y') : '' }}
          </td>
          <td></td>
        </tr>
        <!-- row3 -->
        <tr class="row3" v-show="$store.state.localStorage.expandList.indexOf(item.gcd) > -1">
          <td v-ripple class="text-left">
            <v-icon
              @click="toggleFavorCoin(item)"
              dense
              ripple="false"
              v-show="item.gcd!='UBT-KRW-BTC'"
              style="color:silver;"
              class="pr-2"
            >{{ $store.state.localStorage.favorCoinList.indexOf('UBT-'+item.market) > -1 ? 'mdi-star-plus' : 'mdi-star-plus-outline' }}</v-icon>

            <v-icon
              @click="toggleChart(item)"
              dense
              v-ripple="false"
              style="color:silver;"
            >{{'mdi-finance' }}</v-icon>
          </td>
          <td v-ripple>
            {{ !$store.state.ticker.binance.mapTicker[ item["market"].split("-")[1] + "USDT" ] ? '' :
            ('')+( $p_usd($store.state.ticker.binance.mapTicker[ item["market"].split("-")[1] + "USDT" ].price)) }}
          </td>
          <td v-ripple>1</td>
          <td v-ripple>2</td>
          <td v-ripple>3</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: "Ticker",
      search: "",
      curTicker: { mapTicker: {}, arrTicker: [] },
      expanded: [],
      singleExpand: false,
      curruntExchange: "upbit",
      exchangeList: [
        "upbit"
        //, "bithumb", "coinone"
      ],
      assetList: ["krw", "btc", "usdt"],
      more: ["upbit", "bithumb", "coinone"],
      colors: ["system", "light", "dark", "sepia"],
      headers: [
        {
          text: "이름",
          value: "korean_name",
          class: "sticky-header",
          width: "20%",
          class: "text-left",
          click: "customSort"
        },
        {
          text: "현재가",
          value: "trade_price",
          class: "sticky-header",
          width: "18%",
          class: "text-center"
        },
        {
          text: "전일대비",
          value: "signed_change_rate",
          class: "sticky-header",
          width: "18%",
          class: "text-center"
        },
        {
          text: "김프",
          value: "kp",
          class: "sticky-header",
          width: "15%",
          class: "text-center"
        },
        {
          text: "거래(억)",
          value: "acc_trade_price_24h",
          class: "sticky-header",
          width: "17%",
          class: "text-right"
        },
        {
          text: "코드명",
          value: "market",
          class: "sticky-header",
          width: "0%",
          class: "d-none"
        }
      ],
      tab: 1,
      assetTabs: [
        { tab: "관심", content: "Tab 1 Content" },
        { tab: "KRW", content: "Tab 2 Content" },
        { tab: "BTC", content: "Tab 3 Content" },
        { tab: "USDT", content: "Tab 4 Content" }
      ],

      favorCoinList: this.$store.state.localStorage.favorCoinList
    };
  }, // end data
  async asyncData({ req, res }) {
    if (process.server) {
      return { asyncData: "tmp" };
    }
  },
  created: async function() {
    console.log("template.vue created");
  }, // end created
  methods: {
    log: msg => {
      console.log(msg);
    },
    methodTmp() {
      console.log("methodTmp");
    },
    toggleExpand(item) {
      const expandList = this.$store.state.localStorage.expandList;
      const idx = expandList.indexOf(item.gcd);

      console.log("toggleExpand", item, idx);

      if (idx == -1) {
        expandList.push(item.gcd);
      } else {
        expandList.splice(idx, 1);
      }
    }, // end toggleExpand
    toggleFavorCoin(item) {
      const favorCoinList = this.favorCoinList;

      // UBT : upbit code
      const idx = favorCoinList.indexOf(item.gcd);
      if (idx == -1) {
        favorCoinList.push(item.gcd);
      } else {
        favorCoinList.splice(idx, 1);
      }
      //console.log("toggleFavorCoin", favorCoinList, item.gcd, this.$store.state.ticker.mode);
    }, // end toggleFavorCoin
    toggleChart(item) {
      console.log("toggleChart");
    },
    customSort(items, index, isDesc) {
      items.sort((a, b) => {
        if (isDesc != "false") {
          return a[index] - b[index];
        } else {
          return b[index] - a[index];
        }
      });
      return items;
    },
    clickTab(event, obj) {
      console.log("clickTab", event.target.textContent);
    },
    onTabChange(idx) {
      this.$store.state.ticker.curTicker.arrTicker = [];
      if ("관심" == this.assetTabs[idx].tab) {
        console.log("onTabChange", "관심1111");
      }
      this.$store.state.ticker.mode = this.assetTabs[idx].tab;
    },
    padRate(value) {
      if (value.length == 2) {
        return value + ".00";
      }
      if (value.indexOf(".") > -1) {
        return value.padEnd(5, "0");
      } else if (value.length < 4) {
        return (value + ".").padEnd(5, "0");
      }
      return value;
    },
    kp(kp, op) {
      return ((kp / op - 1) * 100).toFixed(2);
    },
    pushData(map, arr, obj, key, state) {
      //console.log("pushData");
      // obj.kp = state.ticker.binance.mapTicker[obj.cd.split("-")[1]+"USDT" ] ?
      //     (((obj.tp / state.ticker.binance.mapTicker[obj.cd.split("-")[1]+"USDT" ].krwPrice ) - 1) * 100) .toFixed(2)
      //     : 0;

      if (!map[obj[key]]) {
        //obj.korean_name = state.market.upbit[obj.cd].korean_name;
        //obj = { name : obj.korean_name, data : obj }
        map[obj[key]] = obj;
        //Vue.set(arr, arr.length, obj);
        //Object.freeze(obj);
        arr.push(obj);
      } else {
        Object.assign(map[obj[key]], {
          tp: obj.tp,
          scr: obj.scr,
          cr: obj.cr,
          atp24h: obj.atp24h,
          kp: obj.kp
        });
      }
    }
  },
  mounted: async function() {
    console.log("template.vue mounted");
  },
  computed: {
    dtHeight() {
      const maxHeightMap = {
        xs: "31vh",
        sm: "55vh",
        md: "55vh",
        lg: "55vh",
        xl: "55vh"
      };
      //console.log("dtHeight", maxHeightMap[this.$vuetify.breakpoint.name] );
      return `max-height:${maxHeightMap[this.$vuetify.breakpoint.name]};`;
    },
    
  }
}; // end vue.js
</script>
<style>

</style>