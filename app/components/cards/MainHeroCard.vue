<script setup>
const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
});

const winPercentage = computed(() => {
  const won = props.team?.points?.won ?? 0;
  const played = props.team?.points?.played ?? 0;

  if (!played) return null;

  return Math.round((won / played) * 100);
});
</script>

<template>
  <div class="flex flex-col items-center gap-4 lg:gap-8">
    <span
      class="px-4 py-1.5 lg:py-2 rounded-lg w-fit border flex items-center gap-2 text-nowrap text-xs lg:text-sm"
      :class="
        winPercentage >= 50
          ? 'text-[#A8FF92] bg-[#0D5219]/20 border-[#0D5219]/15'
          : 'text-[#FFC7C7] bg-[#5D0505]/20 border-[#FFDABA]/15'
      "
    >
      <Icon
        :name="
          winPercentage >= 50 ? 'lucide-trending-up' : 'lucide-trending-down'
        "
        class="size-4 md:size-5 shrink-0 hidden lg:inline-block"
      />

      <span
        >Win <span class="hidden lg:inline">Percentage </span>:
        {{ winPercentage }}%</span
      >
    </span>

    <!-- Club logo -->
    <img
      :src="team?.club?.logo"
      :alt="team?.club?.name"
      class="size-18 lg:size-32 object-cover"
    />

    <!-- Player details -->
    <div class="space-y-3">
      <div
        v-for="player in team?.players"
        :key="player.name"
        class="w-full border-gray-800 hidden lg:flex"
      >
        <div class="flex items-center gap-3">
          <UAvatar
            :src="player?.profileImg"
            :alt="player?.name"
            class="border border-gray-800 object-cover [&_img]:object-top grayscale-100 size-10 bg-white"
          />
          <h2 class="text-xl">{{ player?.name }}</h2>
        </div>
      </div>

      <UAvatarGroup class="lg:hidden">
        <UAvatar
          v-for="player in team?.players"
          :key="player.name"
          :src="player?.profileImg"
          :alt="player?.name"
          class="border border-gray-800 object-cover [&_img]:object-top bg-white grayscale-100 size-8"
        />
      </UAvatarGroup>
    </div>
  </div>
</template>
