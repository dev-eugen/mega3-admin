<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium" @click="body_">
                Название {{ scnd_placaholder }}
            </div>
            <div class="panel-item" v-show="body">
                <div>
                    <div class="mt-1">
                        <input type="text" :value="title" @input="$emit('update:title', $event.target.value)"
                            class="input" :placeholder="title_placeholder" />
                    </div>
                    <p class="mt-2 text-sm text-red-500">
                        {{ error }}
                    </p>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-item font-medium" @click="dec_body = !dec_body">
                Описание
            </div>
            <div class="panel-item" v-show="dec_body">
                <quillEditor v-model:value="description"
                    :options="{ placeholder: 'Изготовлен из качественного материал..' }" />
            </div>
        </div>
    </div>
</template>

<script>
    import useBody from '@/api/useBody.js'
    import {
        quillEditor
    } from 'vue3-quill'
    import {
        computed, ref,
        watchEffect
    } from "vue";
    export default {
        components: {
            quillEditor,
        },
        props: {
            title_placeholder: {
                type: String,
                default: 'Рубашка с подлокотником...'
            },
            title: {
                type: String,
                default: "",
            },
            description: {
                type: String,
                default: "",
            },
            scnd_placaholder:{
                type: String,
                default: "",
            }
        },
        setup(props, {
            emit
        }) {
            const error = computed(() => props.title.length > 70 ? "Максимум 70 символов" : null)

            const dec_body = ref(false)
            

            watchEffect(() => emit('update:description', props.description))
            return {
                error, ...useBody(), dec_body
            };
        },
    };
</script>

<style lang="scss" scoped></style>