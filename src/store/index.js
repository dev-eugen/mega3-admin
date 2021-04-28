import { createStore } from 'vuex'
// axios
import axios from "@/libs/axios.js"


// modules
import user from './modules/user' 

export default createStore({
  state:{
    categories: []
  },
  mutations: {
    setCategories(state, payload){
      state.categories = payload
    }
  },
  actions:{
    async getCategories({ commit }){
      const payload = await axios.get('all-product-categories')
      commit('setCategories', await payload.data.data);
    }
  },
  modules: {
    user
  }
})
