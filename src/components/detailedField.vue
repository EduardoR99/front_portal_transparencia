<template>
  <div class="bg-[#fff] m-[1rem]">
    <div class="bg-secondary rounded-lg w-full flex justify-between items-center p-[1.1rem]">
      <span class="w-[75px] font-bold text-primaryfont text-sm">{{ title }}</span>
      
      <div  class="p-2 border-[1px] text-sm w-full rounded-md bg-[#D9D9D9] border-secondary outline-none focus:drop-shadow-3xl">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});
</script>

<style>
</style>