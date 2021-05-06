<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium" @click="body_">
                Габариты {{ scnd_placaholder }}
                <p v-show="body" class="block text-xs font-medium text-gray-700 my-2">Упростите расчет стоимости доставки для вас и покупателя</p>
            </div>
            <div class="panel-item" v-show="body">
                <div class="w-full flex flex-col lg:flex-row mt-2">
                    <input :value="height"  @input="$emit('update:height', $event.target.value)" placeholder="Ширина, см" type="number" step="0.01" class="input mx-1 my-1">
                    <input :value="width"  @input="$emit('update:width', $event.target.value)" placeholder="Высота, см" type="number" step="0.01" class="input mx-1 my-1">
                    <input :value="length"  @input="$emit('update:length', $event.target.value)" placeholder="Длина, см" type="number" step="0.01" class="input mx-1 my-1">
                    <input :value="weight"  @input="$emit('update:weight', $event.target.value)" placeholder="Вес, кг" type="number" step="0.01" class="input mx-1 my-1">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useBody from '@/api/useBody.js'
const regions = [
    { value: 'ODS', title: 'Odessa'},
    { value: 'KV', title: 'Kiev'},
    { value: 'TRP', title: 'Ternopol'},
    { value: 'NK', title: 'Nikolaev'},
    { value: 'CHR', title: 'Chernomorsk'}
]

    export default {
        props: {
            height: {
                type: Number,
                default: null
            },
            width: {
                type: Number,
                default: null
            },
            length: {
                type: Number,
                default: null
            },
            weight: {
                type: Number,
                default: null
            },
            scnd_placaholder:{
                type: String,
                default: "",
            }
        },
        setup() {


            return { regions, ...useBody() }
        }
    }
</script>

<style lang="scss" scoped>

</style>