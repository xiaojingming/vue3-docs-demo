<script setup lang='ts'>
import { ref } from 'vue';
import SubTestPage2 from './components/SubTestPage2.vue';

const foo = ref(24);
const bar = ref('age');
</script>

<template>
  <SubTestPage2
    :foo="foo"
    :bar="bar"
  />
</template>

<style lang='scss' scoped>

</style>
