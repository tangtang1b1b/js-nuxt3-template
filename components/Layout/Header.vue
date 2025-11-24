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
  <header :class="[isScroll ? 'shadow-nav' : '']" class="fixed left-0 top-0 z-100 h-[70px] w-full bg-black">
    <div class="z-50 mx-auto flex size-full max-w-screen-3xl items-center justify-between bg-black px-5 duration-300">
      <div class="flex h-full w-40 items-center justify-center">
        <NuxtLink to="/" class="size-full content-center">
          <img class="w-full" :src="fetchImg('/images/logo.png')" alt="logo" />
        </NuxtLink>
      </div>
      <!-- <ul class="flex size-full justify-end dev-red">
        <li
          v-for="item in data"
          :key="item.name"
          class="flex h-full items-center justify-center text-white duration-300 hover:text-[#75fa90]"
        >
          <nuxt-link :to="item.url" class="h-full content-center px-5">{{ item.name }}</nuxt-link>
        </li>
      </ul> -->
    </div>
  </header>
</template>

<style scoped></style>
