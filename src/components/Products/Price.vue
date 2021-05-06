<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium" @click="body_">
                Цена {{ scnd_placaholder }}
            </div>
            <div class="panel-item" v-show="body">
                <label class="label">
                    Цена
                </label>
                <div class="mt-1 mb-2 flex rounded-md shadow-sm">
                    <span  class="input-append-span">
                        ГРН
                    </span>
                    <input :value="price"  @input="$emit('update:price', $event.target.value)" type=number step=0.01 name="company_website" id="company_website"
                        class="input-body"
                        placeholder="0" />
                </div>

                <label class="label">
                    Себестоимость
                </label>
                <div class="input-append">
                    <span  class="input-append-span">
                        ГРН
                    </span>
                    <input :value="cost" @input="$emit('update:cost', $event.target.value)"  type=number step=0.01 class="input-body" placeholder="0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useBody from '@/api/useBody.js'
    export default {
        props: {
            price: Number,
            cost: Number,
            scnd_placaholder: {
                type: String,
                default: ""
            }
        },
        setup(props) {
          return{
              ...useBody()
          }  
        }
    }
</script>

<style lang="scss" scoped>

</style>