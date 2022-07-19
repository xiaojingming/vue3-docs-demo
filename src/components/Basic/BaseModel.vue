<script setup lang='ts'>
/* eslint-disable func-call-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-spaced-func */

import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  show: boolean
}>();
const emits = defineEmits<{
  (event: 'update:show', val: boolean): void
}>();

const handleClose = () => {
  emits('update:show', !props.show);
};

</script>

<template>
  <Transition name="model">
    <div
      v-show="props.show"
      class="model"
    >
      <div class="model_wrap">
        <slot name="head">
          <div>this is model head</div>
        </slot>
        <slot name="content">
          <div>this is model content</div>
        </slot>
        <slot name="footer">
          <div class="model_wrap_footer">
            <span>this is model footer</span>
            <button @click="handleClose">
              ok
            </button>
          </div>
        </slot>
      </div>
    </div>
  </Transition>
</template>

<style lang='scss' scoped>
.model-enter-from,
.model-leave-to {
  opacity: 0;
}
.model-enter-to,
.model-leave-from {
  opacity: 1;
}
.model-enter-active,
.model-leave-active {
  transition: 0.5s all ease;
}
.model-enter-from .model_wrap{
  transform: scale(1.1);
}
.model-leave-to .model_wrap{
  transform: scale(1.1);
}
.model {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  &_wrap {
    width: 500px;
    background-color: #fff;
    padding: 20px;
    transition: all .5s ease;
    div {
      margin: 20px 0;
      font-size: 20px;
    }
    &_footer {
      display: flex;
      justify-content: space-between;
      button {
        padding: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
