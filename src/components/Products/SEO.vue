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
            <label  class="label mb-2">Описание</label>
            <textarea rows="3" :value="description"
                @input="$emit('update:description', $event.target.value)" :placeholder="String(p_description).slice(0, 70)" class="textarea" />
            <p :class="`mt-2 text-sm text-${SizeCheck_color(description, 320)}-500`"> {{ description.length + ' из ' +  ' 320 ' + ' использовано' }}</p>
        </div>
        
    </div>
</template>


<script>
import errors from "@/api/InputErrors.js"
    export default {
        props: {
            title: {
                type: String
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
        setup() {

            const { SizeCheck_color } = errors()

            return { SizeCheck_color  }
        }
    }
</script>

<style lang="scss" scoped>

</style>