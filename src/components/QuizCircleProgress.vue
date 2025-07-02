<template>
  <div class="quiz_progress">
    <div class="progress-circle">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle class="circle-bg" cx="50" cy="50" r="46"></circle>
        <circle
          class="circle"
          cx="50"
          cy="50"
          r="46"
          stroke-dasharray="84.82300164692441 254.46900494077323"
        ></circle>
        <text x="50%" y="50%" text-anchor="middle" dy=".35em" class="circle-text">
          1 of 4
        </text>
      </svg>
    </div>

    <div class="progress-labels">
      <p class="progress-title">SELECT LOCATIONS</p>
      <p class="progress-sub">NEXT: SELECT A CAR</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuizStoreRefs } from "@/stores/useQuizStore";

const { steps } = useQuizStoreRefs();
</script>
