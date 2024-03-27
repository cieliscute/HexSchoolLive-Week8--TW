<template>
  <div class="swiper" ref="swiper">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide  from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></div>
      <div class="swiper-slide   from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></div>
      <div class="swiper-slide  from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></div>
      <div class="swiper-slide   from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></div>
      <div class="swiper-slide  from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></div>
      <div class="swiper-slide   from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css';
export default {
  data() {
    return {
      swiper:''
    };
  },
  mounted(){
    new Swiper(this.$refs.swiper, {
      // Optional parameters
      // direction: 'vertical',
      spaceBetween: 0,
      centeredSlides: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      loop: true,
      speed:1000,
      slidesPerView:1
    });
  }
};
</script>
<style scoped>
.swiper-wrapper {
    transition-timing-function: linear !important;
}
</style>
