<script setup>
const data = ref([{}, {}, {}, {}, {}, {}])
</script>

<template>
  <div class="mx-auto grid w-full max-w-screen-2xl grid-cols-3 gap-7 px-[120px] py-[120px]">
    <div
      class="shadow-symptom flex aspect-[378/282] cursor-pointer flex-col items-center justify-between gap-0 rounded-3xl bg-white pb-5 font-Noto text-[23px] duration-300 hover:scale-110 hover:bg-[#FFDD48]"
    >
      <div class="flex flex-1 items-center">
        <img class="w-[142px]" src="/images/symptom/01.png" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">糖友皮蛇纏身恐<span class="font-bold text-[#E67C8C]">控糖失衡</span></p>
        <p class="font-medium">&#40;根據西班牙研究&#41;</p>
      </div>
    </div>
    <div
      class="shadow-symptom flex aspect-[378/282] cursor-pointer flex-col items-center justify-between gap-0 rounded-3xl bg-white pb-5 font-Noto text-[23px] duration-300 hover:scale-110 hover:bg-[#FFDD48]"
    >
      <div class="flex flex-1 items-center">
        <img class="w-[192px]" src="/images/symptom/02.png" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">帶狀疱疹發作後第一個月</p>
        <p class="font-bold text-[#E67C8C]">中風飆升至78%</p>
      </div>
    </div>
    <div
      class="shadow-symptom flex aspect-[378/282] cursor-pointer flex-col items-center justify-between gap-0 rounded-3xl bg-white pb-5 font-Noto text-[23px] duration-300 hover:scale-110 hover:bg-[#FFDD48]"
    >
      <div class="flex flex-1 items-center">
        <img class="w-[294px]" src="/images/symptom/03.png" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">慢性腎病若皮蛇纏身</p>
        <p class="font-medium">恐<span class="font-bold text-[#E67C8C]">增加腎衰竭風險</span>&#40;根據台灣研究&#41;</p>
      </div>
    </div>
    <div
      class="shadow-symptom flex aspect-[378/282] cursor-pointer flex-col items-center justify-between gap-0 rounded-3xl bg-white pb-5 font-Noto text-[23px] duration-300 hover:scale-110 hover:bg-[#FFDD48]"
    >
      <div class="flex flex-1 items-center">
        <img class="w-[193px]" src="/images/symptom/04.png" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">在美國 年長者體內幾乎都存有病毒</p>
        <p class="font-medium">免疫力下降<span class="font-bold text-[#E67C8C]">病毒恐伺機作亂</span></p>
      </div>
    </div>
    <div
      class="shadow-symptom flex aspect-[378/282] cursor-pointer flex-col items-center justify-between gap-0 rounded-3xl bg-white pb-5 font-Noto text-[23px] duration-300 hover:scale-110 hover:bg-[#FFDD48]"
    >
      <div class="flex flex-1 items-center">
        <img class="w-[177px]" src="/images/symptom/05.png" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">得過最快兩個月會復發</p>
        <p class="font-medium">
          <span class="font-bold text-[#E67C8C]">復發</span>機會恐高達<span class="font-bold text-[#E67C8C]">9倍*</span>
        </p>
      </div>
    </div>
    <div
      class="shadow-symptom flex aspect-[378/282] cursor-pointer flex-col items-center justify-between gap-0 rounded-3xl bg-white pb-5 font-Noto text-[23px] duration-300 hover:scale-110 hover:bg-[#FFDD48]"
    >
      <div class="flex flex-1 items-center">
        <img class="w-[187px]" src="/images/symptom/06.png" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">帶狀疱疹疼痛比生小孩還痛</p>
        <p class="font-medium">相關疼痛如疹後神經痛恐持續<span class="font-bold text-[#E67C8C]">10年</span></p>
      </div>
    </div>
  </div>
  <div class="w-[854px] mx-auto cursor-pointer pb-[120px]">
    <img src="/images/symptom/talk.png" alt="">
  </div>
</template>

<style scoped></style>
