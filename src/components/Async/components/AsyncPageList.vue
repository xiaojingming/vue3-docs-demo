<script setup lang='ts'>
import { ref } from 'vue';

const title = ref('');
const getTitle = () => new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('hello xiao');
  }, 2000);
});
title.value = await getTitle();
</script>

<template>
  <div>
    {{ title }}
  </div>
</template>

<style lang='scss' scoped>

</style>
