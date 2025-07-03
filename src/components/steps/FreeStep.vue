<template>
  <div class="max-w-[600px] mx-auto py-10">
    <div class="quiz_steps__formsItem__head mb-6">
      <h3 class="text-xl uppercase font-medium">BOOKING DETAILS</h3>
    </div>
    <div>
      <div class="flex flex-col gap-2 mb-4">
        <div class="flex flex-col gap-2">
          <span class="block">Date</span>
          <Datepicker
            v-model="payments.date"
            :format="'dd MMM HH:mm'"
            :clear-button="true"
            class="flatpickr-input"
          />
        </div>
        <Input label="First Name" v-model="payments.first_name" placeholder="" />
        <Input label="Last Name" v-model="payments.last_name" placeholder="" />
        <Input label="Contact Number*" v-model="payments.contact_number" placeholder="" />
        <Selects
          label="Number of Passengers*"
          :options="[1, 2, 3, 4, 5, 6, 7]"
          v-model="payments.number_passengers"
        />
        <Selects
          label="Number of Suitcases*"
          :options="[1, 2, 3, 4, 5, 6, 7, 8]"
          v-model="payments.number_of_suitcase"
        />
      </div>
      <div class="checkbox_group mb-6">
        <Checkboxes v-model="bookingForOther" label="Booking for someone else?" />
        <Checkboxes v-model="airportPickup" label="Airport Pickup?" />
      </div>
      <transition>
        <div v-show="bookingForOther" class="mb-6">
          <Input
            label="Passenger's First Name"
            v-model="payments.other.first_name"
            placeholder=""
          />
          <Input
            label="Passenger's Last Name"
            v-model="payments.other.last_name"
            placeholder=""
          />
          <Input
            label="Passenger's Contact Number"
            v-model="payments.other.contact_number"
            placeholder=""
          />
          <Input
            label="Passenger's Email*"
            v-model="payments.other.contact_email"
            placeholder=""
          />
        </div>
      </transition>
      <transition>
        <div v-show="airportPickup" class="mb-6 flex flex-col gap-4">
          <Input
            label="Flight Number"
            v-model="payments.flight_number"
            placeholder=""
            notice="Don't worry. Even if your flight is delayed, we'll monitor your flight and arrive on time, Every time."
          />
          <Input label="Name board" v-model="payments.name_board" placeholder="" />
        </div>
      </transition>
      <Btn name="Go to payment" @click="goToPayment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuizStore, useQuizStoreRefs } from "@/stores/useQuizStore";
import Input from "../ui/Input.vue";
import Selects from "../ui/Selects.vue";
import Btn from "../ui/Btn.vue";
import Checkboxes from "../ui/Checkboxes.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const { nextStep } = useQuizStore();
const { payments, airportPickup, bookingForOther } = useQuizStoreRefs();

function goToPayment() {
  nextStep();
}
</script>

<style lang="css">
.dp__input {
  border: 1px solid black !important;
  height: 42px !important;
}

.dp__input_icon {
  color: black !important;
}
</style>
