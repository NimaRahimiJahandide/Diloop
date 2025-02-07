<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
  <div class="relative w-full sm:w-[300px]">
    <input type="search" placeholder="جستجو..." class="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-primary transition-all rtl" />
    <Icon icon="material-symbols:search" width="24" height="24" class="absolute left-3 top-2 text-gray-400" />
  </div>
</template>