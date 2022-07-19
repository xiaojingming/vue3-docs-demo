<script setup lang='ts'>
import { provide } from 'vue';
import SubTestPage7 from './components/SubTestPage7.vue';

provide('info', {
  name: 'xjm',
  age: 24,
});
</script>

<template>
  <SubTestPage7 />
</template>

<style lang='scss' scoped>

</style>
