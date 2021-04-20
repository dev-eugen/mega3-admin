<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

const menu = () => import("@/layouts/Menu.vue")
const Empty = () => import("@/layouts/Empty.vue")

export default {
  components: {
    menu, Empty
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