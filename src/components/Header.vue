<script>
export default {
  name: "Header"
}

</script>

<template>
  <header class="w-full p-3 bg-primary  sm:translate-x-0 ">
    <div class="flex flex-row justify-between  mx-auto">
      <div class="flex flex-row items-center">
        <div class="flex cursor-pointer">
          <img src="https://s3.amazonaws.com/el.com.br/portal/uploads/1847/brasao/brasao-novo.png" class="h-6 sm:h-9" alt="Gerador GNRE" />
        </div>
        <div class="h-6 border-l border-l-slate-400 mx-4"></div>
        <div class="flex cursor-pointer">
          <div class="flex flex-col justify-start items-start">
            <span class="text-xl text-[#fff] font-semibold whitespace-nowrap">Portal da Transparência</span>
            <span class="text-sm font-semibold text-secondary whitespace-nowrap">PREFEITURA MUNICIPAL DE COLATINA - ES</span>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>