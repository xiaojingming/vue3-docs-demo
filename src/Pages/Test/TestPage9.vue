<script setup lang='ts'>
import SubTestPage6 from './components/SubTestPage6.vue';

</script>

<template>
  <SubTestPage6>
    <template #default="{x, y}">
      Mouse is at: {{ x }}, {{ y }}
    </template>
  </SubTestPage6>
</template>

<style lang='scss' scoped>

</style>
