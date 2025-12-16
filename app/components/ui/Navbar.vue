<script setup>
import { Menu05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import { onMounted, ref } from "vue";
const api = useApi();

const data = ref(null);
const isMenuOpen = ref(false);

const handleMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(async () => {
  try {
    const res = await api.getTournaments();
    data.value = res || null;

    console.log(data.value);
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <nav
    class="container mx-auto mt-4 bg-gray-50 rounded-xl border border-gray-200 relative"
  >
    <div class="flex justify-between items-center p-4">
      <NuxtLink to="/">
        <img src="/images/logo.png" alt="logo" class="w-12 object-cover" />
      </NuxtLink>

      <div class="flex gap-4 items-center">
        <div class="relative">
          <img
            src="/assets/images/fc.jpg"
            alt="fc"
            class="size-10 object-cover rounded"
          />

          <div
            class="size-2 bg-red-500 rounded-full absolute -top-0.5 -right-0.5"
          />
        </div>

        <button @click="handleMenuToggle">
          <HugeiconsIcon :icon="Menu05Icon" />
        </button>
      </div>
    </div>

    <!-- menu -->
    <div
      v-show="isMenuOpen"
      class="absolute p-2 top-[115%] right-0 z-50 border border-gray-300 rounded backdrop-blur-xs bg-gray-50"
    >
      <NuxtLink
        to="/match"
        class="px-4 py-1.5 rounded"
        @click="handleMenuToggle"
      >
        Match Details
      </NuxtLink>
    </div>
  </nav>
</template>
