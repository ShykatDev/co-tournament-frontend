<template>
  <main class="mt-10 space-y-8">
    <div class="flex flex-col xl:flex-row justify-between items-stretch gap-8">
      <div class="xl:w-3/4">
        <LandingOngoing />
      </div>

      <div class="xl:w-1/4">
        <LandingUpcoming />
      </div>
    </div>
    <div>
      <LandingPointTable />
    </div>
  </main>
</template>
