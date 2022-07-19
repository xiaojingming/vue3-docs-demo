<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue';

const show = ref(false);
const AsyncComponent = defineAsyncComponent(() => import('./components/AsyncPageList.vue'));
const handleLoadClick = () => {
  show.value = !show.value;
};
</script>

<template>
  <Suspense v-if="show">
    <template #default>
      <async-component />
    </template>
    <template #fallback>
      loading~
    </template>
  </Suspense>
  <button @click="handleLoadClick">
    load
  </button>
</template>

<style lang='scss' scoped>

</style>
