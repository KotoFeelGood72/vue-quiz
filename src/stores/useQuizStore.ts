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
  },
});

export const useQuizStoreRefs = () => storeToRefs(useQuizStore());
