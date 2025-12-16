<script setup>
import { onMounted, ref } from "vue";
const api = useApi();

const liveMatch = ref(null);

onMounted(async () => {
  try {
    const res = await api.getLiveMatch();
    liveMatch.value = res?.ongoingMatch || null;
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div class="border border-gray-200 rounded-lg">
    <div
      class="h-[5vh] px-4 flex justify-between items-center border-b border-gray-200"
    >
      <h2 class="font-semibold text-lg flex items-center gap-2">
        Ongoing Match
        <div class="size-2 bg-red-600 rounded-full animate-pulse" />
      </h2>
      <h2 class="font-semibold text-xs px-2 py-0.5 bg-amber-100 rounded">
        Pre Season
      </h2>
    </div>

    <div class="w-full flex flex-col xl:flex-row justify-center items-center">
      <CardsLiveCard
        :team="liveMatch?.teamA"
        class="border-r flex-col-reverse xl:flex-col pt-0 xl:pt-6"
      />

      <img
        src="/assets/images/vs.png"
        alt="vs"
        class="border-none size-40 xl:size-64"
      />

      <CardsLiveCard :team="liveMatch?.teamB" class="border-l" />
    </div>
  </div>
</template>
