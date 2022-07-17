<template>
  <div id="features" class="flex h-72 mx-20 mt-10 px-10 py-5 justify-center">
    <div class="flex flex-col">
      <h1 class="text-5xl font-semibold text-center pt-20">Our Features</h1>
      <p class="text-xl text-gray-500 font-medium text-center px-56 py-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta et quas exercitationem
        itaque reprehenderit voluptatem, recusandae officiis quibusdam fugit tempore.
      </p>
    </div>
  </div>

  <div class="flex h-96 mx-40 mt-10 mb-32 gap-9 justify-center">
    <div class="w-1/3">
      <div class="flex justify-center">
        <SparklesIcon
          class="w-20 h-20 px-5 py-5 mt-20 mb-10 text-white bg-emerald-600 rounded-md"
        ></SparklesIcon>
      </div>

      <h1 class="text-3xl font-medium text-center mb-4">Incredible</h1>
      <p class="text-lg text-gray-500 font-medium text-center px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>

    <div class="w-1/3">
      <div class="flex justify-center">
        <LightBulbIcon
          class="w-20 h-20 px-5 py-5 mt-20 mb-10 text-white bg-emerald-600 rounded-md"
        ></LightBulbIcon>
      </div>

      <h1 class="text-3xl font-medium text-center mb-4">Awesome</h1>
      <p class="text-lg text-gray-500 font-medium text-center px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>

    <div class="w-1/3">
      <div class="flex justify-center">
        <CursorClickIcon
          class="w-20 h-20 px-5 py-5 mt-20 mb-10 text-white bg-emerald-600 rounded-md"
        ></CursorClickIcon>
      </div>

      <h1 class="text-3xl font-medium text-center mb-4">Useful</h1>
      <p class="text-lg text-gray-500 font-medium text-center px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>
  </div>
</template>

<script>
import { SparklesIcon, LightBulbIcon, CursorClickIcon } from '@heroicons/vue/solid'

export default {
  components: { SparklesIcon, LightBulbIcon, CursorClickIcon },
}
</script>
