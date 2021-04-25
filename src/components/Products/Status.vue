<template>
    <div class="bg-white overflow-hidden shadow rounded-lg mb-2 divide-y divide-gray-200 z-50 h-96">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
            Product status
            <Listbox class="float-right" as="div" v-model="selected">
                <ListboxLabel class="sr-only">
                    Change published status
                </ListboxLabel>
                <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                            <div
                                class="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                <p class="ml-2.5 text-sm font-medium">{{ selected.title }}</p>
                            </div>
                            <ListboxButton
                                class="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                <span class="sr-only">Change published status</span>
                                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
                            </ListboxButton>
                        </div>
                    </div>

                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <ListboxOptions
                            class="z-50 origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption as="template" v-for="option in publishingOptions" :key="option.title"
                                :value="option" v-slot="{ active, selected }">
                                <li
                                    :class="[active ? 'text-white bg-indigo-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
                                    <div class="flex flex-col">
                                        <div class="flex justify-between">
                                            <p :class="selected ? 'font-semibold' : 'font-normal'">
                                                {{ option.title }}
                                            </p>
                                            <span v-if="selected" :class="active ? 'text-white' : 'text-indigo-500'">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <p :class="[active ? 'text-indigo-200' : 'text-gray-500', 'mt-2']">
                                            {{ option.description }}
                                        </p>
                                    </div>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>
        </div>
        <div class="px-4 py-5 sm:p-6 flex flex-col divide-y divide-gray-300">
            <div class="pb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Schedule Online Store
                    availability</label>
                <div class="mt-1">
                    <input type="date" name="email" id="email"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
            </div>
            <SwitchGroup as="div" class="flex items-center py-4">
                <Switch :value="tracked" @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                    :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                    <span class="sr-only">Use setting</span>
                    <span aria-hidden="true"
                        :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                </Switch>
                <SwitchLabel as="span" class="ml-3">
                    <span class="text-sm font-medium text-gray-700">Online Store</span>
                </SwitchLabel>
            </SwitchGroup>
            <SwitchGroup as="div" class="flex items-center py-4">
                    <Switch :value="tracked"  @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                        :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                            :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Instagram</span>
                    </SwitchLabel>
                </SwitchGroup>
                <SwitchGroup as="div" class="flex items-center py-4">
                    <Switch :value="tracked"  @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                        :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                            :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Prom</span>
                    </SwitchLabel>
                </SwitchGroup>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'
    const publishingOptions = [{
            title: 'Active',
            description: 'This product will be available to all sales channels.',
            current: true
        },
        {
            title: 'Draft',
            description: 'This product will be hidden from all sales channels.',
            current: false
        },
        {
            title: 'Arhive',
            description: 'This product will be hidden from all sales channels.',
            current: false
        },
    ]

    export default {
        setup() {
            const selected = ref(publishingOptions[0])

            return {
                publishingOptions,
                selected
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>