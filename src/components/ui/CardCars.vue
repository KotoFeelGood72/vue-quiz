<template>
  <article
    class="flex flex-col gap-8 py-6 md:flex-row md:items-start border-b border-b-gray-300 last:border-0"
  >
    <div class="w-1/6 flex justify-center items-center relative">
      <p
        class="font-medium text-xs bg-black rounded-md text-white px-4 py-1 absolute top-4 left-4"
      >
        {{ car.category }}
      </p>
      <img :src="car.image" :alt="car.name" class="max-h-56 w-auto object-contain" />
    </div>
    <div class="md:flex-1 flex flex-col gap-2">
      <div class="flex items-center gap-4">
        <h2 class="text-2xl">
          {{ car.name }}
        </h2>
        <div class="flex items-center gap-2">
          <img src="@/assets/img/people.png" class="max-w-4" />
          <span>{{ car.capacity.passengers }} Passengers</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <FeatureGroup
          title="MULTIMEDIA"
          :items="car.features.multimedia"
          classList=" flex item-center gap-4"
        />
        <FeatureGroup
          title="GENERAL"
          :items="car.features.general"
          classList=" flex item-center gap-4"
        />
        <FeatureGroup
          title="POLICY"
          :items="[car.features.policy]"
          classList=" flex item-center gap-4"
        />
        <FeatureGroup
          title="CHILD SEATS"
          :items="childSeatsList"
          classList=" flex item-center gap-4"
        />
      </div>
      <p class="leading-relaxed">{{ car.description }}</p>
    </div>

    <div
      class="mt-6 md:mt-0 md:w-64 shrink-0 bg-gray-100 rounded-lg p-6 flex flex-col gap-4 text-center"
    >
      <h4 class="font-medium">Request for Pricing</h4>
      <Btn name="Choose Vehicle" @click="selectCar(car)" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Btn from "./Btn.vue";
import FeatureGroup from "./FeatureGroup.vue";
import { useQuizStore } from "@/stores/useQuizStore";
const props = defineProps<{ car: any }>();

const childSeatsList = computed(() => {
  const list: string[] = [];
  const cs = props.car.features.childSeats;
  if (cs.rearFacing) list.push(`Rear-Facing  ${cs.rearFacing}`);
  if (cs.forwardFacing) list.push(`Forward-Facing  ${cs.forwardFacing}`);
  if (cs.booster) list.push(`Booster  ${cs.booster}`);
  return list;
});

const { selectCar } = useQuizStore();
</script>

<style scoped></style>
