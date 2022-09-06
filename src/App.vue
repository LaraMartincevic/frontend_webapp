<template>
  <v-app>
    <v-app-bar app color="#FEDBD0" dense elevation="8">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h6">Crochet Away</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn to="/home" text rounded>Home</v-btn>
      <v-btn to="/about" text rounded>About</v-btn>
      <v-btn to="/login" text rounded>Login</v-btn>
      <v-btn to="/signup" text rounded>Signup</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Izbornik </v-list-item-title>
          <v-list-item-subtitle> Istraži! </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Materijali",
          icon: "mdi-hammer-screwdriver",
          to: "/materijali",
        },

        {
          title: "Jagoda Pattern",
          icon: "mdi-food-apple-outline",
          to: "/jagoda",
        },
 
      ],
    };
  },
};
</script>
<!-- this.currentPath != this.$route.curerentPath then drawer = null
