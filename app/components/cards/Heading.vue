<script setup>
const props = defineProps({
  lable: String,
});
</script>

<template>
  <div
    class="px-4 py-1 lg:py-2 border border-brand/20 rounded-md lg:rounded-lg text-xl text-brand bg-brand/10 backdrop-blur-xs w-fit"
  >
    <h3 class="text-sm lg:text-base">{{ props.lable ?? "Heading" }}</h3>
  </div>
</template>
