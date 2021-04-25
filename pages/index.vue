<template>
  <v-app>
    <v-main class="pa-0">
      <!--iframe
          id="tradingview_12801"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12801&amp;symbol=BINANCE%3ABTCUSDT&amp;interval=15&amp;symboledit=1&amp;saveimage=0&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Light&amp;style=1&amp;timezone=Asia%2FSeoul&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=kr&amp;utm_source=kimp.ga&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BINANCE%3ABTCUSDT"
          style="
            width: 100%;
            height: 17em;
            margin: 0 !important;
            padding: 0 !important;
          "
          frameborder="0"
          allowtransparency="true"
          scrolling="no"
          allowfullscreen=""
          onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
      ></iframe-->

      <v-row>
        <v-col cols="12" sm="6" xs="12">
          <v-card class="d-flex pa-2" outlined tile>
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
            <v-tabs
              class="mb-1"
              v-model="tab"
              height="2em"
              centered
              grow
              @change="onTabChange"
            >
              <v-tab
                v-for="item in assetTabs"
                :key="item.tab"
                @click="clickTab"
                >{{ item.tab }}</v-tab
              >
            </v-tabs>
          </v-card>

          <!--v-autocomplete v-model="search" :items="items" dense filled label="Filled"></v-autocomplete-->
          <!-- $store.state.ticker.upbit.arrTicker -->
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
              <tr @click="toggleExpand(item)" class="row1"  >
                <td class="text-left" v-ripple>{{ item.korean_name }}</td>
                <td v-ripple :class="[
                    $store.state.config.isTickerColor
                      ? 0 > item.signed_change_price
                        ? 'fall--text'
                        : 'rise--text'
                      : '',

                    $store.state.config.isTickerColor ? ( item.ch==0?'':(item.ch > 0 ? 'row1-ch-rise' : 'row1-ch-fall' )) : ''
                  ]"
                >
                  <span>{{ item.trade_price ? 
                      ( $store.state.ticker.mode == 'BTC' ? item.trade_price : $p_comma(item.trade_price, true)) : "" }}
                  </span>
                </td>
                <td v-ripple :class="[
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
                <td v-ripple :class="[
                    
                  ]"
                >
                  {{ (item.kp>0?'+':(item.kp==0?'':'-')) + item.kp }}
                </td>
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
                <td v-ripple class="text-left">
                  {{ item.market }}
                </td>
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
                <td v-ripple>
                  {{ $p_comma(item.signed_change_price, 'Y') }}
                </td>
                <td v-ripple> 
                  {{ $store.state.ticker.binance.mapTicker[item["market"].split("-")[1] + "USDT"] ? 
                    $p_comma( (item.trade_price - $store.state.ticker.binance.mapTicker[item["market"].split("-")[1] + "USDT"].krwPrice), 'Y') : '' }}
                </td>
                <td></td>
              </tr>
              <!-- row3 -->
              <tr class="row3" v-show="$store.state.localStorage.expandList.indexOf(item.gcd) > -1">
                <td v-ripple class="text-left">
                  <v-icon @click="toggleFavorCoin(item)" dense ripple="false" v-show="item.gcd!='UBT-KRW-BTC'" style="color:silver;">
                    {{ $store.state.localStorage.favorCoinList.indexOf('UBT-'+item.market) > -1 ? 'mdi-star-plus' : 'mdi-star-plus-outline' }}
                  </v-icon>
                </td>
                <td v-ripple>
                  {{ !$store.state.ticker.binance.mapTicker[ item["market"].split("-")[1] + "USDT" ] ? '' : 
                      ('')+( $p_usd($store.state.ticker.binance.mapTicker[ item["market"].split("-")[1] + "USDT" ].price))  }}
                </td>
                <td v-ripple>
                  1
                </td>
                <td v-ripple>
                  2
                </td>
                <td v-ripple>
                  3
                </td>
                
              </tr>
            </template>
          </v-data-table>
        </v-col>
        <!--v-col cols="12" sm="1" ></v-col-->
        
        <v-col cols="12" sm="6" xs="12" class=".rounded-lg">
          <v-card class="d-flex pa-2" outlined tile :style="chatHeight">
            채팅 영역

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-card class="d-flex pa-2" outlined tile>뉴스 영역</v-card>
        </v-col>
      </v-row>
      <!-- end ticker -->

      <v-row>
        <v-col>
          <br />
          <v-card class="d-flex pa-2" outlined tile>
            USD/KRW {{ $p_comma($store.state.exchangeRate.basePrice) }}원 (
            {{
              (0 > $store.state.exchangeRate.signedChangeRate ? "" : "+") +
              Math.floor($store.state.exchangeRate.signedChangeRate * 10000) /
                100
            }}%) &nbsp;
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-chat-question-outline</v-icon>
              </template>
              <span>현찰 살 때 {{ $p_comma($store.state.exchangeRate.cashBuyingPrice) }}원, 매매기준율 : {{ $p_comma($store.state.exchangeRate.basePrice) }}원</span>
            </v-tooltip>

            <br />

            <span>{{ this.$vuetify.breakpoint.name }}</span>
          </v-card>
        </v-col>
      </v-row>

      <br />

      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Crypto Table",
      search: "",
      curTicker: { mapTicker: {}, arrTicker: [] },
      expanded: [],
      singleExpand: false,
      curruntExchange: "upbit",
      exchangeList: [
        "upbit",
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
          click: "customSort",
        },
        {
          text: "현재가",
          value: "trade_price",
          class: "sticky-header",
          width: "18%",
          class: "text-center",
        },
        {
          text: "전일대비",
          value: "signed_change_rate",
          class: "sticky-header",
          width: "18%",
          class: "text-center",
        },
        {
          text: "김프",
          value: "kp",
          class: "sticky-header",
          width: "15%",
          class: "text-center",
        },
        {
          text: "거래(억)",
          value: "acc_trade_price_24h",
          class: "sticky-header",
          width: "17%",
          class: "text-right",
        },
        {
          text: "코드명",
          value: "market",
          class: "sticky-header",
          width: "0%",
          class: "d-none",
        },
      ],
      tab: 1,
      assetTabs: [
        { tab: "관심", content: "Tab 1 Content" },
        { tab: "KRW", content: "Tab 2 Content" },
        { tab: "BTC", content: "Tab 3 Content" },
        { tab: "USDT", content: "Tab 4 Content" },
      ],

      favorCoinList : this.$store.state.localStorage.favorCoinList,
      
    };
  }, // end data.
  components: {},
  counter: 0,
  methods: {
    
    toggleExpand(item) {
      
      const expandList = this.$store.state.localStorage.expandList;
      const idx = expandList.indexOf(item.gcd);

      console.log("toggleExpand", item, idx);

      if (idx == -1) {
        expandList.push(item.gcd);
      } else {
        expandList.splice(idx, 1);
      }
      
    } // end toggleExpand
    ,toggleFavorCoin(item){
      const favorCoinList = this.favorCoinList;
      
      // UBT : upbit code
      const idx = favorCoinList.indexOf(item.gcd);
      if (idx == -1) {
        favorCoinList.push(item.gcd);
      } else {
        favorCoinList.splice(idx, 1);
      }

      console.log("toggleFavorCoin", favorCoinList, item.gcd, this.$store.state.ticker.mode);
      //localStorage.setItem("favorCoinList", JSON.stringify(favorCoinList));
      
    } // end toggleFavorCoin
    ,customSort(items, index, isDesc) {
      items.sort((a, b) => {
        if (isDesc != "false") {
          return a[index] - b[index];
        } else {
          return b[index] - a[index];
        }
      });
      return items;
    }
    ,clickTab(event, obj) {
      console.log("clickTab", event.target.textContent);
    }
    ,onTabChange(idx) {
      this.$store.state.ticker.curTicker.arrTicker = [];
      if ("관심" == this.assetTabs[idx].tab) {
        console.log("onTabChange", "관심1111");        
      }      
      this.$store.state.ticker.mode = this.assetTabs[idx].tab;
    }
    ,padRate(value) {
      if (value.length == 2) {
        return value + ".00";
      }
      if (value.indexOf(".") > -1) {
        return value.padEnd(5, "0");
      } else if (value.length < 4) {
        return (value + ".").padEnd(5, "0");
      }
      return value;
    }   
    , kp(kp, op) {
      return ((kp / op - 1) * 100).toFixed(2);
    }
    ,pushData(map, arr, obj, key, state) {
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
          kp: obj.kp,
        });
      }
    },    
  },
  computed : {
    dtHeight(){
      const maxHeightMap = {
        xs : '40vh'
        , sm : '55vh'
        , md : '55vh'
        , lg : '55vh'
        , xl : '55vh'
      }
      //console.log("dtHeight", maxHeightMap[this.$vuetify.breakpoint.name] );
      return `max-height:${maxHeightMap[this.$vuetify.breakpoint.name]};`;
    }, chatHeight(){
      const maxHeightMap = {
        xs : '30vh'
        , sm : '55vh'
        , md : '55vh'
        , lg : '55vh'
        , xl : '55vh' 
      }
      //console.log("dtHeight", maxHeightMap[this.$vuetify.breakpoint.name] );
      return `max-height:${maxHeightMap[this.$vuetify.breakpoint.name]};`;
    }
  }
  , created: async function () {
    console.log("index.vue", "created!!!");

    if (!process.server) {
      
    } // end created function
  },
  mounted() {
    console.log("index.vue", "mounted", $nuxt.$refs);
    //debugger;
  },
  watch: {
    expanded(val) {
      console.log("index.vue", "watch", "expanded watch", val);
    },
  },
};
</script>

