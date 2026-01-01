<template>
  <div>
    <!-- <div class="mt-4 flex gap-2 justify-between">
      <USkeleton class="w-28 lg:w-56 h-10 bg-card border border-border" />
      <USkeleton class="w-20 lg:w-32 h-10 bg-card border border-border" />
    </div> -->
    <USkeleton class="h-10 w-full mt-4 bg-card border border-border" />
    <div class="grid lg:grid-cols-2 gap-4 mt-4">
      <UCard v-for="_ in Array(6)" class="bg-card/20 ring-border">
        <div class="space-y-4 lg:space-y-0">
          <div class="flex gap-2 lg:hidden">
            <USkeleton class="w-20 h-6 bg-card border border-border" />
            <USkeleton class="w-6 h-6 bg-card border border-border" />
          </div>
          <div class="">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center gap-2">
                <USkeleton
                  class="size-6 rounded-full bg-card border border-border"
                />
                <USkeleton class="h-6 w-28 bg-card border border-border" />
              </div>
              <USkeleton class="size-6 bg-card border border-border" />
              <div class="gap-2 space-y-2 hidden lg:flex">
                <USkeleton class="w-20 h-6 bg-card border border-border" />
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-2">
                <USkeleton
                  class="size-6 rounded-full bg-card border border-border"
                />
                <USkeleton class="h-6 w-28 bg-card border border-border" />
              </div>
              <USkeleton class="size-6 bg-card border border-border" />
              <div class="gap-2 space-y-2 hidden lg:flex">
                <USkeleton class="w-20 h-6 bg-card border border-border" />
              </div>
            </div>
          </div>

          <USkeleton class="w-full h-6 lg:hidden" />
        </div>
      </UCard>
    </div>
  </div>
</template>
