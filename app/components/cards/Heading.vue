<script setup>
const props = defineProps({
  lable: String,
});
</script>

<template>
  <div
    class="px-4 py-2 border border-(--primary) rounded-lg text-xl text-(--primary) bg-(--primary)/10 backdrop-blur-xs w-fit"
  >
    <h3>{{ props.lable ?? "Heading" }}</h3>
  </div>
</template>
