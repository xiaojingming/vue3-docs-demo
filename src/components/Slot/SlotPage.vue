<script setup lang='ts'>
import SlotComponent from './components/SlotComponent.vue';

</script>

<template>
  <slot-component>
    <template #default="{ info }">
      <span>{{ info.name }} - {{ info.age }}</span>
    </template>
    <template #msg="{ msg }">
      {{ msg }} -
    </template>
  </slot-component>
</template>

<style lang='scss' scoped>

</style>
