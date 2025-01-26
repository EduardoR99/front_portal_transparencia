<template>
  <div class="bg-primaryfont">
    <subMenu />
    <div class=" p-[3rem] flex flex-col">
      <div @click="goBack" class="p2 text-[#fff] text-lg font-semibold cursor-pointer hover:text-secondary">Voltar</div>
      <contentHeader :content="itemsTest.FieldHeader" :name="itemsTest.Name" :fount="itemsTest.FieldHeaderFount" />
      <tableEmpenho/>
    </div>
  </div>

</template>
<script setup>
import subMenu from "../components/subMenu.vue";
import contentHeader from "../components/contentHeader.vue";
import tableEmpenho from "../components/tableEmpenho.vue";
import { onMounted, ref } from "vue";
import testeData from "../services/teste.json";
import { useRouter } from "vue-router";
const router = useRouter();
const itemsTest = ref(testeData);
const goBack = () => {
  router.push({ name: 'home' });
};


</script>

<style></style>