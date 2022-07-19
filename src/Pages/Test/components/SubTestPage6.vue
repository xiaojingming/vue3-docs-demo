<script setup lang='ts'>
import useMouse from '../../../utils/useMouse';

const { x, y } = useMouse();
</script>

<template>
  <slot
    :x="x"
    :y="y"
  />
</template>

<style lang='scss' scoped>

</style>
