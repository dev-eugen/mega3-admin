import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/css/index.css"
import * as icons from '@heroicons/vue/outline'
import * as tailwindUI from "@headlessui/vue"
import Navigator from "@/components/BaseNavigator.vue"
import VueClipboard from 'vue3-clipboard'
//import Multiselect from '@vueform/multiselect'
const app = createApp(App)

//app.component('Multiselect', Multiselect)

app.directive("click-outside", {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value()
      }
    }
    document.addEventListener("click", el.clickOutsideEvent)
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent)
  },
})

app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
})


Object.entries(tailwindUI).forEach(([componentName, component]) => {
  if (componentName !== "default") {
    app.component(String(componentName), component)
  }
})

Object.entries(icons).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    app.component(String(componentName), component)
  }
})



app.component('Navigator', Navigator)
app.use(store)
app.use(router)
app.mount("#app")
