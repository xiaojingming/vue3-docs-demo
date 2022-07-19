<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import TreePageTitle from './components/TreePageTitle.vue';

interface Item {
  name: string;
  children?: Item[];
}

withDefaults(defineProps<{
  data?: Item[];
}>(), {
  type: Array,
  data: () => [
    {
      name: '1',
      children: [
        {
          name: '1-1',
        },
        {
          name: '1-2',
        },
      ],
    },
    {
      name: '2',
    },
    {
      name: '3',
      children: [
        {
          name: '3-1',
          children: [
            {
              name: '3-1-1',
            },
          ],
        },
        {
          name: '3-2',
          children: [
            {
              name: '3-2-1',
            },
            {
              name: '3-2-2',
            },
          ],
        },
      ],
    },
  ],
});

const title = ref(null);
const tree = ref(null);
const treeItem = ref([]);
const cTree = ref([]);
const handlerItemClick = (name: string) => {
  console.log(name);
};
onMounted(() => {
  console.log(title.value);
});
</script>

<template>
  <div
    ref="tree"
    class="tree"
  >
    <tree-page-title ref="title" />
    <div
      v-for="item in data"
      :key="item.name"
      ref="treeItem"
      class="tree-item"
      :style="{ marginLeft: '5px' }"
    >
      <p @click="handlerItemClick(item.name)">
        {{ item.name }}
      </p>
      <template v-if="item.children">
        <tree-page
          ref="cTree"
          :data="item.children"
        />
      </template>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
