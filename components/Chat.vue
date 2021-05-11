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
      <v-card>
        <v-card-title>
          프로필 수정 ({{userInfo.sh}})
          <!--v-select
            v-model="userInfo.icon.color"
            :items="colorList"
            label="color"
            solo
            single-line
            hide-details="auto"
            height="2.2em"
            min-height="auto"
          ></v-select-->
          <v-text-field v-model="userInfo.nickName" hide-details class="ma-0 pa-0" solo />

          <v-text-field v-model="userInfo.icon.color" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              <v-menu v-model="colorMenu" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="userInfo.icon.color" flat />
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
          
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">          
          <v-icon @click="userInfo.icon.name = emoticon.name; isViewUserDialog = false;" v-for="emoticon in emoticonList " :key="emoticon.name" :color="userInfo.icon.color" class="mt-2 mr-3 mb-2">mdi-{{emoticon.name}}</v-icon>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="isViewUserDialog = false"
          >
            Close
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
      colorMenu: false,
      color: '#1976D2FF',
      mask: '!#XXXXXXXX',
      chats: [],
      userInfo : this.$store.state.localStorage.userInfo
      , colorList : ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning']
      , emoticonList : [{"name":"emoticon","aliases":"smiley,face,emoji"},{"name":"emoticon-angry","aliases":"smiley-angry,face-angry,emoji-angry"},{"name":"emoticon-angry-outline","aliases":"smiley-angry-outline,face-angry-outline,emoji-angry-outline"},{"name":"emoticon-confused","aliases":"face-confused,emoji-confused"},{"name":"emoticon-confused-outline","aliases":"face-confused-outline,emoji-confused-outline"},{"name":"emoticon-cool","aliases":"smiley-cool,face-cool,face-sunglasses,emoji-cool"},{"name":"emoticon-cool-outline","aliases":"smiley-cool-outline,face-cool-outline,face-sunglasses-outline,emoji-cool-outline"},{"name":"emoticon-cry","aliases":"smiley-cry,face-cry,emoji-cry"},{"name":"emoticon-cry-outline","aliases":"smiley-cry-outline,face-cry-outline,emoji-cry-outline"},{"name":"emoticon-dead","aliases":"smiley-dead,face-dead,emoji-dead"},{"name":"emoticon-dead-outline","aliases":"smiley-dead-outline,face-dead-outline,emoji-dead-outline"},{"name":"emoticon-devil","aliases":"smiley-devil,face-devil,emoji-devil"},{"name":"emoticon-devil-outline","aliases":"smiley-devil-outline,face-devil-outline,emoji-devil-outline"},{"name":"emoticon-excited","aliases":"smiley-excited,face-excited,emoji-excited"},{"name":"emoticon-excited-outline","aliases":"smiley-excited-outline,face-excited-outline,emoji-excited-outline"},{"name":"emoticon-frown","aliases":"face-frown,emoji-frown"},{"name":"emoticon-frown-outline","aliases":"face-frown-outline,emoji-frown-outline"},{"name":"emoticon-happy","aliases":"smiley-happy,face-happy,emoji-happy"},{"name":"emoticon-happy-outline","aliases":"smiley-happy-outline,face-happy-outline,emoji-happy-outline"},{"name":"emoticon-kiss","aliases":"smiley-kiss,face-kiss,emoji-kiss"},{"name":"emoticon-kiss-outline","aliases":"smiley-kiss-outline,face-kiss-outline,emoji-kiss-outline"},{"name":"emoticon-lol","aliases":"face-lol,emoji-lol"},{"name":"emoticon-lol-outline","aliases":"face-lol-outline,emoji-lol-outline"},{"name":"emoticon-neutral","aliases":"smiley-neutral,face-neutral,emoji-neutral"},{"name":"emoticon-neutral-outline","aliases":"smiley-neutral-outline,face-neutral-outline,emoji-neutral-outline"},{"name":"emoticon-outline","aliases":"insert-emoticon,mood,sentiment-very-satisfied,tag-faces,smiley-outline,face-outline,emoji-outline"},{"name":"emoticon-poop","aliases":"smiley-poop,face-poop,emoji-poop"},{"name":"emoticon-poop-outline","aliases":"face-poop-outline,emoji-poop-outline"},{"name":"emoticon-sad","aliases":"smiley-sad,face-sad,emoji-sad"},{"name":"emoticon-sad-outline","aliases":"smiley-sad-outline,face-sad-outline,emoji-sad-outline"},{"name":"emoticon-sick","aliases":"face-sick,fever,emoji-sick"},{"name":"emoticon-sick-outline","aliases":"face-sick-outline,fever-outline,emoji-sick-outline"},{"name":"emoticon-tongue","aliases":"smiley-tongue,face-tongue,emoji-tongue"},{"name":"emoticon-tongue-outline","aliases":"smiley-tongue-outline,face-tongue-outline,emoji-tongue-outline"},{"name":"emoticon-wink","aliases":"smiley-wink,face-wink,emoji-wink"},{"name":"emoticon-wink-outline","aliases":"smiley-wink-outline,face-wink-outline,emoji-wink-outline"}]
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
    } // end chatdHeight
    , swatchStyle() {
      const { color, menu } = this
      return {
        backgroundColor: this.userInfo.icon.color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    }
  }
}; // end vue.js
</script>