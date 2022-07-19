<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
import SubSuspense2 from './components/SubSuspense2.vue';

const asyncComponent = defineAsyncComponent(() => new Promise((resolve) => {
  setTimeout(() => resolve((SubSuspense2 as any)), 2000);
}));
</script>

<template>
  <Suspense>
    <asyncComponent />
    <template #fallback>
      loading~
    </template>
  </Suspense>
</template>

<style lang='scss' scoped>

</style>
