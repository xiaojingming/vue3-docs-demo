<script setup lang='ts'>
import { ref } from 'vue';
import BaseModel from '../../components/Basic/BaseModel.vue';

const showModel = ref(false);
const handleShow = () => {
  showModel.value = !showModel.value;
};
</script>

<template>
  <button
    @click="handleShow"
  >
    show Model
  </button>
  <Teleport to="body">
    <BaseModel v-model:show="showModel" />
  </Teleport>
</template>

<style lang='scss' scoped>

</style>
