<template>
<div>
  
  <v-toolbar dense color="#ff9900">
    <v-toolbar-title><a href="/">Trivia</a> </v-toolbar-title>
    <v-spacer></v-spacer>
        <v-icon>mdi-star</v-icon>
      
      <p v-if="scores && scores>0" >  Score: {{this.scores}}</p>
      
  </v-toolbar>
  <v-container fluid>
    <router-view />
  </v-container>
  
</div>
</template>


<style scoped>
a{
  text-decoration: none;
  color:black;
}
</style>


<script>
import {mapActions,mapGetters} from 'vuex';



export default {
  name: "Container",
  data(){
    return{

    }
  },
  created(){
    
    console.log(this.scores)

    
  },
  computed:mapGetters(["scores"]),
  methods:{
      ...mapActions(["incrementScore"]),
  }
};
</script>