<style>
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 3px;
}

table tr td,
table th {
  font-size: 0.8em !important;
  padding: 0px 0px 0px 5px !important;
}

.row1 > td {
  border-bottom: 0px !important;
  height: 22px !important;
}

.row2 > td {
  height: 22px !important;
  vertical-align: text-top;
  font-size: 0.725em !important;
  color: gray !important;
}
.row3 > td {
  height: 26px !important;  
  font-size: 0.725em !important;
  color: gray !important;
}
/*
.row2 > td > span {
  position: relative;
  display: inline-flex;
  width: 100%;
}

.row2 > td > span > span {
  position: absolute;
  top: -1.5em;
}
*/

tbody > tr:hover {
  background-color: transparent !important;
}

.v-data-table .v-data-table-header {
  position: sticky;
  top: 0;
}

.v-data-table .v-data-table__wrapper {
  overflow: unset;
  overflow-y : unset !important;
}

.v-slide-group__prev {
  display: none !important;
}

.toolbar .tabs {
  width: auto;
  height: 100%;
}

.v-input__control {
  min-height: 1.8em !important;
}

.row {
  margin-top: 0.01em;
}

#dtTicker{
  overflow-x:hidden;overflow-y:auto;
}
.theme--light::-webkit-scrollbar {
  width: 15px;
}

