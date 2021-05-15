<template>
<div>
  <v-card>
    <v-card-title>
        프로필 수정 ({{userInfo.sh}}) <v-icon>mdi-folder-eye</v-icon>
        
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
    <v-card-text style="height: 300px;" class="pt-1">
        <v-tabs class="mb-1" v-model="tab" height="2em" centered grow @change="onIconTabChange">
        <v-tab v-for="iconTab in iconTabs" :key="iconTab.name" @click="clickIconTab"><v-icon>mdi-{{ iconTab.icon }}</v-icon> {{iconTab.name}}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
        <v-tab-item>
            <v-card flat>
            <v-icon @click="userInfo.icon.name = emoticon.name; closeUserProfileDialog()" v-for="emoticon in emoticonList " :key="emoticon.name" :color="userInfo.icon.color" class="mt-2 mr-3 mb-2">mdi-{{emoticon.name}}</v-icon>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-virtual-scroll
                bench="10"
                :items="icons.iconGridList"
                height="300"
                item-height="32"
            >
        <template v-slot:default="{ item }">
            <v-list-item :key="item[0].name">
                <v-icon @click="userInfo.icon.name = icon.name; closeUserProfileDialog()" :color="userInfo.icon.color" v-for="icon in item " :key="icon.name" class="mt-2 mr-3 mb-2" >
                    mdi-{{icon.name}}
                </v-icon>
            </v-list-item>
        </template>
      </v-virtual-scroll>
            
            <!--v-icon @click="userInfo.icon.name = emoticon.name; closeUserProfileDialog()" v-for="emoticon in icons.mdiIcons " :key="emoticon.name" :color="userInfo.icon.color" class="mt-2 mr-3 mb-2">mdi-{{emoticon.name}}</v-icon-->
            
        </v-tab-item>
        </v-tabs-items>
        
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
        <v-btn color="blue darken-1" text
        @click="closeUserProfileDialog"
        >
        Close
        </v-btn>
    </v-card-actions>
    </v-card>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      pageName: "userProfile.vue"
      , colorMenu: false
      , isViewUserDialog : false
      , userInfo : this.$store.state.localStorage.userInfo
      , emoticonList : [{"name":"emoticon","aliases":"smiley,face,emoji"},{"name":"emoticon-angry","aliases":"smiley-angry,face-angry,emoji-angry"},{"name":"emoticon-angry-outline","aliases":"smiley-angry-outline,face-angry-outline,emoji-angry-outline"},{"name":"emoticon-confused","aliases":"face-confused,emoji-confused"},{"name":"emoticon-confused-outline","aliases":"face-confused-outline,emoji-confused-outline"},{"name":"emoticon-cool","aliases":"smiley-cool,face-cool,face-sunglasses,emoji-cool"},{"name":"emoticon-cool-outline","aliases":"smiley-cool-outline,face-cool-outline,face-sunglasses-outline,emoji-cool-outline"},{"name":"emoticon-cry","aliases":"smiley-cry,face-cry,emoji-cry"},{"name":"emoticon-cry-outline","aliases":"smiley-cry-outline,face-cry-outline,emoji-cry-outline"},{"name":"emoticon-dead","aliases":"smiley-dead,face-dead,emoji-dead"},{"name":"emoticon-dead-outline","aliases":"smiley-dead-outline,face-dead-outline,emoji-dead-outline"},{"name":"emoticon-devil","aliases":"smiley-devil,face-devil,emoji-devil"},{"name":"emoticon-devil-outline","aliases":"smiley-devil-outline,face-devil-outline,emoji-devil-outline"},{"name":"emoticon-excited","aliases":"smiley-excited,face-excited,emoji-excited"},{"name":"emoticon-excited-outline","aliases":"smiley-excited-outline,face-excited-outline,emoji-excited-outline"},{"name":"emoticon-frown","aliases":"face-frown,emoji-frown"},{"name":"emoticon-frown-outline","aliases":"face-frown-outline,emoji-frown-outline"},{"name":"emoticon-happy","aliases":"smiley-happy,face-happy,emoji-happy"},{"name":"emoticon-happy-outline","aliases":"smiley-happy-outline,face-happy-outline,emoji-happy-outline"},{"name":"emoticon-kiss","aliases":"smiley-kiss,face-kiss,emoji-kiss"},{"name":"emoticon-kiss-outline","aliases":"smiley-kiss-outline,face-kiss-outline,emoji-kiss-outline"},{"name":"emoticon-lol","aliases":"face-lol,emoji-lol"},{"name":"emoticon-lol-outline","aliases":"face-lol-outline,emoji-lol-outline"},{"name":"emoticon-neutral","aliases":"smiley-neutral,face-neutral,emoji-neutral"},{"name":"emoticon-neutral-outline","aliases":"smiley-neutral-outline,face-neutral-outline,emoji-neutral-outline"},{"name":"emoticon-outline","aliases":"insert-emoticon,mood,sentiment-very-satisfied,tag-faces,smiley-outline,face-outline,emoji-outline"},{"name":"emoticon-poop","aliases":"smiley-poop,face-poop,emoji-poop"},{"name":"emoticon-poop-outline","aliases":"face-poop-outline,emoji-poop-outline"},{"name":"emoticon-sad","aliases":"smiley-sad,face-sad,emoji-sad"},{"name":"emoticon-sad-outline","aliases":"smiley-sad-outline,face-sad-outline,emoji-sad-outline"},{"name":"emoticon-sick","aliases":"face-sick,fever,emoji-sick"},{"name":"emoticon-sick-outline","aliases":"face-sick-outline,fever-outline,emoji-sick-outline"},{"name":"emoticon-tongue","aliases":"smiley-tongue,face-tongue,emoji-tongue"},{"name":"emoticon-tongue-outline","aliases":"smiley-tongue-outline,face-tongue-outline,emoji-tongue-outline"},{"name":"emoticon-wink","aliases":"smiley-wink,face-wink,emoji-wink"},{"name":"emoticon-wink-outline","aliases":"smiley-wink-outline,face-wink-outline,emoji-wink-outline"}]
      , icons : {}
      , tab : ''
      , iconTabs : [
        { icon : 'emoticon' , name : '' }, { icon : 'etc' , name : 'etc'}
      ]
    };
  }, // end data
  async asyncData({ req, res , params, $http }) {
    console.log("asyncData");
    const mdiIcons = await this.$axios.$get("/mdi-icons.json");
    console.log("asyncData", mdiIcons);
    return { mdiIcons };
    
  },
  created: async function() {
    console.log("UserProfile.vue comp created");
    const curUrl = location.protocol + '//' + location.host
    const mdiIcons = await this.$axios.$get(curUrl+"/mdi-icons.json");
    this.icons.mdiIcons = mdiIcons;

    const iconGridList = [];
    let iconGrid = [];
    for(let i = 0; i < mdiIcons.length;i++){
        if( i % 7 == 0 && iconGrid.length > 0 ){
            iconGridList.push(iconGrid);
            iconGrid = [];
        }
        iconGrid.push(mdiIcons[i]);
    }
    if( iconGrid.length > 0  ){
        iconGridList.push(iconGrid);
        iconGrid = [];
    }
    console.log(iconGridList);


    this.icons.iconGridList = iconGridList;
    console.log("UserProfile mounted", mdiIcons);

  }, // end created
  methods: {
    log: msg => {
      console.log(msg);
    }
    ,methodTmp() {
      console.log("methodTmp");
    }
    , onIconTabChange(tabIdx){
      console.log("onIconTabChange", tabIdx);
      
    } 
    , clickIconTab( ){
      console.log("clickIconTab");
    } , closeUserProfileDialog(){
        console.log("closeUserProfileDialog");
        this.$emit('update:closeUserProfileDialog', false)
    }
  },
  mounted: async function() {
    console.log("UserProfile.vue comp mounted");
    
  }
  , computed : {
      swatchStyle() {
      const { color, menu } = this
      return {
        backgroundColor: this.userInfo.icon.color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    } // end swatchStyle
  }
}; // end vue.js
</script>