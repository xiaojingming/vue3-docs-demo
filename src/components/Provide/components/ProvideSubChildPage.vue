<script setup lang='ts'>
/* eslint-disable no-unused-vars */
import { inject, Ref, ref } from 'vue';

const { name, handleChangeName } = inject<{
  name: Ref<string>;
  handleChangeName(str: string): void;
    }>('name', {
      name: ref('xiaojingming'),
      handleChangeName() {},
    });
</script>

<template>
  <h1>hello-{{ name }}</h1>
  <button @click="handleChangeName('xiaojingming')">
    click
  </button>
</template>

<style lang='scss' scoped>

</style>
