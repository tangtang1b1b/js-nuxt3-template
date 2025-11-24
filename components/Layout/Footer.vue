<script setup>
import { useAllStore } from '@/store/all'
const { isLoading } = toRefs(useAllStore())
const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  nextTick(() => {
    $gsap.effects.aosFadeIn()
    watch(isLoading, () => {
      if (isLoading.value) return
      $ScrollTrigger.refresh(true)
      $gsap.effects.aosFadeIn()
    })
  })
})
</script>

<template>
  <footer
    data-fade="in"
    class="flex h-[45px] w-full items-center justify-center bg-black text-[15px] font-medium leading-[21.72px] text-white"
  >
    我的版權所有2025 © All rights reserved.
  </footer>
</template>

<style scoped></style>
