<template>
  <div class="relative cursor-pointer" ref="root">
    <!-- Trigger -->
    <span v-if="label" class="mb-2 block">{{ label }}</span>
    <button
      type="button"
      class="w-full border border-black py-2 px-3 text-left flex justify-between items-center rounded h-[42px] cursor-pointer"
      @click="toggle"
    >
      <span v-if="selectedLabel">{{ selectedLabel }}</span>
      <span v-else class="text-gray-400">{{ placeholder }}</span>

      <!-- simple chevron -->
      <svg
        class="w-4 h-4 shrink-0 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <transition name="fade">
      <ul
        v-if="open"
        class="absolute z-20 mt-1 w-full bg-white border border-gray-300 max-h-60 overflow-auto shadow-lg rounded"
      >
        <li
          v-for="option in normalizedOptions"
          :key="option.value"
          @click="select(option.value)"
          class="px-3 py-2 cursor-pointer"
          :class="[
            option.value === modelValue ? 'bg-gray-950 text-white' : 'hover:bg-gray-100',
          ]"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted, onBeforeUnmount } from "vue";

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  modelValue: string | number | null;
  options: Array<Option | string | number>;
  placeholder?: string;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | null): void;
}>();

const open = ref(false);

function toggle() {
  open.value = !open.value;
}

function select(value: string | number) {
  emit("update:modelValue", value);
  open.value = false;
}

const normalizedOptions = computed<Option[]>(() =>
  props.options.map((o) =>
    typeof o === "object" ? (o as Option) : { label: String(o), value: o }
  )
);

const selectedLabel = computed(() => {
  const found = normalizedOptions.value.find((o) => o.value === props.modelValue);
  return found?.label;
});

// Close on outside click
const root = ref<HTMLElement | null>(null);

function onClickOutside(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
