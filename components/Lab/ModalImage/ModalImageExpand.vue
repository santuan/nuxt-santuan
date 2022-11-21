<template>
  <div class="relative object-cover h-full">
    <button type="button" @click="openModal" aria-label="Expand Picture" class="btn !hidden lg:!flex !p-2 absolute right-0 m-3 top-0">
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
    <nuxt-img
      :placeholder="15"
      format="webp"
      :alt="title"
      :src="img"
      class="md:w-full h-full object-center object-cover aspect-square"
    />
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="fixed inset-0 z-[99999]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="absolute inset-0 bg-gray-900/80 backdrop-blur-xl cursor-pointer" />
      </TransitionChild>
      <div class="absolute inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="[expandImage ? ' max-w-full ' : 'max-w-2xl']"
              class="w-full font-rubik text-left duration-1000 transform overflow-hidden align-middle shadow-xl mx-auto transition-all"
            >
              <DialogTitle as="h2" class="hidden"> How to play </DialogTitle>
              <button
                @click="expandImage = !expandImage"
                class="	 hover:opacity-100 opacity-80 duration-300"
                :class="[expandImage ? ' cursor-zoom-out ' : ' cursor-zoom-in ']"
              >
                <nuxt-img :placeholder="15" format="webp" :alt="title" :src="img" />
              </button>
              <div class="absolute right-0 m-2 top-0">
                <button type="button" @click="closeModal" aria-label="Expand Picture" class="btn !hidden lg:!flex !p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

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

const isOpen = ref(false);
const expandImage = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
