<script setup lang='ts'>
/* eslint-disable no-unused-vars */
/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */

import { computed } from 'vue';

const props = defineProps<{
  val: number;
  val2: number;
}>();

const emit = defineEmits<{
  (event: 'parentEmitHandler'): void;
  (event: 'update:val', num: number): void;
  (event: 'update:val2', num: number): void;
}>();

const value = computed({
  get() {
    return props.val;
  },
  set(val: number) {
    emit('update:val', val);
  },
});

const handleClick = () => {
  let num = props.val2;
  emit('parentEmitHandler');
  emit('update:val2', num += 2);
  // eslint-disable-next-line no-plusplus
  value.value = ++value.value;
};
</script>

<template>
  <div>
    test-page-model3
  </div>
  <button @click.stop="handleClick">
    click
  </button>
</template>

<style lang='scss' scoped>

</style>
