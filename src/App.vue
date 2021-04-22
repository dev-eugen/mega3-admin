<template>
  <div id="app">
    <component  :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

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
  
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>