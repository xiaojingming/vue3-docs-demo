<script setup lang='ts'>
import { ref } from 'vue';

const data = ref([1, 2, 3, 4, 5]);
const handleClickAdd = () => {
  const val = Math.max.apply(null, data.value) + 1;
  const position = Math.floor(Math.random() * val);
  data.value.splice(position, 0, val);
};
</script>

<template>
  <transition-group tag="ul">
    <li
      v-for="(item) in data"
      :key="item"
    >
      {{ item }}
    </li>
  </transition-group>
  <button @click="handleClickAdd">
    add
  </button>
</template>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style: none;
}
ul {
  li {
    padding: 5px;
  }
}
.v-enter-to {
  opacity: 1;
}
.v-enter-from {
  opacity: 0;
}
.v-move,
.v-enter-active {
  transition: all 1s ease;
}
</style>
