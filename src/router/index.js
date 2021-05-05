import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"
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

  // * Collections
  {
    path: '/collections',
    name: 'product-collections',
    component: () => import("@/views/Collections/Collections.vue"),
    meta: {
      layout: 'menu',
    }
  },

  {
    path: '/collections/new',
    name: 'product-collections-new',
    component: () => import("@/views/Collections/NewCollection.vue"),
    meta: {
      layout: 'menu',
    }
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

 router.beforeEach(async (to, from, next) => {
   if (to.fullPath != "/login") {
     if (store.state.user.first) {
       await store.dispatch("user/getUser", to.fullPath);
       store.commit("user/setFirst", false);
     } else {
       if (store.state.user.auth && localStorage.access_token != null) {
         next();
       } else {
         next("/login");
       }
     }
   } else {
     next();
   }
});

export default router
