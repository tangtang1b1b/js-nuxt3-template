<script setup>
</script>

<template>
  <div class="py-10">
    <div class="text-center font-Noto text-4xl font-bold mb-10">
      使用者介面
    </div>
    <div class="px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-2xl">
      <div class="w-full aspect-[4/3] flex justify-center items-center">
        <NuxtLink to="/demo/slider" class="size-full border rounded-xl flex justify-center items-center duration-300 hover:text-white hover:bg-black">
          輪播
        </NuxtLink>
      </div>
      <div class="w-full aspect-[4/3] flex justify-center items-center">
        <NuxtLink to="/demo/accordion" class="size-full border rounded-xl flex justify-center items-center duration-300 hover:text-white hover:bg-black">
          手風琴
        </NuxtLink>
      </div>
      <div class="w-full aspect-[4/3] flex justify-center items-center">
        <NuxtLink to="/demo/popup" class="size-full border rounded-xl flex justify-center items-center duration-300 hover:text-white hover:bg-black">
          彈出視窗
        </NuxtLink>
      </div>
      <div class="w-full aspect-[4/3] flex justify-center items-center">
        <NuxtLink to="/demo/form" class="size-full border rounded-xl flex justify-center items-center duration-300 hover:text-white hover:bg-black">
          表單
        </NuxtLink>
      </div>
      <div class="w-full aspect-[4/3] flex justify-center items-center">
        <NuxtLink to="/demo/button" class="size-full border rounded-xl flex justify-center items-center duration-300 hover:text-white hover:bg-black">
          按鈕
        </NuxtLink>
      </div>
      <div class="w-full aspect-[4/3] flex justify-center items-center">
        <NuxtLink to="/demo/gsap" class="size-full border rounded-xl flex justify-center items-center duration-300 hover:text-white hover:bg-black">
          gsap
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>