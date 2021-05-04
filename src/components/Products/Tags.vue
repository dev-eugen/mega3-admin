<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium" @click="body_">
                Теги {{ scnd_placaholder }}
            </div>
            <div class="panel-item" v-show="body">
                <!-- <Multiselect />0 -->
            </div>
        </div>
    </div>
</template>

<script>
import useBody from '@/api/useBody.js'
import Multiselect from '@vueform/multiselect'

    export default {
        props: {
            tags: {
                type: Array,
                default: []
            }
        },
        components: {
            Multiselect
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