<script setup>
import { useAppStore } from "~/store/appStore";

// Use app store
const app = useAppStore();
</script>

<template>
  <header class="flex justify-between items-start">
    <div class="flex items-center gap-4">
      <img
        src="/assets/images/fc.jpg"
        alt="fc"
        class="size-12 lg:size-16 rounded-lg border border-border object-cover"
      />

      <div>
        <h1 class="text-xl lg:text-3xl text-brand font-semibold">
          FC26 Tournament
        </h1>
        <span>Ongoing</span>
      </div>
    </div>

    <div>
      <USelect
        v-model="app.matchType"
        value-key="value"
        :items="[
          { label: 'Pre Season', value: 'PRESEASON' },
          { label: 'Semi Final', value: 'SEMIFINAL' },
          // { label: 'Final', value: 'FINAL' },
        ]"
        class="w-32 md:w-48 py-2"
        :ui="{
          base: 'bg-brand/10 text-brand ring-1 ring-brand/30 hover:bg-brand/20 focus:ring-1 focus:ring-brand',
          trailingIcon: 'text-brand',

          content: 'bg-dark border border-brand/30 rounded-md',

          item: 'text-brand px-3 py-2 rounded-md transition hover:bg-card/50 data-highlighted:bg-card',

          viewport: 'bg-dark',
        }"
      />
    </div>
  </header>
</template>
