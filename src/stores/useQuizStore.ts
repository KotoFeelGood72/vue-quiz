import { defineStore, storeToRefs } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    steps: [
      { title: "Locations", num: 1 },
      { title: "Cars", num: 2 },
      { title: "Your Details", num: 3 },
      { title: "Payment", num: 4 },
    ],
    currentStep: 1,
    selectedCar: null as any,
    bookingForOther: false,
    airportPickup: false,
    payments: {
      where_from: "",
      where_to: "",
      hours: "",
      date: "",
      first_name: "",
      last_name: "",
      contact_number: "",
      number_passengers: "",
      number_of_suitcase: "",
      flight_number: "",
      name_board: "",
      other: {
        first_name: "",
        last_name: "",
        contact_number: "",
        contact_email: "",
      },
      billing: {
        company_name: "",
        billing_address: "",
        city: "",
        postcode: "",
        country: "",
        card_details: "",
        card_name: "",
      },
      price: "",
    },
  }),

  actions: {
    nextStep() {
      if (this.currentStep < this.steps.length) this.currentStep++;
    },
    prevStep() {
      if (this.currentStep > 1) this.currentStep--;
    },
    goToStep(stepNum: number) {
      if (stepNum >= 1 && stepNum <= this.steps.length) {
        this.currentStep = stepNum;
      }
    },

    /** ───────────── выбор авто ───────────── */
    selectCar(car: any /* или Car */) {
      this.selectedCar = car; // сохраняем выбор
      this.goToStep(3); // сразу переходим на шаг «Your Details»
    },
  },
});

/** удобные реактивные ссылки */
export const useQuizStoreRefs = () => storeToRefs(useQuizStore());
