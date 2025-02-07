<script setup>
import { Icon } from "@iconify/vue";

</script>
<template>
  <footer class="fixed bottom-0 w-full px-4">
    <div class="max-w-[1248px] mx-auto w-full max-h-24 bg-white rounded-2xl shadow-md sm:px-6 px-3 py-3">
      <div class="flex items-center justify-between">
        <div class="flex flex-col items-center text-blue-500 hover:opacity-80 transition cursor-pointer">
          <Icon icon="mdi:play" width="24" height="24"/>
          <span class="text-xs sm:text-sm">آموزش</span>
         </div>
        <div class="flex flex-col items-center hover:opacity-80 transition cursor-pointer">
          <Icon icon="ic:outline-email" width="24" height="24" />
          <span class="text-xs sm:text-sm">دستیار هوش مصنوعی</span> 
        </div>
        <div class="flex flex-col items-center hover:opacity-80 transition cursor-pointer">
          <Icon icon="material-symbols:person" width="24" height="24"/>
          <span class="text-xs sm:text-sm">باشگاه مشتریان</span>
        </div>
      </div>
    </div>
  </footer>
</template>