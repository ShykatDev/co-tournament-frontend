<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Menu05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";

const isMenuOpen = ref(false);

// Use auth composable
const auth = useAuth();

// Toggle menu
const handleMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fetch tournaments (example)
onMounted(async () => {
  try {
    // Fetch logged-in user on mount
    await auth.fetchUser();
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
        <NuxtLink to="/match" class="py-1.5 rounded block">
          <UButton variant="soft" color="secondary">Match</UButton>
        </NuxtLink>

        <button @click="handleMenuToggle">
          <HugeiconsIcon :icon="Menu05Icon" />
        </button>
      </div>
    </div>

    <!-- dropdown menu -->
    <div
      v-show="isMenuOpen"
      class="absolute p-2 top-[115%] right-0 z-50 border border-gray-600 rounded backdrop-blur-sm bg-gray-900/90"
    >
      <!-- Show Login if user is NOT logged in -->
      <NuxtLink
        v-if="!!auth.loggedIn"
        to="/login"
        class="rounded flex items-center gap-2"
        @click="handleMenuToggle"
      >
        <UButton icon="i-lucide-log-in" color="secondary" variant="soft">
          Login
        </UButton>
      </NuxtLink>

      <!-- Show Logout if user IS logged in -->
      <div v-else>
        <UButton
          trailing-icon="i-lucide-log-out"
          color="error"
          variant="soft"
          @click="
            async () => {
              await auth.logout();
              handleMenuToggle();
            }
          "
        >
          Logout
        </UButton>
      </div>
    </div>
  </nav>
</template>
