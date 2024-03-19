<template>
  <!-- 首頁第一個區塊，pt是為了抵銷nav的fixed top -->
  <section class="hidden bg-gradient-to-b from-primary-linearlight to-primary-lineardark h-[960px] pt-[68px] md:pt-20">
    <!-- 左右padding -->
    <div class="pt-7 md:pt-14 px-3 md:px-20 border-t border-white">
      <!-- 設定四欄 -->
      <div class="grid grid-cols-4 gap-x-8">
        <div class="hidden md:flex col-span-4 md:col-span-1 items-end border-b border-white">
          <p class="mb-1">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
        </div>
        <div class="col-span-4 md:col-span-2 flex justify-center">
          <AlphaboxRotateIcon class="animate-[spin-reverse_20s_linear_infinite] w-[196px] h-[196px]">
          </AlphaboxRotateIcon>
        </div>
        <div class="col-span-4 md:col-span-1 flex flex-col justify-between border-t border-white order-first md:order-last">
          <p class="font-bold mt-2">ALPHABOX+ STUDIO</p>
          <p class="hidden md:block  text-[#AD93CF]">Copyright © 2023 Hexschool.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AlphaboxRotateIcon from '@/components/icon/AlphaboxRotateIcon.vue'
export default{
  components:{
    AlphaboxRotateIcon
  }
}
</script>
<style scoped>
*{
  /* outline:1px solid red */
}
</style>