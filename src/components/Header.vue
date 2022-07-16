<template>
  <div
    class="px-8 flex flex-col space-y-6 bg-gradient-to-r from-green-200 to-blue-300 relative pt-14 pb-44 sm:pb-0"
  >
    <div class="sm:w-1/2">
      <article class="text-center m-auto space-y-3">
        <h1 class="text-3xl font-bold leading-10">
          Take a note everywhere
          <br />
          with
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
            >DearDiary</span
          >
        </h1>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id.
        </p>
      </article>
    </div>
    <button
      class="text-md text-white font-medium bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-3 rounded-lg"
    >
      Get Started
    </button>
    <div class="hidden sm:block sm:w-1/2">
      <div class="animate-floating">
        <img src="@/assets/diary.png" alt="" />
      </div>
    </div>
    <div
      class="w-full h-[12rem] sm:h-[20rem] absolute left-0 -bottom-2 bg-gradient-to-b from-transparent to-white"
    />
  </div>
</template>
