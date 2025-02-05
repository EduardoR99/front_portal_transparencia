<template>
    <div class="bg-primaryfont ">
        <div class="max-w-7xl grid justify-center m-auto p-7 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <card
          v-for="(item, index) in itemsMenu"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import card from '../components/card.vue';
  import HomePageData from '../services/HomePage.json';  
  const itemsMenu = ref(HomePageData.ItemsMenu);
  </script>
  
  <style></style>
  