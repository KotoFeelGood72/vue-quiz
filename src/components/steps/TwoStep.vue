<template>
  <div class="quiz_steps__formsItem">
    <div class="quiz_steps__formsItem__cars__list">
      <div class="quiz_steps__formsItem__cars">
        <div class="cars__head">
          <h3>Mercedes E-Class</h3>
          <ul>
            <li v-for="(item, index) in features" :key="index">
              <div class="cars_list_item__icon">
                <img :src="item.icon" alt="" />
              </div>
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
        <div class="cars__row">
          <div class="cars_img">
            <!-- <img src="Mercedes-E-Class-cutout-2021-520x320.png" alt="Mercedes E-Class" /> -->
          </div>
          <div class="cars_info">
            <ul>
              <li v-for="(info, index) in infoList" :key="index">
                <!-- <img src="black-tick.svg" alt="tick" /> -->
                <p>{{ info }}</p>
              </li>
            </ul>
          </div>
          <div class="cars_price">
            <p>Your Journey Price</p>
            <span>£1,248.72</span>
            <button class="btn quiz_btn" @click="selectCar">
              <div class="square_btn"></div>
              <p>Select car</p>
              <!-- <img src="arrow-white-right.svg" alt="" /> -->
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="back_steps back_cars">
      <div class="back_quiz_btn" @click="emit('prev')">
        <div class="square_btn"></div>
        <!-- <img src="arrow-form-back.svg" alt="" /> -->
        <p>Back to locations</p>
      </div>
      <div class="back_help">
        Need more help? Call Us
        <!-- <img src="uk.webp" alt="UK flag" /> -->
        <a href="tel:+442084004829">+44 (0)20 8400 4829</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["next", "prev"]);

const features = [
  { icon: "icon-1-1.png", label: "4 adults" },
  { icon: "icon-2-1.png", label: "2 suitcases" },
  { icon: "icon-3-1.png", label: "2 carry bags" },
  { icon: "icon-4-1.png", label: "WiFi" },
];

const infoList = [
  "First class chauffeur",
  "Free 60 mins airport waiting",
  "Free 15 mins waiting for other journeys",
  "Includes meet & greet",
  "Free cancellation within 24 hours",
];

function selectCar() {
  emit("next");
}
</script>
