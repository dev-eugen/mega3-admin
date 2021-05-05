<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium flex items-center justify-between" @click="body_">
                Услови{{ modelValue.length > 1 ? 'я' : 'е' }}
                <button @click.stop="addCondition" v-show="body || modelValue.length == 1" type="button" class="btn-icon-indigo ml-2">
                    <PlusIcon class="h-4 w-4" aria-hidden="true" />
                </button>
            </div>
            <div class="panel-item" v-show="body">
                <div class="w-full grid grid-cols-12 gap-4">
                    <label for="price" class="col-span-5 block text-sm font-medium text-gray-700">Товар должен иметь</label>
                </div>
                <div v-for="(condition, i) in modelValue" :key="i" class=" mb-2">
                    <div class="w-full grid grid-cols-12 gap-4  items-center">
                        <div class="col-span-4">
                            <select @change="modelValue[i].action = null" v-model="modelValue[i].condition" class="select">
                                <option v-for="c in conditions" :key="c.value" :value="c.value" :selected="modelValue[i].condition == c.value">{{ c.title }}</option>
                            </select>
                        </div>
                        <div class="col-span-3">
                             <select :disabled="modelValue[i].condition == null " v-model="modelValue[i].action" class="select">
                                <option v-for="a in actions(modelValue[i].condition)" :key="a.value" :value="a.value" :selected="modelValue[i].condition == a.value">{{ a.title }}</option>
                            </select>
                        </div>
                        <div class="col-span-4">
                            <input v-model="modelValue[i].value" type="text" class="input">
                        </div>
                        <div v-if="modelValue.length > 1" class="col-span-1">
                            <button type="button" @click="delCondition(i)"
                                class="inline-flex items-center p-1.5 border border-transparent rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                <TrashIcon class="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import conditions from "@/data/conditions.js"

    import useBody from "@/api/useBody.js";
    import {
        computed,
        watchEffect,
        ref,
        reactive
    } from "vue";
    import {
        useStore
    } from "vuex";
    export default {
        props: {
            modelValue: {
                type: Array,
                default: [],
            },
        },
        setup(props, { emit }) {
            const store = useStore();
            const { body } = useBody()

            const actions = (value) => {
                let r = []
                conditions.forEach(e => {
                  e.value == value ? r = e.actions  : null
                })
                return r
            }

            const addCondition = () => props.modelValue.push({
                        consdition: null,
                        action: null,
                        value: null
                    })

            const delCondition = (i) => props.modelValue.splice(i, 1)


            //watchEffect(() => emit("update:modelValue", props.modelValue));
            return {
                ...useBody(), conditions, actions, addCondition, delCondition
            };
        },
    };
</script>
<style lang="scss" scoped></style>