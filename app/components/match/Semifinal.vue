<script setup>
const { data, pending, error, refresh } = useAPI(
  "bracket-matches",
  "/matches/brackets"
);

const semifinals = computed(() => {
  if (!data.value) return [];
  return data.value.filter((match) => match.matchType === "SEMIFINAL");
});
</script>

<template>
  <main class="flex flex-col gap-4 lg:gap-8">
    <div class="shrink-0 border p-4 pb-16 lg:p-8 lg:pb-20 rounded-xl border-border bg-center bg-cover relative">
      <div class="flex items-center justify-center">
        <CardsHeading lable="Road to Final" />
      </div>

      <div class="mt-16 flex flex-col lg:flex-row justify-between items-center relative z-10">
        <!-- left -->
        <div class="flex lg:flex-col w-full lg:w-fit justify-between relative">
          <!-- Team A -->
          <div class="flex flex-col lg:flex-row">
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 rounded-full border flex items-center justify-center bg-brand/10 text-brand relative"
              :class="semifinals[0]?.winning_team === 'teamA'
                ? 'border-lime-400'
                : 'border-brand/30'
                ">
              <img :src="semifinals[0]?.teamA?.club?.logo" :alt="semifinals[0]?.teamA?.club?.name"
                class="w-full h-full object-cover rounded-full" />

              <!-- Players -->
              <div class="flex lg:flex-col gap-2 absolute lg:left-full top-full lg:top-auto py-2 lg:px-2 lg:py-0">
                <UAvatar :src="semifinals[0]?.teamA?.players[0]?.profileImg"
                  :alt="semifinals[0]?.team?.players[0]?.name"
                  class="w-full h-full [&_img]:object-top grayscale-100 size-8 shrink-0 bg-white" />

                <div class="w-full h-px"></div>

                <UAvatar :src="semifinals[0]?.teamA?.players[1]?.profileImg"
                  :alt="semifinals[0]?.team?.players[1]?.name"
                  class="w-full h-full [&_img]:object-top grayscale-100 size-8 shrink-0 bg-white" />
              </div>
            </div>

            <!-- line -->
            <div
              class="w-14 lg:w-16 h-32 2xl:h-40 lg:mt-16 2xl:mt-20 border border-l-0 border-b-0 hidden lg:block lg:rounded-tr-2xl"
              :class="semifinals[0]?.winning_team === 'teamA'
                ? 'border-lime-400'
                : 'border-brand/30'
                " />
          </div>

          <!-- Team B -->
          <div class="flex flex-col lg:flex-row relative">
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 lg:mt-16 2xl:mt-20 rounded-full border flex items-center justify-center bg-brand/10 text-brand relative"
              :class="semifinals[0]?.winning_team === 'teamB'
                ? 'border-lime-400'
                : 'border-brand/30'
                ">
              <img :src="semifinals[0]?.teamB?.club?.logo" :alt="semifinals[0]?.teamA?.club?.name"
                class="w-full h-full object-cover rounded-full p-4" />

              <div class="flex lg:flex-col gap-2 absolute lg:left-full top-full lg:top-auto py-2 lg:px-2 lg:py-0">
                <UAvatar :src="semifinals[0]?.teamB?.players[0]?.profileImg"
                  :alt="semifinals[0]?.team?.players[0]?.name"
                  class="w-full h-full [&_img]:object-top grayscale-100 size-8 shrink-0 bg-white" />

                <div class="w-full h-px"></div>

                <UAvatar :src="semifinals[0]?.teamB?.players[1]?.profileImg"
                  :alt="semifinals[0]?.team?.players[1]?.name"
                  class="w-full h-full [&_img]:object-top grayscale-100 size-8 shrink-0 bg-white" />
              </div>
            </div>

            <!-- connection line to next team -->
            <div
              class="w-px lg:w-200 h-100 lg:h-px bg-linear-to-b lg:bg-linear-to-r from-brand/40 to-transparent absolute bottom-0 top-full lg:top-auto left-1/2 lg:left-full" />

            <!-- line -->
            <div class="w-16 h-32 2xl:h-40 border border-l-0 border-t-0 hidden lg:block lg:rounded-br-2xl" :class="semifinals[0]?.winning_team === 'teamB'
              ? 'border-lime-400'
              : 'border-brand/30'
              " />

            <!--bottom line -->
            <div
              class="w-16 h-32 2xl:h-20 border border-l-0 border-b-0 hidden lg:block lg:rounded-tr-2xl absolute bottom-0 right-0"
              :class="semifinals[0]?.winning_team === 'teamB'
                ? 'border-lime-400'
                : 'border-brand/30'
                " />
          </div>

          <!-- score -->
          <FinalScore :match="semifinals[0]"
            className="-top-12 bottom-auto left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2" />

          <h2 class="w-28 lg:w-32 mt-8 hidden lg:block 2xl:w-40 text-center text-brand text-lg absolute -bottom-12">
            Semifinal
          </h2>
        </div>

        <!-- Mobile only -->
        <div class="lg:hidden px-14 w-full">
          <div class="flex">
            <div class="w-1/2 h-18 border border-lime-400 border-t-0 border-r-0 rounded-bl-md" />
            <div class="w-1/2 h-18 border border-brand/30 border-l-lime-400 border-t-0 border-l-0 rounded-br-md" />
          </div>
        </div>

        <!-- middle -->
        <div class="flex-1 w-full lg:w-auto flex items-center justify-center flex-col lg:flex-row">
          <div class="w-px lg:w-full h-8 lg:h-px bg-lime-400"></div>

          <!-- Finalist -->
          <div class="relative">
            <div
              class="size-32 2xl:size-52 shrink-0 rounded-full border border-lime-400 flex items-center justify-center bg-brand/10 text-4xl text-brand">
              <img :src="semifinals[0]?.teamA?.club?.logo" :alt="semifinals[0]?.teamA?.club?.name"
                class="w-full h-full object-cover rounded-full" />
            </div>
            <h2 class="hidden lg:block text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2">
              Final
            </h2>
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/50"></div>

          <div class="size-16 rounded-full shrink-0 border border-brand/30 flex items-center justify-center">
            ⚽ 0
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/50"></div>

          <!-- Champion -->
          <div class="relative">
            <div
              class="size-48 2xl:size-72 shrink-0 rounded-full border border-brand flex items-center justify-center bg-brand/10 text-7xl text-brand relative">
              ?
            </div>
            <h2 class="hidden lg:block text-lg text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2">
              Champion 🏆
            </h2>
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/50"></div>

          <div class="size-16 rounded-full shrink-0 border border-brand/30 flex items-center justify-center">
            ⚽ 0
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/50"></div>

          <!-- Finalist -->
          <div class="relative">
            <div
              class="size-32 2xl:size-52 shrink-0 rounded-full border border-brand/50 flex items-center justify-center bg-brand/10 text-4xl text-brand">
              ?
            </div>

            <h2 class="hidden lg:block text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2">
              Final
            </h2>
          </div>
          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/30"></div>

          <!-- Semi Finalist -->
          <div class="relative w-full lg:w-auto h-full flex justify-between lg:flex-col gap-32 lg:gap-20">
            <div
              class="size-28 lg:size-36 2xl:size-40 shrink-0 rounded-full border border-brand/90 flex items-center justify-center bg-brand/10 text-4xl text-brand">
              <img :src="semifinals[1]?.teamB?.club?.logo" :alt="semifinals[1]?.teamA?.club?.name"
                class="w-full h-full object-cover rounded-full p-4" />
            </div>

            <div
              class="size-28 lg:size-36 2xl:size-40 shrink-0 rounded-full border border-brand/50 flex items-center justify-center bg-brand/10 text-4xl text-brand -ml-4 lg:ml-0">
              <img :src="semifinals[0]?.teamB?.club?.logo" :alt="semifinals[0]?.teamA?.club?.name"
                class="w-full h-full object-cover rounded-full p-4" />
            </div>

            <div
              class="absolute flex w-28 h-full lg:w-full lg:h-20 right-0 lg:left-0 -translate-1/2 -top-1/2 lg:top-full flex-col lg:flex-row">
              <!-- bottom middle-->
              <div
                class="absolute w-full h-full lg:h-1/2 lg:left-0 bottom-0 lg:border-r border-brand/40 flex items-end">
                <div
                  class="ml-auto w-px lg:w-full h-full lg:h-px bg-linear-to-t lg:bg-linear-to-l from-brand/40 top-transparent" />
              </div>
            </div>

            <div
              class="absolute flex w-[calc(100%-224px)] h-full lg:w-full lg:h-20 left-1/2 -translate-1/2 top-1/2 flex-col lg:flex-row">
              <div class="relative w-full h-full">
                <!-- score -->
                <div class="absolute w-1/2 lg:w-full top-1/2 left-1/2 -translate-1/2 flex justify-center z-20">
                  <div
                    class="flex items-center gap-2 bg-brand/10 backdrop-blur border rounded border-brand/30 w-fit h-full px-2">
                    <!-- <div class="flex items-center gap-2">
                      <img :src="semifinals[1]?.teamA?.club?.logo" :alt="semifinals[1]?.teamA?.club?.name"
                        class="size-5 shrink-0 hidden lg:block" />

                      <h3 class="text-xl lg:text-2xl font-semibold" :class="semifinals[1]?.scoreA > semifinals[1]?.scoreB
                        ? 'text-lime-400'
                        : ''
                        ">
                        {{ semifinals[1]?.scoreA ? semifinals[1].scoreA : "-" }}
                      </h3>
                    </div> -->
                    -
                    <span>:</span>
                    -
                    <!-- <div class="flex items-center gap-2">
                      <h3 class="text-xl lg:text-2xl font-semibold" :class="semifinals[1]?.scoreA < semifinals[1]?.scoreB
                        ? 'text-lime-400'
                        : ''
                        ">
                        {{ semifinals[1]?.scoreB ? semifinals[1].scoreB : "-" }}
                      </h3>
                      <img :src="semifinals[0]?.teamB?.club?.logo" :alt="semifinals[0]?.teamB?.club?.name"
                        class="size-5 object-cover hidden lg:block" />
                    </div> -->
                  </div>
                </div>

                <!-- left -->
                <div class="absolute w-1/2 h-[0.5px] left-0 top-1/2 -translate-y-1/2 bg-brand/90 lg:bg-brand/40 " />
                <!-- right -->
                <div class="absolute w-1/2 h-[0.5px] right-0 top-1/2 -translate-y-1/2 bg-brand/40 lg:bg-brand/90" />

                <!-- top -->
                <div class="absolute h-1/2 w-[0.5px] left-1/2 top-0 -translate-x-1/2 bg-brand/40 lg:bg-brand" />

                <!-- bottom -->
                <div class="absolute h-1/2 w-[0.5px] left-1/2 bottom-0 -translate-x-1/2 bg-brand/90 lg:bg-brand/40" />
              </div>
            </div>

            <!-- <h2
              class="hidden lg:block text-brand text-center mt-2 absolute left-1/2 -translate-x-1/2"
            >
              Final
            </h2> -->
          </div>

          <div class="w-px lg:w-full h-8 lg:h-px bg-brand/70"></div>
        </div>

        <!-- Mobile only -->
        <div class="lg:hidden px-14 w-full">
          <div class="flex">
            <div class="w-1/2 h-18 rounded-tl-lg border border-brand/30 border-b-0 border-r-0"></div>
            <div class="w-1/2 h-18 rounded-tr-lg border border-brand/90 border-b-0 border-l-0"></div>
          </div>
        </div>

        <!-- right -->
        <div class="flex lg:flex-col w-full lg:w-fit justify-between items-end relative">
          <!-- Team A -->
          <div class="flex flex-col lg:flex-row opacity-40">
            <!-- line -->
            <div
              class="hidden lg:block w-16 h-32 2xl:h-40 lg:mt-16 2xl:mt-20 border  border-r-0 border-b-0 lg:rounded-tl-2xl"
              :class="semifinals[1]?.winning_team === 'teamA'
                ? 'border-lime-400'
                : 'border-brand/30'
                " />
            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 rounded-full border  flex items-center justify-center bg-brand/10 text-brand relative"
              :class="semifinals[1]?.winning_team === 'teamA'
                ? 'border-lime-400'
                : 'border-brand/30'
                ">
              <img :src="semifinals[1]?.teamA?.club?.logo" :alt="semifinals[1]?.teamA?.club?.name"
                class="w-full h-full object-cover rounded-full p-5" />

              <!-- Players -->
              <div
                class="flex lg:flex-col gap-2 absolute lg:right-full bottom-full lg:bottom-auto py-2 lg:px-2 lg:py-0">
                <UAvatar :src="semifinals[1]?.teamA?.players[0]?.profileImg"
                  :alt="semifinals[1]?.team?.players[0]?.name"
                  class="w-full h-full [&_img]:object-top size-8 shrink-0 grayscale-100" />

                <div class="w-full h-px"></div>

                <UAvatar :src="semifinals[1]?.teamA?.players[1]?.profileImg"
                  :alt="semifinals[1]?.team?.players[1]?.name"
                  class="w-full h-full [&_img]:object-top size-8 shrink-0 grayscale-100" />
              </div>
            </div>
          </div>

          <!-- Team B -->
          <div class="flex flex-col lg:flex-row">
            <!-- line -->
            <div class="hidden lg:block w-16 h-32 2xl:h-40 border  border-r-0 border-t-0 lg:rounded-bl-2xl" :class="semifinals[1]?.winning_team === 'teamB'
              ? 'border-brand/90'
              : 'border-brand/30'
              " />

            <div
              class="size-28 lg:size-32 2xl:size-40 shrink-0 lg:mt-16 2xl:mt-20 rounded-full border flex items-center justify-center bg-brand/0 text-4xl text-brand relative"
              :class="semifinals[1]?.winning_team === 'teamB'
                ? 'border-brand/90'
                : 'border-brand/30'
                ">
              <img :src="semifinals[1]?.teamB?.club?.logo" :alt="semifinals[1]?.teamB?.club?.name"
                class="w-full h-full object-cover rounded-full p-4" />

              <!-- Players -->
              <div
                class="flex lg:flex-col gap-2 absolute lg:right-full bottom-full lg:bottom-auto py-2 lg:px-2 lg:py-0">
                <UAvatar :src="semifinals[1]?.teamB?.players[0]?.profileImg"
                  :alt="semifinals[1]?.team?.players[0]?.name" class="w-full h-full grayscale-100 size-8 shrink-0" />

                <div class="w-full h-px"></div>
                <UAvatar :src="semifinals[1]?.teamB?.players[1]?.profileImg"
                  :alt="semifinals[1]?.team?.players[1]?.name" class="w-full h-full grayscale-100 size-8 shrink-0" />
              </div>
            </div>
          </div>

          <!-- score -->
          <FinalScore :match="semifinals[1]" />

          <h2 class="w-28 lg:w-32 mt-8 hidden lg:block 2xl:w-40 text-center text-brand text-lg absolute -bottom-12">
            Semifinal
          </h2>
        </div>
      </div>
    </div>
  </main>
</template>
