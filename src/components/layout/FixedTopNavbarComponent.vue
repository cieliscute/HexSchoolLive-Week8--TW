<template>
  <nav>
    <Collapsible v-model:open="isOpen" class="">
      <!-- 992px以上電腦版上方固定區塊 -->
      <div class=" bg-primary hidden lg:block fixed z-40 top-0 left-0 right-0">
        <div class="container flex justify-between items-center py-4">
          <!-- BrandLink -->
          <RouterLink to="/"
            class="bg-secondary font-Shrikhand text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
            ALPHABOX+
          </RouterLink>
          <!-- 電腦版中間選單group -->
          <ul class="flex">
            <li><a href="" class="block px-3 py-2 lg:px-5 relative hover:bottom-1 ">產品</a></li>
            <li><a href="" class="block px-3 py-2 lg:px-5 relative hover:bottom-1">關於我們</a></li>
            <li><a href="" class="block px-3 py-2 lg:px-5 relative hover:bottom-1">最新消息</a></li>
            <li><a href="" class="block px-3 py-2 lg:px-5 relative hover:bottom-1">FAQ</a></li>
            <li><a href="" class="block px-3 py-2 lg:px-5 relative hover:bottom-1">聯絡我們</a></li>
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
      </div>
      <!-- 手機版上方固定區塊 -->
      <div class="bg-primary lg:hidden fixed z-40 top-0 left-0 right-0">
        <div class="container flex items-center justify-between py-3">
          <RouterLink to="/" class="bg-secondary font-Shrikhand text-2xl">
            ALPHABOX+
          </RouterLink>
          <CollapsibleTrigger class="block text-end">
            <HamburgerIcon></HamburgerIcon>
          </CollapsibleTrigger>
        </div>
      </div>
      <!-- 點選手機版漢堡跑出的選單 -->
      <CollapsibleContent class="lg:hidden border-t border-white bg-gradient-to-b from-primary-linearlight to-primary-lineardark fixed z-50 top-[68px] left-0 right-0 bottom-0 overflow-scroll" >
        <div class="container pt-6 h-full">
          <ul class="grid gap-y-1 sm:gap-y-2 md:gap-y-4 justify-center text-center">
            <li><a href="#" class="py-2 block">產品</a></li>
            <li><a href="#" class="py-2 block">關於我們</a></li>
            <li><a href="#" class="py-2 block">最新消息</a></li>
            <li><a href="#" class="py-2 block">FAQ</a></li>
            <li><a href="#" class="py-2 block">聯絡我們</a></li>
            <li><a href="#" class="py-2 block">註冊</a></li>
            <li><a href="#" class="py-2 block">登入</a></li>
            <li>
              <Button class="text-black bg-white hover:bg-neutral">
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
<style scoped>
</style>
