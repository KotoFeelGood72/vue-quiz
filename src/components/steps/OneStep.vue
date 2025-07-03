<template>
  <div class="max-w-[600px] bg-white border border-gray-100 px-6 py-10 mx-auto">
    <div class="flex items-center gap-4 mb-4">
      <img
        src="@/assets/img/crest.webp"
        class="w-10 h-10 flex items-center justify-center"
      />
      <p class="text-xl">GET A PRICE &amp; BOOK</p>
    </div>
    <div class="quiz_tabs grid grid-cols-2 gap-4 mb-4">
      <div
        class="border border-gray-400 py-2 px-4 lg:text-[18px] flex items-center justify-center cursor-pointer transition-all"
        :class="[
          tripType === 'oneWay' && 'border-gray-950 bg-gray-950 text-white',
          tripType !== 'oneWay' && 'hover:bg-gray-50',
        ]"
        @click="tripType = 'oneWay'"
      >
        One way
      </div>

      <div
        class="border border-gray-400 py-2 px-4 lg:text-[18px] flex items-center justify-center cursor-pointer transition-all"
        :class="[
          tripType === 'byHour' && 'border-gray-950 bg-gray-950 text-white',
          tripType !== 'byHour' && 'hover:bg-gray-50',
        ]"
        @click="tripType = 'byHour'"
      >
        By the hour
      </div>
    </div>
    <div class="quiz_item__content">
      <div class="flex flex-col gap-4">
        <Input v-model="payments.where_from" placeholder="" label="Where from?" />
        <Input
          v-model="payments.where_to"
          placeholder=""
          label="Where to"
          v-show="tripType != 'byHour'"
        />
        <Selects
          v-show="tripType === 'byHour'"
          v-model="payments.hours"
          label="Hire duration?"
          :options="
            Array.from({ length: 21 }, (_, i) => ({
              label: `${i + 2} hours`,
              value: i + 2,
            }))
          "
          placeholder="Hours required"
        >
        </Selects>
        <p class="" v-show="tripType === 'byHour'">
          Please note: Prices are valid for Central London only. Journeys outside of
          Central London will be charged extra.
        </p>
        <Btn name="Get My Prices" @click="submitLocations" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuizStore, useQuizStoreRefs } from "@/stores/useQuizStore";
import Selects from "../ui/Selects.vue";
import Input from "../ui/Input.vue";
import Btn from "../ui/Btn.vue";

const { payments } = useQuizStoreRefs();

const tripType = ref<"oneWay" | "byHour">("oneWay");

const { nextStep } = useQuizStore();

function submitLocations() {
  nextStep();
}
</script>
