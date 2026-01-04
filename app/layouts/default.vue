<template>
  <main class="p-4 lg:py-10 lg:px-32 xl:px-44 gap-8 min-h-screen relative">
    <div
      class="bg-[#FFDABA]/20 w-72 h-screen fixed top-0 left-1/2 rotate-20 blur-[100px] -z-50"
    />

    <UiNavbar />

    <div class="mt-6">
      <slot />
    </div>
  </main>
</template>
