<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium flex items-center justify-between" @click="body_">
                Сетка цен {{ scnd_placaholder }}
                <button @click.stop="addPrice" v-show="body || modelValue.length == 0" type="button" class="btn-icon-indigo ml-2">
                    <PlusIcon class="h-4 w-4" aria-hidden="true" />
                </button>
            </div>
            <div class="panel-item" v-show="body && modelValue.length > 0">
                <div class="w-full grid grid-cols-12 gap-4">
                    <label for="price" class="col-span-5 block text-sm font-medium text-gray-700">Цена</label>
                    <label for="price" class="col-span-5 block text-sm font-medium text-gray-700">Минимальное кол-во</label>
                </div>
                <div v-for="(price, i) in modelValue" :key="i" class=" mb-2">
                    <div class="w-full grid grid-cols-12 gap-4  items-center">
                            <div class="col-span-5">
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span class="text-gray-500 sm:text-sm">
                                            ₴
                                        </span>
                                    </div>
                                    <input v-model="modelValue[i].price" type=number step=0.01  name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" aria-describedby="price-currency" />
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <span class="text-gray-500 sm:text-sm" id="price-currency">
                                            ГРН
                                        </span>
                                    </div>
                                </div>
                            </div>
                        <div class="col-span-6">
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input v-model="modelValue[i].minimum_order_quantity" type=number step=1 class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"  :placeholder="'от 1 ' + modelValue[i].type" />
                                <div class="absolute inset-y-0 right-0 flex items-center">
                                    <select v-model="modelValue[i].type" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                        <option>шт.</option>
                                        <option>пара</option>
                                        <option>кг</option>
                                        <option>м</option>
                                        <option>кмпл.</option>
                                        <option>упак.</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <button @click="delPrice(i)" type="button" class="inline-flex items-center p-1.5 border border-transparent rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                <TrashIcon class="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import useBody from '@/api/useBody.js'
    export default {
        props: {
            modelValue: {
                type: [Array, String],
                default: []
            },
            scnd_placaholder: {
                type: String,
                default: ""
            }
        },
        setup(props, {emit}) {

            const {body} = useBody()


            // prices func 
            const addPrice = () => {
                body.value = true
                props.modelValue.push({
                    price: null,
                    minimum_order_quantity: 1,
                    type: 'шт.'
                })
            }

            const delPrice = (i) => {
                props.modelValue.splice(i, 1)
            }


            return {
                ...useBody(),
                addPrice, delPrice
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>