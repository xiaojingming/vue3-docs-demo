<script setup lang='ts'>
import { ref } from 'vue';

const title = ref('tree-page-title');
defineExpose({
  title,
});
</script>

<template>
  <h3>{{ title }}</h3>
</template>

<style lang='scss' scoped>

</style>
