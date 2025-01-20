<script>
export default {
  name: "Header"
}

</script>

<template>
  <header class="w-full p-4 bg-white border-b border-gray-200 sm:translate-x-0 ">
    <div class="flex flex-row justify-between max-w-7xl mx-auto">
      <div class="flex flex-row items-center">
        <router-link :to="{ name: 'home' }" class="flex cursor-pointer">
          <img src="https://www.lefisc.com.br/monitoramentoncm/img/logo.png" class="h-6 sm:h-9" alt="Gerador GNRE" />
        </router-link>
        <div class="h-6 border-l border-l-slate-400 mx-4"></div>
        <router-link :to="{ name: 'home' }" class="flex cursor-pointer">
          <span class="self-center text-xl font-semibold whitespace-nowrap">SPED para Excel</span>
        </router-link>
      </div>

    </div>
  </header>
</template>