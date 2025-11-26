<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  height: {
    type: String,
    default: 'h-auto',
  },
  duration: {
    type: Number,
    default: 15,
  },
  spacing: {
    type: String,
    default: 'px-5',
  },
})

const { data, height, duration, spacing } = toRefs(props)

// 計算每張圖片的寬度，確保滿版無接縫
const imageWidth = computed(() => {
  return data.value.length > 0 ? `${100 / data.value.length}vw` : '100vw'
})
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black">
    <div class="animate-marquee flex w-fit" :style="{ animationDuration: `${duration}s` }">
      <!-- 第一組內容 -->
      <div class="flex shrink-0 whitespace-nowrap">
        <img
          :class="[height, 'shrink-0 object-contain', spacing]"
          :src="i"
          :style="{ width: imageWidth }"
          v-for="(i, index) in data"
          :key="`group1-${index}`"
        />
      </div>
      <!-- 第二組內容（重複） -->
      <div class="flex shrink-0 whitespace-nowrap">
        <img
          :class="[height, 'shrink-0 object-contain', spacing]"
          :src="i"
          :style="{ width: imageWidth }"
          v-for="(i, index) in data"
          :key="`group2-${index}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee linear infinite;
}

/* 確保動畫流暢 */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
