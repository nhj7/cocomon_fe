<template>
  <v-app>
    <v-main class="pa-0">
      <v-row>
        <v-col cols="12" sm="8" md="12">
          <div v-html="readMapHtml"></div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
const marked = require("marked");
export default {
  data() {
    return {
      pageName: false
      , readMapHtml : ''
    };
  }, // end data
  async asyncData({ req, res }) {
    if (process.server) {
      return { asyncData : 'tmp' };
    }
  },
  created: async function() {
    console.log("roadMap.vue created");

    if( process.browser){
      console.log("brr");
      const mdTxt = await $nuxt.$axios.$get(window.location.protocol + '//' + window.location.host +"/roadMap.md");
      this.readMapHtml = marked(mdTxt);
      //console.log(readMapHtml);
    }
  }, // end created
  methods: {
    log: msg => {
      console.log(msg);
    },
    methodTmp() {
      console.log("methodTmp");
    },
    
  },
  mounted: async function() {
    console.log("roadMap.vue mounted");
  }
}; // end vue.js
</script>