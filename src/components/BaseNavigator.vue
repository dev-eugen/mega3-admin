<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 grid grid-cols-3 p-2 items-center">
    <div>
      <h1 class="text-lg font-medium leading-6 text-gray-700 sm:truncate">
        {{ title }}
      </h1>
    </div>
    <div class="col-span-2 flex flex-row justify-end sm:mt-0 sm:ml-4">
      <button v-for="act in actions" :key="act.title" @click="$emit(act.emit)" type="button" 
        :class="`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-${act.color}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${act.color} sm:order-0 ml-3`">
        {{ act.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    actions: Array
  },
  setup(props) {
  }
}
</script>


<style lang="scss" scoped>

</style>