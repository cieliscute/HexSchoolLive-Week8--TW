<template>
  <!-- 首頁第一個區塊，pt是為了抵銷nav的fixed top -->
  <section class="bg-gradient-to-b from-primary-linearlight to-primary-lineardark h-[960px] pt-[68px] md:pt-20">
    <!-- 左右padding -->
    <div class="pt-7 lg:pt-14 px-3 md:px-20 border-t border-white">
      <!-- 上方四欄(最新消息、spin logo、copyright) -->
      <div class="grid grid-cols-4 gap-x-8">
        <div class="hidden lg:flex col-span-4 lg:col-span-1 items-end border-b border-white">
          <p class="mb-1">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
        </div>
        <div class="col-span-4 lg:col-span-2 flex justify-center">
          <AlphaboxRotateIcon class="animate-[spin-reverse_20s_linear_infinite] w-[196px] h-[196px]">
          </AlphaboxRotateIcon>
        </div>
        <div
          class="col-span-4 lg:col-span-1 flex flex-col justify-between border-t border-white order-first lg:order-last">
          <p class="font-bold mt-2">ALPHABOX+ STUDIO</p>
          <p class="hidden md:block  text-[#AD93CF]">Copyright © 2023 Hexschool.</p>
        </div>
      </div>
      <!-- 下方Banner -->
      <div class="mt-14 relative">
        <!-- 電腦版Banner中間圖片上方的文字 -->
        <!-- <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"> -->
        <!-- letterspacing(i.e. tracking here)的最後一個字後方也會有一個字距，需要用負的margin抵銷 -->
        <!-- <h2 class="font-Shrikhand text-[32px] tracking-[80px] -mr-20">
            ALPHABOX+
          </h2>
          <h3 class="font-bold tracking-[16px]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</h3>
        </div> -->

        <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <h2 class="font-Shrikhand text-[32px] tracking-[80px] -mr-20">
            <span
              class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">ALPHABOX+</span>
          </h2>
          <h3 class="font-bold tracking-[16px]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</h3>
        </div>
        <!-- 四張主要Banner圖片 -->
        <ul class="grid grid-cols-4 gap-x-8 items-end">
          <li>
            <picture>
              <source>
              <img src="/desktop/diane.png" alt="diane首頁" class="object-cover w-full">
            </picture>
          </li>
          <li>
            <picture>
              <source>
              <img src="/desktop/felix.png" alt="felix首頁" class="w-full">
            </picture>
          </li>
          <li>
            <picture>
              <source>
              <img src="/desktop/karina.png" alt="karina首頁" class="w-full">
            </picture>
          </li>
          <li>
            <picture>
              <source>
              <img src="/desktop/vito.png" alt="vito首頁" class="w-full object-cover">
            </picture>
          </li>
        </ul>
      </div>
      <!-- 跑馬燈間隔線 -->
      <DividerSwiper class="mt-6"></DividerSwiper>
    </div>
  </section>
  <!-- 什麼是ALPHABOX+區塊 (上方section會有一些元素超出到這個區塊) -->
  <section
    class="relative -z-10  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-linearlight to-neutral-lineardark from-0% to-70%">
    <!-- 圖片裝飾容器 -->
    <div class="absolute top-0 left-0 right-1/2 bottom-0 ">
      <img src="/imgs/carousel_backgroundorigin.png" alt="" class="w-full h-full object-cover opacity-60 blur-lg">
    </div>
    <!-- 什麼是ALPHABOX+ -->
    <div class="px-20 pt-48 text-5xl font-bold border-b border-white pb-4 relative">
      <h2 class="mb-3">什麼是</h2>
      <h2>ALPHABOX+</h2>
    </div>
    <!-- Swiper區塊 -->
    <div class="px-20 relative">
      <div class="w-full pt-8 h-[560px] bg-red-100">swiper保留區</div>
      <div class="w-full py-20 h-10 bg-blue-100">跑馬燈保留區</div>
    </div>
  </section>
</template>

<script>
import DividerSwiper from '@/decoration/DividerSwiper.vue';
import AlphaboxRotateIcon from '@/components/icon/AlphaboxRotateIcon.vue'
export default {
  components: {
    AlphaboxRotateIcon,
    DividerSwiper
  },
  mounted() {
  }
}
</script>
<style scoped>
</style>