<script setup lang='ts'>
const msg = await new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello xiao');
  }, 2000);
});
</script>

<template>
  <h3>{{ msg }}</h3>
</template>

<style lang='scss' scoped>

</style>
