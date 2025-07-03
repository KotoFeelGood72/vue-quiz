<template>
  <div
    class="btn py-3 px-6 rounded-md bg-black text-white text-center font-medium cursor-pointer hover:bg-white hover:text-black border border-black transition-all lg:text-[18px]"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
