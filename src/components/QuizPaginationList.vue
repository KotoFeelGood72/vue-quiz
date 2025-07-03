<template>
  <div class="grid lg:grid-cols-4 gap-3 mb-6">
    <div
      class="flex items-center justify-center gap-3 px-4 py-2 rounded-[4px]"
      v-for="(item, i) in steps"
      :key="'steps-item-list-' + i"
      :class="{
        'bg-black text-white': currentStep === item.num,
        'bg-gray-200': currentStep !== item.num,
      }"
    >
      <div class="text-xl">
        {{ item.num }}
      </div>
      <p class="font-medium text-xl">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuizStoreRefs } from "@/stores/useQuizStore";

const { steps, currentStep } = useQuizStoreRefs();
</script>
