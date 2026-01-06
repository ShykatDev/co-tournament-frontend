<template>
  <main class="p-4 lg:py-10 lg:px-28 xl:px-36 gap-8 min-h-screen relative">
    <div
      class="bg-[#FFDABA]/20 w-96 h-screen fixed top-0 left-1/2 rotate-20 blur-[100px] -z-50"
    />

    <UiNavbar />

    <div class="mt-6">
      <slot />
    </div>
  </main>
</template>
