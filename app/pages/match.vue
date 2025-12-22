<script setup>
import { ref } from "vue";
const toast = useToast();
const api = useAPIMethods();

const { data, pending, error, refresh } = useAPI("matches", "/matches");
const {
  data: teams,
  pending: teamsPending,
  error: teamsError,
} = useAPI("teams", "/teams");

const isAdd = ref(false);

const items = computed(() => {
  if (!teams.value) return [];

  return teams.value.map((t) => ({
    label: `${t?.club?.name} | ${t?.name}`,
    value: t?.id,
    avatar: {
      src: t?.club?.logo || "https://github.com/benjamincanac.png",
      alt: "t.name",
    },
  }));
});

const formData = ref({
  tournamentId: 2,
  teamAId: null,
  teamBId: null,
  scheduledAt: new Date(),
});

const onSubmit = async () => {
  if (!formData.value.teamAId || !formData.value.teamBId) {
    alert("Please fill all fields");
    return;
  }

  const payload = {
    ...formData.value,
    scheduledAt: formatDate(formData.value.scheduledAt),
  };

  try {
    await api.createMatch(payload);
    toast.add({
      title: "Match Created!",
      color: "success",
    });
  } catch (err) {
    console.log(err);
    toast.add({
      title: "Something went wrong!",
      color: "error",
    });
  }

  formData.teamAId = null;
  formData.teamBId = null;
  formData.scheduledAt = null;
  isAdd.value = false;

  refresh();
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

const avatarA = computed(
  () =>
    items.value.find((item) => item.value === formData.value.teamAId)?.avatar
);
const avatarB = computed(
  () =>
    items.value.find((item) => item.value === formData.value.teamBId)?.avatar
);
</script>

<template>
  <div v-if="pending">
    <LoadingMatchCard />
  </div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else class="space-y-6 py-6">
    <div class="flex justify-between">
      <h1 class="font-semibold text-2xl">All Match</h1>

      <UButton
        disabled
        variant="soft"
        color="info"
        :icon="isAdd ? 'i-lucide-circle-minus' : 'i-lucide-circle-plus'"
        class="border px-3 py-1 rounded disabled:opacity-30"
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

        <UIcon name="i-lucide-lock" class="size-3 text-yellow-500" />
      </UButton>
    </div>

    <UCard variant="subtle" v-show="isAdd">
      <form
        @submit.prevent="onSubmit"
        class="w-full rounded flex flex-col md:flex-row md:items-end gap-2 gap-y-4"
      >
        <UFormField label="Team A" required>
          <USelect
            variant="subtle"
            placeholder="Select Team A"
            v-model="formData.teamAId"
            :items="items"
            value-key="value"
            :avatar="avatarA"
            class="w-full md:w-64 py-2"
          />
        </UFormField>

        <UFormField label="Team B" required>
          <USelect
            placeholder="Select Team B"
            v-model="formData.teamBId"
            :items="items"
            value-key="value"
            :avatar="avatarB"
            class="w-full md:w-64 py-2"
          />
        </UFormField>

        <UButton
          type="submit"
          variant="solid"
          color="neutral"
          class="py-2 text-center block md:inline-block"
        >
          Submit
        </UButton>
      </form>
    </UCard>

    <div v-show="data?.find((d) => d.status === 'ONGOING')">
      <UBadge
        variant="soft"
        color="neutral"
        size="xl"
        class="w-full text-center block mb-2 py-2"
        label="Ongoing Match"
      />
      <CardsMatchCard
        :data="data?.filter((d) => d.status === 'ONGOING')"
        isLive="true"
      />
    </div>

    <div>
      <UBadge
        variant="soft"
        color="info"
        size="xl"
        class="w-full text-center block mb-2 py-2"
        label="Upcoming Matches"
      />

      <div class="grid lg:grid-cols-2 gap-2">
        <CardsMatchCard :data="data?.filter((d) => d.status === 'UPCOMING')" />
      </div>
    </div>

    <div>
      <UBadge
        variant="soft"
        size="xl"
        class="w-full text-center block mb-2 py-2"
        label="Finished Matches"
      />

      <div class="grid lg:grid-cols-2 gap-2">
        <CardsMatchCard
          :data="data?.filter((d) => d.status === 'FINISHED')"
          isEnd="true"
        />
      </div>
    </div>
  </div>
</template>
