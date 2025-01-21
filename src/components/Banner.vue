<template>
  <div class="flex justify-center items-center">
    <img
      id="banner-image"
      src="../assets/banner.jpg"
      alt=""
      class="w-full h-[52vh] object-cover"
    />
  </div>
</template>

<script setup>
</script>

<style>
img {
  object-fit: cover;
  object-position: center bottom; /* Alinha a parte inferior da imagem */
  width: 100%;
  height: 50vh;
}
</style>
