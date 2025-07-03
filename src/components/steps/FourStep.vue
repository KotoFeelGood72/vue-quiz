<template>
  <div class="max-w-[600px] mx-auto py-10">
    <h3 class="text-2xl font-semibold mb-4">Your Journey Summary</h3>
    <div class="flex items-center bg-gray-100 gap-4 mb-6">
      <div class="max-w-1/4 px-2 py-2 rounde-md overflow-hidden">
        <img
          :src="selectedCar.image"
          alt="Selected Car"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <div>
          <p>{{ selectedCar.name }}</p>
          <p>{{ payments.first_name }}, {{ payments.contact_number }}</p>
        </div>
        <div>{{ payments.where_from }}, {{ payments.where_to }}</div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <Input
        v-model="payments.billing.company_name"
        label="Company Name"
        placeholder=""
      />
      <Input
        v-model="payments.billing.billing_address"
        label="Billing Address"
        placeholder=""
      />
      <Input v-model="payments.billing.city" label="City" placeholder="" />
      <Input v-model="payments.billing.postcode" label="Post/Zip Code" placeholder="" />

      <Selects v-model="payments.billing.country" :options="countries" label="Country" />

      <div class="billing_total">
        <p>Total</p>
        <!-- <div class="price price_ex">£{{ price.ex }}</div>
        <div class="price price_vat">£{{ price.vat }}</div>
        <div class="big-price">£{{ price.total }}</div> -->
      </div>

      <Input
        v-model="payments.billing.card_details"
        label="Card Details"
        placeholder=""
      />
      <Input
        v-model="payments.billing.card_name"
        label="Cardholder Name"
        placeholder=""
      />
      <div class="payment_notice">
        Please note after you have confirmed your reservation you will be sent a full
        booking confirmation. You can amend your journey at any time. Free cancellation
        within 12 hours. All bookings are subject to our Terms and Conditions. Not
        Available For Wedding Bookings.
      </div>

      <div id="card-container"></div>
      <Btn name="Confirm Your Booking" @click="submitPayment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from "../ui/Btn.vue";
import { useQuizStoreRefs, useQuizStore } from "@/stores/useQuizStore";
import Input from "../ui/Input.vue";
import Selects from "../ui/Selects.vue";

const { selectedCar, payments } = useQuizStoreRefs();
const {} = useQuizStore();

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
];

function submitPayment() {
  // Здесь можно вызвать API или эмитировать событие
}
</script>
