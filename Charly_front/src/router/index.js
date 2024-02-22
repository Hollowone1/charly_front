import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import ListViewVue from '@/views/ListView.vue'
import Connection from '@/views/ConnectionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: HomeView
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfileViewVue
    },
    {
      path: '/list',
      name: 'liste-des-recettes',
      component: ListViewVue
    },
    {
      path: '/connexion',
      name: 'connection',
      component: Connection
    },
  ]
})

export default router
