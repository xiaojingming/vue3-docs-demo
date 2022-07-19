<script setup lang='ts'>
import { ref, computed } from 'vue';
import { shuffle } from 'lodash';

const list = ref([1, 2, 3, 4, 5]);
const position = computed(() => Math.floor(Math.random() * list.value.length));
let target = 5;
const handleAdd = () => {
  target += 1;
  list.value.splice(position.value, 0, target);
};
const handleDel = () => {
  list.value.splice(position.value, 1);
};
const handleReset = () => {
  list.value = shuffle(list.value);
};
</script>

<template>
  <TransitionGroup tag="ul">
    <li
      v-for="item in list"
      :key="item"
    >
      {{ item }}
    </li>
  </TransitionGroup>
  <button @click="handleAdd">
    add
  </button>
  <button @click="handleDel">
    del
  </button>
  <button @click="handleReset">
    reset
  </button>
</template>

<style lang='scss' scoped>
li {
  list-style: none;
  padding: 5px;
}
button {
  width: 40px;
  height: 20px;
  margin-right: 10px;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.v-move,
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
</style>
