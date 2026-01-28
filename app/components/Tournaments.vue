<script setup>
const base = useBackendUrl();
const {
  data: tournaments,
  pending: tournamentsPending,
  error: tournamentsError,
} = useAsyncData("tournaments", () => $fetch(`${base}/tournaments`));
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-xl lg:text-3xl font-semibold text-brand">
        Tournament Lists
      </h1>

      <p class="text-text/50 text-sm md:text-base">
        Check out the tournaments happening at our COdesign space. View,
        register, and be part of the competition.
      </p>
    </div>

    <div
      v-if="tournamentsPending"
      class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6"
    >
      <div
        class="bg-dark/30 border border-border rounded-lg w-full min-h-48 animate-pulse"
        v-for="_ in Array(6)"
      />
    </div>
    <div v-else-if="tournamentsError">Error loading tournaments</div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
      <CardsTournamentCard
        v-for="tournament in tournaments"
        :key="tournament.id"
        :tournament="tournament"
      />
    </div>
  </div>
</template>
