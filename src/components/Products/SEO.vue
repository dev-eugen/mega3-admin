<template>
    <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
            <p class="m-1">Search engine listing preview</p>
            <p class="m-1 text-xs">Add a description to see how this product might appear in a search engine listing</p>

        </div>
        <div class="px-4 py-5 sm:p-6 flex flex-col">
            <div class="mb-3">
                <label for="email" class="block text-sm font-medium text-gray-700">Page title</label>
                <div class="mt-1">
                    <input type="text" name="email" id="email" :value="title"
                        @input="$emit('update:title', $event.target.value)"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        :placeholder="p_title" aria-describedby="email-description" />
                </div>
                <p :class="`mt-2 text-sm text-${SizeCheck_color(title, 70)}-500`" id="email-description">
                    {{ title.length + ' of ' +  ' 70 ' + ' used' }}</p>
            </div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea id="about" name="about" rows="3" :value="description"
                @input="$emit('update:description', $event.target.value)" :placeholder="String(p_description).slice(0, 70)"
                class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
            <p :class="`mt-2 text-sm text-${SizeCheck_color(description, 320)}-500`" id="email-description"> {{ description.length + ' of ' +  ' 320 ' + ' used' }}</p>
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

            return { SizeCheck_color }
        }
    }
</script>

<style lang="scss" scoped>

</style>