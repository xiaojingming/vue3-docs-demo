<script setup lang='ts'>
/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable no-unused-vars */
import { ref, Ref } from 'vue';

const a = ref(1);
const b = ref('b');
const props = defineProps<{
  name: string;
  age: number;
}>();
const emits = defineEmits<{
  (event: 'add', num: number): void;
}>();
const handleAdd = () => {
  const num = props.age;
  emits('add', num + 1);
};
defineExpose({ a, b });
</script>

<template>
  <div>
    <span>{{ name }}</span>-<span>{{ age }}</span>
    <button @click="handleAdd">
      add
    </button>
  </div>
</template>

<style lang='scss' scoped>

</style>
