<template>
    <div class="panel">
        <div class="panel-item font-medium">
            <p class="m-1">Предварительный просмотр списка поисковых систем</p>
            <p class="m-1 text-xs">Добавьте описание, чтобы увидеть, как этот продукт может появиться в списке поисковой системы</p>

        </div>
        <div class="panel-item flex flex-col">
            <div class="mb-3">
                <label class="label">Название страницы</label>
                <div class="mt-1">
                    <input type="text" :value="title"  @input="$emit('update:title', $event.target.value)"  class="input"  />
                </div>
                <p :class="`mt-2 text-sm text-${SizeCheck_color(title, 70)}-500`">
                    {{ title.length + ' из ' +  ' 70 ' + ' использовано' }}</p>
            </div>
            <div class="mb-3">
                <label class="label">Ключевые слова</label>
                <Multiselect
                    v-model="kk"
                    mode="tags"
                    :searchable="true"
                    :createTag="true"
                    :options="[
                    { value: 'shop', label: 'shop' },
                    { value: 'robin', label: 'Robin' },
                    { value: 'joker', label: 'Joker' },
                    ]"
                />
            </div>
            <label  class="label mb-2">Описание</label>
            <textarea rows="3" :value="description"
                @input="$emit('update:description', $event.target.value)" :placeholder="String(p_description).slice(0, 70)" class="textarea" />
            <p :class="`mt-2 text-sm text-${SizeCheck_color(description, 320)}-500`"> {{ description.length + ' из ' +  ' 320 ' + ' использовано' }}</p>
        </div>
        
    </div>
</template>


<script>
const people = [
    'Batman',
    'Robin',
    'Joker',
]
import errors from "@/api/InputErrors.js"
import Multiselect from '@vueform/multiselect'
import { watchEffect, ref } from '@vue/runtime-core'
    export default {
        components: {
            Multiselect,
        },
        props: {
            title: {
                type: String
            },
            keywords: {
                type: Array
            },
            p_title: {
                type: String
            },
            p_description: {
                type: String
            },
            description: {
                type: String
            }
        },
        setup(props, { emit }) {
            const { SizeCheck_color } = errors()

            const kk = ref([])

            return { SizeCheck_color, people, kk  }
        }
    }
</script>

<style src="@vueform/multiselect/themes/default.css"></style>