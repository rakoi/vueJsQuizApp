import Vuex from 'vuex';
import Vue from 'vue';

import Questions from  './modules/Questions'
import Scores from './modules/Scores'

Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        Questions,
        Scores
    }
});