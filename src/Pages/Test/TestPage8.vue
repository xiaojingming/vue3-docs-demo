<script setup lang='ts'>
import SubTestPage5 from './components/SubTestPage5.vue';

</script>

<template>
  <Suspense>
    <SubTestPage5>
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </SubTestPage5>
    <template #fallback>
      loading~~
    </template>
  </Suspense>
</template>

<style lang='scss' scoped>

</style>
