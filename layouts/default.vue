<script setup>
import { useAllStore } from '@/store/all'
import siteData from '@/data/index.js'
const { allData } = toRefs(useAllStore())
allData.value = siteData

await useLoadingHandler().setLoadingComplete()
</script>

<template>
  <div>
    <LayoutHeader :data="allData?.menu" />
    <main class="mx-auto pt-[86px]">
      <slot />
    </main>
    <LayoutFooter />
    <div id="modalsField" class="pointer-events-none fixed inset-0 z-[2000]"></div>
  </div>
</template>

<style scoped></style>
