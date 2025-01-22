<template>
  <div
    class="bg-primaryfont grid gap-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8"
  >
    <subMenuItem
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
</template>

<script setup>
import { ref } from "vue";
import subMenuItem from "./subMenuItem.vue";
import HomePageData from "../services/HomePage.json";

const itemsMenu = ref(HomePageData.ItemsMenu);
</script>

<style></style>