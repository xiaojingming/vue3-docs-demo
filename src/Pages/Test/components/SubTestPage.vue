<script setup lang='ts'>
import { ref, defineExpose, Ref } from 'vue';

const a = ref('a');
const b = ref('b');
defineExpose<{
  a: Ref<string>;
  b: Ref<string>;
}>({
  a, b,
});
</script>

<template>
  <div>{{ `sub-test-${a}-${b}` }}</div>
</template>

<style lang='scss' scoped>

</style>
