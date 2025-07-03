<template>
  <div class="flex flex-col gap-2">
    <span class="block" v-if="label">{{ label }}</span>
    <input
      type="text"
      v-model="localValue"
      :placeholder="placeholder"
      class="border border-gray w-full rounded py-2 px-4"
    />
    <span v-if="notice">{{ notice }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  modelValue: any;
  placeholder: any;
  label: any;
  notice?: any;
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>
