<template>
  <div id="prices" class="scroll-m-16 h-56 bg-gray-200">
    <h1 class="text-5xl font-semibold text-center pt-16">Flexible Plans</h1>
    <p class="text-lg font-medium text-center pt-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis.
    </p>
  </div>
  <div class="flex h-160 px-40 pb-20 bg-gray-200 gap-10">
    <div class="w-1/3 bg-white hover:border-2 border-emerald-500 rounded-xl mb-8">
      <div class="mx-16 my-20">
        <h1 class="text-xl font-medium mb-4">Weekly Plan</h1>
        <h2 class="text-5xl font-medium">&dollar;4.99</h2>
      </div>
      <div class="mx-16 my-16 text-lg">
        <ul>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
        </ul>
      </div>
      <div class="mx-16">
        <button class="text-lg text-white font-medium px-8 py-4 w-full bg-emerald-600 rounded-lg">
          Choose Weekly Plan
        </button>
      </div>
    </div>

    <div class="w-1/3 bg-white hover:border-2 border-emerald-500 rounded-xl mb-8">
      <div class="mx-16 my-20">
        <h1 class="text-xl font-medium mb-4">Monthly Plan</h1>
        <h2 class="text-5xl font-medium">&dollar;12.99</h2>
      </div>
      <div class="mx-16 my-16 text-lg">
        <ul>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
        </ul>
      </div>
      <div class="mx-16">
        <button class="text-lg text-white font-medium px-8 py-4 w-full bg-emerald-600 rounded-lg">
          Choose Monthly Plan
        </button>
      </div>
    </div>

    <div class="w-1/3 bg-white hover:border-2 border-emerald-500 rounded-xl mb-8">
      <div class="mx-16 my-20">
        <h1 class="text-xl font-medium mb-4">Yearly Plan</h1>
        <h2 class="text-5xl font-medium">&dollar;29.99</h2>
      </div>
      <div class="mx-16 my-16 text-lg">
        <ul>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
          <li><CheckIcon class="w-5"></CheckIcon></li>
        </ul>
      </div>
      <div class="mx-16">
        <button class="text-lg text-white font-medium px-8 py-4 w-full bg-emerald-600 rounded-lg">
          Choose Yearly Plan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'

export default {
  components: { CheckIcon },
}
</script>
