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
    class="border rounded-xl lg:w-[40%] lg:h-[90%] border-(--dark-border) bg-(--dark-card) p-4 lg:p-8"
  >
    <div class="flex justify-between items-stretch">
      <CardsHeading lable="Fixtures" />
      <h3
        class="px-4 text-black font-semibold text-xl rounded-lg bg-(--primary) flex items-center"
      >
        {{ fixtures.length }}
      </h3>
    </div>

    <div v-if="pending" class="pt-5">
      <div class="space-y-3">
        <USkeleton
          class="w-full h-14 border border-(--dark-border) rounded-md odd:bg-(--dark-bg) even:bg-transparent flex justify-between"
          v-for="_ in Array(5)"
        />
      </div>
    </div>

    <div v-else class="pt-5 overflow-y-auto space-y-3 h-[calc(100%-52px)]">
      <div
        v-for="(match, index) in fixtures"
        :key="match.id"
        class="py-2 px-4 border border-(--dark-border) rounded-md odd:bg-(--dark-bg) flex justify-between"
      >
        <div class="flex items-center gap-4 w-1/2 lg:min-w-40">
          <img
            :src="match.teamA.club.logo"
            alt="team-1-icon"
            class="size-8 object-cover"
          />
          <span class="font-semibold">{{ match.teamA.club.name }}</span>
        </div>
        <h2
          class="flex items-center justify-center text-xl w-20 font-semibol text-(--primary)"
        >
          vs
        </h2>
        <div class="flex items-center gap-4 w-1/2 lg:min-w-40">
          <img
            :src="match.teamB.club.logo"
            alt="team-2-icon"
            class="size-8 object-cover"
          />
          <span class="font-semibold">{{ match.teamB.club.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
