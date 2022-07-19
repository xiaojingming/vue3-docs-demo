<script setup lang='ts'>
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(attrs.class);
</script>

<template>
  <div>
    <span>test</span>
    <span v-bind="$attrs">page</span>
    <span>model5</span>
  </div>
</template>

<style lang='scss' scoped>

</style>
