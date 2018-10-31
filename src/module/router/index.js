import Vue from 'vue'
import Router from 'vue-router'
import home from '../../components/home/home.vue'
import goods from "../../components/goods/goods.vue"
import ahome from "../../components/amiibo/ahome.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:home},
    {path:'/home',component:home},
    {path:'/goods',name:'goods',component:goods},
    {path:'/ahome',component:ahome}
  ]
})