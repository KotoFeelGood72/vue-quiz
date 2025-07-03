<template>
  <div class="flex items-center justify-start gap-2 bg-gray-100 rounded-md px-4 py-1">
    <span
      class="text-xs font-semibold text-white uppercase bg-black px-4 py-1 rounded-sm"
      >{{ title }}</span
    >
    <ul class="mt-1 space-y-1" :class="classList">
      <li v-for="item in items" :key="item" class="flex items-center gap-2">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: any;
  items: any;
  classList?: any;
}>();
</script>

<style scoped lang="scss"></style>
