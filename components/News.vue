<template>
  <div>
    <v-card v-for="news in feed" :key="news.link" class="mb-3 pa-2" >
      
      <a @click="detailView(news)">{{ news.title }} - {{ news.creator }} - {{ news.pubDateFormat}} <v-icon v-bind:class="[ news.isView ? '': '' ]">mdi-arrow-{{news.isView?"up":"down"}}-bold-box-outline</v-icon> </a>
      
      <div class="mt-2" v-html="news.content" v-if="news.isView"></div>
      <a target="_blank" :href="news.link" v-if="news.isView">자세히 보기</a>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: false
      , feed : []
    };
  }, // end data
  // async fetch() {
  //   console.log("chat.vue comp fetch");
  //   if (process.server) {
  //     const redis = require("../server/util/redis")
  //     const feed = await redis.getAsync("feed")
  //     console.log(feed);
  //     return { asyncData : 'tmp' , feed : JSON.parse(feed) };
  //   }
  // }
  async fetch() {
    console.log("News.vue comp fetch");
    const data = await this.$axios.$get("/api/news");
    data.feed.forEach(news => {
        news.isView = false
    });
    //console.log("fetch  feed ", data);
    this.feed = data.feed;
  }
  , fetchOnServer: true
  , fetchKey: 'site-sidebar-news'
  , created: async function() {
    console.log("News.vue comp created");
  } // end created
  , computed: {
    
  }
  , methods: {
    log: msg => {
      console.log(msg);
    },
    methodTmp() {
      console.log("methodTmp");
    }
    , refresh() {
      this.$fetch()
    }, detailView( news ){
      console.log("detailView", news.isView);
      this.feed.forEach(item => {
        if( item != news ){
          item.isView = false
        }
      });
      news.isView = !news.isView
    }
  },
  mounted: async function() {
    console.log("News.vue comp mounted");
    if( this.feed.length == 0  ){
      this.$fetch()
    }
  }
}; // end vue.js
</script>
<style>
img {
  width : 100% !important;
}

.rotate180 {
  transform: rotate(-180deg);
}

.rotate360 {
  transform: rotate(-180deg);
}
</style>