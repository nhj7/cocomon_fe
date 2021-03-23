<template>
<v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="2000"
              :search="search"
              item-key="name"
              dense
              mobile="false"
              mobile-breakpoint="0"
              hide-default-footer
              :single-expand="singleExpand"
              :expanded.sync="desserts"
              class="elevation-1"
              @click:row="addExpand"
              multi-sort              
              fixed-header
            >
              <template v-slot:expanded-item="{ item }" @click:row="addExpand">
                
                  <td >
                   <span><span>{{item.name}}</span></span>
                  </td>
                  <td> 
                    <span><span>65131313</span></span>
                  </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
              </template>
            </v-data-table>
</template>

<script>
export default {
  components: {},
  counter: 0,
  methods: {
    setColor: (color) => {
      console.log($nuxt, color);

      try {
        $nuxt.$vuetify.theme.dark = ["dark", "system"].includes(color);
        //if( )
        $nuxt.$vuetify.theme.sepia = true;
      } catch (error) {
        console.error(error);
      }
    }, // end setColor
    addExpand(value) {
      console.log(this, event.currentTarget.children);
      /*
      debugger;
      Array.from(event.currentTarget.children).foreach(
        (child) => { child.style.borderBottom = "" ; }
      )
      */
      
      //debugger;
      if (this.expanded.indexOf(value) > -1) {
        this.expanded.pop(value);
      } else {
        this.expanded.push(value);
      }
    },    
  },
  mounted : () => {
    $nuxt.$data.expanded = $nuxt.$data.desserts;
    
    console.log($nuxt.$content.options);
  },
  data() {
    return {
      search: "",
      expanded: [],
      singleExpand: true,
      colors: ["system", "light", "dark", "sepia"],
      headers: [
        { text: "이름", value: "name" , class: "sticky-header" },
        { text: "업빗(￦)", value: "carbs", class: "sticky-header" },
        { text: "(%)", value: "protein" , class: "sticky-header"},
        { text: "김프", value: "iron" , class: "sticky-header"},        
        { text: "거래량", value: "iron" , class: "sticky-header"},
        
      ],
      desserts: [
        {
          name: "삼성전자",
          calories: "63,902,630",
          fat: 63902630,
          carbs: 65681000,
          protein: -2.13,
          iron: "6683",
        },
        {
          name: "Ice cream",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        
      ],
    };
  }, // end data.
};
</script>
