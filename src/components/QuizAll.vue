<template>
  <div class="quiz_wrapper container mx-auto">
    <QuizPaginationList />
    <QuizCircleProgress />
    <component :is="componentId" />
  </div>
</template>

<script setup lang="ts">
import OneStep from "./steps/OneStep.vue";
import TwoStep from "./steps/TwoStep.vue";
import FreeStep from "./steps/FreeStep.vue";
import FourStep from "./steps/FourStep.vue";
import QuizPaginationList from "./QuizPaginationList.vue";
import QuizCircleProgress from "./QuizCircleProgress.vue";

import { useQuizStoreRefs } from "@/stores/useQuizStore";
import { computed } from "vue";

const { currentStep } = useQuizStoreRefs();

const components: any = {
  1: OneStep,
  2: TwoStep,
  3: FreeStep,
  4: FourStep,
};

const componentId = computed(() => components[currentStep.value]);
</script>
