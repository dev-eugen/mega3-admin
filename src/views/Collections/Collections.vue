<template>
    <div class="lg:mx-6 lg:my-3">
        <div class="mb-2 panel-black p-5">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                        Колекции
                    </h2> 
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <span class="sm:ml-3">
                        <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Создать
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-item flex flex-row w-full">
                <div class="m-1 relative rounded-md shadow-sm w-6/12">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input type="text"  class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Поиск по колекциям" />
                </div>    
                <select  class="m-1 select-w w-2/12">
                <option :value="null">
                    Статус
                </option>
                <option :value="true">
                    Активно
                </option>
                <option :value="false">
                    Не активно
                </option>
                </select>  
                <select  class="m-1 select-w w-2/12">
                    <option :value="null">Тип</option>
                    <option :value="true">Автоматические</option>
                    <option :value="false">Ручные</option>
                </select>   
                <select  class="m-1 select-w w-2/12">
                    <option :value="null">Название А-Я</option>
                    <option :value="null">Название Я-А</option>
                    <option :value="true">Дата возрастание</option>
                    <option :value="false">Дата убывание</option>
                </select>              
            </div>
            <div class="panel-item">
                          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Название
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Условия
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(collection, i) in collections" :key="i">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex items-center justify-center">
                        <div class="flex justify-center items-center h-12 w-12 rounded-md overflow-hidden">
                            <img class="min-h-12 min-w-12" :src="collection.media[0].url">
                        </div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ collection.title }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        {{ collection.email }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div v-for="(con, i) in collection.conditions" :key="i"  class="text-sm text-gray-500">
                    {{ getFullCond(con.condition, con.action) + ' ' + con.value}}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Switch v-model="collection.status" :class="[collection.status ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                    <span aria-hidden="true" :class="[collection.status ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                  </Switch>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>
    </div>
</template>

<script>
import { getFullCond } from "@/services/Collections.js"
import collections from "@/data/collections.js"
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state), collections, getFullCond
        }
    }
}
</script>

<style lang="scss" scoped>

</style>