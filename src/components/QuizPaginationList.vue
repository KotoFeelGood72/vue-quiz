<template>
  <div class="max-w-[600px] grid lg:grid-cols-4">
    <div
      class="flex items-center justify-center gap-3"
      v-for="(item, i) in steps"
      :key="'steps-item-list-' + i"
    >
      <div
        class="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full lg:text-md"
      >
        {{ item.num }}
      </div>
      <p class="text-base font-medium">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuizStoreRefs } from "@/stores/useQuizStore";

const { steps } = useQuizStoreRefs();
</script>
