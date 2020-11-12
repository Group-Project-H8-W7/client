import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginPage.vue'
import WaitingRoom from '../components/WaitingRoom.vue'
import GamePage from '../components/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/waiting',
    name: 'WaitingRoom',
    component: WaitingRoom
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
