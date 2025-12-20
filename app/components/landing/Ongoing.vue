<script setup>
import { onMounted, ref } from "vue";
const api = useApi();

const liveMatch = ref(null);
const upcomingMatch = ref(null);

onMounted(async () => {
  try {
    const res = await api.getLiveMatch();
    console.log(res);

    liveMatch.value = res?.ongoingMatch || null;
    upcomingMatch.value = res?.upcomingMatch || null;
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div class="border bg-gray-950 border-gray-800 rounded-lg">
    <div
      class="p-4 flex justify-between items-center border-b border-gray-800 bg-gray-950"
    >
      <h2 class="font-semibold text-lg flex items-center gap-2">
        {{ liveMatch ? "Ongoing Match" : "Next Upcoming Match" }}
        <div
          v-if="upcomingMatch && !liveMatch"
          class="size-2 bg-blue-600 rounded-full animate-pulse"
        />
        <div
          v-if="liveMatch"
          class="text-xs px-1.5 py-0.5 border border-red-600 text-red-600 rounded animate-pulse"
        >
          Live
        </div>
      </h2>
      <UBadge color="info" label="Pre Season" />
    </div>

    <div
      v-if="liveMatch || upcomingMatch"
      class="w-full flex flex-col xl:flex-row justify-center items-stretch"
    >
      <CardsLiveCard :team="liveMatch?.teamA ?? upcomingMatch?.teamA" />

      <div
        class="border-y xl:border-x xl:border-y-0 border-gray-800 w-full flex justify-center items-center"
      >
        <img src="/assets/images/vs.png" alt="vs" class="size-28 lg:size-40" />
      </div>

      <CardsLiveCard :team="liveMatch?.teamB ?? upcomingMatch?.teamB" />
    </div>

    <div v-else class="w-full h-[30vh] flex items-center justify-center">
      <p>No live match here</p>
    </div>
  </div>
</template>
