<template>
  <div class="quiz_steps__formsItem">
    <h3>Your Journey summary</h3>
    <div class="quiz_steps__formsItem__preview">
      <div class="quiz_steps__formsItem__preview__img">
        <img :src="previewImage" alt="Selected Car" />
      </div>
      <div class="quiz_steps__formsItem__preview__content">
        <p>{{ summaryText }}</p>
        <span>{{ userName }}, {{ userPhone }}</span>
        <div class="quiz_steps__formsItem__preview__pickup">
          {{ pickupLocation }}
        </div>
      </div>
    </div>
    <div class="quiz_steps__formsItem__billing">
      <div class="quiz_inputs" v-for="field in billingFields" :key="field.key">
        <p>{{ field.label }}</p>
        <div class="quiz_input">
          <input type="text" v-model="billing[field.model]" />
        </div>
      </div>
      <div class="quiz_inputs">
        <p>Country</p>
        <div class="quiz_input select_input">
          <select v-model="billing.country">
            <option value="">Select your country</option>
            <option v-for="country in countries" :key="country" :value="country">
              {{ country }}
            </option>
          </select>
        </div>
      </div>
      <div class="billing_total">
        <p>Total</p>
        <div class="price price_ex">£{{ price.ex }}</div>
        <div class="price price_vat">£{{ price.vat }}</div>
        <div class="big-price">£{{ price.total }}</div>
      </div>
      <div class="payment_method">
        <img src="secured-by-stripe.jpg" alt="Stripe Secure" />
      </div>
      <div class="payment_action">
        <div class="quiz_inputs">
          <p>Card Details</p>
          <div class="quiz_input">
            <input type="text" v-model="payment.cardNumber" />
          </div>
        </div>
        <div class="quiz_inputs">
          <p>Cardholder Name</p>
          <div class="quiz_input">
            <input type="text" v-model="payment.cardName" />
          </div>
        </div>
        <div class="payment_notice">
          Please note after you have confirmed your reservation you will be sent a full
          booking confirmation. You can amend your journey at any time. Free cancellation
          within 12 hours. All bookings are subject to our Terms and Conditions. Not
          Available For Wedding Bookings.
        </div>
      </div>
      <div id="card-container"></div>
      <div class="quiz_btn" id="pay-button" @click="submitPayment">
        <div class="square_btn"></div>
        <p>Confirm Your Booking</p>
        <img src="arrow-white-right.svg" alt="" />
      </div>
      <div class="back_steps back_steps_small">
        <div class="back_quiz_btn" @click="emit('prev')">
          <div class="square_btn"></div>
          <img src="arrow-form-back.svg" alt="" />
          <p>Back to cars</p>
        </div>
        <div class="back_help">
          Need more help? Call Us
          <img src="uk.webp" alt="UK" />
          <a href="tel:+442084004829">+44 (0)20 8400 4829</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["prev"]);

const previewImage = "choose-mercedes-benz-e-class.webp";
const summaryText = "Mercedes E-Class, Saturday, 28 June 2025, 12:00";
const userName = "Георгий 111";
const userPhone = "+79615311386";
const pickupLocation = "SSE Arena, Queens Quay, Belfast Stanford-le-Hope SS17";

const billing = ref({
  company: "",
  address: "",
  city: "",
  zip: "",
  country: "United Kingdom",
});

const billingFields = [
  { key: "company", label: "Company Name", model: "company" },
  { key: "address", label: "Billing Address", model: "address" },
  { key: "city", label: "City", model: "city" },
  { key: "zip", label: "Post/Zip Code", model: "zip" },
];

const countries = [
  "United Kingdom",
  "United States",
  "France",
  "Germany",
  "Canada",
  "Netherlands",
  "India",
  "Australia",
  "Italy",
  "Spain",
  "Brazil",
  "Russia",
  "Japan",
  "China",
  "South Africa",
  // можно загрузить полный список стран при необходимости
];

const price = ref({
  ex: "1,248.72",
  vat: "249.74",
  total: "1,498.46",
});

const payment = ref({
  cardNumber: "",
  cardName: "",
});

function submitPayment() {
  console.log({
    billing: billing.value,
    payment: payment.value,
  });
  // здесь может быть emit или вызов API
}
</script>

<style scoped lang="scss">
.big-price {
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
