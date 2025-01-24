<template>
    <div class="flex">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="bg-white px-[.3rem] cursor-pointer text-primaryfont font-semibold py-2 mb-[-7px] rounded-t-md border-[1px] border-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white outline-none"
        tabindex="0"
        @click="handleClick(item)"
      >
        {{ item }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const menuItems = ref([
    'Classificação Orçamentária',
    'Bem(ns) e Serviço(s)',
    'Liquidação(ões)',
    'Pagamento(s)',
    'Outras Informações'
  ]);
  
  const emit = defineEmits(['itemClicked']);
  
  const handleClick = (item) => {
    emit('itemClicked', item);
  };
  </script>
  
  <style>
  </style>