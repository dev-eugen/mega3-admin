import axios from "axios"
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
        console.log(localStorage.access_token)
        axios.get('https://api.mega3.uk/v1/user/profile', { headers: { Authorization: "Bearer " + localStorage.access_token } })
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
