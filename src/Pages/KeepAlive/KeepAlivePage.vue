<script setup lang='ts'>
import { shallowRef } from 'vue';
import SubComponentA from './components/SubComponentA.vue';
import SubComponentB from './components/SubComponentB.vue';

const curComponent = shallowRef(SubComponentA);
const toggleToA = () => {
  curComponent.value = SubComponentA;
};
const toggleToB = () => {
  curComponent.value = SubComponentB;
};

</script>

<template>
  <div class="btn_group">
    <span @click="toggleToA">A</span>
    <span @click="toggleToB">B</span>
  </div>
  <keep-alive
    :include="/Sub(A|B)/"
  >
    <component :is="curComponent" />
  </keep-alive>
</template>

<style lang='scss' scoped>
.btn_group {
  span {
    display: inline-block;
    width: 30px;
    height: 15px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    line-height: 15px;
    margin-right: 20px;
  }
}
</style>
