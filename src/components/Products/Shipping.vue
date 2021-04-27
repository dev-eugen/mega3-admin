<template>
    <div>
        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div class="pnl-itm">
                Shipping
                <SwitchGroup as="div" class="flex items-center mt-3">
                    <Switch :value="tracked" @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                        :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                            :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">This is a physical product</span>
                    </SwitchLabel>
                </SwitchGroup>
            </div>
            <div class="px-4 py-5 sm:p-6">
                <p class="block text-xs font-bold text-gray-900">WEIGHT</p>
                <p class="block text-xs font-medium text-gray-700 my-2">Used to calculate shipping rates at checkout and
                    label prices during fulfillment.</p>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="text" name="price" id="price"
                        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00" />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency"
                            class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                            <option>KG</option>
                        </select>
                    </div>
                </div>

            </div>
            <div class="px-4 py-4 sm:px-6">
                <p class="block text-xs font-bold text-gray-900">Customs information</p>
                <p class="block text-xs font-medium text-gray-700 my-2">Customs authorities use this information to calculate duties when shipping internationally. Shown on printed customs forms.</p>
                <Listbox as="div" v-model="selected">
                    <ListboxLabel class="block text-sm font-medium text-gray-700">
                    Assigned to
                    </ListboxLabel>
                    <div class="mt-1 relative">
                    <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="block truncate">{{ selected.name }}</span>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </ListboxButton>

                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <ListboxOptions class="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        <ListboxOption as="template" v-for="region in regions" :key="region.id" :value="region" v-slot="{ active, selected }">
                            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                                {{ region.title }}
                            </span>

                            <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                            </li>
                        </ListboxOption>
                        </ListboxOptions>
                    </transition>
                    </div>
                </Listbox>
            </div>
        </div>
    </div>
</template>

<script>
const regions = [
    { value: 'ODS', title: 'Odessa'},
    { value: 'KV', title: 'Kiev'},
    { value: 'TRP', title: 'Ternopol'},
    { value: 'NK', title: 'Nikolaev'},
    { value: 'CHR', title: 'Chernomorsk'}
]

    export default {
        props: {
            propName: {
                type: Number
            },
        },
        setup() {


            return { regions }
        }
    }
</script>

<style lang="scss" scoped>

</style>