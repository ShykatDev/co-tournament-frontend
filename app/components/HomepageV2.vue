<script setup>
const { pending, execute } = useAPI("health", "/health", undefined, false);

onMounted(() => {
  execute(); // Fetches the API
});
</script>

<template>
  <div class="h-full" v-if="pending">
    <div class="h-full flex flex-col gap-8">
      <div class="h-28 bg-(--dark-card) rounded-lg animate-pulse"></div>
      <div class="flex h-[60%] gap-8">
        <div class="bg-(--dark-card) rounded-lg w-[60%] animate-pulse"></div>
        <div
          class="bg-(--dark-card) rounded-lg w-[40%] h-[90%] animate-pulse"
        ></div>
      </div>

      <div class="flex h-[40%] gap-8">
        <div class="bg-(--dark-card) rounded-lg w-[60%] animate-pulse"></div>
        <div class="bg-(--dark-card) rounded-lg w-[40%] animate-pulse"></div>
      </div>
    </div>
  </div>
  <div v-else class="h-full flex flex-col gap-8">
    <div class="">
      <LandingHeader />
    </div>
    <div class="flex flex-col lg:flex-row lg:h-[60%] gap-8">
      <LandingOngoingMatch />
      <LandingFixtures />
    </div>

    <div class="flex flex-col lg:flex-row lg:h-[40%] gap-8">
      <LandingPoints />
      <LandingTopScorer />
    </div>
  </div>
</template>
