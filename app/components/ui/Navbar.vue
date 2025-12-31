<script setup lang="ts">
import { Menu05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import { onMounted, ref } from "vue";
import { useAuthStore } from "~/store/authStore";

const isMenuOpen = ref(false);

// Use auth store
const auth = useAuthStore();

console.log(auth.user, "auth user");

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
  <nav
    class="bg-(--dark-card) rounded-xl relative border border-(--dark-border)"
  >
    <div class="flex justify-between items-center px-4 py-2">
      <NuxtLink to="/">
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.5136 0C33.5385 0 31.676 0.483995 30.0385 1.33987C29.0903 1.83533 28.2176 2.45554 27.4419 3.17882L27.3219 3.29213L27.3249 3.28912L22.8611 7.51485L14.9183 15.0334L14.8658 15.0834C14.198 15.7072 13.3373 16.1268 12.3826 16.2437C12.2041 16.2654 12.0221 16.2768 11.8377 16.2768C9.38575 16.2768 7.39855 14.2896 7.39855 11.8377C7.39855 9.38575 9.38575 7.39855 11.8377 7.39855C13.6471 7.39855 15.2034 8.48108 15.8947 10.0343L21.3844 4.83754C19.2302 1.90404 15.7566 0 11.8377 0C5.29984 0 0 5.29984 0 11.8377C0 18.3756 5.29984 23.6754 11.8377 23.6754C13.8128 23.6754 15.6753 23.1914 17.313 22.3355C18.2604 21.8401 19.1325 21.2211 19.9077 20.4983L20.0294 20.3833L24.4897 16.1605C26.2165 20.5605 30.5008 23.6754 35.5131 23.6754C42.0509 23.6754 47.3508 18.3756 47.3508 11.8377C47.3508 5.29984 42.0515 0 35.5136 0ZM39.9528 11.8377C39.9528 14.2896 37.9656 16.2768 35.5136 16.2768C33.0617 16.2768 31.0746 14.2896 31.0746 11.8377C31.0746 10.5816 31.5965 9.44783 32.4349 8.64019C32.4506 8.62515 32.4662 8.61068 32.4819 8.59622C33.2757 7.85364 34.3413 7.39855 35.5143 7.39855C37.9662 7.39855 39.9528 9.38575 39.9528 11.8377Z"
            fill="#FFDABA"
          />
        </svg>
      </NuxtLink>

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
      class="absolute p-2 top-[115%] right-0 z-50 border border-(--dark-border) rounded backdrop-blur-sm bg-(--dark-card)/50"
    >
      <!-- Show Login if user is NOT logged in -->
      <NuxtLink
        v-if="!auth.isLogin"
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
        <div class="border-b border-(--dark-border) pb-2 mb-2">
          <h2 class="text-(--primary)">{{ auth.user?.name }}</h2>
          <small class="">{{ auth.user.email }}</small>
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
