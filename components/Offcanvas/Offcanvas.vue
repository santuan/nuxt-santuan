<template>
  <div data-turbo-permanent id="offcanvas">
    <button
      class="fixed inset-0 bg-gray-900/60 duration-300 backdrop-blur w-full"
      @click="show = !show"
      aria-label="Close menu"
      :class="[show ? '  opacity-0 select-none z-0 ' : ' opacity-100 z-[998] ']"
    />
    <button
      class="offcanvasBtn fixed text-lg justify-center items-center opacity-80 rounded-md overflow-hidden hover:opacity-100 p-0.5 bg-gray-700/80 hover:bg-gray-800/90 duration-1000 font-bold text-gray-100 right-2 z-[999] flex top-4"
      @click="show = !show"
      aria-label="Open menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div class="OffcanvasNav" :class="[show ? '  translate-x-full ' : ' translate-x-0  ']">
      <NuxtLink @click="show = !show" href="/" class="btn h-24 yellow"> <span>Inicio</span> </NuxtLink>
      <NuxtLink @click="show = !show" href="/galeria" class="btn h-24 red"> <span>Hechos con Blender</span> </NuxtLink>
      <NuxtLink @click="show = !show" href="/lab/dall-e" class="btn h-24 blue"> <span>Hechos con <br/> Dall-E</span> </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
</script>

<style>
.OffcanvasNav {
  @apply fixed right-0 text-center shadow-2xl font-mono text-2xl space-y-6 top-0 bottom-0 bg-gray-900 text-white duration-700 w-64 p-3 z-[1000] flex justify-start pt-6 flex-col overflow-y-auto;
}

</style>
