<script setup lang='ts'>
import { ref } from 'vue';

const showTitle = ref(true);
const handlerClickChange = () => {
  showTitle.value = !showTitle.value;
};
</script>

<template>
  <Transition type="transition">
    <div
      v-show="showTitle"
      style="text-align: center;"
    >
      hello xiao
    </div>
  </Transition>
  <button @click="handlerClickChange">
    change
  </button>
</template>

<style lang='scss' scoped>
@keyframes shake {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.v-enter-from {
  color: skyblue;
}
.v-enter-active {
  animation: shake 5s ease;
  transition: all 2s ease;
}
.v-enter-to,
.v-leave-from {
  color: red;
}
.v-leave-to {
  color: skyblue;
}
.v-leave-active {
  animation: shake 5s reverse;
  transition: all 2s ease;
}
</style>
