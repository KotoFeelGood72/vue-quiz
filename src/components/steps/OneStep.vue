<template>
  <div class="quiz_steps__formsItem" style="display: block">
    <div class="quiz_steps__formsItem__head">
      <!-- <img src="crest-icon.webp" alt="" /> -->
      <p>GET A PRICE &amp; BOOK</p>
    </div>
    <div class="quiz_tabs">
      <div
        class="quiz_tabs__btn"
        :class="{ active: tripType === 'oneWay' }"
        @click="tripType = 'oneWay'"
      >
        One way
      </div>
      <div
        class="quiz_tabs__btn"
        :class="{ active: tripType === 'byHour' }"
        @click="tripType = 'byHour'"
      >
        By the hour
      </div>
    </div>
    <div class="quiz_item__content">
      <div class="quiz_inputs__location">
        <div class="quiz_inputs">
          <p>Where from?</p>
          <Input v-model="pickup" placeholder="" />
        </div>
        <div class="quiz_inputs" style="display: block">
          <p>Where to</p>
          <Input v-model="dropoff" placeholder="" />
        </div>
        <div class="quiz_inputs" v-show="tripType === 'byHour'">
          <p>Hire duration?</p>
          <div class="quiz_input">
            <div class="select_input">
              <select v-model="hireDuration" name="hours">
                <option value="" disabled>Hours required</option>
                <option v-for="n in 21" :key="n" :value="n + 2">{{ n + 2 }} hours</option>
              </select>
            </div>
            <p class="form_notice">
              Please note: Prices are valid for Central London only. Journeys outside of
              Central London will be charged extra.
            </p>
          </div>
        </div>
        <Btn name="Get My Prices" @click="submitLocations" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuizStore } from "@/stores/useQuizStore";
import Input from "../ui/Input.vue";
import Btn from "../ui/Btn.vue";

const tripType = ref<"oneWay" | "byHour">("oneWay");
const pickup = ref("");
const dropoff = ref("");
const hireDuration = ref<number | null>(null);

const { nextStep } = useQuizStore();

function submitLocations() {
  if (!pickup.value || !dropoff.value) {
    alert("Please enter both pickup and dropoff locations.");
    return;
  }
  if (tripType.value === "byHour" && !hireDuration.value) {
    alert("Please select hire duration.");
    return;
  }

  console.log({
    tripType: tripType.value,
    pickup: pickup.value,
    dropoff: dropoff.value,
    hireDuration: hireDuration.value,
  });

  nextStep(); // Переключение на следующий шаг
}
</script>
