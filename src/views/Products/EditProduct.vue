<template>
    <div class="lg:mx-6 lg:my-3" v-if="group_product !== null">
        <div class="mb-2 panel-black p-5">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Новый товар
                    </h2>
                    <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div class="mt-2 flex items-center text-sm text-gray-100">
                            <InboxInIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-white" aria-hidden="true" />
                            69
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-100">
                            <StarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-white" aria-hidden="true" />
                            4,5
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-100">
                            <CurrencyDollarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-white"
                                aria-hidden="true" />
                            220
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-100">
                            <EyeIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-white" aria-hidden="true" />
                            3020
                        </div>
                    </div>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <span class="mr-1">
                        <button type="button" @click="current--, home = false"  :disabled="!(current > 0)"
                            class="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <ChevronLeftIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </button>
                    </span>

                    <span class="mr-1">
                        <button type="button" @click="home = true"
                            class="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <HomeIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </button>
                    </span>

                    <span class="mr-1">
                        <button type="button" @click="current++, home = false" :disabled="!(current + 1 < products.length)"
                            class="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <ChevronRightIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </button>
                    </span>

                    <span class="hidden sm:block ml-3">
                        <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <LinkIcon class="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                            View
                        </button>
                    </span>

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
        <!-- home  -->

        <div class="grid grid-cols-12 gap-x-4" v-if="home">

            <div class="lg:col-span-7 col-span-12">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">

                        <Head v-if="products.length == 1" v-model:title="products[current].title"
                            v-model:description="products[current].descriptionHtml" />

                        <Head v-else scnd_placaholder=" группы (необязательно)" v-model:title="title"
                            v-model:description="descriptionHtml" />
                        <ImageUploader v-model="media" />
                        <Price v-if="products.length == 1" v-model:price="products[current].price"
                            v-model:cost="products[current].inventory.cost" />
                        <Price v-else scnd_placaholder=" группы (необязательно)" v-model:price="price"
                            v-model:cost="cost" />
                        <Prices v-if="products.length == 1" v-model="products[current].prices" />
                        <Prices v-else scnd_placaholder="по группе (необязательно)" v-model="prices" />
                        <Inventory v-if="products.length == 1" v-model:sku="products[current].sku"
                            v-model:barcode="products[current].barcode"
                            v-model:tracked="products[current].inventory.tracked"
                            v-model:avaliable="products[current].inventory.available"
                            v-model:inventoryPolicy="products[current].inventory.inventoryPolicy" />
                        <Shipping v-if="products.length == 1" v-model:height="products[current].shipping.height"
                            v-model:width="products[current].shipping.width"
                            v-model:length="products[current].shipping.length"
                            v-model:weight="products[current].shipping.weight" />
                        <Shipping v-else scnd_placaholder=" группы (необязательно)" v-model:height="shipping.height"
                            v-model:width="shipping.width" v-model:length="shipping.length"
                            v-model:weight="shipping.weight" />
                        <Options v-if="products.length == 1" v-model:r_options="products[current].options"
                            v-model:options="options" v-model:user_options="user_options"
                            v-model:r_user_options="products[current].user_options" />

                    </div>
                </transition>
            </div>

            <div class="lg:col-span-5 col-span-12 z-50">
                <transition appear enter-active-class="opacity-0 translate-y-12">
                    <div class="transform duration-150 ease-out">
                        <Status @change="status_change" />
                        <Categories @categoryChange="categoryChange" />
                        <Collections v-if="products.length == 1" v-model="products[current].collections" />
                        <Collections v-else v-model="collections" />
                        <Tags v-if="products.length == 1" v-model="products[current].tags" />
                        <Tags v-else v-model="tags" />
                    </div>
                </transition>

            </div>

            <div class="col-span-12 z-10">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">
                        <Variant @applyAll="applyAll" @add="addVariant" @del="delVariant" v-model="products"
                            :options="options" :user_options="user_options" />
                    </div>
                </transition>
            </div>


            <div class="lg:col-span-7 col-span-12 z-0">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">
                        <SEO v-if="products.length == 1" v-model:keywords="products[current].seo.keywords"
                            v-model:title="products[current].seo.title"
                            v-model:description="products[current].seo.description"
                            v-model:p_title="products[current].title"
                            v-model:p_description="products[current].descriptionHtml" />
                        <SEO v-else v-model:keywords="seo.keywords" v-model:title="seo.title"
                            v-model:description="seo.description" v-model:p_title="title"
                            v-model:p_description="descriptionHtml" />
                    </div>
                </transition>
            </div>
        </div>
        <!-- current  -->
        <div class="grid grid-cols-12 gap-x-4" v-else>
            <div class="lg:col-span-7 col-span-12">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">
                        <Head v-model:title="products[current].title"
                            v-model:description="products[current].descriptionHtml" />
                            {{ products[current].title }}
                        <ImageUploader v-model="media" />
                        <Price v-model:price="products[current].price"
                            v-model:cost="products[current].inventory.cost" />
                        <Prices v-model="products[current].prices" />
                        <Inventory v-model:sku="products[current].sku"
                            v-model:barcode="products[current].barcode"
                            v-model:tracked="products[current].inventory.tracked"
                            v-model:avaliable="products[current].inventory.available"
                            v-model:inventoryPolicy="products[current].inventory.inventoryPolicy" />
                        <Shipping v-model:height="products[current].shipping.height"
                            v-model:width="products[current].shipping.width"
                            v-model:length="products[current].shipping.length"
                            v-model:weight="products[current].shipping.weight" />
                        <Options v-model:r_options="products[current].options"
                            v-model:options="options" v-model:user_options="user_options"
                            v-model:r_user_options="products[current].user_options" />
                    </div>
                </transition>
            </div>

            <div class="lg:col-span-5 col-span-12 z-50">
                <transition appear enter-active-class="opacity-0 translate-y-12">
                    <div class="transform duration-150 ease-out">
                        <Status @change="status_change" />
                        <Categories @categoryChange="categoryChange" />
                        <Collections v-model="products[current].collections" />
                        <Tags v-model="products[current].tags" />
                    </div>
                </transition>
            </div>
            <div class="lg:col-span-7 col-span-12 z-0">
                <transition appear enter-active-class="opacity-0 -translate-x-12">
                    <div class="transform duration-150 ease-out">
                        <SEO v-model:keywords="products[current].seo.keywords"
                            v-model:title="products[current].seo.title"
                            v-model:description="products[current].seo.description"
                            v-model:p_title="products[current].title"
                            v-model:p_description="products[current].descriptionHtml" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import d_product from "@/data/product.js"
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
        toRefs,
        ref
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
            Tags,
            Collections
        },
        setup(props) {

            const group_product = reactive(d_product[0])
            console.log(d_product)

            const home = ref(true)

            const current = ref(0)


            const categoryChange = (id) => {
                group_product.category = id
                group_product.products.forEach(e => {
                    e.category = id
                })
            }



            const {
                clearUserOptions,
                clearOptions,
                delVariant,
                addVariant,
                status_change,
                applyAll
            } = useVariants(props, group_product)

            return {
                ...toRefs(group_product),
                categoryChange,
                delVariant,
                addVariant,
                clearOptions,
                clearUserOptions,
                status_change,
                applyAll,
                group_product,
                current, home
            }
        }
    }
</script>