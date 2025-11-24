<script setup>
import 'virtual:svg-icons-register'
import { useAllStore } from '@/store/all'
const { windowWidth, isScroll } = toRefs(useAllStore())

// 頁面轉場白色遮罩
const isPageTransitioning = ref(false)
const nuxtApp = useNuxtApp()
const router = useRouter()

// 攔截路由跳轉，先顯示遮罩再跳轉
let pendingNavigation = null

// 監聽路由變化前的事件
router.beforeEach((to, from, next) => {
  isPageTransitioning.value = true
  setTimeout(() => {
    return next()
  }, 500)
})

// 監聽頁面轉場鉤子
nuxtApp.hook('page:finish', () => {
  // 延遲淡出，確保頁面完全載入
  setTimeout(() => {
    isPageTransitioning.value = false
  }, 500)
})

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      isScroll.value = true
    } else {
      isScroll.value = false
    }
  })
})
</script>

<template>
  <div>
    <SEO />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- 頁面轉場白色遮罩 -->
    <div
      class="ease-in-out pointer-events-none fixed inset-0 z-[9999] bg-white transition-opacity duration-500"
      :class="{ 'opacity-100': isPageTransitioning, 'opacity-0': !isPageTransitioning }"
    ></div>
  </div>
</template>

<style>
/* .page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
} */
</style>
