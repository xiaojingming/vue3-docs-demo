<script setup lang='ts'>
import { ref } from 'vue';
import TestPageModel3 from './components/TestPageModel3.vue';

const val = ref(123);
const val2 = ref(456);
const parentEmitHandler = () => {
  console.log('parent-handler');
};
</script>

<template>
  <div>
    test-page-5
    <test-page-model3
      v-model:val="val"
      v-model:val2="val2"
      @parent-emit-handler="parentEmitHandler"
    />
    <p>{{ val }}</p>
    <p>{{ val2 }}</p>
  </div>
</template>

<style lang='scss' scoped>

</style>
