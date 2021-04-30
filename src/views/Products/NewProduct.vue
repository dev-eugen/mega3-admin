<template>
    <Navigator title="Product"
        :actions="[{ title: 'Back', emit: 'back', color: 'red-500' }, { title: 'Save', emit: 'save', color: 'green-500' }]" />
    <div class="lg:mx-6 lg:my-3 grid grid-cols-12 gap-4">
       
        <div class="lg:col-span-7 col-span-12">
            <transition appear enter-active-class="opacity-0 -translate-x-12">
                <div class="transform duration-150 ease-out">
                    <Head v-model:title="title" v-model:description="descriptionHtml" />
                    <ImageUploader v-model="media" />
                     <Price v-model:price="variants[0].price" v-model:amount="variants[0].inventory.amount" />
                    <Inventory v-model:sku="variants[0].sku" v-model:barcode="variants[0].barcode"
                v-model:tracked="variants[0].inventory.tracked"
                v-model:avaliable="variants[0].inventory.avaliable"
                v-model:inventoryPolicy="variants[0].inventory.inventoryPolicy" />
                    <Shipping v-model:height="height" v-model:width="width"  v-model:length="length" v-model:weight="weight"/>
                    <SEO v-model:keywords="variants[0].seo.keywords"  v-model:title="variants[0].seo.title" v-model:description="variants[0].seo.description"
                v-model:p_title="title" v-model:p_description="descriptionHtml" />
                </div>
            </transition>            
        </div>
        <div class="lg:col-span-5 col-span-12">
            <transition appear enter-active-class="opacity-0 translate-y-12">
                <div class="transform duration-150 ease-out">
                    <Status  />
                    <Categories />
                </div>
            </transition>
            
        </div>
    </div>
</template>

<script>
    import Price from '@/components/Products/Price.vue'
    import Head from '@/components/Products/Head.vue'
    import Inventory from '@/components/Products/Inventory.vue'
    import Shipping from '@/components/Products/Shipping.vue'
    import SEO from '@/components/Products/SEO.vue'
    import Status from '@/components/Products/Status.vue'
    import ImageUploader from '@/components/BaseImageUploader.vue'
    import Categories from '@/components/BaseCategory.vue'
    import {
        reactive, toRefs
    } from 'vue'
    export default {
        components: {
            Head,
            Price,
            Inventory,
            Shipping,
            SEO,
            Status,
            ImageUploader, Categories
        },
        setup() {
            const product = reactive({
                title: '',
                descriptionHtml: '',
                status: '',
                media: [
                    {
                        url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                    {
                        url: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
                        alt: 'women',
                        size: '15',
                        ref: false
                    },
                ],
                shipping: {
                    height: null,
                    width: null,
                    length: null,
                    weight: null
                },
                variants: [
                    {
                        price: 0.00,
                        sku: '',
                        barcode: '',
                        inventory: {
                            amount: 0,
                            tracked: true,
                            inventoryPolicy: false,
                            available: 0
                        },
                        shipping:{

                        },
                        seo: {
                            title: '',
                            description: '',
                            keywords: []
                        }
                    },

                ]

            })

            return {
                ...toRefs(product)
            }
        }
    }
</script>

<style lang="scss">
.multiselect-tag {
    @apply bg-indigo-600;
}
.multiselect-tag i::before{
    color: #fff
}
.multiselect-caret{
    color: #9595a2 
}
    
</style>