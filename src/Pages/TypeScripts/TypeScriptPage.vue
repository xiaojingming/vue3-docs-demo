<script setup lang='ts'>
import { ref } from 'vue';
import SubTypeScript from './components/SubTypeScript.vue';

const name = ref('xiao');
const age = ref(24);
const sub = ref<InstanceType<typeof SubTypeScript> | null>(null);
const handleAdd = (num: number) => {
  console.log(sub.value?.a, sub.value?.b);
  age.value = num;
};
</script>

<template>
  <SubTypeScript
    ref="sub"
    :name="name"
    :age="age"
    @add="handleAdd"
  />
</template>

<style lang='scss' scoped>

</style>
