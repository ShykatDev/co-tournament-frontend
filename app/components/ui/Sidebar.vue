<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAuthStore } from "~/store/authStore";

const isMenuOpen = ref(false);

// Use auth store
const auth = useAuthStore();

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
  <div
    class="border h-full rounded-xl border-(--dark-border) bg-(--dark-card) p-8 flex flex-col justify-between"
  >
    <div>
      <div>
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

        <!-- <UIcon name="i-lucide-lightbulb" /> -->
      </div>

      <div class="flex flex-col gap-4 mt-8">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/match">Match List</NuxtLink>
      </div>
    </div>

    <NuxtLink
      v-if="!auth.isLogin"
      to="/login"
      class="flex items-center justify-center gap-2 border border-(--primary)/20 bg-(--primary)/10 px-4 py-2 rounded-md"
    >
      <UIcon name="i-lucide-log-in" />
      <h3 class="">Login</h3>
    </NuxtLink>

    <div
      v-else
      @click="
        async () => {
          await auth.logout();
        }
      "
      class="flex items-center justify-between border border-(--primary)/20 bg-(--primary)/10 rounded-md px-4 py-3"
    >
      <div>
        <h2 class="text-(--primary) text-lg">{{ auth.user?.name }}</h2>
      </div>

      <UIcon name="i-lucide-log-out" class="text-white" />
    </div>
  </div>
</template>
