<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium" @click="body_">
                Теги {{ scnd_placaholder }}
            </div>
            <div class="panel-item" v-show="body">
                <Multiselect :caret="false" v-model="modelValue" :placeholder="tags[0] + ', ' + tags[1]" :options="tags"  :searchable="true" mode="tags"/>
            </div>
        </div>
    </div>
</template>

<script>
import useBody from '@/api/useBody.js'
import Multiselect from '@vueform/multiselect'
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
    export default {
        props: {
            modelValue: {
                type: Array,
                default: []
            }
        },
        components: {
            Multiselect
        },
        setup(props, { emit }) {
            const store = useStore()


            watchEffect(() => emit('update:modelValue', props.modelValue))
          return{
              ...useBody(),
                tags: computed(() => store.state.tags)
          }  
        }
    }
</script>

<style lang="scss" scoped>

</style>