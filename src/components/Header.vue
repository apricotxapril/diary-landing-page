<template>
  <div
    class="px-8 bg-gradient-to-r from-green-200 to-blue-300 relative pt-14 pb-44 sm:py-30 sm:flex sm:flex-row sm:justify-center sm:items-center"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      class="z-10 flex flex-col space-y-6 sm:justify-center sm:flex-[0.45] sm:space-y-8 md:space-y-11 lg:space-y-14"
    >
      <article class="z-10 text-center mx-auto space-y-3 sm:text-start sm:space-y-4">
        <h1 class="text-3xl font-bold leading-10 md:text-4xl lg:text-5xl">
          Take a note everywhere
          <br />
          with
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
            >DearDiary</span
          >
        </h1>
        <p class="text-gray-600 sm:text-xs lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id.
        </p>
      </article>
      <button
        class="z-10 text-md text-white font-medium bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-3 rounded-lg lg:text-xl lg:font-bold lg:py-4 sm:max-w-[14rem]"
      >
        Get Started
      </button>
    </div>
    <div class="hidden sm:block sm:flex-[0.6] sm:z-10 md:flex-[0.45] lg:flex-[0.4] lg:max-w-lg">
      <div class="animate-fading max-w-lg">
        <img
          class="animate-imageFloating"
          src="@/assets/diary.png"
          alt="image"
          width="2800"
          height="2800"
        />
      </div>
    </div>
    <div
      class="w-full h-[10rem] sm:h-[13rem] md:h[18rem] lg:h-[25rem] absolute left-0 -bottom-2 bg-gradient-to-b from-transparent to-white"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>
