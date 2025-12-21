<script setup>
import { ref } from "vue";

const { data, pending } = useAPI("ongoing", "/matches/live");

const liveMatch = ref(data.value?.ongoingMatch);
const upcomingMatch = ref(data.value?.upcomingMatch);
</script>

<template>
  <div class="border bg-gray-950 border-gray-800 rounded-lg overflow-hidden">
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
          class="text-xs px-1.5 font-semibold py-0.5 border border-red-600 text-red-600 rounded animate-pulse"
        >
          Live
        </div>
      </h2>
      <UBadge color="info" label="Pre Season" />
    </div>

    <div
      v-if="pending"
      class="w-full h-[30vh] flex items-center justify-center"
    >
      Loading...
    </div>
    <div
      v-else-if="liveMatch || upcomingMatch"
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
