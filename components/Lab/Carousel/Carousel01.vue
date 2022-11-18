<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <nuxt-picture
        alt="Variacion Dall-E"
        src="https://santuan.netlify.app/static/ac405f51e282c9d3833cce9f02445845/97763/DALL_E_2022-05-29_17.38.22_kcx7sw.webp"
        :placeholder="15"
        format="webp"
      />
    </swiper-slide>

    <swiper-slide>
      <nuxt-picture
        alt="Variacion Dall-E"
        src="https://santuan.netlify.app/static/b1a3b5a84c8261878d7c1d844a97cfc7/97763/DALL_E_2022-05-29_17.38.13_kwe3bj.webp"
        :placeholder="15"
        format="webp"
      />
    </swiper-slide>
    <swiper-slide>
      <nuxt-picture
        alt="Variacion Dall-E"
        src="https://santuan.netlify.app/static/e3a7a9006dff503ab32f8b5df929f15d/97763/DALL_E_2022-05-29_17.38.19_uzkkqn.webp"
        :placeholder="15"
        format="webp"
      />
    </swiper-slide>
    <swiper-slide>
      <nuxt-picture
        alt="Variacion Dall-E"
        src="https://santuan.netlify.app/static/df485763fc6f43869f35ac0a8936e703/97763/DALL_E_2022-05-29_17.39.23_undjh0.webp"
        :placeholder="15"
        format="webp"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
