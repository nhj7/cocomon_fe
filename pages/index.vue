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
        <v-col cols="12" sm="8" md="5">
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
            height="40vh"
            style="overflow-y: auto; overflow-x: hidden"
          >
            <!-- 
            single-sort
            :sort-by="'atp24h'"
            :sort-desc="false"
            :custom-sort="customSort"-->

            <!--template #header="{ props: { headers } }">
              <thead class="v-data-table-header">
                <tr>
                  <th
                    v-for="header in headers"
                    :key="header.value"
                    class="text-uppercase"
                    scope="col"
                    :class="header.class"
                    :style="header.width"
                  >
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
            </template-->

            <template v-slot:item="{ item }">
              <tr @click="addExpand(item)" class="row1">
                <td class="text-left">{{ item.korean_name }}</td>
                <td
                  class="text-center"
                  :class="[
                    $store.state.config.isTickerColor
                      ? 0 > item.signed_change_price
                        ? 'fall--text'
                        : 'rise--text'
                      : '',
                  ]"
                >
                  {{ item.trade_price ? comma(item.trade_price) : "" }}
                </td>
                <td
                  class="text-center"
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
                  class="text-center"
                  :class="[
                    !$store.state.config.isTickerColor || item.kp == 0
                      ? 'grey--text'
                      : item.kp > 0
                      ? 'rise--text'
                      : 'fall--text',
                  ]"
                >
                  {{ item.kp }}
                </td>
                <td class="text-center">
                  {{
                    Math.floor(item.acc_trade_price_24h / 100000000)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </td>
              </tr>
              <tr @click="addExpand(item)" class="row2">
                <td>
                  <span>
                    <span>{{ item.market }}</span>
                  </span>
                </td>
                <td class="text-center">
                  <span>
                    <span>
                      {{
                        $store.state.ticker.binance.mapTicker[
                          item["market"].split("-")[1] + "USDT"
                        ]
                          ? comma(
                              $store.state.ticker.binance.mapTicker[
                                item["market"].split("-")[1] + "USDT"
                              ].krwPrice
                            )
                          : "-"
                      }}
                    </span>
                  </span>
                </td>
                <td class="text-center">
                  <span>
                    <span>{{ comma(item.signed_change_price) }}</span>
                  </span>
                </td>
                <td class="text-center"></td>
                <td class="text-center"></td>
              </tr>
            </template>
            <template v-slot:expanded-item="{ item }">
              <tr class="row3">
                <td>
                  <span>
                    <span>{{ }}-</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span>{{ !$store.state.ticker.binance.mapTicker[ item["market"].split("-")[1] + "USDT" ] ? '' : 
                      $store.state.ticker.binance.mapTicker[ item["market"].split("-")[1] + "USDT" ].price }}</span>
                  </span>
                </td>
                <td>
                  <span>
                    <span>-</span>
                  </span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </template>
          </v-data-table>
        </v-col>

        <v-col cols="12" sm="4" md="4" class=".rounded-lg">
          <v-card class="d-flex pa-2" outlined tile>채팅 영역</v-card>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <v-card class="d-flex pa-2" outlined tile>뉴스 영역</v-card>
        </v-col>
      </v-row>
      <!-- end ticker -->

      <v-row>
        <v-col>
          <br />
          <v-card class="d-flex pa-2" outlined tile>
            USD/KRW {{ $comma($store.state.exchangeRate.basePrice) }}원 (
            {{
              (0 > $store.state.exchangeRate.signedChangeRate ? "" : "+") +
              Math.floor($store.state.exchangeRate.signedChangeRate * 10000) /
                100
            }}%) &nbsp;
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-chat-question-outline</v-icon>
              </template>
              <span>현찰 살 때 {{ $comma($store.state.exchangeRate.cashBuyingPrice) }}원, 매매기준율 : {{ $comma($store.state.exchangeRate.basePrice) }}원</span>
            </v-tooltip>
          </v-card>
        </v-col>
      </v-row>

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
          text: "거래량",
          value: "acc_trade_price_24h",
          class: "sticky-header",
          width: "15%",
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
    };
  }, // end data.
  components: {},
  counter: 0,
  methods: {
    addExpand(slotData) {
      //debugger;
      const expanded = this.$store.state.ticker.curTicker.expanded;
      console.log("addExpand", slotData, expanded, expanded.indexOf(slotData));
      if (expanded.indexOf(slotData) == -1) {
        expanded.push(slotData);
      } else {
        expanded.pop(slotData);
      }
      //this.$store.state.ticker.titleTicker = slotData.cd;
    },
    customSort(items, index, isDesc) {
      // console.log("customSort", index, isDesc, this.$store.state.ticker.upbit.arrTicker.length, this.$store.state.market.upbit.krw.length);

      // if(  this.$store.state.ticker.upbit.arrTicker.length == this.$store.state.market.upbit.krw.length ){
      //   return items;
      // }
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
      if ("관심" == this.assetTabs[idx].tab) {
        console.log("onTabChange", "관심1111");
      }
      console.log("onTabChange", this.assetTabs[idx].tab);
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
    comma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          kp: obj.kp,
        });
      }
    },
  },
  created: async function () {
    console.log("index.vue", "created!!!");

    if (!process.server) {
      console.log(this);

      const self = this;
      const td = new TextDecoder("utf-8");
      // upbit websocket start
      const connectUpbit = () => {
        const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
        ws.binaryType = "arraybuffer";
        ws.onopen = () => {
          // subscribe to some channels
          ws.send(
            JSON.stringify([
              { ticket: $nuxt.$store.state.id.cid },
              {
                type: "ticker",
                codes: arrKrwMarket,
                //codes: ["KRW-BTC"]
              },
              { format: "SIMPLE" },
            ])
          );
          self.wsMap["upbit"] = ws;
          //debugger;
        };

        ws.onmessage = (event) => {
          var arr = new Uint8Array(event.data);
          const tickerSon = JSON.parse(td.decode(arr));
          /*
          if (
            !self.$store.state.ticker.upbit.mapTicker[tickerSon.cd] ||
            self.$store.state.ticker.upbit.mapTicker[tickerSon.cd]["tp"] !=
              tickerSon.tp
          ) {
            if (tickerSon.cd == self.$store.state.ticker.titleTicker) {
              document.title =
                self.$comma(tickerSon.tp) +
                "(" +
                (tickerSon.scr < 0 ? "-" : "+") +
                Math.round(tickerSon.cr * 10000) / 100 +
                "%) " +
                tickerSon.cd.split("-")[1];
            }

            //self.$store.commit("setTicker", tickerSon);
          }
          */
          //console.log(self);
          self.pushData(
            self.curTicker.mapTicker,
            self.curTicker.arrTicker,
            tickerSon,
            "cd"
          );
        };

        ws.onclose = (e) => {
          console.log(
            "Socket is closed. Reconnect will be attempted in 1 second.",
            e.reason
          );
          setTimeout(() => {
            connectUpbit();
          }, 1000);
        };

        ws.onerror = (err) => {
          console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket"
          );
          ws.close();
        };
      };
      //connectUpbit();
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
  padding: 2px;
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

.v-data-table .sticky-header {
  position: sticky;
  top: var(--toolbarHeight);
}

.v-data-table .v-data-table__wrapper {
  overflow: unset;
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
.rise--text {
  color: #009688;
}
.fall--text {
  color: #E91E63;
}
</style>