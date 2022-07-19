<script setup lang='ts'>
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <button @click="open = !open">
    Open Modal
  </button>
  <Teleport to="body">
    <Transition>
      <div
        v-if="open"
        class="modal"
      >
        <p>Hello from the modal!</p>
        <button @click="open = false">
          Close
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang='scss' scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: #ccc;
  opacity: 0.4;
}
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 2s ease;
}
.v-enter-to {
  opacity: 1;
  transform: scale(1.2);
}
</style>
