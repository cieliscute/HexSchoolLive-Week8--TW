<template>
  <!-- <swiper-container init="false" class="swiper-wrapper" :slides-per-view="1" :centered-slides="true" loop="true" allowTouchMove="false" autoplay-delay="0" speed="1000" allow-touch-move="false" ref="swiperInstance"> -->
  <swiper-container init="false" class="swiper-wrapper" :centered-slides="false" ref="swiperInstance">
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></swiper-slide>
    <swiper-slide class=" from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></swiper-slide>
    <swiper-slide class=" from-primary-linearlight to-primary-lineardark w-full bg-gradient-to-r to-80%"></swiper-slide>
    <swiper-slide class=" from-primary-lineardark to-primary-linearlight w-full bg-gradient-to-r from-20%"></swiper-slide>
  </swiper-container>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { register } from 'swiper/element';
register();


const swiperInstance = ref(null)
const params = {
  autoplay:{
    delay:0,
    disableOnInteraction: false
  },
  speed:'1000',
  allowTouchMove:false,
  injectStyles: [
    `
      .swiper-wrapper {
          transition-timing-function: linear !important;
      }
    `,
  ],
  loop:true,
  slidesPerView:0.5,
};


onMounted(()=>{
  Object.assign(swiperInstance.value, params);
  // console.log(swiperInstance);
  swiperInstance.value.initialize();
})


</script>
<style scoped>
*{
  outline:1px solid red;
}
</style>