<script setup>
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  paginationId: {
    type: String,
    default: '',
  },
  slideData: {
    type: Array,
    default: () => [],
  },
  spaceBetween: {
    type: Number,
    default: 24,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
})

const { id, paginationId, slideData, spaceBetween, autoplay, loop } = toRefs(props)

const swiper = ref(null)
const nowIndex = ref(0)

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: spaceBetween.value,
  speed: 300,
  autoplay: autoplay.value,
  grabCursor: true,
  // breakpoints: {
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   996: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // }
  centeredSlides: false,
  loop: loop.value,
  on: {
    slideChangeTransitionEnd: (now) => {
      nowIndex.value = now.realIndex
    },
  },
  navigation: {
    nextEl: `#${id.value}swiperNext`,
    prevEl: `#${id.value}swiperPrev`,
  },
  pagination: paginationId.value
    ? {
        el: `#${paginationId.value}`,
        clickable: true,
      }
    : false,
}

onMounted(() => {
  Swiper.use([Navigation, Pagination, Autoplay])
  swiper.value = new Swiper(`#${id.value}`, swiperOptions)
})
</script>

<template>
  <div class="swiperContainer">
    <div :id="id" class="swiper">
      <div class="swiper-wrapper">
        <slot :slot-slide-data="slideData" :slot-index="nowIndex">
          <div class="swiper-slide" v-for="(slide, index) in slideData" :key="index">
            <img class="w-full" :src="slide" alt="slide" />
          </div>
        </slot>
      </div>
      <div class="pointer-events-none absolute top-0 z-2 flex h-full w-full items-center justify-between px-5">
        <div
          :id="`${id}swiperPrev`"
          class="swiper-button-prev | group pointer-events-auto cursor-pointer rounded-full bg-white/50 p-4 duration-300 hover:bg-white"
        >
          <AtomIcon name="arrow" :size="24" class="rotate-180 text-white duration-300 group-hover:text-black" />
        </div>
        <div :id="paginationId" class="swiper-pagination | pointer-events-auto absolute bottom-[15px] left-1/2 -translate-x-1/2"></div>
        <div
          :id="`${id}swiperNext`"
          class="swiper-button-next | group pointer-events-auto cursor-pointer rounded-full bg-white/50 p-4 duration-300 hover:bg-white"
        >
          <AtomIcon name="arrow" :size="24" class="text-white duration-300 group-hover:text-black" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiperContainer :deep(.swiper-pagination) {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
.swiperContainer :deep(.swiper-pagination .swiper-pagination-bullet) {
  width: 8px !important;
  height: 8px !important;
  background-color: #fff !important;
  border-radius: 100% !important;
  transition: 0.3s ease !important;
  cursor: pointer !important;
}
.swiperContainer :deep(.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active) {
  background-color: #1da539 !important;
}
</style>
