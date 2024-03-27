<template>
  <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{delay:0}" :speed="1000" :allow-touch-move="false"
  >
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></swiper-slide>
    <swiper-slide class=" from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></swiper-slide>
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></swiper-slide>
    <swiper-slide class=" from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = () => {
    //   console.log('slide change');
    // };
    return {
      // onSwiper,
      // onSlideChange,
      modules: [Autoplay],
    };
  },
};
</script>
<style>
.swiper-wrapper {
    transition-timing-function: linear !important;
}
</style>
