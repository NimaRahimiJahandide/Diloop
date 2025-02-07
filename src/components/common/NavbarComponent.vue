<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <nav class="bg-white shadow-2xl fixed z-10 w-full">
    <div class="max-w-[1248px] mx-auto px-6 p-4 sm:p-6 flex justify-between items-center">
      <router-link to="/" class="flex flex-col items-center" active-class="active-link">
        <Icon icon="material-symbols-light:home" :class="{'text-primary': route.path === '/', 'text-black': route.path !== '/'}" width="24" height="24" />
        <span class="text-sm font-vazir-medium">خانه</span>
      </router-link>
      <router-link to="/score" class="flex flex-col items-center" active-class="active-link">
        <Icon icon="mdi:baseball" :class="{'text-primary': route.path === '/score', 'text-black': route.path !== '/score'}" width="24" height="24" />
        <span class="text-sm font-vazir-medium">امتیاز</span>
      </router-link>
      <router-link to="/discounts" class="flex flex-col items-center" active-class="active-link">
        <Icon icon="arcticons:ad-free" :class="{'text-primary': route.path === '/discounts', 'text-black': route.path !== '/discounts'}" width="24" height="24" />
        <span class="text-sm font-vazir-medium">تخفیفات</span>
      </router-link>
      <router-link to="/invite" class="flex flex-col items-center" active-class="active-link">
        <Icon icon="material-symbols:share" :class="{'text-primary': route.path === '/invite', 'text-black': route.path !== '/invite'}" width="24" height="24" />
        <span class="text-sm font-vazir-medium">دعوت دوستان</span>
      </router-link>
    </div>
  </nav>
</template>

<style>
.active-link {
  /* اگر بخواهید استایل خاصی برای لینک فعال داشته باشید */
}
</style>