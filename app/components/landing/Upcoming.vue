<script setup>
import dayjs from "dayjs";
import { onMounted, ref } from "vue";
const api = useApi();

const upcomingMatches = ref([]);

onMounted(async () => {
  try {
    const res = await api.getUpcomingMatches();
    upcomingMatches.value = res?.upcomingMatches || [];
  } catch (err) {
    console.error(err);
  }
});

// Expose dayjs to template
const formatDate = (date) => dayjs(date).format("DD MMM YYYY");
</script>

<template>
  <div
    class="border border-gray-800 rounded-lg h-full overflow-y-auto bg-gray-900 text-gray-300"
  >
    <div
      class="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-950"
    >
      <h2 class="font-semibold text-lg">Upcoming Match</h2>

      <UBadge color="info" :label="upcomingMatches?.length" />
    </div>

    <ul class="h-auto overflow-y-auto">
      <li
        v-for="(match, index) in upcomingMatches"
        :key="match.id"
        class="flex border-b border-gray-800 even:bg-gray-800"
        :class="{ 'border-b-0': (index === upcomingMatches?.lenght) === 1 }"
      >
        <div
          class="flex items-center justify-between px-2 w-full gap-2 divide-x divide-gray-800"
        >
          <div class="flex justify-between gap-4 w-full pr-2 py-2">
            <div class="flex items-center gap-2 w-1/2 lg:min-w-40">
              <img
                :src="match.teamA.club.logo"
                alt="team-1-icon"
                class="size-6 object-cover rounded-full"
              />
              <span class="font-semibold text-sm">{{
                match.teamA.club.name
              }}</span>
            </div>
            <h2
              class="flex items-center justify-center w-10 font-semibold text-blue-300"
            >
              vs
            </h2>
            <div class="flex items-center gap-2 w-1/2 lg:min-w-40">
              <img
                :src="match.teamB.club.logo"
                alt="team-2-icon"
                class="size-6 object-cover rounded-full"
              />
              <span class="font-semibold text-sm">{{
                match.teamB.club.name
              }}</span>
            </div>
            <!-- <span
              class="shrink-0 text-blue-300 flex items-center justify-center"
              >{{ formatDate(match.scheduledAt) }}</span -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
