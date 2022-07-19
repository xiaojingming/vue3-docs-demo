<!-- eslint-disable func-call-spacing -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-spaced-func -->
<script setup lang='ts'>
import { computed, ref } from 'vue';

const emit = defineEmits<{
  (event: 'someEvent', flag: boolean): void;
  (event: 'submit', params: { username: string, password: number }): boolean;
  (event: 'update:content', val: string): void; // v-model:content绑定内容
}>();
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  contentModifiers: {
    type: Object,
    default: () => {},
  },
});
console.log(props.contentModifiers.capitalize);

const flag = ref(false);
const val = computed({
  get() {
    return props.contentModifiers.capitalize
      ? props.content.slice(0, 1).toUpperCase() + props.content.slice(1)
      : props.content;
  },
  set(v) {
    emit('update:content', v);
  },
});
const handleClick = () => {
  const tag = flag.value;
  flag.value = !flag.value;
  emit('someEvent', tag);
};
const handleSubmit = () => {
  emit('submit', { username: 'xiao', password: 13 });
};
</script>

<template>
  <button
    @click="handleClick"
  >
    click me
  </button>
  <button @click="handleSubmit">
    submit
  </button>
  <input
    v-model="val"
    type="text"
  >
</template>

<style lang='scss' scoped>

</style>
