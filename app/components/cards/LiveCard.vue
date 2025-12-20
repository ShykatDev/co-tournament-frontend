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
  <div class="flex flex-col w-full items-center">
    <div class="flex gap-4 p-4">
      <div
        v-for="player in team?.players"
        :key="player.name"
        class="w-full flex border-gray-700"
        :class="class"
      >
        <div class="relative">
          <UAvatar
            :src="player?.profileImg"
            :alt="player?.name"
            class="border border-gray-700 object-cover object-top grayscale-100 size-32"
          />
          <UAvatar
            :src="team?.club?.logo"
            :alt="team?.club?.name"
            class="object-cover rounded-full border border-gray-700 absolute top-0 right-0 size-10"
          />
        </div>
      </div>
    </div>

    <div class="border-t border-gray-700 w-full divide-y divide-gray-700">
      <ul
        class="w-full space-y-1 px-4 py-2 flex justify-between items-center xl:flex-col"
      >
        <li
          v-for="player in team?.players"
          :key="player.name"
          class="flex items-center gap-2"
        >
          <UAvatar
            :src="player.profileImg"
            :alt="player.name"
            class="border overflow-hidden"
          />
          {{ player.name }}
        </li>
      </ul>

      <div
        class="w-full space-y-1 px-4 py-2 flex justify-between items-center xl:flex-col"
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
  <!-- <div class="w-full">
    <div class="flex">
      <div
        v-for="player in team?.players"
        :key="player.name"
        class="w-full relative flex flex-col items-center justify-between h-full border-gray-700"
        :class="class"
      >
        <div class="relative">
          <img
            :src="player?.profileImg"
            :alt="player?.name"
            class="size-48 xl:size-72 rounded-full border border-gray-700 object-cover object-top grayscale-100"
          />
          <img
            :src="team?.club?.logo"
            :alt="team?.club?.name"
            class="object-cover rounded-full border size-16 xl:size-20 border-gray-700 absolute top-0 right-0"
          />
        </div>
      </div>
    </div>

    <div
      class="xl:border-t border-t my-6 xl:mb-0 border-gray-700 w-full flex justify-between divide-x divide-gray-700"
    >
      <ul class="space-y-1 w-1/2 px-4 py-2">
        <li
          v-for="player in team?.players"
          :key="player.name"
          class="flex items-center gap-2"
        >
          <UAvatar
            :src="player.profileImg"
            :alt="player.name"
            class="border overflow-hidden"
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
  </div> -->
</template>
