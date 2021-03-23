<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item @click.stop="drawer = !drawer">
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>mdi-creative-commons</v-icon>
            {{ title }}

            <v-icon class="float-right">mdi-close</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coin,
            K-Premeum, ETC...</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
            >
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
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
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

      <v-icon v-bind:class="{ 'd-none': !isCoinSrchHide }"
        >mdi-creative-commons</v-icon
      >

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

    <!--v-system-bar
      
      abolute="true"
      app
      height="30px"
      class="font-weight-light"
    >
      <v-spacer />
      <span>K-프 </span>&nbsp;&nbsp;
      <span class="red--text"> +3.58%</span>
      
      &nbsp;&nbsp;      
      <span>USD</span>&nbsp;&nbsp;
      <span class="red--text"> 1,130 </span>

      &nbsp;&nbsp;      
      <span>USDT &nbsp;</span>
      <span>0.99</span>

      &nbsp;&nbsp;      
      <span>Domi &nbsp;</span>      
      <span >60.11</span>
      <v-spacer />
    </v-system-bar-->

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.stop="rightDrawer = !rightDrawer">
          <v-list-item-action>
            <v-icon light> mdi-close </v-icon>
          </v-list-item-action>
          <v-list-item-title> close </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-list-item-action>
            <v-icon>{{
              $vuetify.theme.dark ? "mdi-lightbulb-off" : "mdi-lightbulb-on"
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            {{ $vuetify.theme.dark ? "dark" : "light" }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app>
      <v-spacer />
      <span>
        All content &copy; {{ $config.appName }}.
        {{ new Date().getFullYear() }} All rights reserved.</span
      >
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isCoinSrchHide: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Crypto Board",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: this.$config.appName,
      ticker: {
        upbit: {
          mapTicker: {},
          arrTicker: [],
        },
      },
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
  created: async function () {
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
      console.log("server!!!", this.$config, ip[0]);

      if (ip[0].indexOf("10.99") > -1) {
      }

      if (!process.server) {
        console.log("not server!!!");
      }
    }

    if (!process.server) {
      console.log("config", this.$config);
      //debugger;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      console.log("prefersDark", prefersDark);
      $nuxt.$vuetify.theme.dark = prefersDark;
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (e.matches) {
            console.log("dark mode is enabled");
            $nuxt.$vuetify.theme.dark = true;
          } else {
            console.log("dark mode is disabled");
            $nuxt.$vuetify.theme.dark = false;
          }
        });

      // wss://api.upbit.com/websocket/v1
      // wss://crix-ws.upbit.com/websocket
      var socketUpbit = new WebSocket("wss://api.upbit.com/websocket/v1");

      socketUpbit.onopen = (e) => {
        console.log("upbit wss open");
        socketUpbit.send(
          JSON.stringify([
            { ticket: "test" },
            { type: "ticker", codes: ["KRW-BTC", "KRW-ETH", "KRW-XRP", "KRW-LTC", "KRW-BCH"] },
          ])
        );
      };

      socketUpbit.onclose = function (event) {
        if (event.wasClean) {
          alert(
            `[close] 커넥션이 정상적으로 종료되었습니다(code=${event.code} reason=${event.reason})`
          );
        } else {
          // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
          // event.code가 1006이 됩니다.
          alert("[close] 커넥션이 죽었습니다.");
        }
      };

      socketUpbit.onerror = function (error) {
        alert(`[error] ${error.message}`);
      };

      
      const self = this;
      
      socketUpbit.onmessage = function (event) {
        event.data.text().then(function (text) {
          const tickerSon = JSON.parse(text);
          //console.log(tickerSon);           
          self.$store.commit("setTicker", tickerSon);
        });
      };
    }

    //
  }, // end created
  methods: {
    log: (msg) => {
      console.log(msg);
    },
  },
  mounted: async () => {
    console.log("default.vue mounted");

    if (process.server) {
      console.log("default.vue server mounted");
    }
  },
};
</script>
