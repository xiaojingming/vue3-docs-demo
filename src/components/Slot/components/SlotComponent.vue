<script setup lang='ts'>
import { reactive, ref } from 'vue';

const info = reactive({
  name: 'xjm',
  age: 24,
});
const msg = ref('hello');

</script>

<template>
  <div>
    <slot
      name="msg"
      :msg="msg"
    />
    <slot :info="info" />
  </div>
</template>

<style lang='scss' scoped>

</style>
