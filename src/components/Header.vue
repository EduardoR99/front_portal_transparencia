<script>
export default {
  name: "Header"
}

</script>

<template>
  <header class="w-full p-3 bg-secondaryLight  sm:translate-x-0 ">
    <div class="flex flex-row justify-between max-w-7xl mx-auto">
      <div class="flex flex-row items-center">
        <router-link :to="{ name: 'home' }" class="flex cursor-pointer">
          <img src="https://s3.amazonaws.com/el.com.br/portal/uploads/1847/brasao/brasao-novo.png" class="h-6 sm:h-9" alt="Gerador GNRE" />
        </router-link>
        <div class="h-6 border-l border-l-slate-400 mx-4"></div>
        <router-link :to="{ name: 'home' }" class="flex cursor-pointer">
          <div class="flex flex-col justify-start items-start">
            <span class="text-xl font-semibold whitespace-nowrap">Portal da Transparência</span>
            <span class="text-sm font-semibold whitespace-nowrap">PREFEITURA MUNICIPAL DE COLATINA - ES</span>
          </div>
        </router-link>
      </div>

    </div>
  </header>
</template>