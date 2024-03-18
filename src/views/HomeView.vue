<template>
  <!-- 首頁第一個區塊 -->
  <section class="border-t border-white bg-gradient-to-b from-primary-linearlight to-primary-lineardark h-[880px]">
    <!-- 左右padding -->
    <div class="px-20 mt-14">
      <!-- 設定四欄 -->
      <div class="grid grid-cols-4">
        <div class="flex items-end">
          <p>最新消息！新版本 v15.4 釋出，搶先體驗！</p>
        </div>
        <div class="col-span-2 flex justify-center">
          <AlphaboxRotateIcon class="animate-[spin-reverse_20s_linear_infinite] w-[196px] h-[196px]">
          </AlphaboxRotateIcon>
        </div>
        <div class="flex flex-col justify-between">
          <p>ALPHABOX+ STUDIO</p>
          <p>Copyright © 2023 Hexschool.</p>
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
  outline:1px solid red
}
</style>