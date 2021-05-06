<template>
    <div class="lg:mx-6 lg:my-3">
        <div class="mb-2 panel-black p-5">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Колекции
                    </h2> 
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <span class="sm:ml-3">
                        <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Создать
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-item">
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input type="text"  class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Поиск по колекциям" />
                </div>                 
            </div>
            <div class="panel-item"></div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>