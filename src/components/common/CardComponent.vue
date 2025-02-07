<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  image: String,
  title: String,
})
</script>

<template>
  <div
    class="group relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
    <img :src="image" :alt="title"
      class="w-full h-[180px] sm:h-[200px] object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
    <div class="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white">
      <h3 class="text-base sm:text-lg font-bold">{{title}}</h3>
    </div>
    <button
      class="absolute top-3 sm:top-4 right-3 sm:right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
      <Icon icon="pepicons-pop:dots-y" width="20" height="20" class="text-white cursor-pointer" />
    </button>
  </div>
</template>