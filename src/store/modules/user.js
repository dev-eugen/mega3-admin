import axios from "@/libs/axios.js"
import router from "@/router"
export default {
  namespaced: true,
  state: {
    user: {
     firstname: ''
      
    },
    auth: false,
    first: true,
  },
  getters: {
    user: (state) => {
      return state.user
    },
    auth: (state) => {
      return state.auth
    },
  },
  mutations: {
    setFirst: (state, bool) => {
      state.first = bool
    },
    setUser: (state, user) => {
      state.user = user
    },
    setAuth: (state, bool) => {
      if (!bool) {
        router.push({ name: "login" })
      }
      state.auth = bool
    },
  },
  actions: {
    async getUser({ commit }, route) {
      if (localStorage.getItem("access_token") !== null) {
        axios.get('user/profile')
          .then((r) => {
            if (r !== null && r !== undefined) {
              commit("setUser", r.data.data)
              commit("setAuth", true)
              router.push(route)
            } else {
              commit("setAuth", false)
              router.push({ name: "login" })
            }
          })
      } else {
        commit("setAuth", false)
      }
    },
  },
}
