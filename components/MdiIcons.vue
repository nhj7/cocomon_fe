<template>
<div>
  <h2 @click="methodTmp">News page</h2>
  {{mdiIcons}}
</div>
  
</template>

<script>
export default {
  data() {
    return {
      pageName: false
    };
  }, // end data
  async asyncData({ req, res }) {
    if (process.server) {
      const mdiIcons = await this.$axios.$get("/mdi-icons.json");
      return { mdiIcons : mdiIcons };
    }
  },
  created: async function() {
    console.log("MdiIcons.vue created");
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
    console.log("MdiIcons.vue mounted");
  }
}; // end vue.js
</script>