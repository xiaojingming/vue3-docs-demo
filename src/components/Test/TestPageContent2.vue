<script setup lang="ts">
import { ref } from 'vue';

const classObj = ref({
  'bg-skyblue': true,
  'bg-lightpink': false,
  transition: true,
});

const handlerClickChange = () => {
  classObj.value['bg-lightpink'] = !classObj.value['bg-lightpink'];
  classObj.value['bg-skyblue'] = !classObj.value['bg-skyblue'];
};

</script>

<template>
  <div
    :class="classObj"
  >
    hello xiao
  </div>
  <button @click="handlerClickChange">
    change
  </button>
</template>

<style scoped>
.bg-skyblue {
  background-color: skyblue;
}
.bg-lightpink {
  background-color: lightpink;
}
.transition {
  transition: background-color 1s;
}
</style>
