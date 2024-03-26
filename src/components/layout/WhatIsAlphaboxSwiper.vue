<template>
  <div class="relative">
    <!-- lg:prevEl -->
    <a href="#" @click.prevent="prevPage" class="hidden lg:block absolute w-1/12 left-0 top-1/2 -translate-y-1/2 hover:text-[#828282]">
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="48" fill="none" viewBox="0 0 180 48" class="w-full">
        <g mask="url(#a)">
          <path fill="currentColor" d="M26 38 4 24l22-14-6.85 12H176v4H19.15L26 38Z" />
        </g>
      </svg>
    </a>
    <!-- swiper容器本體 -->
    <swiper-container init="false" :slides-per-view="1" :centered-slides="false" loop="true" ref="swiperInstance" class="w-full lg:w-9/12">
      <swiper-slide>
        <img src="/desktop/carousel.png" alt="" class="w-full aspect-video object-center  object-cover">
      </swiper-slide>
      <swiper-slide>
        <img src="/desktop/carousel.png" alt="" class="w-full aspect-video object-center  object-cover">
      </swiper-slide>
    </swiper-container>
    <!-- lg:nextEl -->
    <a href="#" @click.prevent="nextPage" class="hidden lg:block absolute w-1/12 right-0 top-1/2 -translate-y-1/2 hover:text-[#828282]">
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="48" fill="none" viewBox="0 0 180 48" class="w-full">
        <g mask="url(#a)">
          <path fill="currentColor" d="m154 38 6.85-12H4v-4h156.85L154 10l22 14-22 14Z" />
        </g>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { register } from 'swiper/element/bundle';
register();

const swiperInstance = ref(null);
const params = {
  autoplay: {
    delay: 5000
  },
  speed: '1000',
  allowTouchMove: true,
  spaceBetween: 0
}

onMounted(() => {
  Object.assign(swiperInstance.value, params);
  swiperInstance.value.initialize();
})


const nextPage = () => {
  swiperInstance.value.swiper.slideNext();
}
const prevPage = () => {
  swiperInstance.value.swiper.slidePrev();
}

</script>

<style>
</style>