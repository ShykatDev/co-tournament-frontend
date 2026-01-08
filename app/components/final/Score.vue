<script setup>
defineProps({
  match: {
    type: Object,
    required: true,
  },
  className: {
    type: String,
  },
});
</script>

<template>
  <div
    class="absolute w-full lg:w-fit px-6 lg:px-0 justify-center lg:justify-start -bottom-12 lg:bottom-auto left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 flex items-center gap-4"
    :class="className"
  >
    <div class="flex items-center gap-2">
      <img
        :src="match?.teamA?.club?.logo"
        :alt="match?.teamA?.club?.name"
        class="size-8 shrink-0"
      />
      <h3
        class="text-xl lg:text-3xl font-semibold"
        :class="match?.scoreA > match?.scoreB && 'text-lime-400'"
      >
        {{ match?.scoreA ?? "-" }}
      </h3>
    </div>

    <span>:</span>

    <div class="flex items-center gap-2">
      <h3
        class="text-xl lg:text-3xl font-semibold"
        :class="match?.scoreB > match?.scoreA && 'text-lime-400'"
      >
        {{ match?.scoreB ?? "-" }}
      </h3>
      <img
        :src="match?.teamB?.club?.logo"
        :alt="match?.teamB?.club?.name"
        class="size-8 object-cover"
      />
    </div>
  </div>
</template>
