<script setup lang='ts'>
import { DirectiveBinding } from 'vue';

const vFocus = {
  created(...res: any[]) {
    console.log(res);
  },
  mounted(el: HTMLInputElement, binding: DirectiveBinding) {
    el.focus();
    console.log(binding);
  },
};

</script>

<template>
  <input
    v-focus
    type="text"
  >
</template>

<style lang='scss' scoped>

</style>
