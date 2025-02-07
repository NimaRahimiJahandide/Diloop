import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import Score from '@/views/Score.vue'
import Discounts from '@/views/Discounts.vue'
import invite from '@/views/Invite.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/score',
          name: 'score',
          component: Score,
        },
        {
          path: '/discounts',
          name: 'discounts',
          component: Discounts,
        },
        {
          path: '/invite',
          name: 'invite',
          component: invite,
        },
      ]
    },
    
  ],
})

export default router
