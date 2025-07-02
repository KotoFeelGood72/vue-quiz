<template>
  <div class="quiz_steps__formsItem" style="display: block">
    <div class="quiz_steps__formsItem__head">
      <img src="crest-icon.webp" alt="" />
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
          <div class="quiz_input">
            <input
              type="text"
              id="pickup-location"
              v-model="pickup"
              placeholder="Enter pick-up location"
              class="pac-target-input"
              autocomplete="off"
            />
            <img src="gis--location.png" alt="" class="location-img" />
          </div>
        </div>
        <div class="quiz_inputs" style="display: block">
          <p>Where to</p>
          <div class="quiz_input">
            <input
              type="text"
              id="dropoff-location"
              v-model="dropoff"
              placeholder="Enter destination"
              class="pac-target-input"
              autocomplete="off"
            />
            <img src="streamline--location-target-1.png" alt="" class="location-img" />
            <div class="location-img-line"></div>
          </div>
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
        <div class="quiz_btn" @click="submitLocations">
          <div class="square_btn"></div>
          <p>Get My Prices</p>
          <img src="arrow-white-right.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tripType = ref<"oneWay" | "byHour">("oneWay");
const pickup = ref("");
const dropoff = ref("");
const hireDuration = ref<number | null>(null);

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
  // emit or call parent step change logic here
}
</script>

<style scoped lang="scss">
.quiz_tabs__btn.active {
  background: #000;
  color: #fff;
}
</style>
