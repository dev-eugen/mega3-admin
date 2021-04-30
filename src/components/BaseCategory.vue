<template>
    <div class="panel" v-if="r_categories">
        <div class="panel-item flex justify-between font-medium" @click="more = !more">Категория
            <ChevronUpIcon   v-if="more" class="h-5 w-5 text-indigo-600" />
            <ChevronDownIcon  v-else class="h-5 w-5 text-indigo-600" />
        </div>
        <transition appear enter-active-class="opacity-0 -translate-y-12 " leave-active-class="opacity-0 -translate-y-12 ">
            <div class="panel-item transform duration-100 ease-out" v-show="more">
                <ul class="divide-y divide-gray-200">
                    <li  v-if="parent_id != 0" class="px-4 py-4 sm:px-0 flex justify-between">
                        Назад
                        <div>
                            <span @click="parent_id = 0, level = 0" class="inline-flex items-center p-1 rounded-3xl text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800">
                                <ChevronDoubleLeftIcon  class="h-5 w-5" />
                            </span>
                            <span @click="back(categories[0].parent_id)" class="ml-3 inline-flex items-center p-1 rounded-3xl text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800">
                                <ChevronLeftIcon class="h-5 w-5" />
                            </span>
                        </div>
                        
                    </li>
                    <li  v-for="category in categories" :key="category.id"  class="px-4 py-4 sm:px-0 flex justify-between">
                        {{ category.name.slice(0, 28) }} {{ category.name.length > 28 ? '...' : ''}} 
                        <span
                            class="inline-flex items-center px-1 rounded-3xl text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800">
                            <ChevronRightIcon v-if="isLast(category.id)" class="h-5 w-5" @click="up(category.id)" />
                            <MinusIcon v-else-if="category.id === selected?.id" class="h-5 w-5" @click="selected = null" />
                            <PlusIcon v-else class="h-5 w-5" @click="selected = category" />
                        </span>
                    </li>
                </ul>
            </div>
        </transition>
        <div class="panel-item" v-if="!more && selected" >
                    <li  class="px-4 py-4 sm:px-0 flex justify-between">
                        {{ selected.name.slice(0, 28) }} {{ selected.name.length > 28 ? '...' : ''}}
                        <span
                            class="inline-flex items-center p-1 rounded-3xl text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800">
                            <MinusIcon @click="selected = null" class="h-5 w-5" />
                        </span>
                    </li>
        </div>
    </div>
</template>

<script>
    import {
        ref,
        computed,
        reactive,
        toRefs,
        onBeforeMount
    } from 'vue'
    import {
        useStore
    } from 'vuex'

import axios from "@/libs/axios.js"
    export default {
        setup() {
            const store = useStore()
            const state = reactive({
                more: true,
                parent_id: 0,
                r_categories: false,
                selected: null
            })
            onBeforeMount(async () => {
               let payload = await axios.get('all-product-categories')
               state.r_categories = payload.data.data
            })
            const level = ref(0)
            

            const up = (id) => {
                if (level.value !== 3) {
                    state.parent_id = id               
                    level.value++
                }

            }

            const  back = async (p_id) => {
                let r = state.r_categories.find(e => e.id == p_id)
                state.parent_id = await r.parent_id
                level.value--
            }

            const  isLast = (id) => {
                let r = state.r_categories.find(e => e.parent_id == id)
                return r?.id !== undefined
            }

            


            return {
                ...toRefs(state), up, level, back, isLast, 
                categories: computed(() => state.r_categories.filter(e => e.parent_id == state.parent_id)),
                
            }
        },
    }
</script>