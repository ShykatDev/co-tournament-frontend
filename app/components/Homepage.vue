<template>
  <main class="mt-10 space-y-8">
    <div class="flex flex-col xl:flex-row justify-between items-stretch gap-8">
      <div class="xl:flex-1">
        <LandingOngoing />
      </div>

      <div class="xl:w-auto">
        <LandingUpcoming />
      </div>
    </div>
    <div>
      <LandingPointTable />
    </div>
  </main>
</template>
