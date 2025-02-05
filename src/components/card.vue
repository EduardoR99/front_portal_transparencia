<template>
  <div class="hover:scale-105 text-primaryfont transition-transform duration-300">
    <div
     title="aaaa" class="bg-secondary border-[1px] border-primary rounded-md p-8 flex flex-col "
    >
      <p class="text-[1.6rem] text-primary font-bold">{{ item.title }}</p>
      <span class="text-[.95rem] text-justify py-2 font-medium">{{ item.subtitle }}</span>

      <div class="flex flex-col justify-end items-end text-[13px]">
        <span>{{ item.visualisations }}</span>
        <span>{{ item.lastUpdate }}</span>

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
        <li @click="goTo()" class="cursor-pointer hover:text-white" v-for="(subItem, index) in item.subItems" :key="index">{{ subItem }}</li>
      </ul>
      <ul class="text-sm text-start py-2">
        <li @click="goTo()" class="cursor-pointer hover:text-white" v-for="(content, index) in item.downloadableContent" :key="index">
          {{ content }}
        </li>
      </ul>
      <ul class="text-sm text-justify py-2">
        <li @click="goTo()" class="hover:text-white" v-for="(link, index) in item.externalLinks" :key="index">{{ link }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const goTo = () => {
  router.push({ name: 'searchs' });
};
defineProps({
  item: Object
});
const isContentVisible = ref(false);
</script>

<style></style>