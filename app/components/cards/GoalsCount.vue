<script setup>
const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-2 lg:gap-4">
    <img
      :src="team?.club?.logo"
      :alt="team?.club?.name"
      class="hidden md:inline size-10"
    />
    <Icon
      name="i-lucide-arrow-up-from-dot"
      class="lg:hidden text-(--primary)"
    />
    <h3>
      <span class="hidden md:inline">Team</span> Goal:
      <span class="text-white font-semibold">{{
        team?.points?.totalGoals
      }}</span>
    </h3>
  </div>
</template>
