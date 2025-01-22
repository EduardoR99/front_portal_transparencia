<template>
  <subMenu/>
  Searchs
  
</template>

<script setup>
import subMenu from "../components/subMenu.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
onMounted(() => {
  console.log(route.params)
});
</script>

<style>

</style>