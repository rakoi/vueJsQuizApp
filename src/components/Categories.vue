<template>
  <div id="categories">
    <v-card
      class="mx-auto"
      max-width="600"
      tile
      vertical="true"
      rounded="true"
      v-for="(item,index) in categories"
      v-bind:key="index"
    >
      <router-link v-bind:to="'questions/'+item.id">
        <v-btn id="categoriesItem" outlined color="primary" block>
          <b v-html="item.name"></b>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
    </v-card>
    <v-spacer></v-spacer>
  </div>
</template>

<style scoped>
#categoriesItem {
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>



<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    axios.get("https://opentdb.com/api_category.php").then(resp => {
      this.categories = resp.data.trivia_categories;
    });
  }
};
</script>