.theme--light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.theme--light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.theme--light::-webkit-scrollbar-thumb:hover {
  background: black;
}

.theme--dark::-webkit-scrollbar {
  width: 15px;
}

.theme--dark::-webkit-scrollbar-track {
  background: #202020;
}

.theme--dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.theme--dark::-webkit-scrollbar-thumb:hover {
  background: white;
}

.v-data-table__wrapper > table td {
  text-align:center;
}
.rise--text {
  /* color: #009688; */
  color : #F44336;
}
.fall--text {
  color:#2196F3;
}
@keyframes row1-ch-rise-ani {
    0% {
        box-shadow:0.03em 0.03em 0.3em 0.02em rgb(248, 134, 126);
    }
    75% {
        box-shadow:0.03em 0.03em 0.3em 0.02em #F44336;
    }
    100% {
        box-shadow:none;
    }
}

.row1-ch-rise{
  animation-name:row1-ch-rise-ani;
  animation-duration: .75s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}
@keyframes row1-ch-fall-ani {
    0% {
        box-shadow:0.03em 0.03em 0.3em 0.02em #7dc0f7;
    }
    50%{
      box-shadow:0.03em 0.03em 0.3em 0.02em #2196f3;
    }
    100% {
        box-shadow:none;
    }
}
.row1-ch-fall{
  animation-name: row1-ch-fall-ani;
  animation-duration: 0.75s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}
</style>