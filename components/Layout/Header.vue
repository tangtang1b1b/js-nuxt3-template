<script setup>
import { useAllStore } from '@/store/all'
const { isScroll } = toRefs(useAllStore())

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
const { data } = toRefs(props)
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      isScroll.value = true
    } else {
      isScroll.value = false
    }
  })
})

onUnmounted(() => {})
</script>

<template>
  <header :class="[isScroll ? 'shadow-nav' : '']" class="fixed duration-300 left-0 top-0 z-[100] h-[86px] w-full">
    <div class="z-50 mx-auto flex size-full items-center justify-between bg-white px-10">
      <div class="flex w-[312px] items-center justify-center">
        <NuxtLink to="/" class="w-full">
          <img class="" src="/images/logo.png" alt="logo" />
        </NuxtLink>
      </div>
      <ul class="flex gap-8 size-full justify-end">
        <li
          v-for="item in data"
          :key="item.name"
          class="flex h-full items-center justify-center text-black font-bold duration-300 hover:text-[#588A31]"
        >
          <nuxt-link :to="item.url" class="h-full content-center">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
