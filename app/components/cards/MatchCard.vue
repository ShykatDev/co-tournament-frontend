<script setup>
import { reactive } from "vue";
import { useAuthStore } from "~/store/authStore";
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
const toast = useToast();
const auth = useAuthStore();

const isEditing = ref(false);
const isLoading = ref(false);

const scores = reactive({
  scoreA: null,
  scoreB: null,
});

const api = useAPIMethods();
const handleStart = async (id) => {
  try {
    await api.startMatch(id);
    await refreshNuxtData("matches-all");
  } catch (err) {
    console.error(err);
  }
};

const handleEdit = async (id) => {
  isLoading.value = true;
  isEditing.value = !isEditing.value;
  isLoading.value = false;
};

const handleSubmit = async (id) => {
  isLoading.value = true;
  isEditing.value = !isEditing.value;

  try {
    await api.editMatchResult(id, scores);
    toast.add({
      title: "Match Updated!",
      color: "success",
    });
    await refreshNuxtData("matches-all");
  } catch (err) {
    toast.add({
      title: "Something went wrong!",
      color: "error",
    });
  }

  isLoading.value = false;
};

const onDelete = async (id) => {
  try {
    await api.deleteMatch(id);
    toast.add({
      title: "Match Deleted!",
      color: "success",
    });
    await refreshNuxtData("matches-all");
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <UCard
    variant="subtle"
    v-for="match in data"
    class="relative bg-(--dark-card)/50 ring-(--dark-border)"
    :class="{
      'bg-primary/5 ring-green-500/10': isEnd,
      'ring-1 bg-red-500/10 ring-red-900/50': isLive,
    }"
  >
    <div
      class="grid grid-cols-[1fr_max-content] gap-y-4 lg:grid-cols-3 lg:divide-x divide-accented"
      :class="{ 'divide-red-900/50': isLive }"
    >
      <div class="space-y-2 gap-6 shrink-0 px-2">
        <div class="flex items-center gap-2">
          <UAvatar size="xs" :src="match?.teamA?.club?.logo" alt="club" />
          <p class="font-semibold">{{ match?.teamA?.club?.name }}</p>
        </div>

        <div class="flex items-center gap-2">
          <UAvatar size="xs" :src="match?.teamB?.club?.logo" alt="club" />
          <p class="font-semibold">{{ match?.teamB?.club?.name }}</p>
        </div>
      </div>

      <div class="space-y-2 gap-6 shrink-0 px-2">
        <div class="flex items-center gap-2">
          <p v-if="!isEditing">
            <span v-if="match?.status === 'ONGOING'"> 0 </span>
            <span v-else>
              {{ match?.scoreA ?? "N/A" }}
            </span>
          </p>

          <div v-else class="flex gap-2 items-center mb-1">
            <label for="scoreA" class="text-xs">{{
              match?.teamA?.club?.name
            }}</label>
            <UInput
              v-model="scores.scoreA"
              type="number"
              id="scoreA"
              min="0"
              class="h-6 w-10"
            />
          </div>
        </div>

        <div class="flex items-center gap-2">
          <p v-if="!isEditing">
            <span v-if="match?.status === 'ONGOING'"> 0 </span>
            <span v-else>
              {{ match?.scoreB ?? "N/A" }}
            </span>
          </p>
          <div v-else class="flex items-center gap-2">
            <label for="scoreA" class="text-xs">{{
              match?.teamB?.club?.name
            }}</label>
            <UInput
              v-model="scores.scoreB"
              type="number"
              id="scoreA"
              min="0"
              class="h-6 w-10"
            />
          </div>
        </div>
      </div>

      <div
        class="pl-2 flex flex-row justify-between items-center lg:items-start lg:flex-col gap-y-2 col-span-2 lg:col-span-1 order-first lg:order-3"
      >
        <div class="flex xl:justify-between gap-2 w-full">
          <UBadge
            :color="isEnd ? 'primary' : isLive ? 'neutral' : 'info'"
            :label="match?.status.toLowerCase()"
            variant="soft"
            class="capitalize w-fit"
          />
          <div v-show="!isLive && !isEnd" class="">
            <UDropdownMenu
              :disabled="!auth.isLogin"
              class="disabled:opacity-30 cursor-none"
              :content="{
                align: 'end',
                side: 'bottom',
                sideOffset: 8,
              }"
              :items="[
                [
                  {
                    label: 'Delete',
                    icon: 'i-lucide-trash',
                    onSelect: () => onDelete(match.id),
                    color: 'error',
                    size: 'xs',
                  },
                ],
              ]"
            >
              <UButton
                icon="i-lucide-ellipsis-vertical"
                size="xs"
                variant="soft"
              />
            </UDropdownMenu>
          </div>

          <UBadge
            color="error"
            variant="outline"
            size="sm"
            v-if="isLive"
            class="font-semibold animate-pulse"
          >
            Live
          </UBadge>
        </div>

        <!-- Winner -->
        <div v-show="isEnd">
          <div class="flex items-center gap-2">
            <div
              v-if="match?.scoreA > match?.scoreB"
              class="flex items-center gap-1"
            >
              <UAvatar :src="match?.teamA?.club?.logo" size="2xs" />
              <span class="text-sm text-nowrap"
                >{{ match?.teamA?.club?.name }} 🏆
              </span>
            </div>

            <div v-else-if="match?.scoreA === match?.scoreB">
              <span class="text-gray-500 text-nowrap text-sm">Draw 🤝</span>
            </div>
            <div v-else class="flex items-center gap-1">
              <UAvatar :src="match?.teamB?.club?.logo" size="2xs" />
              <span class="text-sm text-nowrap"
                >{{ match?.teamB?.club?.name }} 🏆</span
              >
            </div>
          </div>
        </div>

        <div v-show="isLive && !isEditing">
          <UButton
            :disabled="!auth.isLogin"
            class="text-sm px-2 py-1 text-nowrap"
            color="info"
            @click="handleEdit"
          >
            Edit Match

            <UIcon
              v-show="!auth.isLogin"
              name="i-lucide-lock"
              class="size-3 text-yellow-500 ml-1"
            />
          </UButton>
        </div>

        <div v-show="isEditing" class="flex items-center gap-2">
          <UButton
            size="sm"
            class="text-nowrap"
            @click="() => handleSubmit(match?.id)"
          >
            Save Changes
          </UButton>

          <UButton
            variant="outline"
            color="neutral"
            size="sm"
            class=""
            @click="isEditing = false"
          >
            Cancel
          </UButton>
        </div>

        <div class="hidden lg:block" v-show="!isLive && !isEnd">
          <UTooltip
            :text="!auth.isLogin ? 'Admin access required' : ''"
            delay-duration="0"
            arrow
          >
            <UButton
              :disabled="!auth.isLogin"
              size="sm"
              class="w-full text-center block lg:inline-block lg:w-fit disabled:opacity-50"
              @click="() => handleStart(match?.id)"
              variant="subtle"
              color="neutral"
            >
              Start Match

              <UIcon
                v-show="!auth.isLogin"
                name="i-lucide-lock"
                class="size-3 text-yellow-500 ml-1"
              />
            </UButton>
          </UTooltip>
        </div>
      </div>
    </div>

    <!-- Mobile Start -->
    <div class="lg:hidden mt-4" v-show="!isLive && !isEnd">
      <UTooltip
        :text="!auth.isLogin ? 'Admin access required' : ''"
        delay-duration="0"
        arrow
      >
        <UButton
          :disabled="!auth.isLogin"
          size="md"
          class="w-full text-center block lg:inline-block lg:w-fit disabled:opacity-50"
          @click="() => handleStart(match?.id)"
          variant="subtle"
          color="neutral"
        >
          Start Match
          <UIcon
            v-show="!auth.isLogin"
            name="i-lucide-lock"
            class="size-3 text-yellow-500 ml-1"
          />
        </UButton>
      </UTooltip>
    </div>
  </UCard>
</template>
