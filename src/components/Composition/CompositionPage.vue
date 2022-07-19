<script setup lang='ts'>
import useMouseMove from './mouseMove';

const { x, y } = useMouseMove();
</script>

<template>
  <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
</template>

<style lang='scss' scoped>

</style>
