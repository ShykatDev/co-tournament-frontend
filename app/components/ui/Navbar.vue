<script setup>
import { Menu05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import { onMounted, ref } from "vue";
const api = useAPIMethods();

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
  <nav class="mt-4 bg-gray-950 rounded-xl relative border border-gray-800">
    <div class="flex justify-between items-center p-4">
      <NuxtLink to="/">
        <img
          src="/images/logo.svg"
          alt="logo"
          class="w-12 object-cover mix-blend-difference"
        />
      </NuxtLink>

      <div class="flex gap-4 items-center">
        <NuxtLink
          to="/match"
          class="py-1.5 rounded block"
          @click="handleMenuToggle"
        >
          <UButton class="" variant="soft" color="secondary">Match</UButton>
        </NuxtLink>
        <!-- <div class="relative">
          <img
            src="/assets/images/fc.jpg"
            alt="fc"
            class="size-10 object-cover rounded brightness-200"
          />

          <div
            class="size-2 bg-red-500 rounded-full absolute -top-0.5 -right-0.5"
          />
        </div> -->

        <button @click="handleMenuToggle">
          <HugeiconsIcon :icon="Menu05Icon" />
        </button>
      </div>
    </div>

    <!-- menu -->
    <div
      v-show="isMenuOpen"
      class="absolute p-2 top-[115%] right-0 z-50 border border-gray-600 rounded backdrop-blur-sm bg-gray-900/90"
    >
      <NuxtLink
        to="/login"
        class="px-4 py-1.5 rounded"
        @click="handleMenuToggle"
      >
        Login
      </NuxtLink>
    </div>
  </nav>
</template>
