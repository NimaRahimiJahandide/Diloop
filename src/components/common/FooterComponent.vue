<script setup>
import { Icon } from "@iconify/vue";

</script>
<template>
  <footer class="fixed bottom-2 w-full">
    <div class="max-w-[1248px] mx-auto w-full max-h-24 bg-white rounded-2xl shadow-md px-6 py-3">
      <div class="flex items-center justify-between space-x-8">
        <div class="flex flex-col items-center space-x-2 text-blue-500 hover:opacity-80 transition cursor-pointer">
          <Icon icon="mdi:play" width="24" height="24"/>
          <span class="text-sm">آموزش</span>
         </div>
        <div class="flex flex-col items-center space-x-2 hover:opacity-80 transition cursor-pointer">
          <Icon icon="ic:outline-email" width="24" height="24" />
          <span class="text-sm">دستیار هوش مصنوعی</span> 
        </div>
        <div class="flex flex-col items-center space-x-2 hover:opacity-80 transition cursor-pointer">
          <Icon icon="material-symbols:person" width="24" height="24"/>
          <span class="text-sm">باشگاه مشتریان</span>
        </div>
      </div>
    </div>
  </footer>
</template>