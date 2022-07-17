<template>
  <nav class="sticky top-0 bg-white bg-opacity-70 backdrop-blur z-40 py-6">
    <div class="flex items-center justify-between px-8 sm:px-10">
      <a class="text-3xl font-semibold" href=""><span>DearDiary.</span></a>
      <div class="hidden sm:block">
        <ul class="flex flex-row sm:text-sm sm:font-medium sm:gap-4 md:text-md md:gap-5 lg:gap-7">
          <li><a class="hover:text-emerald-700" href="">About</a></li>
          <li><a class="hover:text-emerald-700" href="">Features</a></li>
          <li><a class="hover:text-emerald-700" href="">Prices</a></li>
          <li><a class="hover:text-emerald-700" href="">Reviews</a></li>
          <li><a class="hover:text-emerald-700" href="">Contacts</a></li>
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
