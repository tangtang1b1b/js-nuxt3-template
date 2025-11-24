<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      perPage: 10,
      currentPage: 1,
      lastPage: 20,
      total: 200,
    }),
  },
})

const { data } = toRefs(props)

const emits = defineEmits(['upload:page'])

const currentPage = ref(1)
const changePage = (page) => {
  if (page === 0 || page === data.value.lastPage + 1) return
  currentPage.value = page
  emits('upload:page', currentPage.value)
}
</script>

<template>
  <div class="flex items-center">
    <div
      @click="changePage(currentPage - 1)"
      :class="{ 'border-sec-lighter pointer-events-none': currentPage === 1 }"
      class="flex aspect-square w-8 cursor-pointer items-center justify-center"
    >
      <AtomIcon
        name="arrow"
        :size="10"
        :class="{ 'text-pr-light': currentPage === 1 }"
        class="rotate-180 text-pr duration-300 hover:text-pr-dark"
      />
    </div>
    <div v-if="data.lastPage <= 7" class="flex items-center gap-[18px] pb-1 md:gap-6">
      <div
        v-for="index in data.lastPage"
        @click="changePage(index)"
        :class="{ 'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === index }"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-pr duration-300 hover:text-pr-dark"
      >
        {{ index }}
      </div>
    </div>
    <div v-else class="flex items-center">
      <!-- previous -->
      <div
        @click="changePage(1)"
        :class="{ 'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === 1 && currentPage < 5 }"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        1
      </div>
      <span v-show="currentPage > 4" class="items-center text-sm tracking-[3.64px] text-gray-600">...</span>
      <div
        @click="changePage(2)"
        :class="{ 'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === 2 && currentPage < 5 }"
        v-show="currentPage < 5"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        2
      </div>
      <div
        v-show="currentPage < 5"
        @click="changePage(3)"
        :class="{ 'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === 3 && currentPage < 5 }"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        3
      </div>
      <div
        v-show="currentPage < 5"
        @click="changePage(4)"
        :class="{ 'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === 4 && currentPage < 5 }"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        4
      </div>
      <div
        v-show="currentPage < 5"
        @click="changePage(5)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        5
      </div>
      <!-- mid -->
      <div
        v-show="currentPage > 4 && currentPage < data.lastPage - 3"
        @click="changePage(currentPage > 4 ? currentPage - 1 : 3)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ currentPage > 4 ? `${currentPage - 1}` : '3' }}
      </div>
      <div
        :class="{ 'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage > 4 && currentPage < data.lastPage - 3 }"
        v-show="currentPage > 4 && currentPage < data.lastPage - 3"
        @click="changePage(currentPage > 4 ? currentPage : 4)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ currentPage > 4 ? `${currentPage}` : '4' }}
      </div>
      <div
        v-show="currentPage > 4 && currentPage < data.lastPage - 3"
        @click="changePage(currentPage > 4 ? currentPage + 1 : 5)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ currentPage > 4 ? `${currentPage + 1}` : '5' }}
      </div>
      <!-- next -->
      <div
        :class="{
          'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === data.lastPage - 4 && currentPage > data.lastPage - 4,
        }"
        v-show="currentPage > data.lastPage - 4"
        @click="changePage(data.lastPage - 4)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ data.lastPage - 4 }}
      </div>
      <div
        :class="{
          'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === data.lastPage - 3 && currentPage > data.lastPage - 4,
        }"
        v-show="currentPage > data.lastPage - 4"
        @click="changePage(data.lastPage - 3)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ data.lastPage - 3 }}
      </div>
      <div
        :class="{
          'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === data.lastPage - 2 && currentPage > data.lastPage - 4,
        }"
        v-show="currentPage > data.lastPage - 4"
        @click="changePage(data.lastPage - 2)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ data.lastPage - 2 }}
      </div>
      <div
        :class="{
          'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === data.lastPage - 1 && currentPage > data.lastPage - 4,
        }"
        v-show="currentPage > data.lastPage - 4"
        @click="changePage(data.lastPage - 1)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ data.lastPage - 1 }}
      </div>
      <span
        v-show="currentPage < data.lastPage - 3"
        class="flex aspect-square w-8 items-center justify-center text-sm tracking-[3.64px] text-gray-600"
        >...</span
      >
      <div
        :class="{
          'rounded-full bg-gray-200 font-bold !text-pr-dark': currentPage === data.lastPage && currentPage > data.lastPage - 4,
        }"
        @click="changePage(data.lastPage)"
        class="flex aspect-square w-8 cursor-pointer items-center justify-center text-sm text-gray-600 duration-300 hover:text-pr-dark"
      >
        {{ data.lastPage }}
      </div>
    </div>
    <div
      @click="changePage(currentPage + 1)"
      :class="{ 'pointer-events-none': currentPage === data.lastPage }"
      class="flex aspect-square w-8 cursor-pointer items-center justify-center"
    >
      <AtomIcon
        name="arrow"
        :size="10"
        :class="{ 'text-pr-light': currentPage === data.lastPage }"
        class="text-pr duration-300 hover:text-pr-dark"
      />
    </div>
  </div>
</template>

<style scoped></style>
