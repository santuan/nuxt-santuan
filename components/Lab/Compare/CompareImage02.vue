<script>
import "vue-twentytwenty/dist/vue-twentytwenty.css";
import TwentyTwenty from "vue-twentytwenty";

export default {
  components: {
    TwentyTwenty,
  },
};
</script>

<template>
  <TwentyTwenty
    before="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018509/santuan/DALL_E_2022-05-29_10.31.54_rgditm.jpg"
    after="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018485/santuan/DALL_E_2022-05-29_10.34.24_dnxu0u.jpg"
    beforeLabel="Pintura"
    afterLabel="3D Render"
  />
</template>
