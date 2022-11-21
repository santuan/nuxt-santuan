<template>
  <client-only>
    <template #fallback>
      <div class="w-full min-h-[300px] md:min-h-[450px] bg-gray-900/80 flex justify-center items-center">
        <Loading />
      </div>
    </template>
    <ImgComparisonSlider value="70" hover="hover" class="ImageComparison outline-none">
      <!-- eslint-disable -->
      <figure slot="first" class="before">
        <nuxt-img :placeholder="15" format="webp" class="w-full" :src="before" />
        <figcaption>3D Render</figcaption>
      </figure>
      <figure slot="second" class="after">
        <nuxt-img :placeholder="15" format="webp" class="w-full" :src="after" />
        <figcaption>Pintura</figcaption>
      </figure>
      <div
        slot="handle"
        class="handle bg-[#6e2e8a] rounded-full duration-300 w-12 h-12 flex justify-center items-center"
      >
        <svg width="32" height="32" viewBox="0 0 256 256">
          <path
            class="fill-white"
            d="M140 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0Zm-52 76H41l11.5-11.5a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12.1 12.1 0 0 0 17 0a12 12 0 0 0 0-17L41 140h47a12 12 0 0 0 0-24Zm164.5 3.5l-32-32a12 12 0 0 0-17 17L215 116h-47a12 12 0 0 0 0 24h47l-11.5 11.5a12 12 0 0 0 0 17a12.1 12.1 0 0 0 17 0l32-32a12 12 0 0 0 0-17Z"
          />
        </svg>
      </div>
      <!-- eslint-enable -->
    </ImgComparisonSlider>
  </client-only>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import Loading from "~~/components/Loading.vue";
export default defineComponent({
  name: "App",
  props: {
    before: {
      type: String,
      required: true,
      default: "",
    },
    after: {
      type: String,
      required: true,
      default: "",
    },
  },
  components: {
    ImgComparisonSlider: defineAsyncComponent(() =>
      import("@img-comparison-slider/vue").then(({ ImgComparisonSlider }) => ImgComparisonSlider)
    ),
    Loading,
  },
});
</script>

<style scoped>
.ImageComparison {
  --divider-width: 1px;
  --divider-color: #6e2e8a;
  @apply min-h-[300px] md:min-h-[450px] cursor-col-resize;
}

.ImageComparison:hover .handle {
  @apply scale-125 ;
}
.before,
.after {
  margin: 0;
}

.before figcaption,
.after figcaption {
  @apply bg-gray-900/80 rounded-md text-gray-100 opacity-80 h-6 flex justify-center items-center px-3 absolute top-1/2 -translate-y-1/2;
  @apply uppercase;
}

.before figcaption {
  left: 12px;
}

.after figcaption {
  right: 12px;
}
</style>
