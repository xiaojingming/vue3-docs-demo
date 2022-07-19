<script setup lang='ts'>
import { ref } from 'vue';

const classObj = ref({
  shakes: true,
});

const handleClickChange = () => {
  classObj.value.shakes = !classObj.value.shakes;
};
</script>

<template>
  <div :class="classObj">
    hello xiao
  </div>
  <button @click="handleClickChange">
    change
  </button>
</template>

<style scoped lang='scss'>
.shakes {
  animation: shakes 2s ease-in;
}

@keyframes shakes {
  0% {
    transform: translateX(-100px);
  }
  50% {
    transform: translate(100px);
  }
  100% {
    transform: translate(0px);
  }
}

</style>
