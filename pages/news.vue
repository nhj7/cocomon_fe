<template>
    <div>
        <h2 class="mt-2 mb-2" @click="methodTmp">CoCo News</h2>
        
        <News />
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
      return { asyncData : 'news page' };
    }
  },
  created: async function() {
    console.log("chat.vue page  created");
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
    console.log("chat.vue page mounted");
  }
}; // end vue.js
</script>