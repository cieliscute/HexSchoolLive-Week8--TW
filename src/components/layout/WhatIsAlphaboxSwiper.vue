<template>
  <div class="relative">
    <!-- lg:prevEl -->
    <a href="#" @click.prevent="prevPage"
      class="hidden lg:block absolute w-1/12 left-0 top-1/2 -translate-y-1/2 hover:text-[#828282]">
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="48" fill="none" viewBox="0 0 180 48" class="w-full">
        <g mask="url(#a)">
          <path fill="currentColor" d="M26 38 4 24l22-14-6.85 12H176v4H19.15L26 38Z" />
        </g>
      </svg>
    </a>
    <!-- swiper容器本體 -->
    <swiper-container init="false" :slides-per-view="1" :centered-slides="false" loop="true" ref="swiperInstance"
      class="w-full lg:w-9/12">
      <swiper-slide class="relative" v-for="(item,index) in dataAry" :key="`${index}index`">
        <img :src="item.picURL" :alt="`${item.title}圖片`" class="w-full aspect-square lg:aspect-[12/5] object-center  object-cover">
        <div class="text-bold text-start lg:text-end absolute bottom-4 right-0 left-4 lg:right-10 lg:top-1/2 lg:-translate-y-1/2">
          <p class="font-Shrikhand text-white text-[64px] md:text-9xl lg:text-7xl xxl:text-8xl">{{ item.index }}</p>
          <p class="text-white
          text-2xl tracking-[24px] -mr-6
          md:text-6xl
          lg:text-3xl lg:tracking-[20px] lg:-mr-5
          xxl:text-[32px] xxl:tracking-[32px] xxl:-mr-8
          ">
            {{ item.title }}
          </p>
          <p class="text-white mt-2 xxl:mt-4
          text-base md:text-2xl lg:text-base
          ">{{ item.content }}</p>
        </div>
      </swiper-slide>
      <!-- 改用v-for去渲染 -->
      <!-- <swiper-slide class="relative">
        <img src="/desktop/carousel.png" alt="" class="w-full aspect-[12/5] object-center  object-cover">
        <div class="text-end absolute z-30 right-10 top-1/2 -translate-y-1/2">
          <p class="font-Shrikhand text-white text-8xl">01</p>
          <p class="text-white text-[32px] mb-4 tracking-[32px] -mr-8">立體投影技術</p>
          <p class="text-white">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
        </div>
      </swiper-slide>
      <swiper-slide class="relative">
        <img src="/desktop/carousel_AI_Gen.png" alt="" class="w-full aspect-[12/5] object-center  object-cover">
        <div class="text-end absolute z-30 right-10 top-1/2 -translate-y-1/2">
          <p class="font-Shrikhand text-white text-8xl">02</p>
          <p class="text-white text-[32px] mb-4 tracking-[32px] -mr-8">高度客製化</p>
          <p class="text-white">訂製專屬的Alphabox+</p>
        </div>
      </swiper-slide> -->
    </swiper-container>
    <!-- lg:nextEl -->
    <a href="#" @click.prevent="nextPage"
      class="hidden lg:block absolute w-1/12 right-0 top-1/2 -translate-y-1/2 hover:text-[#828282]">
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

const dataAry=[
  {
    index:'01',
    title:'立體投影技術',
    content:'透過高科技立體投影技術，讓您感受真實的科技世界。',
    picURL:'./desktop/carousel.png'
  },
  {
    index:'02',
    title:'高度客製化',
    content:'訂製專屬的Alphabox+。',
    picURL:'./desktop/carousel_AI_Gen.png'
  }
]

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
*{
  /* outline:1px solid red */
}
</style>