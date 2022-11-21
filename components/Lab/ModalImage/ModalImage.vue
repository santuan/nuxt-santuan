<template>
  <div class="relative" @keyup.esc="openModal = !openModal">
    <button type="button" @click="openModal = !openModal" class="btn !p-2 absolute right-0 m-3 top-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    </button>
    <nuxt-img :placeholder="15" format="webp"  :alt="title" :src="img" />
    <Teleport to="body">
      <button
      @click="openModal = !openModal"
       :class="[openModal ? ' opacity-100 z-[999998]  ' : 'opacity-0 -z-10']" class="bg-gray-900/80 duration-300 backdrop-blur-xl fixed inset-0"/>
      <div
        tabindex="-1"
        :class="[openModal ? ' opacity-100 z-[999999]  ' : 'opacity-0 -z-10']"
        aria-hidden="true"
        class="overflow-hidden duration-300 fixed w-full inset-0  flex  justify-center items-center"
      >
        <div class="relative w-full h-full max-w-xl md:h-auto">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex flex-col items-start justify-between ">
              <nuxt-img :placeholder="15" format="webp" :alt="title" :src="img" />
              <button
                type="button"
                class="text-gray-400 absolute right-2 top-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="defaultModal"
                @click="openModal = !openModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Cerrar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const openModal = ref(false);

const props = defineProps({
  img: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
