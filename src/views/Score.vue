<script setup>
import NavbarComponent from '@/components/common/NavbarComponent.vue'
</script>

<template>
  <main>
    <div class=" h-[800px] bg-white">
      <NavbarComponent/>
      <div class="p-4">
        <div class="bg-[#66CC33] rounded-lg p-6 text-white text-center"> App Home </div>
      </div>
      <div class="absolute bottom-0 w-full border-t">
        <div class="flex justify-between items-center p-4">
          <div class="flex flex-col items-center gap-1"> <span class="material-symbols-outlined">verified_user</span>
            <span class="text-xs">پشتهع مشتریان</span>
          </div>
          <div class="flex flex-col items-center gap-1"> <span class="material-symbols-outlined">mail</span> <span
              class="text-xs">پیگیری حضوری مشتریان</span> </div>
          <div class="flex flex-col items-center gap-1 text-[#66CC33]"> <span
              class="material-symbols-outlined">play_arrow</span> <span class="text-xs">آموزش</span> </div>
        </div>
      </div>
    </div>
  </main>
</template>