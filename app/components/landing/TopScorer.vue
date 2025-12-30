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

console.log(filteredByGoalFor.value);
</script>

<template>
  <div
    class="border lg:w-[40%] rounded-xl border-(--dark-border) bg-(--dark-card) p-4 lg:p-8"
  >
    <div
      class="w-full h-1/2 border bg-(--dark-bg) border-(--dark-border) rounded-md flex flex-col justify-center items-center gap-2 relative"
    >
      <img
        :src="filteredByGoalFor[0]?.team?.players[0]?.profileImg"
        :alt="filteredByGoalFor[0]?.team?.players[0]?.name"
        class="absolute -left-4 lg:-left-8 bottom-0 h-[120%] lg:h-[150%]"
      />

      <UAvatar
        :src="filteredByGoalFor[0]?.team?.club?.logo"
        size="3xl"
        alt="Club"
        class="bg-transparent"
      />
      <p class="text-xl">Top Goal Scorer</p>
      <h2 class="text-5xl text-(--primary)">
        {{ filteredByGoalFor[0]?.totalGoals ?? 0 }}
      </h2>

      <img
        :src="filteredByGoalFor[0]?.team?.players[1]?.profileImg"
        :alt="filteredByGoalFor[0]?.team?.players[1]?.name"
        class="absolute -right-4 lg:-right-8 bottom-0 scale-x-[-1] h-[120%] lg:h-[150%]"
      />
    </div>

    <div
      class="mt-5 divide-y divide-(--dark-border) border border-(--dark-border) rounded-md"
    >
      <div
        v-for="(team, index) in filteredByGoalFor.slice(1)"
        class="flex items-center gap-4 justify-between py-2 px-4"
      >
        <span class="text-(--light-text)/50 text-sm">#{{ index + 2 }}</span>
        <div class="flex-1 flex items-center gap-3">
          <UAvatar
            :src="team?.team?.club?.logo"
            :alt="team?.team?.club?.name"
          />
          <span>{{ team?.team?.club?.name }}</span>
        </div>

        <UAvatarGroup class="flex-1">
          <UAvatar
            class="bg-white grayscale-100"
            :src="pl?.profileImg"
            :alt="pl?.name"
            v-for="pl in team?.team?.players"
          />
        </UAvatarGroup>

        <span class="text-lg text-(--primary)">
          <span class="text-(--light-text)/50 text-sm inline-block pr-2"
            >Goal Scored</span
          >
          {{ team?.totalGoals }}</span
        >
      </div>
    </div>
  </div>
</template>
