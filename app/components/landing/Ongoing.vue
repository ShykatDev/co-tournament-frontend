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
  <div class="border border-gray-200 rounded-lg">
    <div
      class="h-[5vh] px-4 flex justify-between items-center border-b border-gray-200"
    >
      <h2 class="font-semibold text-lg flex items-center gap-2">
        {{ liveMatch ? "Ongoing Match" : "Next Upcoming Match" }}
        <div
          v-if="upcomingMatch"
          class="size-2 bg-blue-600 rounded-full animate-pulse"
        />
        <div
          v-if="liveMatch"
          class="text-xs px-1.5 py-0.5 border border-red-600 text-red-600 rounded animate-pulse"
        >
          Live
        </div>
      </h2>
      <h2 class="font-semibold text-xs px-2 py-0.5 bg-blue-100 rounded">
        Pre Season
      </h2>
    </div>

    <div
      v-if="liveMatch || upcomingMatch"
      class="w-full flex flex-col xl:flex-row justify-center items-center"
    >
      <CardsLiveCard
        :team="liveMatch?.teamA ?? upcomingMatch?.teamA"
        class="border-r flex-col-reverse xl:flex-col pt-0 xl:pt-6"
      />

      <img
        src="/assets/images/vs.png"
        alt="vs"
        class="border-none size-40 xl:size-64"
      />

      <CardsLiveCard
        :team="liveMatch?.teamB ?? upcomingMatch?.teamB"
        class="border-l pt-0 xl:pt-6"
      />
    </div>

    <div v-else class="w-full h-[30vh] flex items-center justify-center">
      <p>No live match here</p>
    </div>
  </div>
</template>
