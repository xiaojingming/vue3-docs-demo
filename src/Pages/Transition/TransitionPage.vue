<script setup lang='ts'>
import { ref } from 'vue';

const docStatus = ref<'editing' | 'saved' | 'edited'>('edited');

</script>

<template>
  <div class="container">
    <Transition mode="out-in">
      <div
        v-if="docStatus === 'edited'"
        @click="docStatus = 'editing'"
      >
        Cancel
      </div>
      <div
        v-else-if="docStatus === 'editing'"
        @click="docStatus = 'saved'"
      >
        Save
      </div>
      <div
        v-else
        @click="docStatus = 'edited'"
      >
        Edit
      </div>
    </Transition>
  </div>
</template>

<style lang='scss' scoped>
.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active,
.v-leave-active {
  transition: all .5s;
}
.container {
  div {
    width: 50px;
    height: 30px;
    background-color: slateblue;
    color:aqua;
    border-radius: 10px;
    line-height: 30px;
    text-align: center;
    margin: 20px
  }
}

</style>
