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
    },
    resetScore({commit}){
        commit('restartScore');
    }
};
const mutations={
        incrementScore:(state)=>{
            state.score++
        },
        restartScore:(state)=>{
            state.score=0
        }
};

export default{
    state,
    getters,
    actions,
    mutations
}