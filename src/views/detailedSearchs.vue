<template>
  <div class="bg-primaryfont">
    <subMenu />
    
    <div class="p-[3rem] flex flex-col">
      <div @click="goBack" class="p2 text-[#fff] text-lg font-semibold cursor-pointer hover:text-secondary">Voltar</div>
      <contentHeader
        :content="itemsTest.FieldHeader"
        :name="itemsTest.Name"
        :fount="itemsTest.FieldHeaderFount"
      />
      <div
        class="w-full grid sm:grid-cols-1 lg:grid-cols-2 bg-[#fff] border-r border-b border-l mb-[3rem] p-3 border-secondary rounded-lg"
      >
      
        <detailedField title="Ano" :content="empenhoData.ano" />
        <detailedField title="Mês" :content="empenhoData.mes" />
        <detailedField
          title="Unidade Gestora"
          :content="empenhoData.unidade_gestora"
        />
        <detailedField title="Data" :content="empenhoData.data" />
        <detailedField title="Espécie" :content="empenhoData.especie" />
        <detailedField title="Empenho" :content="empenhoData.empenho" />
        <detailedField
          title="Tipo Empenho"
          :content="empenhoData.tipo_empenho"
        />
        <detailedField
          title="Elemento Despesa"
          :content="empenhoData.elemento_despesa"
        />
        <detailedField title="Subtítulo" :content="empenhoData.subtitulo" />
        <detailedField title="Função" :content="empenhoData.funcao" />
        <detailedField title="Subfunção" :content="empenhoData.subfuncao" />
        <detailedField title="Programa" :content="empenhoData.programa" />
        <detailedField
          title="Fonte Recurso"
          :content="empenhoData.fonte_recurso"
        />
        <detailedField
          title="Grupo Despesa"
          :content="empenhoData.grupo_despesa"
        />
        <detailedField
          title="Documento Favorecido"
          :content="empenhoData.documento_favorecido"
        />
        <detailedField
          title="Nome Favorecido"
          :content="empenhoData.nome_favorecido"
        />
        <detailedField title="Valor" :content="empenhoData.valor" />
      </div>
      <detailedSearchMenu @itemClicked="handleItemClicked" />
      <div
        class="w-full bg-[#fff] border-r border-b border-l mb-[3rem] p-3 border-secondary rounded-lg"
      >
      <div
        v-for="(item, index) in itemsTest.content"
        :key="index"
        class="w-full bg-[#fff]  mb-[3rem] p-3 rounded-lg"
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
      </div></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getEmpenhoById } from "../services/api";
import detailedField from "../components/detailedField.vue";
import contentHeader from "../components/contentHeader.vue";
import testeData from "../services/teste.json";
import detailedSearchMenu from "../components/detailedSearchMenu.vue";
import subMenu from "../components/subMenu.vue";
const route = useRoute();
const router = useRouter();
const empenhoData = ref([]);
const itemsTest = ref(testeData);
const selectedItem = ref(null);

const goBack = () => {
  router.push({ name: 'searchs' });
};

const handleItemClicked = (item) => {
  selectedItem.value = item;
  console.log("Item clicked:", item);
};
onMounted(async () => {
  try {
    const id = route.params.id;
    const data = await getEmpenhoById(id);
    empenhoData.value = data;
  } catch (error) {
    console.error("Failed to fetch empenho data by id:", error);
  }
});
</script>

<style></style>
