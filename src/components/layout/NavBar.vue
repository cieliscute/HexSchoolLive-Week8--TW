<template>
  <Collapsible v-model:open="isOpen" class="bg-primary fixed top-0 z-50 left-0 right-0">
    <!-- 電腦版 -->
      <div class="hidden md:flex py-4 justify-between items-center">
        <!-- BrandLink -->
        <RouterLink to="/"
          class="bg-secondary font-Shrikhand text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
          ALPHABOX+</RouterLink>
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
    <!-- 手機版 -->
    <div class="container">
      <div class="py-3 flex md:hidden items-center justify-between">
        <RouterLink to="/"
          class="bg-secondary font-Shrikhand text-[24px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
          ALPHABOX+
        </RouterLink>
        <CollapsibleTrigger class="block text-end">
          <HamburgerIcon></HamburgerIcon>
        </CollapsibleTrigger>
      </div>
    </div>
    <CollapsibleContent class="border-t border-white">
      <div class="container">
        <span class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, voluptatibus!</span>
      </div>
    </CollapsibleContent>
  </Collapsible>
  <nav class="bg-primary fixed top-0 z-50 left-0 right-0">
    <div class="container">
      <div class="hidden md:flex py-4 justify-between items-center">
        <!-- BrandLink -->
        <RouterLink to="/"
          class="bg-secondary font-Shrikhand text-[32px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
          ALPHABOX+</RouterLink>
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
    </div>
    <Collapsible v-model:open="isOpen" class="md:hidden max-h-dvh">
      <div class="container">
        <div class="py-3 flex md:hidden items-center justify-between">
          <RouterLink to="/"
            class="bg-secondary font-Shrikhand text-[24px] relative before:absolute before:h-px before:bg-white before:bottom-0 before:left-0 before:right-full hover:before:left-0 hover:before:right-0 before:transition-all before:duration-300">
            ALPHABOX+
          </RouterLink>
          <CollapsibleTrigger class="block text-end">
            <HamburgerIcon></HamburgerIcon>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent class="border-t border-white">
        <div class="container">
          <span class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, voluptatibus!</span>
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
