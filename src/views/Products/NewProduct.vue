<template>
    <Navigator title="Product" :actions="[{ title: 'Back', emit: 'back', color: 'red-500' }, { title: 'Save', emit: 'save', color: 'green-500' }]" />
    <div class="lg:mx-6 lg:my-3 grid grid-cols-3 gap-4" >
        <div class="lg:col-span-2 col-span-3">
        <Head v-model:title="product.title" v-model:description="product.descriptionHtml" /> 
        <Price v-model:price="product.variants[0].price" v-model:amount="product.variants[0].inventory.amount" />
        <Inventory v-model:sku="product.variants[0].sku" v-model:barcode="product.variants[0].barcode" v-model:tracked="product.variants[0].inventory.tracked" v-model:avaliable="product.variants[0].inventory.avaliable" v-model:inventoryPolicy="product.variants[0].inventory.inventoryPolicy"/>
        </div>
        <div>{{product.title}} {{product.descriptionHtml }}</div>
    </div>
</template>

<script>
import Price from '@/components/Products/Price.vue'
import Head from '@/components/Products/Head.vue'
import Inventory from '@/components/Products/Inventory.vue'
import { reactive } from 'vue'
export default {
    components: {
        Head,
        Price,
        Inventory
    },
    setup () {
        const product = reactive({
            title: '',
            descriptionHtml: '',
            variants: [
                    {
                        price: 0.00,
                        sku: '',
                        barcode: '',
                        inventory: {
                            amount: 0,
                            tracked: false,
                            inventoryPolicy: false,
                            available: 0
                        }
                    }
            ]

        })

        return { product }
    }
}
</script>

<style lang="scss" scoped>

</style>