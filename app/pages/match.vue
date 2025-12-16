<script setup>
import { onMounted, ref } from "vue";
const api = useApi();

const data = ref(null);
const clubs = ref(null);
const teams = ref(null);

const isAdd = ref(false);

const formData = ref({
  tournamentId: 2,
  teamAId: null,
  teamBId: null,
  scheduledAt: null,
});

const onSubmit = async () => {
  if (
    !formData.value.teamAId ||
    !formData.value.teamBId ||
    !formData.value.scheduledAt
  ) {
    alert("Please fill all fields");
    return;
  }

  const payload = {
    ...formData.value,
    scheduledAt: formatDate(formData.value.scheduledAt),
  };

  // send payload to your API
  await api.createMatch(payload);
  formData.teamAId = null;
  formData.teamBId = null;
  formData.scheduledAt = null;
  isAdd.value = false;

  window.location.reload();
};

// Format date as YYYY-MM-DD HH:mm:ss
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

onMounted(async () => {
  try {
    const res = await api.getAllMatches();
    const resClubs = await api.getAllClubs();
    const resTeams = await api.getAllTeams();
    data.value = res || null;
    clubs.value = resClubs || null;
    teams.value = resTeams || null;
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div class="space-y-6 pt-6">
    <div class="flex justify-between">
      <h1 class="font-semibold text-2xl">All Match</h1>

      <button
        class="border px-3 py-1 rounded"
        @click="
          () => {
            isAdd = !isAdd;
            formData.teamAId = null;
            formData.teamBId = null;
            formData.scheduledAt = null;
          }
        "
      >
        {{ isAdd ? "Close" : "Add Match" }}
      </button>
    </div>

    <form
      v-show="isAdd"
      @submit.prevent="onSubmit"
      class="w-full border rounded border-gray-200 p-4 flex justify-center items-end gap-4"
    >
      <div>
        <label for="teamA" class="block">Select Team A</label>
        <select
          id="teamA"
          v-model="formData.teamAId"
          class="border p-2 rounded"
        >
          <option value="" disabled>Team A</option>
          <option v-for="team in teams" :key="team.id" :value="team.id">
            {{ team.name }} - {{ team.club.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="teamB" class="block">Select Team B</label>
        <select
          id="teamB"
          v-model="formData.teamBId"
          class="border p-2 rounded"
        >
          <option value="" disabled>Team B</option>
          <option v-for="team in teams" :key="team.id" :value="team.id">
            {{ team.name }} - {{ team.club.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="match_time" class="block">Date</label>
        <input
          type="datetime-local"
          id="match_time"
          v-model="formData.scheduledAt"
          class="border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        class="border px-4 py-2 rounded bg-black text-white"
      >
        Submit
      </button>
    </form>

    <CardsMatchCard
      :data="data?.filter((d) => d.status === 'ONGOING')"
      isLive="true"
    />

    <div class="space-y-4">
      <CardsMatchCard :data="data?.filter((d) => d.status === 'UPCOMING')" />
    </div>

    <div class="space-y-4">
      <CardsMatchCard
        :data="data?.filter((d) => d.status === 'FINISHED')"
        isEnd="true"
      />
    </div>
  </div>
</template>
