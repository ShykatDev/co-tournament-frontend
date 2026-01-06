<template>
  <div class="h-full flex flex-col gap-8 relative">
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
