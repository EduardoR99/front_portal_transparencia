<template>
  <div class="hover:scale-105 transition-transform duration-300">
    <div
     title="aaaa" class="bg-secondary text-primaryFont rounded-md p-6 flex flex-col "
    >
      <p class="text-xl font-semibold">{{ title }}</p>
      <span class="text-sm text-justify py-2 font-medium">{{ subtitle }}</span>

      <div class="flex flex-col justify-end items-end text-[13px]">
        <span>{{ visualisations }}</span>
        <span>{{ lastUpdate }}</span>

        <span
          class="hover:cursor-pointer"
          @click="
            () => {
              isContentVisible = !isContentVisible;
            }
          "
        >
          Acesso Rápido
        </span>
      </div>
    </div>
    <div
      v-show="isContentVisible"
      class="bg-secondary text-primaryFont rounded-b-md p-6 flex flex-col transition-all mt-[-1rem]"
    >
      <ul class="text-sm text-justify py-2">
        <li class="cursor-pointer hover:text-white" v-for="(subItem, index) in subItems" :key="index">{{ subItem }}</li>
      </ul>
      <ul class="text-sm text-start py-2">
        <li class="cursor-pointer hover:text-white" v-for="(content, index) in downloadableContent" :key="index">
          {{ content }}
        </li>
      </ul>
      <ul class="text-sm text-justify py-2">
        <li class="hover:text-white" v-for="(link, index) in externalLinks" :key="index">{{ link }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
  subtitle: String,
  subItems: Array,
  downloadableContent: Array,
  externalLinks: Array,
  visualisations: String,
  lastUpdate: String,
});
const isContentVisible = ref(false);
</script>

<style></style>