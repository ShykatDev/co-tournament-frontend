<script setup>
const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="md:flex items-center gap-4 hidden">
    <img :src="team?.club?.logo" :alt="team?.club?.name" class="size-10" />
    <h3>
      Team Goal:
      <span class="text-white font-semibold">{{
        team?.points?.totalGoals
      }}</span>
    </h3>
  </div>
</template>
