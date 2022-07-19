<script setup lang='ts'>
import { ref, watch } from 'vue';

const val = ref('');
const vals = ref('');
const checked = ref(false);
const checklist = ref<string[]>([]);
const picked = ref('');
const seleted = ref<string[]>([]);
const handleChnage = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
};
watch(checklist, () => {
  console.log('xxx');
});
</script>

<template>
  <input
    v-model="val"
    type="text"
  >
  <p>{{ val }}</p>
  <textarea
    id=""
    v-model="vals"
    name=""
    cols="30"
    rows="10"
  />
  <p>{{ vals }}</p>
  <input
    id="check"
    v-model="checked"
    type="checkbox"
    name=""
  >
  <label for="check">{{ checked }}</label>
  <div>checklist: {{ checklist }}</div>
  <input
    id="mike"
    v-model="checklist"
    type="checkbox"
    value="mike"
    @change="handleChnage"
  >
  <label for="mike">mike</label>
  <input
    id="tom"
    v-model="checklist"
    type="checkbox"
    value="tom"
  >
  <label for="tom">tom</label>
  <input
    id="link"
    v-model="checklist"
    type="checkbox"
    value="link"
  >
  <label for="link">link</label>
  <div>picked:{{ picked }}</div>
  <input
    id="one"
    v-model="picked"
    type="radio"
    name=""
    value="one"
  >
  <label for="one">one</label>
  <input
    id="two"
    v-model="picked"
    type="radio"
    name=""
    value="two"
  >
  <label for="two">two</label>
  <div>seleted: {{ seleted }}</div>
  <select
    v-model="seleted"
    multiple
  >
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<style lang='scss' scoped>

</style>
