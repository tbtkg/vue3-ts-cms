import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login/login.vue'
import main from '../views/main/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
