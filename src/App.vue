<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
</script>

<template>
  <Header />
  <Banner/>
      <RouterView />
  <Footer />
</template>

<style scoped></style>
