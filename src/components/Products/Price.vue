<template>
    <div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-3 sm:px-6">
                Price
            </div>
            <div class="px-4 py-5 sm:p-6">
                <label for="company_website" class="block text-sm font-medium text-gray-700">
                    Price
                </label>
                <div class="mt-1 mb-2 flex rounded-md shadow-sm">
                    <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        UAH
                    </span>
                    <input v-model="price" type="text" name="company_website" id="company_website"
                        :class="`min-w-0 block w-full px-3 py-2  rounded-none rounded-r-md focus:ring-${NumCheck_color(price)}-500 focus:border-${NumCheck_color(price)}-500 sm:text-sm border-${NumCheck_color(price)}-300`"
                        placeholder="0" />
                </div>

                <label for="company_website" class="block text-sm font-medium text-gray-700">
                    Cost per item
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        UAH
                    </span>
                    <input v-model="amount" type="text" name="company_website" id="company_website"
                        :class="`min-w-0 block w-full px-3 py-2  rounded-none rounded-r-md focus:ring-${NumCheck_color(amount)}-500 focus:border-${NumCheck_color(amount)}-500 sm:text-sm border-${NumCheck_color(amount)}-300`"
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
    export default {
        props: {
            price: Number,
            amount: Number
        },
        setup(props, { emit }) {
            const { NumCheck_color } = errors()
            watchEffect(() => emit('update:price', props.price))
            watchEffect(() => emit('update:amount', props.amount))

            return {
                NumCheck_color
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>