<template>
<div>
  <v-card class="d-flex pa-1 overflow-hidden" outlined tile  >
  <v-row>
    <v-col id="chatsLayer" cols="12" md="12" sm="12" xs="12" class="pa-2 overflow-y-auto" :style="chatHeight">
      <div v-for="item in $store.state.chat.chats" :key="item.CUID">
        <v-card class="d-flex flex-row pa-1 mb-1">
          <div>
            <v-icon :color="item.userInfo.icon.color">{{'mdi-'+item.userInfo.icon.name}}</v-icon>
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
        <v-icon @click="popUserProfile"  :color="userInfo.icon.color" class="mr-2 ml-2">{{'mdi-'+userInfo.icon.name}}</v-icon>
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

  <v-dialog
      v-model="isViewUserDialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="userInfo.icon.name"
            column
          >
            <v-radio
              label="Bahamas, The"
              value="bahamas"
            ></v-radio>
            <v-radio
              label="Bahrain"
              value="bahrain"
            ></v-radio>
            <v-radio
              label="Bangladesh"
              value="bangladesh"
            ></v-radio>
            <v-radio
              label="Barbados"
              value="barbados"
            ></v-radio>
            <v-radio
              label="Belarus"
              value="belarus"
            ></v-radio>
            <v-radio
              label="Belgium"
              value="belgium"
            ></v-radio>
            <v-radio
              label="Belize"
              value="belize"
            ></v-radio>
            <v-radio
              label="Benin"
              value="benin"
            ></v-radio>
            <v-radio
              label="Bhutan"
              value="bhutan"
            ></v-radio>
            <v-radio
              label="Bolivia"
              value="bolivia"
            ></v-radio>
            <v-radio
              label="Bosnia and Herzegovina"
              value="bosnia"
            ></v-radio>
            <v-radio
              label="Botswana"
              value="botswana"
            ></v-radio>
            <v-radio
              label="Brazil"
              value="brazil"
            ></v-radio>
            <v-radio
              label="Brunei"
              value="brunei"
            ></v-radio>
            <v-radio
              label="Bulgaria"
              value="bulgaria"
            ></v-radio>
            <v-radio
              label="Burkina Faso"
              value="burkina"
            ></v-radio>
            <v-radio
              label="Burma"
              value="burma"
            ></v-radio>
            <v-radio
              label="Burundi"
              value="burundi"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>


export default {
  data() {
    return {
      pageName: false,
      inp_chatMsg: "",
      isInpChatFocus : false,
      sendableMsgCnt : 0, 
      isViewUserDialog : false, 
      chats: [],
      userInfo : {
          cid : ''
          , nickName : '코린이1'
          , icon : {
              color : 'primary'
              , name : 'emoticon-angry-outline'
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
      this.inp_chatMsg = "";
      this.sendableMsgCnt = 3;
    },doScrollDownChats() {
      const chatsLayer = document.getElementById("chatsLayer")
      setTimeout( () => { chatsLayer.scrollTop = chatsLayer.scrollHeight; } , 0 );
    }, popUserProfile() {
      console.log("popUserProfile");
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