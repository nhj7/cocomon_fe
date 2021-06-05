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
        <v-col cols="12" md="6" sm="12" xs="12" id="TickerLayer" >
          <Ticker />
        </v-col>
        <!--v-col cols="12" sm="1" ></v-col-->
        
        <v-col cols="12" md="6" sm="12" xs="12" class=".rounded-lg">
            <Chat />
        </v-col>
        <v-col cols="12" sm="12" md="12" xs="12">
          <v-card class="d-flex pa-2" outlined tile>
            <!--News /-->
          </v-card>
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

      <News maxRow="5"/>

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
      title: "index",
      
    };
  }, // end data.
  components: {},
  counter: 0,
  methods: {
    
    
     
  },
  computed : {
    
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
.container {
  padding-top : 2px;
}

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

@media screen and (min-width: 600px) { 
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