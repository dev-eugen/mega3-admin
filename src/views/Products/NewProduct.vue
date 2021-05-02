<template>
    <div class="lg:mx-6 lg:my-3">
        <div class="mb-2 panel-black p-5">    
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Новый товар
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
        <div class="grid grid-cols-12 gap-4">

            <!-- <div class="lg:col-span-7 col-span-12">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">

                        <Head v-model:title="title" v-model:description="descriptionHtml" />
                        <ImageUploader v-model="media" />
                        <Price v-model:price="variants[0].price" v-model:cost="variants[0].inventory.cost" />
                        <Inventory v-model:sku="variants[0].sku" v-model:barcode="variants[0].barcode"
                            v-model:tracked="variants[0].inventory.tracked"
                            v-model:avaliable="variants[0].inventory.avaliable"
                            v-model:inventoryPolicy="variants[0].inventory.inventoryPolicy" />
                        <Shipping v-model:height="height" v-model:width="width" v-model:length="length"
                            v-model:weight="weight" />
                        <SEO v-model:keywords="variants[0].seo.keywords" v-model:title="variants[0].seo.title"
                            v-model:description="variants[0].seo.description" v-model:p_title="title"
                            v-model:p_description="descriptionHtml" />
                    </div>
                </transition>
            </div>
            <div class="lg:col-span-5 col-span-12">
                <transition appear enter-active-class="opacity-0 translate-y-12">
                    <div class="transform duration-150 ease-out">
                        <Status />
                        <Categories />
                    </div>
                </transition>

            </div> -->

            <div class="col-span-12">
                <Variant @add="addVariant" @del="delVariant" v-model="variants" :options="options"/>
            </div>
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
    import Variant from '@/components/Products/Variants.vue'
    import {
        reactive, ref, computed,
        toRefs
    } from 'vue'
    export default {
        components: {
            Head,
            Price,
            Variant,
            Inventory,
            Shipping,
            SEO,
            Status,
            ImageUploader,
            Categories
        },
        setup() {

            // data 
            const product = reactive({
                title: '',
                descriptionHtml: '',
                status: '',
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
                variants: [
                    {
                        options: [
                            {
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
                        images: [
                            {
                                url: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
                                alt: 'women',
                                size: '15',
                                ref: false
                            },
                        ],
                        price: 0.00,
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
                        }
                    },

                ]

            })

            const options = ref([
                {
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
            ])

            // variant func

            const delVariant = (i) => {
                product.variants.length > 1 ? product.variants.splice(i, 1) : null
            }

            const addVariant = () => {
                product.variants.push({
                        options: clearOptions,
                        user_options: clearUserOptions(),
                        price: 0.00,
                        sku: '',
                        barcode: '',
                        images: [
                            {
                                url: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
                                alt: 'women',
                                size: '15',
                                ref: false
                            },
                        ],                        
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
                        }
                    })
            }

            // computed

            const clearOptions = computed(() => {
                let r = []
                options.value.forEach(e => {
                    r.push({
                        label: e.label,
                        option: null
                    })
                })
                return r
            })

            const clearUserOptions = () => {
                let r = []
                product.variants[0].user_options.forEach(e => {
                    r.push({
                        label: e.label,
                        option: null
                    })
                })
                return r
            }

            return {
                ...toRefs(product), options, delVariant, addVariant, clearOptions, clearUserOptions
            }
        }
    }
</script>


<style lang="scss">
    // .multiselect-tag {
    //     @apply bg-indigo-600;
    // }
    // .multiselect-tag i::before {
    //     color: #fff
    // }
    // .multiselect-caret {
    //     color: #9595a2
    // }
    // .multiselect-option .is-selected{
    //     background: #4f46e5
    // }

    //  .is-selected{
    //     background: #4f46e5
    // }
</style>