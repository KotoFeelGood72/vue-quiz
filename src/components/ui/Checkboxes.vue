<template>
  <div class="flex items-center space-x-3 mb-3">
    <input
      type="checkbox"
      :id="label"
      :checked="modelValue"
      @input="updateValue($event)"
      class="checkbox-input hidden"
    />
    <label :for="label" class="flex items-center cursor-pointer text-gray-700">
      <div
        class="checkbox-container w-6 h-6 border-1 border-gray-300 rounded-md flex items-center justify-center mr-2 relative"
      >
        <div v-if="modelValue" class="w-4 h-4 bg-black rounded-[4px] absolute"></div>
      </div>
      <span class="text-sm">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  label: any;
  modelValue: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).checked);
};
</script>
