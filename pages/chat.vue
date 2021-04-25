<template>
  <h1 @click="methodTmp">chat page</h1>
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
      return { asyncData : 'tmp' };
    }
  },
  created: async function() {
    console.log("template.vue created");
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
    console.log("template.vue mounted");
  }
}; // end vue.js
</script>