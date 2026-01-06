<template>
  <main class="flex flex-col gap-4 lg:gap-8">
    <div
      class="shrink-0 border p-4 lg:p-8 lg:pb-16 rounded-xl border-border bg-[url('/assets/images/semifinal-bg.png')] bg-center bg-cover relative"
    >
      <div
        class="w-full h-full absolute inset-0 bg-black/65 rounded-xl backdrop-blur-xs z-0"
      />

      <div class="flex items-center justify-center">
        <CardsHeading lable="Road to Final" />
      </div>

      <div
        class="mt-6 lg:mt-12 flex flex-col lg:flex-row justify-between items-center relative z-10"
      >
        <!-- left -->
        <div class="flex lg:flex-col w-full lg:w-fit justify-between relative">
          <div class="flex flex-col lg:flex-row">
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 text-4xl text-brand relative"
            >
              ?

              <div
                class="flex lg:flex-col gap-2 absolute lg:left-full top-full lg:top-auto py-2 lg:px-2 lg:py-0"
              >
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
                <div class="w-full h-px"></div>
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
              </div>
            </div>

            <!-- line -->
            <div
              class="w-14 lg:w-16 h-32 2xl:h-40 lg:mt-16 2xl:mt-20 border border-brand/30 border-l-0 border-b-0 hidden lg:block lg:rounded-tr-2xl"
            />
          </div>

          <div class="flex flex-col lg:flex-row">
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 lg:mt-16 2xl:mt-20 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 text-4xl text-brand relative"
            >
              ?

              <div
                class="flex lg:flex-col gap-2 absolute lg:left-full top-full lg:top-auto py-2 lg:px-2 lg:py-0"
              >
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
                <div class="w-full h-px"></div>
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
              </div>
            </div>

            <!-- line -->
            <div
              class="w-16 h-32 2xl:h-40 border border-brand/30 border-l-0 border-t-0 hidden lg:block lg:rounded-br-2xl"
            />
          </div>

          <h2
            class="w-28 lg:w-32 mt-8 hidden lg:block 2xl:w-40 text-center text-brand text-lg absolute -bottom-10"
          >
            Semifinal
          </h2>
        </div>

        <!-- Mobile only -->
        <div class="lg:hidden px-14 w-full">
          <div class="w-full h-18 border border-brand/30 border-t-0"></div>
        </div>

        <!-- middle -->
        <div
          class="flex-1 flex items-center justify-center flex-col lg:flex-row"
        >
          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/30"></div>

          <!-- Finalist -->
          <div class="relative">
            <div
              class="size-32 2xl:size-52 shrink-0 rounded-full border border-brand/50 flex items-center justify-center bg-brand/10 text-4xl text-brand"
            >
              ?
            </div>
            <h2
              class="hidden lg:block text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2"
            >
              Final
            </h2>
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/50"></div>

          <!-- Champion -->
          <div class="relative">
            <div
              class="size-48 2xl:size-72 shrink-0 rounded-full border border-brand flex items-center justify-center bg-brand/10 text-7xl text-brand relative"
            >
              ?
            </div>
            <h2
              class="hidden lg:block text-lg text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2"
            >
              Champion 🏆
            </h2>
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/50"></div>

          <!-- Finalist -->
          <div class="relative">
            <div
              class="size-32 2xl:size-52 shrink-0 rounded-full border border-brand/50 flex items-center justify-center bg-brand/10 text-4xl text-brand"
            >
              ?
            </div>

            <h2
              class="hidden lg:block text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2"
            >
              Final
            </h2>
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/30"></div>
        </div>

        <!-- Mobile only -->
        <div class="lg:hidden px-14 w-full">
          <div
            class="w-full h-18 rounded-t-lg border border-brand/30 border-b-0"
          ></div>
        </div>

        <!-- right -->
        <div
          class="flex lg:flex-col w-full lg:w-fit justify-between items-end relative"
        >
          <div class="flex flex-col lg:flex-row">
            <!-- line -->
            <div
              class="hidden lg:block w-16 h-32 2xl:h-40 lg:mt-16 2xl:mt-20 border border-brand/30 border-r-0 border-b-0 lg:rounded-tl-2xl"
            />
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 text-4xl text-brand relative"
            >
              ?

              <div
                class="flex lg:flex-col gap-2 absolute lg:right-full bottom-full lg:bottom-auto py-2 lg:px-2 lg:py-0"
              >
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
                <div class="w-full h-px"></div>
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row">
            <!-- line -->
            <div
              class="hidden lg:block w-16 h-32 2xl:h-40 border border-brand/30 border-r-0 border-t-0 lg:rounded-bl-2xl"
            />
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 lg:mt-16 2xl:mt-20 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 text-4xl text-brand relative"
            >
              ?

              <div
                class="flex lg:flex-col gap-2 absolute lg:right-full bottom-full lg:bottom-auto py-2 lg:px-2 lg:py-0"
              >
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
                <div class="w-full h-px"></div>
                <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
              </div>
            </div>
          </div>

          <h2
            class="w-28 lg:w-32 mt-8 hidden lg:block 2xl:w-40 text-center text-brand text-lg absolute -bottom-10"
          >
            Semifinal
          </h2>
        </div>
      </div>
    </div>

    <div
      class="w-full flex-1 h-full border border-border p-4 lg:p-8 lg:pb-16 rounded-xl flex flex-col items-center justify-center"
    >
      <CardsHeading lable="3rd Place" />

      <div class="mt-6 lg:mt-12 flex flex-col lg:flex-row items-center">
        <div
          class="size-28 lg:size-32 2xl:size-40 shrink-0 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 text-4xl text-brand relative"
        >
          ?

          <div
            class="flex lg:flex-col gap-2 absolute lg:right-full top-full lg:top-auto py-2 lg:px-2 lg:py-0"
          >
            <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
            <div class="w-full h-px"></div>
            <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
          </div>
        </div>

        <div class="w-px lg:w-16 h-16 lg:h-px bg-brand/30"></div>

        <!-- middle -->
        <div class="relative">
          <div
            class="size-48 2xl:size-64 shrink-0 rounded-full border border-brand flex items-center justify-center bg-brand/10 text-7xl text-brand relative"
          >
            ?
          </div>
          <h2
            class="hidden lg:block text-lg text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2"
          >
            3rd Position
          </h2>
        </div>

        <div class="w-px lg:w-16 h-16 lg:h-px bg-brand/30"></div>

        <div
          class="size-28 lg:size-32 2xl:size-40 shrink-0 rounded-full border border-brand/30 flex items-center justify-center bg-brand/10 text-4xl text-brand relative"
        >
          ?

          <div
            class="flex lg:flex-col gap-2 absolute lg:left-full bottom-full lg:bottom-auto py-2 lg:px-2 lg:py-0"
          >
            <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
            <div class="w-full h-px"></div>
            <div class="size-10 shrink-0 rounded-full bg-brand/10"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
