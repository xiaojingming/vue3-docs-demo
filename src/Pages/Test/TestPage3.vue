<script setup lang='ts'>
import { ref, watch, reactive } from 'vue';

const value = ref('');
const x = ref(0);
const y = ref(0);
const answer = ref('Questions usually contain a question mark. ;-');
const info = reactive({
  name: 'xiao',
  age: 24,
});

const handleAdd = (type: 'x' | 'y') => {
  if (type === 'x') {
    x.value += 1;
  } else {
    y.value += 1;
  }
};

const handleChangeName = () => {
  info.name = 'xjm';
};

watch(value, async (val) => {
  if (val.indexOf('?') !== -1) {
    answer.value = 'Thinking...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = `Error! Could not reach the API. ${error}`;
    }
  }
});
watch([x, () => x.value + y.value], ([newX, newXAddY]) => {
  console.log('val', newX, newXAddY);
});
watch(info, (val) => {
  console.log(val);
});

</script>

<template>
  <p>Ask a yes/no question:</p>
  <input
    v-model="value"
    type="text"
  >
  <p>{{ answer }}</p>
  <p>x + y: {{ x }} + {{ y }} = {{ x + y }}</p>
  <button @click="handleAdd('x')">
    add x
  </button>
  <button @click="handleAdd('y')">
    add y
  </button>
  <button @click="handleChangeName">
    change name
  </button>
</template>

<style lang='scss' scoped>

</style>
