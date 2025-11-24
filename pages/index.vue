<script setup>
const dot = ref('')
const dotAnimation = ref(null)

const init = () => {
  dotAnimation.value = setInterval(() => {
    dot.value += '.'
    if (dot.value.length > 3) {
      dot.value = '.'
    }
  }, 500)
}

onMounted(() => {
  init()
})
</script>
<template>
  <div class="container relative flex h-screen w-full items-center justify-center text-4xl font-bold">
    <NuxtLink to="/demo" class="relative">
      模板<span class="absolute left-full">{{ dot }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
