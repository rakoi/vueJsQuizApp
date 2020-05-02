import Vue from 'vue';
import VueRouter from 'vue-router'

//components
import Home from '../../components/Home'
import Questions from '../../components/Questions'
import Categories from '../../components/Categories'

Vue.use(VueRouter)
const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/questions/:id",
            name:"questions",
            component:Questions,
            props:true
        },
        {
            path:"/categories",
            name:"categories",
            component:Categories
        }
    ]

});

export default router;