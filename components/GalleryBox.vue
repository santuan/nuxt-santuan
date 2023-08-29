<template>
  <div v-if="items.length > 0" class="gallery">
    <div v-for="(item, myindex) in items" :key="myindex" >
      <a :href="item.name" class="glightbox" data-gallery="gallery1">
        <img
          :src="item.name"
          style="width: 100%; height: 450px; object-fit: cover"
        />
      </a>
    </div>
  </div>
</template>

<script>
import GLightbox from "glightbox";

export default {
  name: "BaseGallery",
  inheritAttrs: false,
  props: {
    items: Array,
    galleryId: Number,
  },
  data() {
    return {
      lightbox: undefined,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.initLightBoxes();
    });
  },
  methods: {
    initLightBoxes() {
      this.lightbox = GLightbox();
    },
  },
};
</script>
