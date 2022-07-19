<script setup lang='ts'>
import { ref } from 'vue';

const show = ref(true);

const handleClickChange = () => {
  show.value = !show.value;
};
</script>

<template>
  <Transition>
    <div v-show="show">
      hello xiaojingming
    </div>
  </Transition>
  <button @click="handleClickChange">
    change
  </button>
</template>

<style lang='scss' scoped>
.v-leave-from,
.v-enter-to {
  opacity: 1;
}
.v-leave-active,
.v-enter-active {
  transition: opacity 0.5s ease-in;
}
.v-leave-to,
.v-enter-from {
  opacity: 0;
}

</style>
