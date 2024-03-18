<template>
  <nav class="bg-primary border-b border-white py-4 fixed left-0 top-0 right-0">
    <div class="container flex justify-between items-center">
      <!-- logo -->
      <RouterLink to="/"
        class="bg-secondary font-Shrikhand text-white text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
        ALPHABOX+</RouterLink>
      <!-- 中間選單group -->
      <ul class="text-white flex">
        <li><a href="" class="px-5 py-2">產品</a></li>
        <li><a href="" class="px-5 py-2">關於我們</a></li>
        <li><a href="" class="px-5 py-2">最新消息</a></li>
        <li><a href="" class="px-5 py-2">FAQ</a></li>
        <li><a href="" class="px-5 py-2">聯絡我們</a></li>
      </ul>
      <!-- 電腦版右方按鈕group -->
      <div>

        <ButtonComponent class="bg-white">
          <PointScanIcon />
          <span class="ms-1">訂閱</span>
        </ButtonComponent>
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
<style scoped></style>
