<script setup>
import { useAllStore } from '@/store/all'
import siteData from '@/data/index.js'

const { allData } = toRefs(useAllStore())

allData.value = siteData
const props = defineProps({
  error: Object,
})
const { error } = toRefs(props)
const { footerImg } = toRefs(useAllStore())
footerImg.value = '/images/footer.jpg'
const marquee2 = ref(['/images/marquee.webp'])
const atomButtonRef = ref(null)

const handleMouseEnter = () => {
  if (atomButtonRef.value) {
    atomButtonRef.value.handleMouseEnter()
  }
}

const handleMouseLeave = () => {
  if (atomButtonRef.value) {
    atomButtonRef.value.handleMouseLeave()
  }
}

const goHome = () => {
  navigateTo('/')
}

// 設置 head
useHead({
  title: '頁面未找到 - TCM',
  meta: [
    { name: 'description', content: '抱歉，您所訪問的頁面不存在。' },
    { name: 'robots', content: 'noindex' },
  ],
})
</script>

<template>
  <div class="relative bg-gray-900">
    <LayoutHeader />
    <div
      :style="{
        backgroundImage: `url('/images/texture.webp')`,
        backgroundColor: 'lightgray',
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% 1552px',
      }"
      class="pointer-events-none h-[72px] w-full opacity-50 mix-blend-overlay md:h-[90px] lg:h-[104px]"
    ></div>
    <LayoutBackLine />
    <section class="relative flex w-full flex-col items-center justify-center pb-[120px] md:pb-12 lg:h-[calc(100vh-104px)] lg:pb-0">
      <div
        :style="{
          backgroundImage: `url('/images/texture.webp')`,
          backgroundColor: 'lightgray',
          backgroundPosition: 'center top',
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% 1552px',
        }"
        class="pointer-events-none absolute top-0 z-[1] size-full opacity-50 mix-blend-overlay"
      ></div>

      <div
        class="relative mx-auto flex w-[calc(100%-40px)] max-w-screen-xl flex-col gap-6 pb-10 pt-40 text-center md:gap-8 md:pb-20 md:pt-[200px] lg:py-0"
      >
        <div>
          <h1 class="text-h1-en text-white">{{ error.statusCode }}</h1>
          <!-- <p>{{ error.statusMessage }}</p> -->
        </div>
        <div class="flex justify-center">
          <div class="group cursor-pointer" @click="goHome">
            <AtomButton @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" ref="atomButtonRef" text="返回首頁" />
          </div>
        </div>
      </div>
      <div class="pointer-events-none hidden h-full w-full md:block lg:absolute">
        <div class="bottom-24 overflow-hidden py-10 lg:absolute">
          <ModalMarquee class="h-[100px] scale-150 lg:h-full" :data="marquee2">
            <template #default="{ slotData }">
              <div class="marquee | flex h-full shrink-0 text-2xl lg:w-full">
                <img
                  class="object-contain px-5"
                  :src="i"
                  :style="{ width: `${100 / slotData.length}%`, height: '100%' }"
                  v-for="i in slotData"
                  :key="i"
                />
              </div>
              <div class="marquee | flex h-full shrink-0 text-2xl lg:w-full">
                <img
                  class="object-contain px-5"
                  :src="i"
                  :style="{ width: `${100 / slotData.length}%`, height: '100%' }"
                  v-for="i in slotData"
                  :key="i"
                />
              </div>
            </template>
          </ModalMarquee>
        </div>
      </div>
      <div class="pointer-events-none relative -left-5 mt-8 h-16 w-[calc(100%+40px)] md:hidden">
        <div class="absolute top-0 w-full">
          <div class="sticky top-[45%] overflow-hidden">
            <AtomMarquee :data="marquee2" height="h-16" :duration="25" spacing="px-5" />
          </div>
        </div>
      </div>
    </section>
    <LayoutFooter class="hidden md:grid" />
    <LayoutFooterMobile class="md:hidden" />
  </div>
</template>

<style scoped></style>
