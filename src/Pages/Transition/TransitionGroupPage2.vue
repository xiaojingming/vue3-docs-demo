<script setup lang='ts'>
/* eslint-disable no-param-reassign */
import { ref, computed } from 'vue';
import gsap from 'gsap';

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' },
];
const query = ref('');
const querylist = computed(() => list.filter((item) => item.msg
  .toLowerCase().includes(query.value)));

const onBeforeEnter = (el: Element) => {
  (el as HTMLLIElement).style.height = '0';
  (el as HTMLLIElement).style.opacity = '0';
};
const onEnter = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: Number(((el as HTMLLIElement).dataset.index)) * 0.15,
    onComplete: done,
  });
};
const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: Number(((el as HTMLLIElement).dataset.index)) * 0.15,
    onComplete: done,
  });
};
</script>

<template>
  <input v-model="query">
  <TransitionGroup
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li
      v-for="(item, index) in querylist"
      :key="item.msg"
      :data-index="index"
    >
      {{ item.msg }}
    </li>
  </TransitionGroup>
</template>

<style lang='scss' scoped>

</style>
