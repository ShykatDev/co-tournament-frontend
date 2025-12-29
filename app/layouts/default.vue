<template>
  <main class="p-10 flex gap-8 min-h-screen">
    <nav class="w-1/6">
      <UiSidebar />
    </nav>
    <div class="w-5/6">
      <slot />
    </div>
  </main>
</template>
