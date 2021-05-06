<template>
  <v-card class="d-flex pa-1 overflow-hidden" outlined tile  >
  <v-row>
    <v-col id="chatsLayer" cols="12" md="12" sm="12" xs="12" class="pa-2 overflow-y-auto" :style="chatHeight">
      <div v-for="item in $store.state.chat.chats" :key="item.CUID">
        <v-card class="d-flex flex-row pa-1 mb-1">
          <div>
            <v-icon @click="setChatIcon" color="primary">mdi-emoticon</v-icon>
          </div>
          <div class="align-self-start">
            <div class="grey--text caption ml-2 text-left">{{item.userInfo.nickName}}</div>
            <div class="ml-2 text-left">
              <v-card class="caption pl-1 pr-1 " v-html="item.message" >  </v-card>
            </div>
          </div>
        </v-card>
      </div>
    </v-col>
    <v-col cols="12" md="12" sm="12" xs="12" style class="pl-2 pr-2 pb-3">
      <div class="mt-3 d-flex flex-row">
        <v-icon color="primary" class="mr-2 ml-2">mdi-emoticon</v-icon>
        <v-text-field
          v-model="inp_chatMsg"
          append-icon="mdi-chat-processing"
          :label=" $store.state.socketIO.connected ? 'CoCo Talk ' + (sendableMsgCnt==0?'':sendableMsgCnt) :'CoCo Talk Connecting...' "
          placeholder
          outlined
          hide-details="auto"
          clearable
          height="2.2em"
          dense
          @click:append="sendChatMsg"
          @keyup.enter="sendChatMsg"
          ref="inpChat"
          @blur="isInpChatFocus=false;"
          @focus="isInpChatFocus=true;"
          class="mr-2"
          :disabled="!$store.state.socketIO.connected"
        ></v-text-field>

        <!--{{  $store.state.socketIO.connected }}-->
      </div>
    </v-col>
  </v-row>
  </v-card>
</template>

<script>


export default {
  data() {
    return {
      pageName: false,
      inp_chatMsg: "",
      isInpChatFocus : false,
      sendableMsgCnt : 0, 
      chats: [],
      userInfo : {
          cid : ''
          , nickName : '코린이1'
          , emoticon : {
              color : 'primary'
              , icon : 'mdi-emoticon'
          }
        }
    };
  }, // end data
  async asyncData({ req, res }) {
    if (process.server) {
      return { asyncData: "tmp" };
    }
  },
  created() {
    
    //console.log(this.socket);
    if (process.browser) {
      console.log($nuxt.$route.name, "chat.vue created");

      const self = this;
      window.addEventListener('keyup', () => {
        //console.log("window.keyup");
        if( !self.isInpChatFocus && self.$refs.inpChat ){
          //self.$refs.inpChat.focus();
        }
      });
    }
  } // end created
  , mounted: async function() {
    console.log("mounted chat.vue");
    this.doScrollDownChats();
  } // mounted
  , methods: {
    log: msg => {
      console.log(msg);
    },
    setChatIcon() {
      console.log("setChatIcon");
    },
    sendChatMsg() {
      if( this.inp_chatMsg == "" || this.sendableMsgCnt > 0 )
        return;
      //console.log("sendChatMsg", this.inp_chatMsg, this.$store.state.socketIO.socket.connected);
      this.$store.state.socketIO.socket.emit('chat', {
        userInfo : this.userInfo, message: this.inp_chatMsg
      }, (resp) => {
        /* Handle response, if any */
        console.log('resp', resp);
      })
      this.inp_chatMsg = "";
      this.sendableMsgCnt = 5;
    },doScrollDownChats() {
      const chatsLayer = document.getElementById("chatsLayer")
      setTimeout( () => { chatsLayer.scrollTop = chatsLayer.scrollHeight; } , 0 );
    }
  }  
  , watch : {
    '$store.state.chat.chats' : {
      handler(){
        //console.log("watch chats update.");
        this.doScrollDownChats();
      }, deep : true
    }, sendableMsgCnt(){
      //console.log("sendableMsgCnt", this.sendableMsgCnt);
      if( this.sendableMsgCnt == 0 ) return;
      setTimeout( () => { this.sendableMsgCnt-- } , 1000 );
    }
  }, computed : {
    chatHeight() {
      const minHeight = '32vh';
      const lgHeight = '60vh';
      const maxHeightMap = {
        xs: minHeight,
        sm: lgHeight,
        md: lgHeight,
        lg: lgHeight,
        xl: lgHeight
      };
      //console.log("dtHeight", maxHeightMap[this.$vuetify.breakpoint.name] );
      return `height:${maxHeightMap[this.$vuetify.breakpoint.name]};`;
    }
  }
}; // end vue.js
</script>