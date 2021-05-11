<template>
  <div>
    <div class="panel">
      <div class="panel-item font-medium" @click="body_">Теги</div>
      <div class="panel-item" v-show="body">
            <Multiselect :caret="false" :placeholder="tags[0].value + ', ' + tags[1].value" v-model="modelValue" :options="tags" valueProp="id" label="value"  :searchable="true" mode="tags"/>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import tags from '@/data/tags.js'
import useBody from "@/api/useBody.js"
import { computed, watchEffect, ref, reactive } from "vue"
import { useStore } from "vuex"
export default {
  props: {
    modelValue: {
      type: Array,
      default: [],
    },
  },
  components: {
        Multiselect
    },
  setup(props, { emit }) {
    const store = useStore()
     watchEffect(() => emit("update:modelValue", props.modelValue))
    return {
      ...useBody(), tags
    }
  },
}
</script>
<style lang="scss" scoped></style>
