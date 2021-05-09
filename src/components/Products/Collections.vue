<template>
  <div>
    <div class="panel">
      <div class="panel-item font-medium" @click="body_">Колекции</div>
      <div class="panel-item" v-show="body">
            <Multiselect :caret="false" :placeholder="collections[0].title + ', ' + collections[1].title" v-model="modelValue" :options="collections" valueProp="id" label="title"  :searchable="true" mode="tags"/>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import collections from '@/data/collections.js'
import useBody from "@/api/useBody.js";
import { computed, watchEffect, ref, reactive } from "vue";
import { useStore } from "vuex";
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
    const store = useStore();
     watchEffect(() => emit("update:modelValue", props.modelValue));
    return {
      ...useBody(), collections
    };
  },
};
</script>
<style lang="scss" scoped></style>
