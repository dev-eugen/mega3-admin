import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      layout: 'menu',
    }, 
  },
  {
    path: '/products/new',
    name: 'productnew',
    component: () => import("@/views/Products/NewProduct.vue"),
    meta: {
      layout: 'menu',
    }, 
  },
  {
    path: '/products',
    name: 'products',
    component: () => import("@/views/Products/Products.vue"),
    meta: {
      layout: 'menu',
    }, 
  },
  {
    path: '/profile',
    name: 'userprofile',
    component: () => import("@/views/User/Profile.vue"),
    meta: {
      layout: 'setting',
    }, 
  },
  {
    path: '/setting',
    name: 'usersettings',
    component: () => import("@/views/User/Settings.vue"),
    meta: {
      layout: 'setting',
    }, 
  },

  {
    path: '/account',
    name: 'useraccount',
    component: () => import("@/views/User/account.vue"),
    meta: {
      layout: 'setting',
    }, 
  },
  {

    path: '/signin',
    name: 'signin',
    component: () => import("@/views/Signin.vue"),
    meta: {
      layout: 'empty',
    }, 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
