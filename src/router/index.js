import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/soft',
    name: 'Soft',
    component: () => import(/* webpackChunkName: "Soft" */ '../views/Soft.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
