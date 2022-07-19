<script lang="ts">
export default {
  name: 'SubB',
};

</script>
<script setup lang='ts'>
// eslint-disable-next-line import/first
import { ref } from 'vue';

const text = ref('');

</script>

<template>
  <div>
    <h5>sub-component-b</h5>
    <input
      v-model="text"
      type="text"
    >
  </div>
</template>

<style lang='scss' scoped>

</style>
