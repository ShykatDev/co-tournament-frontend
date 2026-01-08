<script setup>
const { data, pending, execute } = useAPI(
  "upcoming",
  "/matches/upcoming",
  undefined,
  false
);

onMounted(() => {
  execute(); // Fetches the API
});

const fixtures = computed(() => data.value?.upcomingMatches ?? []);
</script>

<template>
  <div
    class="border rounded-xl lg:w-[40%] lg:max-h-[450px] border-border bg-card/50 p-4 lg:p-8 ."
  >
    <div class="flex justify-between items-stretch">
      <CardsHeading lable="Semifinal Fixture" />
      <h3
        class="px-4 text-black font-semibold lg:text-xl rounded-lg bg-brand flex items-center"
      >
        {{ fixtures.length }}
      </h3>
    </div>

    <div v-if="pending" class="pt-5">
      <div class="space-y-3">
        <USkeleton
          class="w-full h-14 border border-border rounded-md odd:bg-dark/50 even:bg-transparent flex justify-between"
          v-for="_ in Array(5)"
        />
      </div>
    </div>

    <div
      v-else
      class="pt-5 overflow-y-auto invisible-scrollbar space-y-3 h-64 lg:h-[calc(100%-52px)]"
    >
      <div
        v-for="(match, index) in fixtures"
        :key="match.id"
        class="py-2 px-4 border border-border rounded-md odd:bg-dark/50 flex justify-between"
      >
        <div class="flex items-center gap-2 flex-1">
          <img
            :src="match.teamA.club.logo"
            alt="team-1-icon"
            class="size-8 object-cover"
          />
          <span class="font-semibold text-xs sm:text-sm lg:text-base">{{
            match.teamA.club.name
          }}</span>
        </div>
        <h2
          class="flex items-center justify-center text-sm lg:text-xl w-20 font-semibol text-(--primary)"
        >
          vs
        </h2>
        <div class="flex items-center gap-2 flex-1">
          <img
            :src="match.teamB.club.logo"
            alt="team-2-icon"
            class="size-8 object-cover"
          />
          <span class="font-semibold text-xs sm:text-sm lg:text-base">{{
            match.teamB.club.name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
