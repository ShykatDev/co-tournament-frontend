<script setup>
import { reactive } from "vue";
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  isLive: {
    type: Boolean,
    default: false,
  },
  isEnd: {
    type: Boolean,
    default: false,
  },
});

const isEditing = ref(false);
const isLoading = ref(false);

const scores = reactive({
  scoreA: null,
  scoreB: null,
});

const api = useApi();
const handleStart = async (id) => {
  await api.startMatch(id);
  window.location.reload();
};

const handleEdit = async (id) => {
  isLoading.value = true;
  isEditing.value = !isEditing.value;
  isLoading.value = false;
};

const handleSubmit = async (id) => {
  isLoading.value = true;
  isEditing.value = !isEditing.value;

  await api.editMatchResult(id, scores);

  isLoading.value = false;

  window.location.reload();
};
</script>

<template>
  <div
    v-for="match in data"
    class="border border-gray-200 rounded flex items-center whitespace-nowrap gap-8 overflow-x-auto justify-between py-2 px-4 relative"
    :class="{
      ' bg-blue-50': isLive,
      'bg-gray-100 cursor-no-drop opacity-65': isEnd,
    }"
  >
    <div class="flex items-center gap-6 shrink-0">
      <div class="flex items-center gap-2">
        <img :src="match?.teamA?.club?.logo" alt="club" class="w-10 rounded" />
        <p class="font-semibold">{{ match?.teamA?.club?.name }}</p>
      </div>

      <span class="font-bold text-xl">vs</span>

      <div class="flex items-center gap-2">
        <img :src="match?.teamB?.club?.logo" alt="club" class="w-10 rounded" />
        <p class="font-semibold">{{ match?.teamB?.club?.name }}</p>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <span>Score: </span>
      <div class="flex items-center gap-2">
        <p v-if="!isEditing">{{ match?.scoreA ?? "N/A" }}</p>
        <input
          v-else
          v-model="scores.scoreA"
          type="number"
          name=""
          id=""
          min="0"
          class="border outline-none w-10 text-center"
        />
      </div>

      <span class="font-bold text-xl">-</span>

      <div class="flex items-center gap-2">
        <p v-if="!isEditing">{{ match?.scoreB ?? "N/A" }}</p>
        <input
          v-else
          v-model="scores.scoreB"
          type="number"
          name=""
          id=""
          min="0"
          class="border outline-none w-10 text-center"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <span>{{ match?.status }}</span>
      <div
        v-show="isLive"
        class="size-2 rounded-full bg-red-500 animate-pulse"
      />
    </div>

    <div v-show="isEnd">
      <span
        >Winner -
        {{
          match?.scoreA > match?.scoreB
            ? match?.teamA?.club?.name
            : match?.teamB?.club?.name
        }}</span
      >
    </div>

    <button
      v-show="isLive && !isEditing"
      class="text-sm px-2 py-1 rounded bg-blue-300"
      @click="handleEdit"
    >
      Edit Match
    </button>

    <button
      v-show="isEditing"
      class="text-sm px-2 py-1 rounded bg-gray-300"
      @click="() => handleSubmit(match?.id)"
    >
      Save Changes
    </button>

    <button
      v-show="!isLive && !isEnd"
      class="text-sm px-2 py-1 rounded bg-green-300"
      @click="() => handleStart(match?.id)"
    >
      Start Match
    </button>
  </div>
</template>
