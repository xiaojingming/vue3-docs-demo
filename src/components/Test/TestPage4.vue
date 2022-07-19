<script setup lang='ts'>
import { ref, reactive } from 'vue';
import TestPageModel2 from './components/TestPageModel2.vue';

const info = ref({
  name: 'xiao',
  age: 24,
});
const list = reactive(['fontend', 'backend']);

</script>

<template>
  <test-page-model2
    :info="info"
    :list="list"
  />
</template>

<style lang='scss' scoped>

</style>
