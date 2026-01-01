<script setup>
const { data, pending, execute } = useAPI(
  "point-table",
  "/points/2",
  undefined,
  false
);

onMounted(() => {
  execute();
});

const filteredByGoalFor = computed(() => {
  if (!data.value) return [];

  return data.value
    .filter((item) => item.goalFor !== null && item.goalFor !== undefined)
    .sort((a, b) => b.goalFor - a.goalFor);
});
</script>

<template>
  <div
    v-if="pending"
    class="border mt-12 lg:mt-0 min-h-64 flex items-center justify-center lg:w-[40%] rounded-xl border-border bg-card/50 p-4 lg:p-8"
  >
    Loading...
  </div>
  <div
    v-else
    class="border mt-12 lg:mt-0 lg:w-[40%] rounded-xl border-border bg-card/50 p-4 lg:p-8"
  >
    <div
      class="w-full min-h-[16vh] lg:h-1/2 border bg-(--dark-bg) border-border rounded-md pt-6 lg:pt-0 flex flex-col lg:flex-row justify-start items-center gap-2 relative"
    >
      <div class="lg:hidden flex flex-col items-center justify-center">
        <div class="flex items-center gap-1">
          <UAvatar
            class="bg-transparent"
            :src="filteredByGoalFor[0]?.team?.club?.logo"
            :alt="filteredByGoalFor[0]?.team?.club?.name"
            size="2xl"
          />
        </div>

        <span class="my-2">Top Goal Scorer</span>
        <h3 class="text-4xl text-brand">
          {{ filteredByGoalFor[0]?.totalGoals ?? 0 }}
        </h3>
      </div>

      <div class="relative w-full lg:w-1/2 h-full flex justify-center">
        <img
          :src="filteredByGoalFor[0]?.team?.players[0]?.profileImg"
          :alt="filteredByGoalFor[0]?.team?.players[0]?.name"
          class="lg:absolute -left-4 lg:-left-8 bottom-0 w-[50%] lg:w-auto lg:h-[150%]"
        />
        <img
          :src="filteredByGoalFor[0]?.team?.players[1]?.profileImg"
          :alt="filteredByGoalFor[0]?.team?.players[1]?.name"
          class="lg:absolute left-16 lg:left-16 bottom-0 scale-x-[-1] w-[50%] lg:w-auto lg:h-[150%]"
        />
      </div>

      <div class="space-y-2 hidden lg:block">
        <UAvatar
          :src="filteredByGoalFor[0]?.team?.club?.logo"
          size="3xl"
          alt="Club"
          class="bg-transparent"
        />
        <p class="lg:text-xl">Top Goal Scorer</p>
        <h2 class="text-3xl lg:text-5xl text-brand">
          {{ filteredByGoalFor[0]?.totalGoals ?? 0 }}
        </h2>
      </div>
    </div>

    <div
      class="mt-5 divide-y divide-border border border-border rounded-md lg:h-[calc(50%-20px)] overflow-y-auto invisible-scrollbar"
    >
      <div
        v-for="(team, index) in filteredByGoalFor.slice(1)"
        class="flex flex-col lg:flex-row items-center gap-4 justify-between py-2 px-4 even:bg-dark/50"
      >
        <span class="text-text/50 text-sm">#{{ index + 2 }}</span>
        <div class="flex-1 flex items-center gap-3">
          <UAvatar
            :src="team?.team?.club?.logo"
            :alt="team?.team?.club?.name"
          />
          <span class="text-nowrap">{{ team?.team?.club?.name }}</span>
        </div>

        <UAvatarGroup class="flex-1">
          <UAvatar
            class="bg-white grayscale-100"
            :src="pl?.profileImg"
            :alt="pl?.name"
            v-for="pl in team?.team?.players"
          />
        </UAvatarGroup>

        <span class="text-lg text-brand">
          <span class="text-text/50 text-sm inline-block pr-2"
            >Goal Scored</span
          >
          {{ team?.totalGoals }}</span
        >
      </div>
    </div>
  </div>
</template>
