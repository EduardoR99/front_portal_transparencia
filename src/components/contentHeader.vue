<template>
  <div
    class="w-full flex text-primaryfont flex-col bg-[#fff] border-r border-b border-l px-[.5rem] py-[1rem] mb-[-5px] border-secondary rounded-t-lg"
  >
    <h2 class="font-bold">{{name}}</h2>
    <p class="font-semibold">{{ content }}</p>
    <span class="text-sm italic self-end mt-3"> {{fount}}</span>
    
  </div>
</template>

<script setup>
defineProps({
  name: String,
  content: String,
  fount: String
});
</script>

<style>
</style>