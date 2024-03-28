<template>
  <!-- 滿版覆蓋畫面 -->
  <template v-if="isLoading">
    <div class="absolute z-50 top-0 left-0 right-0 bottom-0 
    flex items-center justify-center bg-white
    ">
      <div class="flex flex-col items-center">
        <img src="/desktop/Animation-Loading.gif" alt="loading圖片" class="w-20 h-20">
        <p class="text-black font-black">Loading</p>
      </div>
    </div>
  </template>
  <!-- 首頁第一個區塊，pt是為了抵銷nav的fixed top,-mb是為了讓圖片可以超出到下方的區塊 -->
  <!-- 如果需要修改位移請從src/assets/_utilities.css內修改變數 -->
  <section class="relative bg-gradient-to-b from-primary-linearlight to-primary-lineardark pt-[68px] lg:pt-20 flex justify-center
    -mb-[var(--offset-banner)] sm:-mb-[var(--offset-banner-sm)] lg:-mb-[var(--offset-banner-lg)] xxl:-mb-[var(--offset-banner-xxl)]
    ">
    <div class="l-container-fluid pt-7 lg:pt-14 border-t border-white relative">
      <div class="grid grid-cols-4 gap-x-8">
        <div class="hidden md:flex col-span-4 md:col-span-1 items-end border-b border-white  pb-1">
          <RouterLink to="/" class="text-sm">最新消息！新版本 v15.4 釋出，搶先體驗！</RouterLink>
        </div>
        <div class="mt-8 md:mt-0 col-span-4 md:col-span-2 flex justify-center">
          <div class="animate-[spin_20s_linear_infinite_reverse]">
            <AlphaboxRotateIcon class="lg:hover:scale-110 transition-transform duration-500"></AlphaboxRotateIcon>
          </div>
        </div>
        <div
          class="col-span-4 md:col-span-1 flex flex-col justify-between border-t border-white order-first md:order-last pt-2">
          <p class="font-bold text-sm">ALPHABOX+ STUDIO</p>
          <p class="hidden md:block text-[#AD93CF] text-sm">Copyright © 2023 Hexschool.</p>
        </div>
      </div>
      <div class="mt-8 md:mt-14 relative z-10 ">
        <div class="w-full mb-4 flex flex-col lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <div class="tracking-container">
            <h2 class="font-Shrikhand tracking-130
            text-xl lg:text-base xl:text-2xl xxl:text-3xl fhd:text-[32px]
            bg-red-200
            ">ALPHABOX+</h2>
            <h3 class="font-bold tracking-20 min-[375px]:tracking-30
            text-base lg:text-xs xl:text-sm xxl:text-base
            ">
              擁抱未來科技，專屬您的3D立體投影陪伴機器人
            </h3>
          </div>
          <!-- <h3 class="font-bold
          text-base tracking-[3.2px] -mr-[3.2px] 
          min-[375px]:tracking-[4.8px] min-[375px]:-mr-[4.8px]
          lg:text-xs xl:text-sm xxl:text-base
          lg:tracking-[4px] lg:-mr-1 
          xl:tracking-[6px] xl:-mr-1.5
          xxl:tracking-[8px] xxl:-mr-2
          fhd:tracking-[16px] fhd:-mr-4">擁抱未來科技，專屬您的3D立體投影陪伴機器人</h3> -->
          <!-- <h3 class="font-bold tracking-20 min-[375px]:tracking-30
          text-base lg:text-xs xl:text-sm xxl:text-base
          ">
            擁抱未來科技，專屬您的3D立體投影陪伴機器人
          </h3> -->
        </div>
        <ul class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-y-0  lg:gap-x-8 items-end">
          <li class="hover:shadow-[0px_0px_16px_8px_rgba(143,0,255,0.8)] duration-300 relative">
            <p class="font-Shrikhand absolute top-4 left-0 right-0 text-center text-[32px]">Diane</p>
            <picture>
              <source media="(min-width:992px)" srcset="/desktop/diane.png">
              <img src="/mobile/diane_mobile.png" alt="diane首頁"
                class="object-cover w-full aspect-square lg:aspect-auto object-top">
            </picture>
          </li>
          <li class="hover:shadow-[0px_0px_16px_8px_rgba(143,0,255,0.8)] duration-300 relative">
            <p class="font-Shrikhand absolute top-4 left-0 right-0 text-center text-[32px]">Felix</p>
            <picture>
              <source media="(min-width:992px)" srcset="/desktop/felix.png">
              <img src="/mobile/felix_mobile.png" alt="felix首頁"
                class="object-cover w-full aspect-square lg:aspect-auto object-top">
            </picture>
          </li>
          <li class="hover:shadow-[0px_0px_16px_8px_rgba(143,0,255,0.8)] duration-300 relative">
            <p class="font-Shrikhand absolute top-4 left-0 right-0 text-center text-[32px]">Karina</p>
            <picture>
              <source media="(min-width:992px)" srcset="/desktop/karina.png">
              <img src="/mobile/karina_mobile.png" alt="karina首頁"
                class="object-cover w-full aspect-square lg:aspect-auto object-top">
            </picture>
          </li>
          <li class="hover:shadow-[0px_0px_16px_8px_rgba(143,0,255,0.8)] duration-300 relative">
            <p class="font-Shrikhand absolute top-4 left-0 right-0 text-center text-[32px]">Vito</p>
            <picture>
              <source media="(min-width:992px)" srcset="/desktop/vito.png">
              <img src="/mobile/vito_mobile.png" alt="vito首頁"
                class="object-cover w-full aspect-square lg:aspect-auto object-top">
            </picture>
          </li>
        </ul>
      </div>
      <DividerComponent class="mt-10 h-10"></DividerComponent>
    </div>
  </section>
  <section class="relative l-radial-gradient pb-10">
    <div class="absolute top-0 left-0 right-1/2 bottom-0">
      <img src="/imgs/carousel_backgroundorigin.png" alt=""
        class="w-full h-full object-cover opacity-60 blur-lg select-none" draggable="false">
    </div>
    <div class="l-container-fluid relative
    pt-[var(--offset-banner)] sm:pt-[var(--offset-banner-sm)] 
    lg:pt-[var(--offset-banner-lg)]  xxl:pt-[var(--offset-banner-xxl)]
    font-bold border-b border-white tracking-100
    text-2xl md:text-3xl lg:text-5xl 
    pb-5 md:pb-4
    ">
      <!-- <h2 class="pt-4 md:pt-2">什麼是</h2>
      <h2 class="mt-3 leading-normal">ALPHABOX+</h2> -->
    </div>
    <div class="l-container-fluid relative mt-8">
      <WhatIsAlphaboxSwiper></WhatIsAlphaboxSwiper>
      <DividerComponent class="mt-8 h-10"></DividerComponent>
    </div>
  </section>
  <section class="l-radial-gradient py-20">
    <div class="container py-40 outline">
      <h2 class="text-9xl text-end">最新消息</h2>
    </div>
  </section>
</template>

<script setup>
import AlphaboxRotateIcon from '@/components/icon/AlphaboxRotateIcon.vue'
import WhatIsAlphaboxSwiper from '@/components/layout/WhatIsAlphaboxSwiper.vue';
import DividerComponent from '@/components/decoration/DividerComponent.vue';
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const checkLoadComplete=()=>{
  const images = document.querySelectorAll('img');
  let loadedImageCount = 0;

  // 定義圖片加載完成的處理函式
  const handleImageLoad = () => {
    loadedImageCount++;

    // 當所有圖片都已加載完成時，關閉 isLoading
    if (loadedImageCount === images.length) {
      isLoading.value = false;
    }
  };

  // 將加載完成事件附加到每個圖片元素上
  images.forEach(image => {
    // 如果圖片已經加載完成，直接處理
    if (image.complete) {
      handleImageLoad();
    } else {
      // 否則，等待圖片加載完成
      image.addEventListener('load', handleImageLoad);
    }
  });
}
onMounted(() => {
  checkLoadComplete()
})

</script>
<style>
*{
  outline:1px solid red
}
</style>