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
    class="border border-gray-700 rounded-lg h-full overflow-y-auto bg-gray-900 text-gray-300"
  >
    <div
      class="flex justify-between items-center p-4 h-[5vh] border-b border-gray-700"
    >
      <h2 class="font-semibold text-lg">Upcoming Match</h2>

      <span class="font-semibold text-xs px-2 py-0.5 bg-sky-700 rounded">{{
        upcomingMatches?.length
      }}</span>
    </div>

    <ul class="h-auto overflow-y-auto">
      <li
        v-for="(match, index) in upcomingMatches"
        :key="match.id"
        class="flex border-b border-gray-700 even:bg-gray-800"
        :class="{ 'border-b-0': (index === upcomingMatches?.lenght) === 1 }"
      >
        <div
          class="flex items-center justify-between px-2 w-full gap-2 divide-x divide-gray-700"
        >
          <div class="flex items-center justify-between w-full pr-2 py-2">
            <div class="flex items-center gap-2">
              <img
                :src="match.teamA.club.logo"
                alt="team-1-icon"
                class="size-6 object-cover rounded-full"
              />
              <span class="font-semibold">{{ match.teamA.club.name }}</span>
            </div>
            <h2>vs</h2>
            <div class="flex items-center gap-2">
              <img
                :src="match.teamB.club.logo"
                alt="team-2-icon"
                class="size-6 object-cover rounded-full"
              />
              <span class="font-semibold">{{ match.teamB.club.name }}</span>
            </div>
          </div>
          <span class="shrink-0 text-gray-500">{{
            formatDate(match.scheduledAt)
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
