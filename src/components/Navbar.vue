<template>
  <nav class="sticky top-0 bg-white bg-opacity-70 backdrop-blur z-40 py-6">
    <div class="flex items-center justify-between px-8 sm:px-10">
      <a class="text-3xl font-semibold" href=""><span>DearDiary.</span></a>
      <div class="hidden sm:block">
        <ul class="flex flex-row sm:text-sm sm:font-medium sm:gap-4 md:text-md md:gap-5 lg:gap-7">
          <li @click="scrollToSection('about')" class="cursor-pointer hover:text-emerald-700">
            About
          </li>
          <li @click="scrollToSection('features')" class="cursor-pointer hover:text-emerald-700">
            Features
          </li>
          <li @click="scrollToSection('prices')" class="cursor-pointer hover:text-emerald-700">
            Prices
          </li>
          <li @click="scrollToSection('reviews')" class="cursor-pointer hover:text-emerald-700">
            Reviews
          </li>
          <li class="cursor-pointer hover:text-emerald-700">Contacts</li>
        </ul>
      </div>
      <button
        class="text-md font-medium border-solid border-2 border-emerald-500 px-2 py-2 rounded-lg sm:hidden"
      >
        Menu
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    scrollToSection: Function,
  },
}
</script>
