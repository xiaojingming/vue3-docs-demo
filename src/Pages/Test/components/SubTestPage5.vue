<script setup lang='ts'>
import { ref } from 'vue';

interface ListItem {
  id: number;
  body: string;
  username: string;
  likes: number;
}

const list = ref<ListItem[]>([]);
list.value = await new Promise<ListItem[]>((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 0,
        body: 'Scoped Slots Guide',
        username: 'Evan You',
        likes: 20,
      },
      {
        id: 1,
        body: 'Vue Tutorial',
        username: 'Natalia Tepluhina',
        likes: 10,
      },
    ]);
  }, 1000);
});
</script>

<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
    >
      <slot
        v-bind="item"
        name="item"
      />
    </li>
  </ul>
</template>

<style lang='scss' scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
