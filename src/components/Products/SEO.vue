<template>
    <div class="panel">
        <div class="panel-item">
            <p class="m-1">Search engine listing preview</p>
            <p class="m-1 text-xs">Add a description to see how this product might appear in a search engine listing</p>

        </div>
        <div class="panel-item flex flex-col">
            <div class="mb-3">
                <label class="label">Page title</label>
                <div class="mt-1">
                    <input type="text" :value="title"  @input="$emit('update:title', $event.target.value)"  class="input"  />
                </div>
                <p :class="`mt-2 text-sm text-${SizeCheck_color(title, 70)}-500`">
                    {{ title.length + ' of ' +  ' 70 ' + ' used' }}</p>
            </div>
            <label  class="label mb-2">Description</label>
            <textarea rows="3" :value="description"
                @input="$emit('update:description', $event.target.value)" :placeholder="String(p_description).slice(0, 70)" class="textarea" />
            <p :class="`mt-2 text-sm text-${SizeCheck_color(description, 320)}-500`"> {{ description.length + ' of ' +  ' 320 ' + ' used' }}</p>
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