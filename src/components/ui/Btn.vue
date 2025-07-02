<template>
  <div class="btn">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
