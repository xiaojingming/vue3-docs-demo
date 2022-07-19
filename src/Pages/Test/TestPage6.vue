<script setup lang='ts'>
import { ref } from 'vue';
import SubTestPage3 from './components/SubTestPage3.vue';

const val = ref('xiao');
const handleSomeEvent = (flag: boolean) => {
  console.log('event emit', flag);
};
</script>

<template>
  <SubTestPage3
    v-model:content.capitalize="val"
    @some-event="handleSomeEvent"
  />
  <p>{{ val }}</p>
</template>

<style lang='scss' scoped>

</style>
