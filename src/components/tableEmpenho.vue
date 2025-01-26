<template>
  <div class="overflow-x-auto">
        <table class="min-w-full bg-white p-6 text-primaryfont">
          <thead>
            <tr>
            <th class="py-2 px-4 border-b">Detalhes</th>
              <th class="py-2 px-4 border-b">Ano</th>
              <th class="py-2 px-4 border-b">Mês</th>
              <th class="py-2 px-4 border-b">Unidade Gestora</th>
              <th class="py-2 px-4 border-b">Data</th>
              <th class="py-2 px-4 border-b">Espécie</th>
              <th class="py-2 px-4 border-b">Empenho</th>
              <th class="py-2 px-4 border-b">Tipo Empenho</th>
              <th class="py-2 px-4 border-b">Elemento Despesa</th>
              <th class="py-2 px-4 border-b">Subtítulo</th>
              <th class="py-2 px-4 border-b">Função</th>
              <th class="py-2 px-4 border-b">Subfunção</th>
              <th class="py-2 px-4 border-b">Programa</th>
              <th class="py-2 px-4 border-b">Fonte Recurso</th>
              <th class="py-2 px-4 border-b">Grupo Despesa</th>
              <th class="py-2 px-4 border-b">Documento Favorecido</th>
              <th class="py-2 px-4 border-b">Nome Favorecido</th>
              <th class="py-2 px-4 border-b">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedData" :key="index">
                <td @click="goToDetails(item.id)" class="py-2 px-4 border-b text-sm cursor-pointer">Ver mais +</td>
              <td class="py-2 px-4 border-b">{{ item.ano }}</td>
              <td class="py-2 px-4 border-b">{{ item.mes }}</td>
              <td class="py-2 px-4 border-b">{{ item.unidade_gestora }}</td>
              <td class="py-2 px-4 border-b">{{ formatDate(item.data) }}</td>
              <td class="py-2 px-4 border-b">{{ item.especie }}</td>
              <td class="py-2 px-4 border-b">{{ item.empenho }}</td>
              <td class="py-2 px-4 border-b">{{ item.tipo_empenho }}</td>
              <td class="py-2 px-4 border-b">{{ item.elemento_despesa }}</td>
              <td class="py-2 px-4 border-b">{{ item.subtitulo }}</td>
              <td class="py-2 px-4 border-b">{{ item.funcao }}</td>
              <td class="py-2 px-4 border-b">{{ item.subfuncao }}</td>
              <td class="py-2 px-4 border-b">{{ item.programa }}</td>
              <td class="py-2 px-4 border-b">{{ item.fonte_recurso }}</td>
              <td class="py-2 px-4 border-b">{{ item.grupo_despesa }}</td>
              <td class="py-2 px-4 border-b">{{ item.documento_favorecido }}</td>
              <td class="py-2 px-4 border-b">{{ item.nome_favorecido }}</td>
              <td class="py-2 px-4 border-b">{{ formatCurrency(item.valor) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between mt-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="prevPage" :disabled="currentPage === 1">
          Anterior
        </button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="nextPage"
          :disabled="currentPage === totalPages">
          Próximo
        </button>
      </div>
</template>

<script setup>
import { onMounted, ref,computed } from "vue";
import testeData from "../services/teste.json";
import { getEmpenho } from "../services/api";
import { useRouter } from "vue-router";

const itemsTest = ref(testeData);
const router = useRouter();
const empenhoData = ref([]);
const currentPage = ref(1);
const rowsPerPage = 20;

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  return empenhoData.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(empenhoData.value.length / rowsPerPage);
});

const formatDate = (value) => {
  return new Date(value).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToDetails = (id) => {
  router.push({ name: 'detailedSearchs', params: { id } });
};

onMounted(async () => {
  try {
    empenhoData.value = await getEmpenho()
  } catch (error) {
    console.error('Failed to fetch empenho data:', error);
  }
});
</script>

<style>

</style>