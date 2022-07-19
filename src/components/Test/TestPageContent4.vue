<script setup lang='ts'>
import { ref } from 'vue';

const flag = ref(true);

const handleClickChange = () => {
  flag.value = !flag.value;
};
</script>

<template>
  <Transition>
    <div
      v-show="flag"
      style="text-align: center;"
    >
      hello xiaojingming
    </div>
  </Transition>
  <button @click="handleClickChange">
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
.v-enter-active {
  animation: shake 2s;
}
.v-leave-active {
  animation: shake 2s reverse;
}
</style>
