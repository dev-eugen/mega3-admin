<template>
  <div id="app" @dragover.prevent  @drop.prevent class="font-body">
    <component  :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import menuLayout from "@/layouts/Menu.vue"
import emptyLayout from "@/layouts/Empty.vue"
import settingLayout from "@/layouts/Setting.vue"
export default {
  components: {
    menuLayout, emptyLayout, settingLayout
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout}Layout`
    },
  },
  setup () {
    const store = useStore()
    // store.dispatch('getCategories')
     store.dispatch('getTags')
  
    return {
      
    }
  }
}
</script>

<style src="@/assets/css/multiselect.css">
</style>