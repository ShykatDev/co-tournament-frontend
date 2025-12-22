<script setup>
definePageMeta({
  layout: "without-header-footer",
});
const api = useAPIMethods();
const toast = useToast();
const show = ref(false);
const isLoading = ref(false);
const route = useRoute();
const formdata = ref({
  email: "admin.co-tournament@email.com",
  password: "",
});

const onSubmit = async () => {
  try {
    isLoading.value = true;

    await api.login({ ...formdata.value });
    // await api.getMe

    toast.add({
      title: "Login success",
      color: "success",
    });

    await navigateTo("/");
  } catch (err) {
    console.error(err);

    toast.add({
      title: err?.data?.message || err?.message || "Login failed",
      color: "error",
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center gap-10">
    <div class="w-1/2 h-full hidden md:block">
      <img
        src="/assets/images/login-cover.jpeg"
        alt="login-cover"
        class="h-full object-cover"
      />
    </div>
    <div class="flex flex-col gap-y-4 md:gap-y-10 justify-center md:w-1/2">
      <div>
        <NuxtLink to="/">
          <img
            src="/images/logo.svg"
            alt="logo"
            class="w-12 object-cover mix-blend-difference"
          />
        </NuxtLink>
        <h1 class="mt-4 text-3xl font-semibold">
          Login as <span class="text-primary">Admin</span>
        </h1>

        <p class="mt-2 text-gray-400">
          Please login to control the
          <span class="text-gray-200">match</span> and
          <span class="text-gray-200">score</span>
        </p>
      </div>

      <div>
        <UForm @submit.prevent="onSubmit" class="space-y-4">
          <UFormField label="Email">
            <UInput
              placeholder="Enter your email"
              size="lg"
              class="w-full md:w-1/2"
              v-model="formdata.email"
            />
          </UFormField>

          <UFormField label="Password">
            <UInput
              v-model="formdata.password"
              placeholder="Password"
              :type="show ? 'text' : 'password'"
              class="w-full md:w-1/2"
              size="lg"
              :ui="{ trailing: 'pe-1' }"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  size="sm"
                  :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                  :aria-label="show ? 'Hide password' : 'Show password'"
                  :aria-pressed="show"
                  aria-controls="password"
                  @click="show = !show"
                />
              </template>
            </UInput>
          </UFormField>

          <UBadge variant="soft" color="info" class="block w-fit font-normal"
            >For edit access, please contact with current admin</UBadge
          >
          <UButton
            :loading="isLoading"
            :disabled="isLoading"
            loading-icon="i-lucide-loader-circle"
            color="secondary"
            icon="i-lucide-log-in"
            type="submit"
          >
            {{ isLoading ? "Loading" : "Login" }}
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>
