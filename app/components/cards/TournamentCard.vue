<script setup>
const props = defineProps({
  tournament: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <NuxtLink :to="`/tournaments/${tournament.id}`">
      <img
        src="/images/banners/fc26.jpg"
        alt="fc"
        class="w-full object-cover rounded-lg"
      />
      <div class="flex items-center justify-between mt-2">
        <h2 class="text-lg lg:text-xl font-semibold">
          {{ tournament.name }}
        </h2>

        <UBadge
          :label="`${tournament.status}`"
          variant="soft"
          color="primary"
          size="sm"
        />
      </div>
    </NuxtLink>
  </div>
</template>
