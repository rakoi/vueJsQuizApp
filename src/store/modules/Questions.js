import axios from 'axios'
const state={
    questions:[],
};
const getters={
    allquestions:(state)=>state.questions

};


const actions={
    async fetchQuestions({commit},categoryId){
        let resp=await axios.get(`https://opentdb.com/api.php?amount=25&category=${categoryId}&type=multiple`);
       
        if(resp.data.results.length==0){
            console.log(resp.data.results)
            resp=await axios.get(`https://opentdb.com/api.php?amount=15&category=${categoryId}&type=multiple`);
        }
        commit('setQuestions',resp.data.results);

    }
};
const mutations={
        setQuestions:(state,questions)=>(state.questions=questions)
};


export default {
    state,
    getters,
    actions,
    mutations
}