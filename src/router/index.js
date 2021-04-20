import { createRouter, createWebHistory } from 'vue-router'
import menu from "@/layouts/Menu.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      layout: menu,
    }, 
  },
  {
    path: '/products/new',
    name: 'productnew',
    component: () => import("@/views/Products/NewProduct.vue"),
    meta: {
      layout: menu,
    }, 
  },
  {
    path: '/products',
    name: 'products',
    component: () => import("@/views/Products/Products.vue"),
    meta: {
      layout: menu,
    }, 
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import("@/views/Settings.vue"),
    meta: {
      layout: menu,
    }, 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
