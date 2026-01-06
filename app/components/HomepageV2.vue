<script setup>
import { useAppStore } from "~/store/appStore";

// Use app store
const app = useAppStore();
</script>

<template>
  <div class="h-full flex flex-col gap-8 relative">
    <div class="">
      <LandingHeader />
    </div>

    <!-- Preseason Match -->
    <MatchPreseason v-if="app.matchType === 'PRESEASON'" />
    <MatchSemifinal v-if="app.matchType === 'SEMIFINAL'" />
  </div>
</template>
