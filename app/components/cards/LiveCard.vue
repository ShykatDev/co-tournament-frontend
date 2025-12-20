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
  <div class="flex flex-col w-full items-center border-gray-800" :class="class">
    <div class="flex gap-4 p-4">
      <div
        v-for="player in team?.players"
        :key="player.name"
        class="w-full flex border-gray-800"
      >
        <div class="relative">
          <UAvatar
            :src="player?.profileImg"
            :alt="player?.name"
            class="border border-gray-800 object-cover object-top grayscale-100 size-32"
          />
          <UAvatar
            :src="team?.club?.logo"
            :alt="team?.club?.name"
            class="object-cover rounded-full border border-gray-800 absolute top-0 right-0 size-10"
          />
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 w-full divide-y divide-gray-800">
      <ul
        class="w-full space-y-2 px-4 py-2 flex justify-between items-center xl:flex-col"
      >
        <li
          v-for="player in team?.players"
          :key="player.name"
          class="flex items-center gap-2 text-sm"
        >
          <UAvatar
            :src="player.profileImg"
            :alt="player.name"
            size="xs"
            class="border overflow-hidden"
          />
          {{ player.name }}
        </li>
      </ul>

      <div
        class="w-full space-y-2 px-4 py-2 flex justify-between items-center xl:flex-col"
      >
        <p>
          <span>⚽ Team Goals</span>
          <span> - </span>
          <span>{{ team?.points?.totalGoals ?? 0 }}</span>
        </p>
        <p class="flex items-center gap-2">
          <UIcon name="i-lucide-trending-up" />
          <span> Win Ratio</span>
          <span> - </span>
          <span class="text-blue-400"
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
