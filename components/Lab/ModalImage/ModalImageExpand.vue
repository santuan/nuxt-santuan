<template>
  <a :href="img" class="glightbox">
    <nuxt-img
      :placeholder="15"
      format="webp"
      :alt="title"
      :src="img"
      class="md:w-full h-full object-center object-cover aspect-square"
    />
  </a>
</template>

<script setup>
import { ref } from "vue";

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
