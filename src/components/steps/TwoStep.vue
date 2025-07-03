<template>
  <div>
    <CardCars v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardCars from "../ui/CardCars.vue";

const cars = ref<any[]>([]);

onMounted(async () => {
  try {
    const res = await fetch("/cars.json");
    if (!res.ok) throw new Error(res.statusText);
    cars.value = await res.json();
  } catch (err) {
    console.error("Ошибка загрузки cars.json:", err);
  }
});
</script>
