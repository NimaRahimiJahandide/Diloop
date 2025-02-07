<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <nav class="flex justify-between items-center p-4">
    <router-link to="/" class="flex flex-col items-center" active-class="active-link">
      <Icon icon="material-symbols-light:home" :class="{'text-primary': route.path === '/', 'text-black': route.path !== '/'}" width="24" height="24" />
      <span class="text-sm">خانه</span>
    </router-link>
    <router-link to="/score" class="flex flex-col items-center" active-class="active-link">
      <Icon icon="material-symbols-light:home" :class="{'text-primary': route.path === '/score', 'text-black': route.path !== '/score'}" width="24" height="24" />
      <span class="text-sm">امتیاز</span>
    </router-link>
    <router-link to="/discounts" class="flex flex-col items-center" active-class="active-link">
      <Icon icon="material-symbols-light:home" :class="{'text-primary': route.path === '/discounts', 'text-black': route.path !== '/discounts'}" width="24" height="24" />
      <span class="text-sm">تخفیفات</span>
    </router-link>
    <router-link to="/invite" class="flex flex-col items-center" active-class="active-link">
      <Icon icon="material-symbols-light:home" :class="{'text-primary': route.path === '/invite', 'text-black': route.path !== '/invite'}" width="24" height="24" />
      <span class="text-sm">دعوت دوستان</span>
    </router-link>
  </nav>
</template>

<style>
.active-link {
  /* اگر بخواهید استایل خاصی برای لینک فعال داشته باشید */
}
</style>