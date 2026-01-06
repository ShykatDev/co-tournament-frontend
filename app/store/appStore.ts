import { defineStore } from "pinia";
import { ref } from "vue";

type Match = "PRESEASON" | "SEMIFINAL" | "FINAL";

export const useAppStore = defineStore("app-store", () => {
  const matchType = ref<Match>("PRESEASON");

  return { matchType };
});
