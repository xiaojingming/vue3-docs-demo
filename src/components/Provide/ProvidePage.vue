<script setup lang='ts'>
import { provide, ref } from 'vue';
import ProvideChildPage from './components/ProvideChildPage.vue';

const name = ref('xiao');
const handleChangeName = (str: string) => {
  name.value = str;
};
provide('name', {
  name,
  handleChangeName,
});
</script>

<template>
  <provide-child-page />
</template>

<style lang='scss' scoped>

</style>
