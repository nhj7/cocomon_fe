<template>
<div>
  <v-card class="d-flex pa-1 overflow-hidden" outlined tile  >
  <v-row>
    <v-col id="chatsLayer" cols="12" md="12" sm="12" xs="12" class="pa-2 overflow-y-auto" :style="chatHeight" :class="$vuetify.theme.dark ? 'theme--dark' : '' ">
      <div v-for="item in $store.state.chat.chats" :key="item.CUID">
        <v-card class="d-flex flex-row pa-1 mb-1">
          <div>
            <v-icon :color="item.userInfo.icon.color">{{'mdi-'+item.userInfo.icon.name}}</v-icon>
          </div>
          <div class="align-self-start">
            <div class="d-flex flex-row">
              <div class="grey--text caption ml-2 text-left">{{item.userInfo.nickName}} ({{item.userInfo.sh}}) - {{$moment(item.date).format('h:mm a') }} </div> 
              
            </div>
            <div class="ml-2 text-left">
              <v-card style="word-break:break-all;" class="caption pl-1 pr-1 mb-1 message" v-html="item.message" >  </v-card>
            </div>
          </div>
        </v-card>
      </div>
    </v-col>
    <v-col cols="12" md="12" sm="12" xs="12" style class="pl-2 pr-2 pb-3">
      <div class="mt-3 d-flex flex-row">
        <v-icon @click="isViewUserDialog = true"  :color="userInfo.icon.color" class="mr-2 ml-2">{{'mdi-'+userInfo.icon.name}}</v-icon>
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
          @keyup.arrow-up="cacheMsg"
          @keyup.arrow-down="cacheMsg"
          ref="inpChat"
          @blur="isInpChatFocus=false;"
          @focus="isInpChatFocus=true;"
          class="mr-2"
          :disabled="!$store.state.socketIO.connected"
          :color="userInfo.icon.color"
        ></v-text-field>

        <!--{{  $store.state.socketIO.connected }}-->
      </div>
    </v-col>
  </v-row>
  </v-card>

  <v-dialog
    v-model="isViewUserDialog"
    scrollable
    max-width="300px"
  >
  <UserProfile :closeUserProfileDialog.sync="isViewUserDialog" />  
  </v-dialog>
</div>
</template>

<script>


export default {
  data() {
    return {
      pageName: false,
      inp_chatMsg: "",
      arrMsg : [],
      arrMsgIdx : 0,
      isInpChatFocus : false,
      sendableMsgCnt : 0, 
      isViewUserDialog : false, 
      color: '#1976D2FF',
      mask: '!#XXXXXXXX',
      chats: [],
      userInfo : this.$store.state.localStorage.userInfo
      , colorList : ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning']
      
      
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

      //const self = this;
      // window.addEventListener('keyup', () => {
      //   //console.log("window.keyup");
      //   if( !self.isInpChatFocus && self.$refs.inpChat ){
      //     //self.$refs.inpChat.focus();
      //   }
      // });
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

      if(this.arrMsg.length > 100 ){
        this.arrMsg.splice(0, 1);
      }
      this.arrMsg.push(this.inp_chatMsg)
      this.inp_chatMsg = "";
      this.sendableMsgCnt = 3;
    },doScrollDownChats() {
      const chatsLayer = document.getElementById("chatsLayer")
      setTimeout( () => { chatsLayer.scrollTop = chatsLayer.scrollHeight; } , 0 );
    }, popUserProfile() {
      console.log("popUserProfile");
    }, toggleUserProfileDialog(){
      this.isViewUserDialog = !this.isViewUserDialog;
    }, cacheMsg(e){
      console.log("cacheMsg", this.arrMsgIdx,e );
      if( this.arrMsg.length == 0  ) return;
      if(e.key == 'ArrowUp' ){
        this.arrMsgIdx++
      }else{
        this.arrMsgIdx--
      }
      if( this.arrMsgIdx < 0 || this.arrMsgIdx > this.arrMsg.length ){
        this.arrMsgIdx = this.arrMsg.length;
      }
      this.inp_chatMsg = this.arrMsg[this.arrMsgIdx];
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
    } // end chatdHeight
    
  }
}; // end vue.js
</script>
<style>
.message > p{
  margin-bottom:1px !important;
}
</style>