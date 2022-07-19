<script setup lang='ts'>
import { computed, ref } from 'vue';

const p = ref<HTMLPreElement | null>(null);
const className = computed(() => p.value?.className);
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <p
      ref="p"
      v-bind="$attrs"
    >
      sub-test-page
      <span>{{ className }}</span>
      <span>{{ $attrs }}</span>
    </p>
  </div>
</template>

<style lang='scss' scoped>

</style>
