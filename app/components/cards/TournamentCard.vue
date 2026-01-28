<script setup>
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";

const props = defineProps({
  tournament: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="border border-border rounded-xl">
    <NuxtLink :to="`/tournaments/${tournament.id}`">
      <div class="p-4">
        <img
          src="/images/banners/fc26.jpg"
          alt="fc"
          class="w-full object-cover rounded-lg"
        />
      </div>
      <div class="flex flex-col justify-between p-4 border-border border-t">
        <UBadge
          :label="`${tournament.status}`"
          variant="outline"
          color="primary"
          size="md"
          class="w-fit"
        />

        <h2
          class="text-lg lg:text-xl font-semibold text-brand uppercase mt-2 mb-4"
        >
          {{ tournament.name }}
        </h2>

        <Button
          class="w-fit flex items-center gap-1 bg-brand text-black px-2.5 py-1.5 rounded-md heading-text font-semibold hover:bg-brand/80 transition-all"
        >
          View
          <HugeiconsIcon :icon="ArrowUpRight01Icon" />
        </Button>
      </div>
    </NuxtLink>
  </div>
</template>
