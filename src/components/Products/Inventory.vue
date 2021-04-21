<template>
    <div class="bg-white overflow-hidden shadow rounded-lg mt-2">
        <div class="px-4 py-5 sm:px-6">
            Inventory
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:p-6 flex flex-col">
            <div class="w-full flex flex-row mb-3">
                <div class="w-3/6">
                    <label for="email" class="block text-sm font-medium text-gray-700">SKU (Stock Keeping Unit)</label>
                    <div class="mt-1">
                        <input :value="sku"  @input="$emit('update:sku', $event.target.value)" type="text" name="email" id="email"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <div class="w-3/6 ml-3">
                    <label for="email" class="block text-sm font-medium text-gray-700">Barcode (ISBN, UPC, GTIN,
                        etc.)</label>
                    <div class="mt-1">
                        <input :value="barcode"  @input="$emit('update:barcode', $event.target.value)" type="text" name="email" id="email"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <SwitchGroup as="div" class="flex items-center mb-2">
                    <Switch :value="tracked"  @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                        :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                            :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Track quantity</span>
                    </SwitchLabel>
                </SwitchGroup>
                <SwitchGroup v-if="tracked"  as="div" class="flex items-center">
                    <Switch :value="inventoryPolicy" @click="() => { inventoryPolicy = !inventoryPolicy; $emit('update:inventoryPolicy', inventoryPolicy)}"
                        :class="[inventoryPolicy ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                            :class="[inventoryPolicy ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Continue selling when out of stock</span>
                    </SwitchLabel>
                </SwitchGroup>
            </div>
            <div v-if="tracked">
                <label for="email" class="block text-sm font-medium text-gray-700">Available</label>
                <div class="mt-1">
                    <input :value="avaliable"  @input="$emit('update:avaliable', $event.target.value)" type="text" name="email" id="email"
                        :class="`shadow-sm focus:ring-${NumCheck_color(avaliable)}-500 focus:border-${NumCheck_color(avaliable)}-500 block w-full sm:text-sm border-gray-300 rounded-md`"
                        placeholder="0" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import errors from "@/api/InputErrors.js"
    import {
        watchEffect,
        computed
    } from 'vue'
    import {
        ref
    } from 'vue'
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
        setup(props, { emit }) {
            const enabled = ref(false)
            const { NumCheck_color } = errors()

            return {
                enabled, NumCheck_color
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>