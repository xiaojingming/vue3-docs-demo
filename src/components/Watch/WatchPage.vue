<script setup lang='ts'>
import {
  reactive, ref, watch, watchEffect,
} from 'vue';

const x = ref(0);
const y = ref(0);
const obj = reactive<{
  count: number,
  a: number | string
}>({
  count: 1,
  a: 2,
});

// watch(x, (v) => {
//   console.log(v);
// });

watch(() => x.value + y.value, (sum) => {
  console.log(sum);
});

watchEffect(() => {
  obj.a = 'xiaojingming';
  const content = document.querySelector('div')?.innerHTML;
  console.log(content);
}, {
  flush: 'post',
});

const handleClickChange = () => {
  obj.a = 111111;
};
</script>

<template>
  <div @click="handleClickChange">
    {{ obj.a }}
  </div>
</template>

<style lang='scss' scoped>

</style>
