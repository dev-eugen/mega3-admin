<template>
  <div id="app">
    <component :id="layout" :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

import menu from "@/layouts/Menu.vue"
import empty from "@/layouts/Empty.vue"
import setting from "@/layouts/Setting.vue"

export default {
  components: {
    menu, empty, setting
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
  setup () {
  
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>