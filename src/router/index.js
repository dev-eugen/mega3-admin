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
  // * Ptoducts

  {
    path: '/products/new',
    name: 'productnew',
    component: () => import("@/views/Products/NewProduct.vue"),
    meta: {
      layout: 'menu',
    }, 
  },
  {
    path: '/product/:id',
    name: 'productedit',
    component: () => import("@/views/Products/EditProduct.vue"),
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

  // * Setting
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
  },
  {
    path: '/social',
    name: 'social',
    component: () => import("@/views/User/Social.vue"),
    meta: {
      layout: 'setting',
    }, 
  },
  {
    path: '/billing',
    name: 'billing',
    component: () => import("@/views/User/Billing.vue"),
    meta: {
      layout: 'setting',
    }, 
  },

  // * auth

  {
    path: '/signin',
    name: 'signin',
    component: () => import("@/views/Signin.vue"),
    meta: {
      layout: 'empty',
    }, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
