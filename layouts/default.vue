<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list-item @click.stop="drawer = !drawer">
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>mdi-creative-commons</v-icon>
            {{ title }}
            <v-icon class="float-right">mdi-close</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coin,
            K-Premeum, ETC...
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
          </v-btn>
          <v-btn icon @click.stop="clipped = !clipped">
            <v-icon>mdi-application</v-icon>
          </v-btn>
          <v-btn icon @click.stop="fixed = !fixed">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app dense hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn @click.stop="drawer = !drawer" icon>
        <v-icon v-bind:class="{ 'd-none': !isCoinSrchHide }">mdi-creative-commons</v-icon>
      </v-btn>

      <v-spacer />

      <v-autocomplete
        placeholder="코인명/심볼 검색"
        v-bind:class="{ 'd-none': isCoinSrchHide }"
        ref="inpSearch"
        autofocus
        @blur="
          isCoinSrchHide = 'true';
          log('blur');
        "
      />
      <v-btn
        icon
        @click.stop="
          isCoinSrchHide = !isCoinSrchHide;
          log('click');
        "
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.stop="rightDrawer = !rightDrawer">
          <v-list-item-action>
            <v-icon light>mdi-close</v-icon>
          </v-list-item-action>
          <v-list-item-title>close</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="setDarkTheme">
          <v-list-item-action>
            <v-icon>
              {{
              $vuetify.theme.dark ? "mdi-lightbulb-off" : "mdi-lightbulb-on"
              }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ $vuetify.theme.dark ? "dark" : "light" }}</v-list-item-title>
        </v-list-item>

        <v-list-item @click="setTickerColor">
          <v-list-item-action>
            <v-icon>
              {{
              $store.state.config.isTickerColor ? "mdi-invert-colors" : "mdi-invert-colors-off"
              }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ $store.state.config.isTickerColor ? "color on" : "color off" }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app>
      <v-spacer />
      <span>
        All content &copy; {{ $config.appName }}.
        {{ new Date().getFullYear() }} All rights reserved.
      </span>
      <v-spacer />
    </v-footer>

    <v-snackbar v-model="$store.state.message.isSnackbar" :timeout="$store.state.message.timeout">
      {{ $store.state.message.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="$store.state.message.isSnackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      shareData: { flag: true },
      drawer: false,
      fixed: false,
      isCoinSrchHide: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Crypto Board",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: this.$config.appName,
      wsMap: {}
    };
  }, // end data
  async asyncData({ req, res }) {
    if (process.server) {
      const ip = Object.values(require("os").networkInterfaces()).reduce(
        (r, list) =>
          r.concat(
            list.reduce(
              (rr, i) =>
                rr.concat(
                  (i.family === "IPv4" && !i.internal && i.address) || []
                ),
              []
            )
          ),
        []
      );

      console.log(ip[0]);
      return { host: ip[0] };
    }
  },
  created: async function() {
    console.log("default.vue created", this.$store.state.id.cid);

    const cookiesRes = this.$cookies.getAll();
    console.log("cookiesRes", cookiesRes);
    this.$vuetify.theme.dark = cookiesRes.dark;
    if (!process.server) {
      console.log("created", $nuxt.$store.state.id.cid);

      // ticker color config
      const stc = {
        isTickerColor: localStorage.getItem("isTickerColor")
          ? localStorage.getItem("isTickerColor") == "true"
          : true
      };
      console.log("created", stc);
      $nuxt.$store.commit("setConfig", stc);

      //debugger;

      const cookiesRes = $nuxt.$cookies.getAll();
      if (cookiesRes.dark != undefined) {
        console.log("cookie dark", cookiesRes.dark);
        $nuxt.$vuetify.theme.dark = cookiesRes.dark;
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
          .matches;
        console.log("prefersDark", prefersDark);
        $nuxt.$cookies.set("dark", prefersDark);
        $nuxt.$vuetify.theme.dark = prefersDark;
      }
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", e => {
          if (e.matches) {
            console.log("dark mode is enabled");
            $nuxt.$vuetify.theme.dark = true;
          } else {
            console.log("dark mode is disabled");
            $nuxt.$vuetify.theme.dark = false;
          }
        });

      // krwusd get
      // https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD
      // https://api.binance.com/api/v3/exchangeInfo
      const responseArr = await Promise.all([
        $nuxt.$axios.$get(
          "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD"
        ),
        $nuxt.$axios.$get("https://api.upbit.com/v1/market/all"),
        $nuxt.$axios.$get("https://api.binance.com/api/v3/exchangeInfo")
        //$nuxt.$axios.$get("https://api.github.com/users/phantomjs")
      ]);
      console.log("responseArr", responseArr);
      console.log("setExchangeRate", responseArr[0][0]);
      $nuxt.$store.commit("setExchangeRate", responseArr[0][0]);

      // const KRWUSD = await $nuxt.$axios.$get(
      //   "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD"
      // );
      // console.log("setExchangeRate", KRWUSD[0]);
      // $nuxt.$store.commit("setExchangeRate", KRWUSD[0]);

      // upbit all market get
      const upbitMarketData = responseArr[1];
      //debugger;
      $nuxt.$store.commit("setMarket", {
        exchangeName: "upbit",
        list: responseArr[1]
      });

      const arrKrwMarket = upbitMarketData
        .map(market => market.market)
        .filter(market => market.indexOf("KRW") > -1);
      //console.log(arrKrwMarket);
      // wss://api.upbit.com/websocket/v1
      // wss://crix-ws.upbit.com/websocket
      //return;
      const self = this;
      const connect = () => {
        const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
        ws.onopen = () => {
          // subscribe to some channels
          ws.send(
            JSON.stringify([
              { ticket: $nuxt.$store.state.id.cid },
              {
                type: "ticker",
                codes: arrKrwMarket
                //codes: ["KRW-BTC"]
              },
              { format: "SIMPLE" }
            ])
          );
          self.wsMap["upbit"] = ws;
          //debugger;
        };

        ws.onmessage = event => {
          event.data.text().then(text => {
            const tickerSon = JSON.parse(text);
            //if(tickerSon.cd == "KRW-BTC" ){
            if (tickerSon.cd == self.$store.state.ticker.titleTicker) {
              //self.$root.context.$hello("hello");
              //console.log(tickerSon.tp, tickerSon.cr, (Math.round(tickerSon.cr * 10000)/ 100.), Math.floor(tickerSon.cr * 10000))
              document.title =
                self.$comma(tickerSon.tp) +
                "(" +
                (tickerSon.scr < 0 ? "-" : "+") +
                Math.round(tickerSon.cr * 10000) / 100 +
                "%) " +
                tickerSon.cd.split("-")[1];
              //document.title = self.$hello(tickerSon.tp);
              //self.$hello(tickerSon.tp);
            }
            //console.log(tickerSon);
            self.$store.commit("setTicker", tickerSon);
          });
        };

        ws.onclose = e => {
          console.log(
            "Socket is closed. Reconnect will be attempted in 1 second.",
            e.reason
          );
          setTimeout(() => {
            connect();
          }, 1000);
        };

        ws.onerror = err => {
          console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket"
          );
          ws.close();
        };
      };
      connect();
    }

    //
  }, // end created
  methods: {
    log: msg => {
      console.log(msg);
    },
    setTickerColor() {
      localStorage.setItem(
        "isTickerColor",
        !$nuxt.$store.state.config.isTickerColor
      );
      $nuxt.$store.commit("setConfig", {
        isTickerColor: !$nuxt.$store.state.config.isTickerColor
      });

      console.log(
        "setTickerColor",
        $nuxt.$store.state.config.isTickerColor,
        localStorage.getItem("isTickerColor"),
        typeof $nuxt.$store.state.config.isTickerColor
      );
      this.rightDrawer = !this.rightDrawer;
    },
    setDarkTheme(event, flag) {
      console.log("setDarkTheme", flag);
      if (flag != undefined) {
        $nuxt.$vuetify.theme.dark = flag;
      } else {
        $nuxt.$vuetify.theme.dark = !$nuxt.$vuetify.theme.dark;
      }
      this.rightDrawer = !this.rightDrawer;
      $nuxt.$cookies.set("dark", $nuxt.$vuetify.theme.dark);
    }
  },
  mounted: function() {
    console.log("default.vue mounted");
    return;

    // $nuxt.socket.emit('ticker',JSON.stringify([
    //         { ticket: "cocomon.kr" },
    //         { type: "ticker", codes: ["KRW-BTC", "KRW-ETH", "KRW-XRP", "KRW-LTC", "KRW-BCH"] },
    //       ]), (resp) => {
    //   const tickerSon = JSON.parse(resp);
    //   //console.log(tickerSon);
    //   self.$store.commit("setTicker", tickerSon);
    // })
  }
};
</script>
