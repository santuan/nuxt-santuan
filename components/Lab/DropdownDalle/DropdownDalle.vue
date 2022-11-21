<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
</script>

<template>
  <div
    className="fixed bottom-0 md:bottom-auto moveUp duration-1000 top-auto md:top-1 md:right-12 right-0 z-50 w-80 m-3 text-right"
  >
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="btn !text-sm uppercase yellow">
          Indice
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="{1.5}"
            stroke="currentColor"
            class="w-4 h-4 ml-2 -mr-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 text-white origin-top-right divide-y divide-gray-100 rounded-md shadow-lg w-64 bg-gray-900/80 bottom-12 md:bottom-auto md:top-12 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="flex flex-col items-center justify-center px-2 py-2 space-y-3">
            <MenuItem>
              <NuxtLink class="black btn !text-xs w-full !justify-between !px-2" to="#intro">
                0<span> Introducción </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink class="blue btn !text-xs w-full !justify-between !px-2" to="#ejemplo1">
                1<span> Comparar estilos </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink class="red btn !text-xs w-full !justify-between !px-2" to="#ejemplo2">
                2<span> Variaciones de una imagen </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink class="yellow btn !text-xs w-full !justify-between !px-2" to="#ejemplo3">
                3<span> Variaciones de textos </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink class="green btn !text-xs w-full !justify-between !px-2" to="#ejemplo4">
                4<span> Generación espontánea </span>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
