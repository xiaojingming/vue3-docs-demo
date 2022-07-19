<script lang="ts">
export default {
  name: 'SubA',
};

</script>
<script setup lang='ts'>
// eslint-disable-next-line import/first
import { ref } from 'vue';

const count = ref(0);

</script>

<template>
  <div>
    <h5>sub-component-a</h5>
    <div
      class="btn"
      @click="count++"
    >
      add
    </div>
    <span>{{ count }}</span>
  </div>
</template>

<style lang='scss' scoped>
.btn {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #585858;
  cursor: pointer;
  border-radius: 10px;
  user-select: none;
}
</style>
