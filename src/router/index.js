import Vue from 'vue'
import VueRouter from 'vue-router'
const MSite = () => import('../pages/MSite/MSite')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Search = () => import('../pages/Search/Search')
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/MSite'
    },
    {
      path: '/MSite',
      component: MSite
    },
    {
      path: '/Order',
      component: Order
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
