import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zhuangxiu',
    name: 'zhuangxiu',
    component: () => import('../views/zhuangxiu.vue'),
  },
  {
    path: '/zhangge',
    name: 'zhangge',
    component: () => import('../views/zhangge.vue'),
  },
  {
    path: '/day01/index',
    name: 'day01/index',
    component: () => import('../views/day01/index'),
  },
]

const router = new VueRouter({
  routes
})

export default router
