<script setup>
import { Icon } from "@iconify/vue";
import CardComponent from '@/components/common/CardComponent.vue'
import SearchbarComponent from '@/components/common/SearchbarComponent.vue'
import {ref } from 'vue'
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
</script>

<template>
  <main class="py-20">
    <div class="py-6 sm:py-8">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <SearchbarComponent/>
      </div>
      <div class="bg-white rounded-2xl p-4 w-full">
        <h2 class="text-xl font-bold mb-6 text-right">خانه</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <CardComponent v-for="card in items" :key="card.id" :image="card.image" :title="card.title"/>
        </div>
      </div>
    </div>
  </main>
</template>
