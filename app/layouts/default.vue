<template>
  <main class="p-4 lg:p-10 flex flex-col lg:flex-row gap-8 min-h-screen">
    <nav class="w-full lg:w-1/6 hidden lg:block">
      <UiSidebar />
    </nav>

    <nav class="block lg:hidden">
      <UiNavbar />
    </nav>
    <div class="lg:flex-1">
      <slot />
    </div>
  </main>
</template>
