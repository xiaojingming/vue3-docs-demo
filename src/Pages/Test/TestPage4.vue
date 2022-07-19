<script setup lang='ts'>
import { onMounted, ref, watchEffect } from 'vue';
import SubTestPage from './components/SubTestPage.vue';

const input = ref<HTMLInputElement | null>(null);
const itemsRef = ref<HTMLLIElement[] | null>(null);
const val = ref('');
const child = ref<InstanceType<typeof SubTestPage> | null>(null);
const inputRefChange = (e: any) => {
  console.log(e);
};
watchEffect(() => {
  if (input.value) {
    console.log('重拳出击，一个都莫跑');
  } else {
    console.log('检测到你的石油了');
  }
});
onMounted(() => {
  input.value?.focus();
  if (itemsRef.value) {
    itemsRef.value.forEach((item) => {
      console.log(item);
    });
  }
  if (child.value) {
    console.log(child.value.a); // a
    console.log(child.value.b); // b
  }
});
</script>

<template>
  <input
    :ref="(e) => inputRefChange(e)"
    v-model="val"
    type="text"
  >
  <ul>
    <li
      v-for="item in 5"
      :key="item"
      ref="itemsRef"
    >
      {{ item }}
    </li>
  </ul>
  <SubTestPage ref="child" />
</template>

<style lang='scss' scoped>

</style>
