<script setup>
import { onMounted, ref } from "vue";
const api = useApi();

const data = ref(null);

onMounted(async () => {
  try {
    const res = await api.getPointTable(2);
    data.value = res || null;

    console.log(data.value);
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div class="border border-gray-700 rounded-lg mb-4 xl:mb-0">
    <div class="p-4 border-b border-gray-700">
      <h2 class="text-center font-semibold text-lg">Point Table</h2>
    </div>

    <!-- HEADER -->
    <div class="overflow-x-auto">
      <div class="min-w-[1500px]">
        <div class="grid grid-cols-14 divide-x divide-gray-700">
          <div class="text-start font-semibold px-4 py-2 col-span-2">Club</div>
          <div class="text-start font-semibold px-4 py-2 col-span-2">
            Players
          </div>
          <div class="text-start font-semibold px-4 py-2">Team Name</div>
          <div class="text-start font-semibold px-4 py-2 text-amber-500">
            MP
          </div>
          <div class="text-start font-semibold px-4 py-2 text-green-400">W</div>
          <div class="text-start font-semibold px-4 py-2 text-gray-400">D</div>
          <div class="text-start font-semibold px-4 py-2 text-red-400">L</div>
          <div class="text-start font-semibold px-4 py-2 text-gray-400">GF</div>
          <div class="text-start font-semibold px-4 py-2 text-gray-400">GA</div>
          <div class="text-start font-semibold px-4 py-2 text-gray-400">GD</div>
          <div class="text-start font-semibold px-4 py-2 text-blue-400">
            Point
          </div>
          <div class="text-start font-semibold px-4 py-2">Total Goals</div>
        </div>

        <!-- BODY -->
        <div class="w-full border-t border-gray-700">
          <div
            v-for="(d, index) in data"
            :key="index"
            class="grid grid-cols-14 divide-x divide-gray-700 items-stretch even:bg-gray-800"
            :class="{ 'border-b border-gray-700': index !== data.length - 1 }"
          >
            <div
              class="col-span-2 px-4 py-2 flex items-center gap-2 whitespace-nowrap"
            >
              <img
                :src="d?.team?.club?.logo"
                class="size-8 object-cover rounded-full"
              />
              <span>{{ d?.team?.club?.name }}</span>
            </div>

            <div class="px-4 py-2 col-span-2 space-y-1">
              <li
                v-for="player in d?.team?.players"
                :key="player.name"
                class="flex items-center gap-2 whitespace-nowrap"
              >
                <img
                  :src="player.profileImg"
                  class="size-6 rounded-full border object-cover grayscale"
                />
                {{ player.name }}
              </li>
            </div>

            <div class="px-4 py-2 flex items-center whitespace-nowrap">
              {{ d?.team?.name }}
            </div>

            <div
              class="px-4 py-2 flex items-center text-amber-500 font-semibold"
            >
              {{ d.played }}
            </div>
            <div class="px-4 py-2 flex items-center text-green-400">
              {{ d.won }}
            </div>
            <div class="px-4 py-2 flex items-center text-gray-400">
              {{ d.draw }}
            </div>
            <div class="px-4 py-2 flex items-center text-red-400">
              {{ d.lost }}
            </div>
            <div class="px-4 py-2 flex items-center text-gray-400">
              {{ d.goalFor }}
            </div>
            <div class="px-4 py-2 flex items-center text-gray-400">
              {{ d.goalAgainst }}
            </div>
            <div class="px-4 py-2 flex items-center text-gray-400">
              {{ d.goalDiff }}
            </div>
            <div
              class="px-4 py-2 flex items-center font-semibold text-blue-400"
            >
              {{ d.points }}
            </div>
            <div class="px-4 py-2 flex items-center">{{ d.totalGoals }} ⚽</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
