<script setup>
const { data, pending, execute } = useAPI(
  "ongoing",
  "/matches/live",
  undefined,
  false
);

onMounted(() => {
  execute(); // Fetches the API
});

const liveMatch = computed(() => data.value?.ongoingMatch ?? null);
const upcomingMatch = computed(() => data.value?.upcomingMatch ?? null);
</script>

<template>
  <div
    class="border lg:w-[60%] rounded-xl border-border bg-[url('/assets/images/ongoing-bg.png')] bg-center bg-cover p-4 lg:p-8 relative overflow-hidden"
  >
    <div
      class="w-full h-full absolute inset-0 bg-black/65 rounded-xl backdrop-blur-xs z-0"
    />

    <div
      v-if="pending"
      class="w-full h-[36vh] relative z-10 flex items-center justify-center"
    >
      Loading...
    </div>

    <div
      v-else-if="liveMatch || upcomingMatch"
      class="z-10 relative flex flex-col justify-between items-center h-full"
    >
      <div class="w-full">
        <CardsHeading :lable="liveMatch ? 'Ongoing Match' : 'Next Match'" />
      </div>

      <div class="flex gap-10 lg:gap-20 items-center my-10 lg:my-5">
        <CardsMainHeroCard :team="liveMatch?.teamA ?? upcomingMatch?.teamA" />
        <h2 class="text-2xl lg:text-5xl font-semibold text-brand">VS</h2>
        <CardsMainHeroCard :team="liveMatch?.teamB ?? upcomingMatch?.teamB" />
      </div>

      <div class="flex items-center gap-8">
        <CardsGoalsCount :team="liveMatch?.teamA ?? upcomingMatch?.teamA" />
        <svg
          width="34"
          height="1"
          viewBox="0 0 34 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="hidden lg:block"
        >
          <line
            x1="4.37114e-08"
            y1="0.5"
            x2="34"
            y2="0.500003"
            stroke="white"
          />
        </svg>

        <h2
          class="text-brand px-4 py-1.5 bg-brand/10 rounded-md text-xs md:text-sm lg:text-base"
        >
          Pre Season
        </h2>

        <svg
          width="34"
          height="1"
          viewBox="0 0 34 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="hidden lg:block"
        >
          <line
            x1="4.37114e-08"
            y1="0.5"
            x2="34"
            y2="0.500003"
            stroke="white"
          />
        </svg>

        <CardsGoalsCount :team="liveMatch?.teamB ?? upcomingMatch?.teamB" />
      </div>
    </div>
    <div v-else class="w-full h-[30vh] flex items-center justify-center">
      <p>No live match here</p>
    </div>
  </div>
</template>
