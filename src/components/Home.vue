<template>
  <v-container>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-row id="home">
      <v-col md="6" offset-md="3" offset-sm="2">
        <h1>Trivia Questions</h1>
      </v-col>
      <v-col md="6" offset-md="3" offset-sm="2">
        <router-link to="/categories">
          <v-btn rounded block x-large color="error">
            Start Trivia
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#home {
  padding-top: 10%;
}
a {
  text-decoration: none;
  color: black;
}
</style>

<script>
export default {
  name: "Home"
};
</script>


