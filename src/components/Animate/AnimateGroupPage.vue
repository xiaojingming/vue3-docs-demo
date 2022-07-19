<script setup lang='ts'>
import { ref } from 'vue';
import AnimateG1 from './components/AnimateG1.vue';
import AnimateG2 from './components/AnimateG2.vue';

const currentComp = ref('g1');
const handlerClickChange = () => {
  currentComp.value = currentComp.value === 'g1' ? 'g2' : 'g1';
};

</script>

<template>
  <Transition
    mode="out-in"
    appear
  >
    <animate-g1 v-if="currentComp === 'g1'" />
    <animate-g2 v-else />
  </Transition>
  <button @click="handlerClickChange">
    change
  </button>
</template>

<style lang='scss' scoped>
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
