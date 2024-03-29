import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ListView from '@/views/ListView.vue'
import ConnectionView from '@/views/ConnectionView.vue'
import ItemDetailsView from '@/views/ItemDetailsView.vue'
import BackOfficeView from '@/views/BackOfficeView.vue'
import CreateWorkshopView from "@/views/CreateWorkshopView.vue";
import EditWorkshopView from "@/views/EditWorkshopView.vue";


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
            component: ProfileView
        },
        {
            path: '/list',
            name: 'liste-des-recettes',
            component: ListView
        },
        {
            path: '/atelier/:id',
            name: 'atelier-details',
            component: ItemDetailsView,
            props: true
        },
        {
            path: '/connexion',
            name: 'connection',
            component: ConnectionView
        },
        {
            path: '/back-office',
            name: 'back-office',
            component: BackOfficeView
        },
        {
            path: '/back-office/create-workshop',
            name: 'create-workshop',
            component: CreateWorkshopView
        },
        {
            path: '/back-office/edit-workshop/:id',
            name: 'edit-workshop',
            component: EditWorkshopView
        }
    ]
})

export default router
