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
    name: 'profile',
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
    name: 'account',
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
  },
  {

    path: '/notification',
    name: 'notification',
    component: () => import("@/views/User/Notification.vue"),
    meta: {
      layout: 'setting',
    }, 
  },
  {

    path: '/password',
    name: 'password',
    component: () => import("@/views/User/Password.vue"),
    meta: {
      layout: 'setting',
    }, 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
