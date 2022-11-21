<script setup>
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, Teleport } from "vue";
const expandImage = ref(false);
const [state, send] = useMachine(dialog.machine({ id: "1" }));
const api = computed(() => dialog.connect(state.value, send, normalizeProps));

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

<template>
  <div class="relative object-cover">
    <button type="button" ref="ref" v-bind="api.triggerProps" class="btn !p-2 absolute right-0 m-3 top-0">
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
      class="md:w-full h-96 object-center md:h-[80vh] object-cover"
    />
  </div>
  <Teleport to="body">
    <div v-if="api.isOpen" class="fixed inset-0 z-[99999] flex justify-center items-center">
      <div v-bind="api.backdropProps" class="fixed inset-0 bg-gray-800/80 backdrop-blur-2xl" />
      <div v-bind="api.underlayProps">
        <div v-bind="api.contentProps" :class="[expandImage ? ' max-w-7xl ' : 'max-w-2xl']" class="duration-1000 mx-auto relative z-10">
          <button @click="expandImage = !expandImage" class="cursor-pointer  duration-300">
            <nuxt-img :placeholder="15" format="webp" :alt="title" :src="img" />
          </button>
          <div class="absolute right-0 m-2 top-0">
            <button type="button" v-bind="api.closeButtonProps" class="btn !p-2">
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
        </div>
      </div>
    </div>
  </Teleport>
</template>
