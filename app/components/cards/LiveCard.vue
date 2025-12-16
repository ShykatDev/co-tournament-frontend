<script setup>
const props = defineProps({
  team: Object,
  class: String,
});

const winPercentage = computed(() => {
  (team?.points?.win / team?.points?.played) * 100;
});
</script>

<template>
  <div
    v-for="player in team?.players?.filter((p) => p.tier === 1)"
    :key="player.name"
    class="w-full relative flex flex-col items-center justify-between h-full border-gray-200"
    :class="class"
  >
    <div class="relative">
      <img
        :src="player?.profileImg"
        :alt="player?.name"
        class="size-48 xl:size-80 rounded-full border border-gray-200 object-cover object-top grayscale-100"
      />
      <img
        :src="team?.club?.logo"
        :alt="team?.club?.name"
        class="object-cover rounded-full border size-16 xl:size-24 border-gray-200 absolute top-0 right-0"
      />
    </div>

    <div
      class="xl:border-t border-y my-6 xl:mb-0 border-gray-200 w-full flex justify-between divide-x divide-gray-200"
    >
      <ul class="space-y-1 w-1/2 px-4 py-2">
        <li
          v-for="player in team?.players"
          :key="player.name"
          class="flex items-center gap-2"
        >
          <img
            :src="player.profileImg"
            :alt="player.name"
            class="size-6 rounded-full border border-gray-200 object-cover object-top grayscale-100"
          />
          {{ player.name }}
        </li>
      </ul>

      <div class="space-y-1 w-1/2 px-4 py-2">
        <p>
          <span>⚽ Team Goals</span>
          <span> - </span>
          <span>{{ team?.points?.totalGoals ?? 0 }}</span>
        </p>
        <p>
          <span>📈 Win Ratio</span>
          <span> - </span>
          <span
            >{{
              isNaN(
                Math.round((team?.points?.won / team?.points?.played) * 100)
              )
                ? "N/A"
                : Math.round((team?.points?.won / team?.points?.played) * 100) +
                  "%"
            }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
