import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '@/components/Home.vue'
import LoginComp from '@/components/Login.vue'
import MainComp from '@/components/Main.vue'

const routes = [
  { path: '/', component: HomeComp },
  { path: '/login', component: LoginComp },
  { path: '/main', component: MainComp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
