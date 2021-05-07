<template>
    <div class="lg:mx-6 lg:my-3">
        <div class="mb-2 panel-black p-5">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Новая колекция
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
                        <Head title_placeholder="Летняя, Дешевле 1000 грн" v-model:title="title" v-model:description="descriptionHtml" />
                        <ImageUploader  v-model="media" />
                        <div class="panel mb-2">
                            <div class="panel-item font-medium">Управление колекцией</div>
                            <div class="panel-item">
                                <RadioGroup v-model="automatic">
                                    <RadioGroupLabel class="sr-only">
                                    Privacy setting
                                    </RadioGroupLabel>
                                    <div class="bg-white rounded-md -space-y-px">
                                    <RadioGroupOption as="template" v-for="(setting, settingIdx) in settings" :key="setting.name" :value="setting.value" v-slot="{ checked, active }">
                                        <div :class="[settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none']">
                                        <span :class="[checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center']" aria-hidden="true">
                                            <span class="rounded-full bg-white w-1.5 h-1.5" />
                                        </span>
                                        <div class="ml-3 flex flex-col">
                                            <RadioGroupLabel as="span" :class="[checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium']">
                                            {{ setting.name }}
                                            </RadioGroupLabel>
                                            <RadioGroupDescription as="span" :class="[checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm']">
                                            {{ setting.description }}
                                            </RadioGroupDescription>
                                        </div>
                                        </div>
                                    </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <Conditions v-if="automatic" v-model="conditions" />
                        <SEO v-model:keywords="seo.keywords" v-model:title="seo.title"
                            v-model:description="seo.description" v-model:p_title="title"
                            v-model:p_description="descriptionHtml" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>

const settings = [
  { name: 'Ручная', description: 'Ручное добавление товара', value: false },
  { name: 'Автоматическая', description: 'Товар будет добавлятся по условию', value: true },
]
    import SEO from '@/components/Products/SEO.vue'
    import ImageUploader from '@/components/BaseImageUploader.vue'
    import Head from '@/components/Products/Head.vue'
    import {
        computed,
        watchEffect,
        ref,
        reactive,
        toRefs
    } from "vue"
    import {
        useStore
    } from "vuex"
import Conditions from '../../components/Products/Collections/Conditions.vue'
    export default {
        props: {},
        components: {
            Head,ImageUploader, Conditions, SEO
        },
        setup(props, {
            emit
        }) {
            const store = useStore()

            const collection = reactive({
                title: '',
                descriptionHtml: '',
                automatic: false,
                media: [],
                staus: true,
                conditions: [
                    {
                        consdition: null,
                        action: null,
                        value: null
                    }
                ],
                seo: {
                    title: '',
                    keywords: [],
                    description: ''
                }
            })




            return {
                ...toRefs(collection), settings
            }
        },
    }
</script>
<style lang="scss" scoped></style>