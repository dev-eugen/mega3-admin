<template>
    <div class="panel w-auto">
        <div class="panel-item flex flex-col" @click="body = !body">
            <div class="flex justify-between items-center font-medium">
                <span>Варианты <span>{{ modelValue.length == 1 ? ' (только корневой) ' : `(${modelValue.length})`}}</span> </span>
                <div class="flex flex-col lg:flex-row items-center ">
                    <button @click.stop="$emit('add'), body = true" type="button" class="mb-1 lg:mb-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Добавить <span class="ml-0.5"> {{ modelValue.length == 1 ? ' второй  ' : '' }} </span>
                    </button>
                    <button @click.stop="$emit('applyAll')" type="button" class="group ml-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <CollectionIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Применить <span class="hidden lg:block group-hover:text-gray-400 ml-1">групповые атрибуты</span> 
                    </button>
                </div>
            </div>
        </div>
        <div class="panel-item" v-show="modelValue.length > 1 && body">
            <div class="flex flex-col  mt-1">
                <div class="-my-2 overflow-y-visible  sm:-mx-6 ">
                    <div class="py-2 align-middle inline-block min-w-full">
                        <div class="shadow border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Фото
                                        </th>
                                        <th scope="col"
                                            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                                            Характеристики
                                            <button v-if="user_options.length == 0" @click="addUserOption" type="button" class="btn-icon-indigo-small ml-2">
                                                <PlusIcon class="h-4 w-4" aria-hidden="true" />
                                            </button>
                                            <button v-else @click="open = true" type="button" class="btn-icon-indigo-small ml-2">
                                                <PencilAltIcon class="h-4 w-4" aria-hidden="true" />
                                            </button>
                                        </th>
                                        <th scope="col"
                                            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Цена
                                        </th>
                                        <th scope="col"
                                            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Склад
                                        </th>
                                        <th scope="col" class="relative px-4 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="(variant, i) in modelValue" :key="i">
                                        <td class="pb-6 py-4 px-4 whitespace-nowrap ">
                                            <div class="flex items-center justify-center">
                                                <div class="flex justify-center items-center h-20 w-20 rounded-md overflow-hidden">
                                                    <img class="min-h-20 min-w-20" :src="variant.images[0].url">
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 whitespace-nowrap flex flex-col">
                                            <div v-for="(option, index) in variant.options" :key="index" class="w-40 mb-1">
                                                <Multiselect v-model="modelValue[i].options[index].option" :placeholder="modelValue[i].options[index].label"  :searchable="true" :options="options[index].options" />
                                            </div>

                                            <div v-for="(option, index) in variant.user_options" :key="index" class="w-40 mb-1">
                                                <input v-model="modelValue[i].user_options[index].option" :placeholder="modelValue[i].user_options[index].label" class="input" type=text />
                                            </div>
                                           
                                        </td>
                                        <td class="px-4 py-4 whitespace-nowrap">
                                            <div class="w-32 grid grid-cols-1 gap-4">
                                                <div>
                                                    <label class="label">Цена</label>
                                                    <input  v-model="modelValue[i].price" type=number step=0.01 class="input" placeholder="0" />
                                                </div>
                                                <div>
                                                    <label class="label">Себестоимость</label>
                                                    <input  v-model="modelValue[i].inventory.cost" type=number step=0.01 class="input" placeholder="0" />
                                                </div>      
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 whitespace-nowrap">
                                            <div class="w-64 grid grid-cols-2 gap-4">
                                                <div>
                                                    <label class="label">В наличии</label>
                                                    <input v-model="modelValue[i].inventory.available" type="number" class="input" placeholder="0" />   
                                                </div>
                                                <div>
                                                    <label class="label">Штрих код</label>
                                                    <input v-model="modelValue[i].barcode" type="text" class="input">
                                                </div>
                                                <div class="col-span-2">
                                                    <label class="label">SKU</label>
                                                    <input v-model="modelValue[i].sku" type="text" class="input"> 
                                                </div>
                                            </div>
                                                                                    
                                        </td>
                                        <td class="px-4 py-4 whitespace-nowrap">
                                            <span class="relative inline-flex shadow-sm rounded-md">
                                                <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-green-500 text-sm font-medium text-white  ">
                                                    <PencilAltIcon class="h-5 w-5" aria-hidden="true" />
                                                </button>
                                                <button @click="$emit('del', i)" type="button" class="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-red-500 text-sm font-medium text-white ">
                                                    <TrashIcon class="h-5 w-5" aria-hidden="true"/>       
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                            <label class="label text-left p-1" v-show="user_options.length !== 0" >Название</label>
                            <div v-for="(option, i) in user_options" :key="i" class="mb-2 flex flex-row">
                                <div class="w-10/12">
                                    <input v-model="user_options[i].label" type="text" class="input w-10/12">
                                </div>  
                                <div class="w-2/12">
                                    <button @click="delUserOption(i)" type="button" class="inline-flex items-center p-2 border border-transparent rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>                                  
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm" @click="labelUpdate">
                        Сохранить
                    </button>
                    <button @click="addUserOption" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"  ref="cancelButtonRef">
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
import useBody from '@/api/useBody.js'
import useVariants from "@/api/useVariants.js"
import Multiselect from '@vueform/multiselect'
    import {
        reactive,
        ref,
        toRefs
    } from 'vue'

    export default {
        components: {
            Multiselect
        },
        props: {
            modelValue: {
                type: Array,
                default: []
            },
            options: {
                type: Array,
                require: null
            },
            user_options: {
                type: Array,
                require: null
            }
        },
        setup(props) {

            const state = reactive({
                user_options: []
            })

            // * variant user options 


            const { addUserOption, labelUpdate, delUserOption, open } = useVariants(props, state)

            const { body } = useBody()


            

            

            return {
                ...toRefs(state), open, addUserOption, labelUpdate, delUserOption, ...useBody(), body
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
