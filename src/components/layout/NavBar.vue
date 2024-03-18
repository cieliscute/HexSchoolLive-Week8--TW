<template>
  <!-- 為了讓內容+底線會是80px所以不能設定py-4,下方距離要另外直接設定 -->
  <nav class="bg-primary border-b border-white pt-4 pb-[15px] fixed left-0 top-0 right-0">
    <div class="container">
      <div class="row justify-between items-center">
        <!-- logo -->
        <RouterLink to="/"
          class="bg-secondary font-Shrikhand text-white text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
          ALPHABOX+</RouterLink>
        <!-- 中間選單group -->
        <ul class="text-white flex">
          <li><a href="" class="px-5 py-2 relative hover:bottom-1">產品</a></li>
          <li><a href="" class="px-5 py-2 relative hover:bottom-1">關於我們</a></li>
          <li><a href="" class="px-5 py-2 relative hover:bottom-1">最新消息</a></li>
          <li><a href="" class="px-5 py-2 relative hover:bottom-1">FAQ</a></li>
          <li><a href="" class="px-5 py-2 relative hover:bottom-1">聯絡我們</a></li>
        </ul>
        <!-- 電腦版右方按鈕group -->
        <div class="flex items-center">
          <RouterLink to="/" class="text-white px-3 py-2 relative hover:bottom-1">註冊</RouterLink>
          <RouterLink to="/" class="text-white px-3 py-2 relative hover:bottom-1">登入</RouterLink>
          <ButtonComponent class="bg-white ms-5 hover:bg-neutral">
            <PointScanIcon />
            <span class="ms-1">訂閱</span>
          </ButtonComponent>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { Button } from '@/components/ui/button'
import PointScanIcon from '@/components/icon/PointScanIcon.vue'
export default {
  components: {
    ButtonComponent:Button,
    PointScanIcon
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style scoped>
*{
  outline:1px solid red
}
</style>
