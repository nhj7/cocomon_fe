<template>
<div id="NavigationDrawer">
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">COCOMON</v-list-item-title>
          <v-list-item-subtitle>crypto concurrency</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,

      
    };
  } // end data.
}
</script>
