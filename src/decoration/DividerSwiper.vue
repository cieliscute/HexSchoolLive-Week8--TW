<template>
  <swiper :modules="modules" :slides-per-view="0.5" :space-between="0" @swiper="onSwiper" :loop="true" :autoplay="{delay:0}" :speed="1000" @slideChange="onSlideChange" 
  :allow-touch-move="false"
  :animate="linear"
  >
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r " :style="{'height':height?height:'40px'}"></swiper-slide>
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-l " :style="{'height':height?height:'40px'}"></swiper-slide>
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
  props:['height'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
};
</script>
<style>
</style>
