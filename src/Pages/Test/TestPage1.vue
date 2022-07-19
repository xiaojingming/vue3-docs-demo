<script setup lang='ts'>
import { reactive, ref } from 'vue';

const value = ref('00');
const showSelection = ref(false);
const options = reactive(new Array(60).fill('').map((item, index) => String(index).padStart(2, '0')));
const clickEvent = (e: Event) => {
  console.log(e.target);
};
const handleChoose = () => {
  showSelection.value = true;
  document.addEventListener('click', clickEvent);
};
const handleClickItem = (item: string) => {
  value.value = item;
  showSelection.value = false;
};
</script>

<template>
  <div class="scroll-picker">
    <div class="scroll-picker-layer">
      <span
        class="scroll-picker-layer-choose"
        @click="handleChoose"
      >{{ value }}</span>
      <template v-if="showSelection">
        <div class="scroll-picker-layer-selection">
          <div
            v-for="item in options"
            :key="item"
            class="scroll-picker-layer-selection-item"
            @click="handleClickItem(item)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.scroll-picker {
  display: inline-block;
  margin: 30px;
  &-layer {
    &-choose {
      display: inline-block;
      font-size: 12px;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    &-selection {
      height: 150px;
      overflow-y: scroll;
      &-item {
        width: 30px;
        height: 30px;
        background-color: #f0f0f0;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
