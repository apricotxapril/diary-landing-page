<template>
  <div class="translate-y-8 space-y-8 sm:space-y-12 md:space-y-14">
    <h1 class="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
      More about
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
        >DearDiary</span
      >
    </h1>
    <div class="space-y-16">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        class="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:px-10 sm:justify-center md:space-x-16"
      >
        <div class="w-3/4 h-[15rem] bg-gray-300 rounded-lg sm:flex-1 md:max-w-sm"></div>
        <article class="text-start font-medium space-y-2 w-3/4 sm:flex-1 md:max-w-sm">
          <h1 class="text-2xl md:text-3xl">Plan</h1>
          <p class="text-md font-light text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, esse amet quaerat
            dicta aut earum iste optio at. Pariatur, voluptas.
          </p>
        </article>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        class="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:px-10 sm:justify-center md:space-x-16"
      >
        <article
          class="order-2 text-start font-medium space-y-2 w-3/4 sm:order-1 sm:flex-1 md:max-w-sm"
        >
          <h1 class="text-2xl md:text-3xl">Write</h1>
          <p class="text-md font-light text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, esse amet quaerat
            dicta aut earum iste optio at. Pariatur, voluptas.
          </p>
        </article>
        <div
          class="order-1 w-3/4 h-[15rem] bg-gray-300 rounded-lg sm:order-2 sm:flex-1 md:max-w-sm"
        ></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        class="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:px-10 sm:justify-center md:space-x-16"
      >
        <div class="w-3/4 h-[15rem] bg-gray-300 rounded-lg sm:flex-1 md:max-w-sm"></div>
        <article class="text-start font-medium space-y-2 w-3/4 sm:flex-1 md:max-w-sm">
          <h1 class="text-2xl md:text-3xl">List</h1>
          <p class="text-md font-light text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, esse amet quaerat
            dicta aut earum iste optio at. Pariatur, voluptas.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>
