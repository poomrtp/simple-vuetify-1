<template>
  <div>
    <v-container>
      <h1 class="my-6">Contact Component</h1>
      <v-row justify="space-around">
        <v-avatar color="indigo" size="100">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>

        <v-avatar size="100">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <v-avatar color="red" size="100">
          <span class="white--text headline">CJ</span>
        </v-avatar>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
