<template>
    <div class="bg-primary ">
      <div class="grid p-5 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <card
          v-for="(item, index) in itemsMenu"
          :key="index"
          :title="item.title"
          :subtitle="item.subtitle"
          :subItems="item.subItem"
          :downloadableContent="item.downloadableContent"
          :externalLinks="item.externalLinks"
          :visualisations="item.visualisations"
          :lastUpdate="item.lastUpdate"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import card from '../components/card.vue';
  import HomePageData from '../services/HomePage.json';  
  
  const itemsMenu = ref(HomePageData.ItemsMenu);
  </script>
  
  <style></style>
  