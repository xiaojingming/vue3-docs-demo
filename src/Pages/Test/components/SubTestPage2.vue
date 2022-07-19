<script setup lang='ts'>
import { defineProps } from 'vue';

defineProps<{
  foo: number;
  bar: string;
}>();
</script>

<template>
  <div>sub-page-{{ bar }}-{{ foo }}</div>
</template>

<style lang='scss' scoped>

</style>
