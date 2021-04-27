<template>
    <div>
        <div class="panel">
            <div class="panel-item">
                Доставка
                <SwitchGroup as="div" class="flex items-center mt-3">
                    <Switch :value="tracked" @click="() => { tracked = !tracked; $emit('update:tracked', tracked)}"
                        :class="[tracked ? 'bg-indigo-600' : 'bg-gray-400', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                            :class="[tracked ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3">
                        <span class="text-sm font-medium text-gray-700">Это физический продукт</span>
                    </SwitchLabel>
                </SwitchGroup>
            </div>
            <div class="panel-item">
                <p class="block text-xs font-bold text-gray-900">ВЕС</p>
                <p class="block text-xs font-medium text-gray-700 my-2">Используется для расчета стоимости доставки при оформлении заказа и указывать цены при выполнении.</p>
                <label class="label">Цена</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <input class="input"  placeholder="0.00" />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                        <select class="select">
                            <option>KG</option>
                        </select>
                    </div>
                </div>

            </div>
            <div class="px-4 py-4 sm:px-6">
                <p class="block text-xs font-bold text-gray-900">Таможенная информация</p>
                <p class="block text-xs font-medium text-gray-700 my-2">Таможенные органы используют эту информацию для расчета пошлин при международной доставке. Отображается на печатных таможенных бланках.</p>
                <Listbox as="div" v-model="selected">
                    <ListboxLabel class="label">
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