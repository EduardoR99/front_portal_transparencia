<template>
  <div class="relative">
    <div
      @click="toggleMenu"
      class="flex justify-between items-center font-semibold cursor-pointer text-sm bg-blue-600 text-white px-2 py-2 rounded-md"
    >
      <span class="text-sm">{{ title }}</span>
      <span class="text-xs font-light">{{ isOpen ? "▲" : "▼" }}</span>
    </div>
    <div
      v-show="isOpen"
      class="absolute top-full left-0 bg-white shadow-lg rounded-md w-64 z-10"
    >
      <div v-if="subItems && subItems.length" class="p-4">
        <ul>
          <li
            v-for="(subItem, index) in subItems"
            :key="'subItem-' + index"
            class="text-[12px] cursor-pointer hover:text-primary py-1"
          >
            {{ subItem }}
          </li>
        </ul>
      </div>
      <div v-if="downloadableContent && downloadableContent.length" class="p-4">
        <h3 class="font-sm text-blue-700 mb-1">Conteúdos para Download</h3>
        <ul>
          <li
            v-for="(content, index) in downloadableContent"
            :key="'content-' + index"
            class="text-[12px] cursor-pointer hover:text-primary py-1"
          >
            {{ content }}
          </li>
        </ul>
      </div>
      <div v-if="externalLinks && externalLinks.length" class="p-4">
        <h3 class="font-sm text-blue-700 mb-1">Links Externos</h3>
        <ul>
          <li
            v-for="(link, index) in externalLinks"
            :key="'link-' + index"
            class="text-[12px] cursor-pointer hover:text-primary py-1"
          >
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  subtitle: String,
  subItems: Array,
  downloadableContent: Array,
  externalLinks: Array,
  isOpen: Boolean
});

const emit = defineEmits(['toggle']);

const toggleMenu = () => {
  emit('toggle');
};
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.z-10 {
  z-index: 10;
}

.shadow-lg {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-md {
  border-radius: 0.375rem;
}
</style>