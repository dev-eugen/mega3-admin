<template>
    <Navigator title="Product" :actions="[{ title: 'Back', emit: 'back', color: 'red-500' }, { title: 'Save', emit: 'save', color: 'green-500' }]" />
    <div class="lg:mx-6 lg:my-3 grid grid-cols-3 gap-4" >
        <div class="lg:col-span-2 col-span-3">
        <Head v-model:title="product.title" v-model:description="product.descriptionHtml" /> 
        <Price v-model:price="product.firstVariant.price" v-model:amount="product.firstVariant.inventoryItem.amount" />
        </div>
        <div>{{product.title}} {{product.descriptionHtml }}</div>
    </div>
</template>

<script>
import Price from '@/components/Products/Price.vue'
import Head from '@/components/Products/Head.vue'
import { reactive } from 'vue'
export default {
    components: {
        Head,
        Price,
    },
    setup () {
        const product = reactive({
            title: '',
            descriptionHtml: '',
            firstVariant: {
                price: 0.00,
                inventoryItem: {
                    amount: 0
                }
            }

        })

        return { product }
    }
}
</script>

<style lang="scss" scoped>

</style>