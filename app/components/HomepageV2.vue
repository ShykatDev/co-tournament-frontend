<template>
  <div class="h-full flex flex-col gap-8">
    <div class="">
      <LandingHeader />
    </div>
    <div class="flex h-[60%] gap-8">
      <LandingOngoingMatch />
      <LandingFixtures />
    </div>

    <div class="flex h-[40%] gap-8">
      <LandingPoints />
      <LandingTopScorer />
    </div>
  </div>
</template>
