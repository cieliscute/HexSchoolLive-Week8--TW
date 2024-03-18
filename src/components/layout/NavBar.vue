<template>
  <nav class="bg-primary py-4 sticky top-0">
    <div class="container">
      <div class="flex justify-between items-center">
        <!-- logo -->
        <RouterLink to="/"
          class="bg-secondary font-Shrikhand text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
          ALPHABOX+</RouterLink>
        <!-- 中間選單group -->
        <ul class="flex">
          <li><a href="" class="block px-5 py-2 relative hover:bottom-1 ">產品</a></li>
          <li><a href="" class="block px-5 py-2 relative hover:bottom-1">關於我們</a></li>
          <li><a href="" class="block px-5 py-2 relative hover:bottom-1">最新消息</a></li>
          <li><a href="" class="block px-5 py-2 relative hover:bottom-1">FAQ</a></li>
          <li><a href="" class="block px-5 py-2 relative hover:bottom-1">聯絡我們</a></li>
        </ul>
        <!-- 電腦版右方按鈕group -->
        <div class="flex items-center">
          <RouterLink to="/" class="px-3 py-2 relative hover:bottom-1">註冊</RouterLink>
          <RouterLink to="/" class="px-3 py-2 relative hover:bottom-1">登入</RouterLink>
          <ButtonComponent class="text-black bg-white ms-5 hover:bg-neutral">
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
</style>
