<template>
  <div class="quiz_step__list">
    <div class="quiz_step__item" v-for="(item, i) in steps" :key="'steps-item-list-' + i">
      <div class="quiz_stepItem__circle">{{ item.num }}</div>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuizStoreRefs } from "@/stores/useQuizStore";

const { steps } = useQuizStoreRefs();
</script>

<style scoped lang="scss"></style>
