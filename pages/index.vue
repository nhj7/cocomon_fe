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
                  ><v-icon>mdi-dots-vertical</v-icon></v-btn
                >
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
          
            <v-data-table
              id="dtTicker"
              :headers="headers"
              :items="$store.state.ticker.upbit.arrTicker"
              :items-per-page="2000"
              :search="search"
              item-key="cd"
              dense
              mobile="false"
              mobile-breakpoint="0"
              hide-default-footer
              :expanded.sync="expanded"
              :single-expand="singleExpand"
              class="elevation-1"
              :loading="$store.state.ticker.upbit.arrTicker.length == 0"
              loading-text="Loading... Please wait"
              fixed-header
              single-sort
              :sort-by="'atp24h'"
              :sort-desc="false"
              :custom-sort="customSort"
              height="40vh"
              style="overflow-y:auto;overflow-x:hidden;"
              
            >
              <!-- 
            single-sort
            :sort-by="'atp24h'"
            :sort-desc="false"
            :custom-sort="customSort" -->

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
                  <td class="text-left">
                    {{ $store.state.market.upbit[item.cd].korean_name }}
                  </td>
                  <td
                    class="text-center"
                    :class="[
                      $store.state.config.isTickerColor
                        ? 0 > item.scr
                          ? 'blue--text'
                          : 'red--text'
                        : '',
                    ]"
                  >
                    {{ item.tp ? comma(item.tp) : "" }}
                  </td>
                  <td
                    class="text-center"
                    :class="[
                      $store.state.config.isTickerColor
                        ? 0 > item.scr
                          ? 'blue--text'
                          : 'red--text'
                        : '',
                    ]"
                  >
                    {{
                      pad(
                        (0 > item.scr ? "-" : "+") +
                          Math.round(item.cr * 10000) / 100
                      )
                    }}
                  </td>
                  <td class="text-center red--text">5.84</td>
                  <td class="text-center">
                    {{
                      Math.floor(item.atp24h / 100000000)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr @click="addExpand(item)" class="row2">
                  <td>
                    <span>
                      <span>{{ item.cd }}</span>
                    </span>
                  </td>
                  <td class="text-center">
                    <span>
                      <span>65131313</span>
                    </span>
                  </td>
                  <td class="text-center">
                    <span>
                      <span>65131313</span>
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
                      <span>{{ item.cd }}</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>65131313</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>65131313</span>
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </template>
            </v-data-table>            
        </v-col>

        <v-col cols="12" sm="4" md="4" class=".rounded-lg"> 
          <v-card class="d-flex pa-2" outlined tile>
            채팅 영역
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" md="3"> 
          <v-card class="d-flex pa-2" outlined tile>
            뉴스 영역
          </v-card>
        </v-col>
      </v-row>
      <!-- end ticker -->

      <v-row> </v-row>

      <br />
      USD/KRW {{ $store.state.exchangeRate.basePrice }} (
      {{
        (0 > $store.state.exchangeRate.signedChangeRate ? "" : "+") +
        Math.floor($store.state.exchangeRate.signedChangeRate * 10000) / 100
      }}%)
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
      title: "Crypto Price",
      search: "",
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
          value: "cd",
          class: "sticky-header",
          width: "20%",
          class: "text-left",
          click: "customSort",
        },
        {
          text: "현재가",
          value: "tp",
          class: "sticky-header",
          width: "18%",
          class: "text-center",
        },
        {
          text: "전일대비",
          value: "scr",
          class: "sticky-header",
          width: "18%",
          class: "text-center",
        },
        {
          text: "김프",
          value: "0.00%",
          class: "sticky-header",
          width: "15%",
          class: "text-center",
        },
        {
          text: "거래량",
          value: "atp24h",
          class: "sticky-header",
          width: "15%",
          class: "text-right",
        },
        {
          text: "한글명",
          value: "korean_name",
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
      console.log(
        "addExpand",
        slotData,
        this.expanded,
        this.expanded.indexOf(slotData)
      );
      if (this.$data.expanded.indexOf(slotData) == -1) {
        this.$data.expanded.push(slotData);
      } else {
        this.$data.expanded.pop(slotData);
      }

      this.$store.state.ticker.titleTicker = slotData.cd;
    },
    customSort(items, index, isDesc) {
      // console.log("customSort", index, isDesc, this.$store.state.ticker.upbit.arrTicker.length, this.$store.state.market.upbit.krw.length);

      // if(  this.$store.state.ticker.upbit.arrTicker.length == this.$store.state.market.upbit.krw.length ){
      //   return items;
      // }
      items.sort((a, b) => {
        if (isDesc != "false") {
          return a[index] < b[index] ? -1 : 1;
        } else {
          return b[index] < a[index] ? -1 : 1;
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
    pad(value) {
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
  },
  created() {
    console.log("index.vue", "created!!!");
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

</style>