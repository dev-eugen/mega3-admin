<template>
    <div class="panel">
        <div class="panel-item font-medium" @click="body_">
            Склад
        </div>
        <div class="panel-item flex flex-col" v-show="body">
            <div class="w-full flex flex-row mb-3">
                <div class="w-3/6">
                    <label class="label">SKU</label>
                    <div class="mt-1">
                        <input :value="sku" @input="$emit('update:sku', $event.target.value)" type="text" class="input" />
                    </div>
                </div>
                <div class="w-3/6 ml-3">
                    <label class="label">Баркод</label>
                    <div class="mt-1">
                        <input :value="barcode" @input="$emit('update:barcode', $event.target.value)" type="text"  class="input" />
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <SwitchGroup as="div" class="flex items-center mb-2">
                    <Switch :value="tracked" @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                        :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span aria-hidden="true"
                            :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Количество треков</span>
                    </SwitchLabel>
                </SwitchGroup>
                <SwitchGroup v-if="tracked" as="div" class="flex items-center">
                    <Switch :value="inventoryPolicy"
                        @click="() => { inventoryPolicy = !inventoryPolicy; $emit('update:inventoryPolicy', inventoryPolicy)}"
                        :class="[inventoryPolicy ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span aria-hidden="true"
                            :class="[inventoryPolicy ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Продолжать продавать, когда нет в наличии</span>
                    </SwitchLabel>
                </SwitchGroup>
            </div>
            <div v-if="tracked">
                <label class="label">Имеется в наличии</label>
                <div class="mt-1">
                    <input :value="avaliable" @input="$emit('update:avaliable', $event.target.value)" type="number" class="input" placeholder="0" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import useBody from '@/api/useBody.js'
    export default {
        props: {
            sku: {
                type: String
            },
            barcode: {
                type: String
            },
            tracked: {
                type: Boolean
            },
            inventoryPolicy: {
                type: Boolean
            },
            avaliable: {
                type: [Number, String]
            },
        },
        setup(props) {
            return {
                ...useBody()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>