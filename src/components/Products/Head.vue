<template>
    <div>
        <div class="panel">
            <div class="panel-item">
                Title
            </div>
            <div class="panel-item">
                <div>
                    <div class="mt-1">
                        <input type="text" :value="title"  @input="$emit('update:title', $event.target.value)"  class="input"  placeholder="Title of product"/>
                    </div>
                    <p class="mt-2 text-sm text-red-500" id="title-description">
                        {{ error }}
                    </p>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-item">
                Description
            </div>
            <div class="panel-item">
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