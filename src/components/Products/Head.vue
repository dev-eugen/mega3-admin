<template>
    <div>
        <div class="bg-white overflow-hidden shadow rounded-lg divide-y mb-2 divide-gray-200">
            <div class="px-4 py-5 sm:px-6">
                Title
            </div>
            <div class="px-4 py-5 sm:p-6">
                <div>
                    <div class="mt-1">
                        <input type="text" name="title" id="title" :value="title"  @input="$emit('update:title', $event.target.value)"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Title of product" aria-describedby="title-description" />
                    </div>
                    <p class="mt-2 text-sm text-red-500" id="title-description">
                        {{ error }}
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg  mb-2 divide-y divide-gray-200">
            <div class="px-4 py-5 sm:px-6">
                Description
            </div>
            <div class="px-4 py-5 sm:p-6">
                <quillEditor v-model:value="description" />
            </div>
        </div>
    </div>
</template>

<script>
    import {
        quillEditor
    } from 'vue3-quill'
    import {
        computed,
        watchEffect
    } from "vue";
    export default {
        components: {
            quillEditor,
        },
        props: {
            title: {
                type: String,
                default: "",
            },
            description: {
                type: String,
                default: "",
            },
        },
        setup(props, {
            emit
        }) {
            const error = computed(() => props.title.length > 70 ? "Max length 70" : null)
            watchEffect(() => emit('update:description', props.description))
            return {
                error
            };
        },
    };
</script>

<style lang="scss" scoped></style>