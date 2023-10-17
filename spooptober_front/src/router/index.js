import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoulleteCreate from '../views/RoulleteCreate.vue'
import Roulette from '../views/Roulette.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/create-roulette',
        name: 'RoulleteCreate',
        component: RoulleteCreate
    },
    {
        path: '/roulette/:name',
        name: 'Roulette',
        component: Roulette
    }
  ]
})

export default router
