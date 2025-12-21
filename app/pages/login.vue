<script setup>
definePageMeta({
  layout: "without-header-footer",
});
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
    <div class="flex flex-col gap-y-4 md:gap-y-10 justify-center w-1/2">
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
          Please login to control the match and score
        </p>
      </div>

      <div>
        <UForm action="" class="space-y-4">
          <UFormField label="Email">
            <UInput
              placeholder="Enter your email"
              size="lg"
              class="w-full md:w-1/2"
            />
          </UFormField>

          <UFormField label="Password">
            <UInput
              placeholder="Enter your password"
              size="lg"
              type="password"
              class="w-full md:w-1/2"
            />
          </UFormField>

          <UBadge variant="soft" color="info" class="block w-fit font-normal"
            >For admin access, please contact with current admin</UBadge
          >
          <UButton color="secondary">Login</UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>
