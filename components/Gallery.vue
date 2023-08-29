
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
  <div class="grid md:grid-cols-3 w-full max-w-full gap-3 ">
    <div class="aspect-square w-full h-full" id="ejemploBlender">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030301/stn-renders/567_vpomfk.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030307/stn-renders/456_xcnfky.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030307/stn-renders/789_itwybi.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030309/stn-renders/234_vanwyt.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030311/stn-renders/345_tw9zas.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030314/stn-renders/123_lw5jtv.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476562/stn-renders/1_a6qw3t.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476563/stn-renders/2_iutptm.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476562/stn-renders/3_nveu2c.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213764/stn-renders/_h1_vmxxse.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213756/stn-renders/_h2_oiho30.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233372/stn-renders/_h3_xjzkrc.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215360/stn-renders/k_vjbeow.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233211/stn-renders/k3_arwhkt.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233248/stn-renders/k5_nzy74z.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1669068786/stn-renders/out-03_m7w1gy_cumggl.webp"
      />
    </div>
    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556712/stn-renders/02_txgqvw.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="Ancho de banda de la conciencia"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556713/stn-renders/01_rnph0p.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215725/stn-renders/12_vddpy4.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232392/stn-renders/14_bmzdy6.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232389/stn-renders/13_vrxkt2.webp"
      />
    </div>



    <div class="aspect-square md:aspect-video md:col-span-3 w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233952/stn-renders/04_rhcw2f.webp"
      />
    </div>

    <div class="aspect-square md:aspect-video md:col-span-2 w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215823/stn-renders/02_blemta.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233957/stn-renders/01_ujdfvc.webp"
      />
    </div>

    <div class="aspect-square md:aspect-video md:col-span-2 w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232358/stn-renders/18_ec7kli.webp"
      />
    </div>

    <div class="aspect-square w-full h-full">
      <LabModalImageExpand
        title="item"
        img="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629238430/stn-renders/11_vhlp38.webp"
      />
    </div>
  </div>
</template>
