import { createStore } from 'vuex'
// axios
import axios from "@/libs/axios.js"


// modules
import user from './modules/user' 
import product from './modules/product'

export default createStore({
  state:{
    categories: [],
    tags: []
  },
  mutations: {
    setCategories(state, payload){
      state.categories = payload
    },
    setTags(state, payload){
      state.tags = payload
    }
  },
  actions:{
    async getCategories({ commit }){
      const payload = await axios.get('all-product-categories')
      commit('setCategories', await payload.data.data);
    },
    async getTags({ commit }){
      const payload = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6']  //await axios.get('all-product-Tags')
      commit('setTags', await payload);
    },

  },
  modules: {
    user, product
  }
})
