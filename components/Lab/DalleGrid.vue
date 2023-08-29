
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


<template>
  <div
    class="grid grid-cols-2 gap-1 p-1 from-yellow-400 bg-gradient-to-b via-yellow-500 to-gray-900 scroll-mt-24 md:grid-cols-3"
    id="ejemplo4"
  >
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Pintura de un rey conejo"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654748378/santuan/history/01_13_spdx0t.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Un congreso de gatos votando meow"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747690/santuan/history/01_0_tes00q.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Render - Un oceano repleto de barquitos bajo una constelación de galaxias"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747810/santuan/history/01_19_jh8ikd.jpg"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Una guitarra con una planta creciendo en su interior"
        img="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748288/santuan/history/01_75_giaebn.jpg"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Pintura de Una ciudad de tardenoche con una luna brillando como un sol"
        img="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748221/santuan/history/01_79_bewrli.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Arte digital de una niña sobre una casa en el arbol."
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747800/santuan/history/ImageSequence032_mkwbse.jpg"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Un conejo escuchando la radio - arte digital "
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747651/santuan/history/01_4_fitcxc.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747878/santuan/history/ImageSequence030_wupe68.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654748340/santuan/history/004_6_oox3dv.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747903/santuan/history/03_2_tur5ci.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747866/santuan/history/01_49_blcwpq.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654748282/santuan/history/01_24_atkuzw.webp"
      />
    </div>
  </div>
</template>
