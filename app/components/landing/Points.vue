<script setup>
const { data, pending, execute } = useAPI(
  "point-table",
  "/points/2",
  undefined,
  false
);

onMounted(() => {
  execute(); // Fetches the API
});
</script>

<template>
  <div
    class="border lg:w-[60%] rounded-xl border-(--dark-border) bg-(--dark-card) p-4 lg:p-8 overflow-hidden relative"
  >
    <CardsHeading lable="Point Table" />

    <div
      class="mt-5 border border-(--dark-border) rounded-md overflow-auto h-[calc(100%-48px)] invisible-scrollbar"
    >
      <div class="min-w-250">
        <div
          class="flex h-15 sticky inset-0 z-30 bg-(--dark-bg) items-center justify-between border-b border-(--dark-border) pl-4 whitespace-nowrap shrink-0"
        >
          <h3 class="text-xl lg:flex-1 text-(--primary)">Club</h3>
          <h3 class="text-xl text-(--primary) flex-1">Players</h3>
          <div class="flex">
            <h3 class="text-xl text-(--primary) w-16 text-center">MP</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">W</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">D</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">L</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">GF</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">GA</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">GD</h3>
            <h3 class="text-xl text-(--primary) w-16 text-center">Pt</h3>
          </div>
        </div>

        <div
          class="flex items-center justify-between pl-4 py-2 shrink-0 border-t border-(--dark-border)"
          :class="i === 0 && 'bg-(--primary)/5 border-t-0'"
          v-for="(team, i) in data"
        >
          <div class="flex-1 flex items-center gap-3">
            <UAvatar
              :src="team?.team?.club?.logo"
              alt="Player avatar"
              class="bg-transparent"
            />
            <span
              >{{ team?.team?.club?.name ?? "Club Name" }}
              <span v-show="i === 0">🏆</span>
            </span>
          </div>
          <div class="flex-1 flex items-center gap-2">
            <UAvatarGroup>
              <UAvatar
                :src="pl?.profileImg"
                :alt="pl?.name"
                class="grayscale-100 bg-white [&_img]:object-cover [&_img]:object-top"
                v-for="pl in team?.team?.players"
              />
            </UAvatarGroup>

            <span class="text-xs text-(--light-text)/40"
              >{{ team?.team?.name }}
            </span>
          </div>
          <div class="flex">
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.played }}</span
            >
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.won }}</span
            >
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.draw }}</span
            >
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.lost }}</span
            >
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.goalFor }}</span
            >
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.goalAgainst }}</span
            >
            <span
              class="text-lg py-2 inline-block w-16 text-center text-(--light-text)/50"
              >{{ team?.goalDiff }}</span
            >
            <span class="text-lg py-2 inline-block w-16 text-center">{{
              team?.points
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
