<template>
    <div class="lg:mx-6 lg:my-3">
        <div class="mb-2 panel-black p-5">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 v-if="products.length == 1"
                        class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Новый товар
                    </h2>
                    <h2 v-else class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Новая группа товаров
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <span class="sm:ml-3">
                        <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Сохранить
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-x-4">

            <div class="lg:col-span-7 col-span-12">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">

                        <Head v-if="products.length == 1" v-model:title="products[0].title"
                            v-model:description="products[0].descriptionHtml" />

                        <Head v-else scnd_placaholder=" группы (необязательно)" v-model:title="title"
                            v-model:description="descriptionHtml" />
                        <ImageUploader v-model="media" />
                        <Price v-if="products.length == 1" v-model:price="products[0].price"
                            v-model:cost="products[0].inventory.cost" />
                        <Price v-else scnd_placaholder=" группы (необязательно)" v-model:price="price"
                            v-model:cost="cost" />
                        <Prices v-if="products.length == 1" v-model="products[0].prices" />
                        <Prices v-else scnd_placaholder="по группе (необязательно)" v-model="prices" />
                        <Inventory v-if="products.length == 1" v-model:sku="products[0].sku"
                            v-model:barcode="products[0].barcode" v-model:tracked="products[0].inventory.tracked"
                            v-model:avaliable="products[0].inventory.available"
                            v-model:inventoryPolicy="products[0].inventory.inventoryPolicy" />
                        <Shipping v-if="products.length == 1" v-model:height="products[0].shipping.height"
                            v-model:width="products[0].shipping.width" v-model:length="products[0].shipping.length"
                            v-model:weight="products[0].shipping.weight" />
                        <Shipping v-else scnd_placaholder=" группы (необязательно)"
                            v-model:height="shipping.height" v-model:width="shipping.width"
                            v-model:length="shipping.length" v-model:weight="shipping.weight" />
                        <Options v-if="products.length == 1" v-model:r_options="products[0].options"
                            v-model:options="options" v-model:user_options="user_options" v-model:r_user_options="products[0].user_options" />

                    </div>
                </transition>
            </div>

            <div class="lg:col-span-5 col-span-12 z-50">
                <transition appear enter-active-class="opacity-0 translate-y-12">
                    <div class="transform duration-150 ease-out">
                        <Status @change="status_change" />
                        <Categories @categoryChange="categoryChange" />
                        <Collections v-if="products.length == 1" v-model="products[0].collections" />
                        <Collections v-else v-model="collections" />
                        <Tags v-if="products.length == 1" v-model="products[0].tags" />
                        <Tags v-else v-model="tags" />
                    </div>
                </transition>

            </div>

            <div class="col-span-12 z-10">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">
                        <Variant @applyAll="applyAll" @add="addVariant" @del="delVariant" v-model="products" :options="options"
                            :user_options="user_options" />
                    </div>
                </transition>
            </div>


            <div class="lg:col-span-7 col-span-12 z-0">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">
                        <SEO v-if="products.length == 1" v-model:keywords="products[0].seo.keywords"
                            v-model:title="products[0].seo.title" v-model:description="products[0].seo.description"
                            v-model:p_title="products[0].title" v-model:p_description="products[0].descriptionHtml" />
                        <SEO v-else v-model:keywords="seo.keywords" v-model:title="seo.title"
                            v-model:description="seo.description" v-model:p_title="title"
                            v-model:p_description="descriptionHtml" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Price from '@/components/Products/Price.vue'
    import Prices from '@/components/Products/Prices.vue'
    import Head from '@/components/Products/Head.vue'
    import Inventory from '@/components/Products/Inventory.vue'
    import Shipping from '@/components/Products/Shipping.vue'
    import SEO from '@/components/Products/SEO.vue'
    import Status from '@/components/Products/Status.vue'
    import ImageUploader from '@/components/BaseImageUploader.vue'
    import Categories from '@/components/BaseCategory.vue'
    import Variant from '@/components/Products/Variants.vue'
    import Options from '@/components/Products/Options.vue'
    import Tags from '@/components/Products/Tags.vue'
    import Collections from '@/components/Products/Collections.vue'
    import useVariants from "@/api/useVariants.js"
    import {
        reactive,
        toRefs
    } from 'vue'
    export default {
        components: {
            Options,
            Head,
            Price,
            Variant,
            Inventory,
            Shipping,
            SEO,
            Status,
            ImageUploader,
            Categories,
            Prices,
            Tags, Collections
        },
        setup(props) {

            // data 
            const group_product = reactive({
                title: '',
                descriptionHtml: '',
                price: 0.00,
                prices: [],
                cost: 0.00,
                tags: [],
                category: null,
                collections: [],
                options: [{
                        label: 'Размер',
                        options: ['XS', 'XL', 'S', 'M', 'L']
                    },
                    {
                        label: 'Цвет',
                        options: ['Красный', 'Желтый', 'Синий', 'Белый', 'Черный']
                    },
                    {
                        label: 'Материал',
                        options: ['Метал', 'Дерево', 'Синтетика', 'Котон', 'Хлопок']
                    },
                    {
                        label: 'Стиль',
                        options: ['Модерн', 'Пост-Модерн', 'Восточный', 'Западный']
                    }
                ],
                user_options: [],
                seo: {
                    title: '',
                    description: '',
                    keywords: []
                },
                media: [{
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
                products: [{
                        title: '',
                        descriptionHtml: '',
                        tags: [],
                        category: null,
                        status: '',
                        options: [{
                                label: 'Размер',
                                option: null
                            },
                            {
                                label: 'Цвет',
                                option: null
                            },
                            {
                                label: 'Материал',
                                option: null
                            },
                            {
                                label: 'Стиль',
                                option: null
                            }
                        ],
                        user_options: [],
                        images: [{
                            url: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
                            alt: 'women',
                            size: '15',
                            ref: false
                        }, ],
                        price: 0.00,
                        prices: [],
                        sku: '',
                        barcode: '',
                        inventory: {
                            cost: 0,
                            tracked: true,
                            inventoryPolicy: false,
                            available: 0
                        },
                        seo: {
                            title: '',
                            description: '',
                            keywords: []
                        },
                        shipping: {
                            height: null,
                            width: null,
                            length: null,
                            weight: null
                        },
                    },

                ]

            })

            const categoryChange = (id) => {
                group_product.category = id
                group_product.products.forEach(e => {
                    e.category = id
                })
            }



           const {  clearUserOptions, clearOptions, delVariant, addVariant, status_change, applyAll } = useVariants(props, group_product)

            return {
                ...toRefs(group_product), categoryChange,
                delVariant,
                addVariant,
                clearOptions,
                clearUserOptions,
                status_change, applyAll, group_product
            }
        }
    }
</script>