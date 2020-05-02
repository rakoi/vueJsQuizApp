const state={
    score:0,
    
};

const getters={
    
    scores:(state)=>state.score
   // allquestions:(state)=>state.questions
};
const actions={
    increaseScore({commit}){
        commit('incrementScore');
    }
};
const mutations={
        incrementScore:(state)=>{
            state.score++
        }
};

export default{
    state,
    getters,
    actions,
    mutations
}