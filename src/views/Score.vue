<script setup>
import { Icon } from "@iconify/vue";
import CardComponent from '@/components/common/CardComponent.vue'
import {ref, computed } from 'vue'
import { useRoute } from "vue-router";

let route = useRoute()

let items = ref([
  {
    id:0,
    title: 'بازاریابی دیجیتال',
    image: '/img/item.webp',
  },
  {
    id:1,
    title: 'اموزش Seo',
    image: '/img/item.webp',
  },
  {
    id:2,
    title: 'بازاریابی سنتی',
    image: '/img/item.webp',
  },
  {
    id:3,
    title: 'بازاریابی مدرن',
    image: '/img/item.webp',
  },
  {
    id:4,
    title: 'بازاریابی',
    image: '/img/item.webp',
  },
  {
    id:5,
    title: 'تست',
    image: '/img/item.webp',
  },
  {
    id:6,
    title: 'سلام',
    image: '/img/item.webp',
  },
  {
    id:7,
    title: 'سلامت',
    image: '/img/item.webp',
  },
  {
    id:8,
    title: 'حال خوب',
    image: '/img/item.webp',
  },
])

const titlePage = computed(() => {
  return route.name == 'home' ? 'خانه' : route.name == 'score' ? 'امتیاز' : ''
})
</script>

<template>
  <main class="py-20">
    <div class="py-6 sm:py-8">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div class="relative w-full sm:w-[300px]">
          <input type="search" placeholder="جستجو..."
            class="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-primary transition-all rtl" />
          <Icon icon="material-symbols:search" width="24" height="24" class="absolute left-3 top-2 text-gray-400" />
        </div>
        <details class="relative">
          <summary class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span>سطح افقی</span>
            <Icon icon="fe:arrow-down" width="24" height="24" />
          </summary>
        </details>
      </div>
      <div class="bg-white rounded-2xl p-4 w-full">
        <h2 class="text-xl font-bold mb-6 text-right">{{titlePage}}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <CardComponent v-for="card in items" :key="card.id" :image="card.image" :title="card.title"/>
        </div>
      </div>
    </div>
  </main>
</template>
