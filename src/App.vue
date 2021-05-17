<template>
  <v-app>
    <div>
      <v-app-bar color="light" light dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            Page title
          </router-link>
        </v-app-bar-title>

        <v-spacer></v-spacer>
        <div class="mt-6 mr-6">
          <v-text-field
            solo
            label="Search something"
            prepend-inner-icon="mdi-magnify"
            dense
          ></v-text-field>
        </div>
        <!-- <v-text-field
          solo
          label="Prepend inner"
          prepend-inner-icon="mdi-map-marker"
          dense
          class="mt-6"
        ></v-text-field> -->

        <v-btn to="/">
          <v-icon>mdi-home-outline</v-icon><span>Home</span>
        </v-btn>
        <router-link to="/contact" tag="span" style="cursor: pointer">
          <v-icon>mdi-account-box-outline</v-icon>
          <span>Contact</span>
        </router-link>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      menuItems: [
        { title: "Home", path: "/", icon: "home" },
        { title: "Contact", path: "/contact", icon: "face" },
      ],
    };
  },
};
</script>
