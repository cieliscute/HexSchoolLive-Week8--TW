<template>
  <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r ">ksljdf</swiper-slide>
    <swiper-slide class=" from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r">slkjf</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

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
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>