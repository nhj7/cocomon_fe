<template>
  <v-app>
    <!--v-navigation-drawer app v-mode="data.drawer">
      <NavigationDrawer />
    </v-navigation-drawer-->

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
              :headers="headers"
              :items="desserts"
              :items-per-page="2000"
              :search="search"
              dense
              mobile="false"
              mobile-breakpoint="0"
              hide-default-footer=true
            >
              
            </v-data-table>
          </v-card>

          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-col>
      </v-row>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<style>

.col-xl,
.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,
.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,
.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,
.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,
.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
  width: 100%;
  padding: 5px;
}

</style>
<script>
export default {
  components: {},

  methods: {
    setColor: (color) => {
      console.log($nuxt, color);

      try {
        $nuxt.$vuetify.theme.dark = ["dark", "system"].includes(color);
        //if( )
        $nuxt.$vuetify.theme.sepia = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
  data() {
    return {
      search: "",
      colors: ["system", "light", "dark", "sepia"],
      headers: [
        {
          text: "Coin",
          value: "name",
        },
        { text: "binance($)", value: "calories" },
        { text: "binance(￦)", value: "fat" },
        { text: "upbit(￦)", value: "carbs" },
        { text: "ch(%)", value: "protein" },
        { text: "vol(억)", value: "iron" },
        { text: "K-프", value: "iron" },
      ],
      desserts: [
        {
          name: "비트코인",
          calories: 63902630,
          fat: 63902630,
          carbs: 65681000,
          protein: -2.13,
          iron: "6683",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "XRP",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  }, // end data.
};
</script>

