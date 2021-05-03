<template>
  <div>
    <div v-for="item in chats" :key="item.CUID">
      <v-card class="d-flex flex-row pa-1 mb-1">
        <div>
          <!--v-avatar size="30">
            <img alt="Avatar" src="icon.png" />
          </v-avatar-->
          <v-icon @click="setChatIcon" color="primary">mdi-emoticon</v-icon>
        </div>
        <div class="align-self-start">
          <div class="grey--text body-1 ml-2 text-left">{{item.userId}}</div>
          <div class="ml-2 text-left">
            <v-card class="pa-1 mb-1" v-for="msg in item.msgs" :key="msg.CUID">{{msg.cont}}</v-card>
          </div>
        </div>
      </v-card>
    </div>
    <div class="mt-3">
      <v-text-field
            v-model="inp_chatMsg"
            append-icon="mdi-chat-processing"
            label="CoCo Talk"
            placeholder=""
            outlined
            hide-details="auto"
            clearable
            height="2.2em"
            dense
            @click:append="sendChatMsg"
            @keyup.enter="sendChatMsg"
          ></v-text-field>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: false,
      inp_chatMsg : '',
      chats: [
        {
          userId: "앵무새",
          msgs: [
            {
              cont: `리도석 동무 언제 올라갑니까? 리플 2025년 가격은 아직도 500원이다. 내가 가서 보고 왔다.... `
            },
            {
              cont: `오늘은 저녁에 집에 와서 밥을 먹어...`
            }
          ]
        },
        {
          userId: "코린이",
          msgs: [{ cont: `근데 리플은 언제 오름??? ` }]
        },
        {
          userId: "나형",
          msgs: [{ cont: `리플 지금도 많이 올랐는디... ` }]
        }
      ]
    };
  }, // end data
  async asyncData({ req, res }) {
    if (process.server) {
      return { asyncData: "tmp" };
    }
  },
  created: async function() {
    if (process.browser) {
      console.log($nuxt.$route.name, "template.vue created");
    }
  }, // end created
  methods: {
    log: msg => {
      console.log(msg);
    },
    setChatIcon(){
      console.log("setChatIcon");
    },
    sendChatMsg(){
      console.log("sendChatMsg", this.inp_chatMsg );

      this.inp_chatMsg = "";
    }
  },
  mounted: async function() {
    console.log("template.vue mounted");
  }
}; // end vue.js
</script>