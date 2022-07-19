<script setup lang='ts'>
defineProps<{
  info: {
    name: string;
    age: number
  },
  list: string[];
}>();

</script>

<template>
  <h3>
    {{ info.name }} - {{ info.age }}
  </h3>
  <ul>
    <li
      v-for="item in list"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang='scss' scoped>

</style>
