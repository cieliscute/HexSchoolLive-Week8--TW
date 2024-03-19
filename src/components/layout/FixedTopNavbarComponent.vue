<template>
  <nav>
    <Collapsible v-model:open="isOpen" class="">
      <!-- 電腦版上方固定區塊 -->
      <div class="bg-primary container py-4 hidden md:flex justify-between items-center fixed top-0  left-0 right-0 z-50">
        <!-- BrandLink -->
        <RouterLink to="/"
          class="bg-secondary font-Shrikhand text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
          ALPHABOX+
        </RouterLink>
        <!-- 電腦版中間選單group -->
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
          <Button class="text-black bg-white ms-5 hover:bg-neutral">
            <PointScanIcon />
            <span class="ms-1">訂閱</span>
          </Button>
        </div>
      </div>
      <!-- 手機版上方固定區塊 -->
      <div class="bg-primary container py-3 flex md:hidden items-center justify-between fixed top-0  left-0 right-0 z-50">
        <RouterLink to="/" class="bg-secondary font-Shrikhand text-[24px]">
          ALPHABOX+
        </RouterLink>
        <CollapsibleTrigger class="block text-end">
          <HamburgerIcon></HamburgerIcon>
        </CollapsibleTrigger>
      </div>
      <!-- 點選手機版漢堡跑出的選單 -->
      <CollapsibleContent class="border-t border-white bg-gradient-to-b from-primary-linearlight to-primary-lineardark absolute top-[69px] left-0 right-0 bottom-0 z-10">
        <div class="container h-full ">
          <ul class="h-full flex flex-col items-center justify-between">
            <li>產品</li>
            <li>關於我們</li>
            <li>最新消息</li>
            <li>FAQ</li>
            <li>聯絡我們</li>
            <li>註冊</li>
            <li>登入</li>
            <li>
              <Button class="text-black bg-white ms-5 hover:bg-neutral">
                <PointScanIcon />
                <span class="ms-1">訂閱</span>
              </Button>
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
const isOpen = ref(false)
</script>
<script>
import PointScanIcon from '@/components/icon/PointScanIcon.vue'
import HamburgerIcon from '../icon/HamburgerIcon.vue'

export default {
  components: {
    PointScanIcon,
    HamburgerIcon
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
