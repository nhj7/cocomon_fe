<template>
  <v-app>
    <v-main class="pa-0">
      <v-row :height="500">
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
      </v-row>
      <v-row>
        <v-divider />
      </v-row>

      <v-row fluid fill-height>
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              id="dtTicker"
              :headers="headers"
              :items="$store.state.ticker.upbit.arrTicker"
              :items-per-page="2000"
              :search="search"
              item-key="code"
              dense
              mobile="false"
              mobile-breakpoint="0"
              hide-default-footer
              :single-expand="singleExpand"
              :expanded.sync="expanded"
              class="elevation-1"
              single-sort
              :loading="$store.state.ticker.upbit.arrTicker.length == 0 "
              loading-text="Loading... Please wait"
              fixed-header
            >
              <template v-slot:item="{ item }">
                <tr @click="addExpand(item)" class="row1">
                  <td class="text-left">{{ $store.state.market.upbit[item.code].korean_name }}</td>
                  <td
                    class="text-center" :class="[ $store.state.config.isTickerColor ? ( 0 > item.signed_change_rate ? 'blue--text' : 'red--text') : '' ]"
                  >{{ item.trade_price ? item.trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "" }}</td>
                  <td
                    class="text-center" :class="[ $store.state.config.isTickerColor ? ( 0 > item.signed_change_rate ? 'blue--text' : 'red--text') : '' ]"
                  >{{ ( 0 > item.signed_change_rate ? "" : "+" )+ Math.floor(item.signed_change_rate * 10000)/100 }}</td>
                  <td class="text-center">-</td>
                  <td class="text-center">{{ Math.floor(item.acc_trade_price_24h / 100000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>

                </tr>
                <tr @click="addExpand(item)" class="row2">
                  <td>
                    <span>
                      <span>{{ item.code }}</span>
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
                      <span>{{ item.code }}</span>
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
          </v-card>
        </v-col>
      </v-row>

      <v-divider />

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
  components: {},
  counter: 0,
  methods: {
    setColor: color => {
      console.log($nuxt, color);

      try {
        $nuxt.$vuetify.theme.dark = ["dark", "system"].includes(color);
        //if( )
        $nuxt.$vuetify.theme.sepia = true;
      } catch (error) {
        console.error(error);
      }
    }, // end setColor
    addExpand(value) {
      //console.log(this, event.currentTarget.children);
      /* 
      debugger;
      Array.from(event.currentTarget.children).foreach(
        (child) => { child.style.borderBottom = "" ; }
      )
      */

      //debugger;
      if (this.expanded.indexOf(value) > -1) {
        this.expanded.pop(value);
      } else {
        this.expanded.push(value);
      }
    }
  },
  created: () => {
    console.log("created!!!", this);

    //debugger;
  },
  mounted: () => {
    console.log("mounted", $nuxt.$refs);
    //debugger;

  },
  watch: {},
  data() {
    return {
      title : "Crypto Price",
      search: "",
      expanded: [],
      singleExpand: true,
      colors: ["system", "light", "dark", "sepia"],
      headers: [
        {
          text: "이름",
          value: "code",
          class: "sticky-header",
          width: "20%",
          class: "text-left"
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
          value: "0.00%",
          class: "sticky-header",
          width: "15%",
          class: "text-center"
        },
        {
          text: "거래량",
          value: "acc_trade_price_24h",
          class: "sticky-header",
          width: "15%",
          class: "text-right"
        },
        {
          text: "한글명",
          value: "korean_name",
          class: "sticky-header",
          width: "0%",
          class: "d-none"
        }
      ]
    };
  } // end data.
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
  font-size: 0.75em !important;
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
</style>