<script setup lang="ts">
import { Menu05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import { onMounted, ref } from "vue";
import { useAuthStore } from "~/store/authStore";

const isMenuOpen = ref(false);

// Use auth store
const auth = useAuthStore();

// Toggle menu
const handleMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fetch tournaments (example)
onMounted(async () => {
  try {
    // Fetch logged-in user on mount
    await auth.fetchMe();
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <nav class="bg-card rounded-xl relative border border-border">
    <div class="flex justify-between items-center px-4 py-2">
      <UiLogo />

      <div class="flex gap-4 items-center">
        <NuxtLink to="/match" class="py-1.5 rounded block underline">
          Match List
        </NuxtLink>

        <button @click="handleMenuToggle">
          <HugeiconsIcon :icon="Menu05Icon" />
        </button>
      </div>
    </div>

    <!-- dropdown menu -->
    <div
      v-show="isMenuOpen"
      class="absolute p-2 top-[115%] right-0 z-50 border border-border rounded backdrop-blur-sm bg-card/50"
    >
      <!-- Show Login if user is NOT logged in -->
      <NuxtLink
        v-if="!auth.isLogin"
        to="/login"
        class="rounded flex items-center gap-2"
        @click="handleMenuToggle"
      >
        <UButton
          icon="i-lucide-log-in"
          class="bg-card text-brand border border-border hover:bg-brand/10"
          variant="soft"
        >
          Login
        </UButton>
      </NuxtLink>

      <!-- Show Logout if user IS logged in -->
      <div v-else>
        <div class="border-b border-border pb-2 mb-2">
          <h2 class="text-brand">{{ auth.user?.name }}</h2>
          <small class="text-text/50">{{ auth.user.email }}</small>
        </div>
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
