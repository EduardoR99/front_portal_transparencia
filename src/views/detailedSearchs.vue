<template>
  <div class="bg-primaryfont">
    <subMenu/>
    <div class=" p-[3rem] flex flex-col">
    
    <contentHeader
      :content="itemsTest.FieldHeader"
      :name="itemsTest.Name"
      :fount="itemsTest.FieldHeaderFount"
    />
    <div
      v-for="(item, index) in itemsTest.content"
      :key="index"
      class="w-full bg-[#fff] border-r border-b border-l mb-[3rem] p-3 border-secondary rounded-lg"
    >
      <div
        class="bg-secondary rounded-t-lg w-full text-[18px] flex flex-col justify-center items-start py-[.7rem]"
      >
        <p class="text-primaryfont font-semibold ml-6">{{ item.Name }}</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-2 mt-2 gap-4 px-6 pb-6">
        <detailedField
          v-for="(field, fieldIndex) in item.contentItens"
          :key="fieldIndex"
          :title="field.title"
          :content="field.content"
        />
      </div>
    </div>
    <detailedSearchMenu @itemClicked="handleItemClicked"/>
    <div
      class="w-full bg-[#fff] border-r border-b border-l mb-[3rem] p-3 border-secondary rounded-lg"
    >teste</div>
  </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import detailedField from "../components/detailedField.vue";
import contentHeader from "../components/contentHeader.vue";
import testeData from "../services/teste.json";
import detailedSearchMenu from "../components/detailedSearchMenu.vue";
import subMenu from "../components/subMenu.vue";

const itemsTest = ref(testeData);
const handleItemClicked = (item) => {
  console.log('Item clicked:', item);
};
</script>

<style></style>
