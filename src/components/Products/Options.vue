<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium"  @click="body_">
                Характеристики  
            </div>
            <div class="panel-item" v-show="body">
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="(option, index) in r_options" :key="index">
                        <Multiselect v-model="r_options[index].option" :placeholder="r_options[index].label"  :searchable="true" :options="options[index].options" />
                    </div>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-item font-medium flex justify-between"  @click="s_body_">
                Дополнительные характеристики 
                    <button v-if="user_options.length == 0" @click.stop="root_addUserOption" type="button" class="btn-icon-indigo ml-2">
                        <PlusIcon class="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button v-else @click.stop="open = true; s_body = true" type="button" class="btn-icon-indigo ml-2">
                        <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                    </button> 
            </div>
            <div class="panel-item" v-show="s_body && r_user_options.length > 0">
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="(option, index) in r_user_options" :key="index">
                        <label class="label">{{ r_user_options[index].label }}</label>
                        <input type=text v-model="r_user_options[index].option" class="input" />
                    </div>
                </div>
            </div>
        </div>
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="open = false" :open="open">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div>
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <ClipboardListIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                        <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                            Дополнительные характеристики
                        </DialogTitle>
                        <div class="mt-2">
                        <div class="flex flex-col">
                            <label class="label text-left p-1" v-show="r_user_options.length > 0">Название</label>
                            <div v-for="(option, i) in r_user_options" :key="i" class="mb-2 flex flex-row">
                                <div class="w-10/12">
                                    <input v-model="user_options[i].label" type="text" class="input w-10/12">
                                </div>  
                                <div class="w-2/12">
                                    <button @click="root_delUserOption(i)" type="button" class="inline-flex items-center p-2 border border-transparent rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>                                  
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm" @click="root_labelUpdate">
                        Сохранить
                    </button>
                    <button @click="root_addUserOption" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"  ref="cancelButtonRef">
                        Добавить
                    </button>
                    </div>
                </div>
                </TransitionChild>
            </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
    import useVariants from "@/api/useVariants.js"
    import useBody from '@/api/useBody.js'
    import { reactive, toRefs } from 'vue'
    import Multiselect from '@vueform/multiselect'
export default {
    components: {
        Multiselect
    },
    props: {
        r_options: {
            type: Array,
            default: []
        },
        options: {
            type: Array,
            default: []
        },
        r_user_options: {
            type: Array,
            default: []
        },
        user_options: {
            type: Array,
            default: []
        }
    },
    setup (props ) {
        const state = reactive({
            count: 0,
        })


        const { root_addUserOption, open, root_labelUpdate, root_delUserOption } = useVariants(props, state)
    
        return {
            ...toRefs(state), ...useBody(), root_addUserOption, open, root_labelUpdate, root_delUserOption
        }
    }
}
</script>

<style lang="scss" scoped>

</style>