import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ProfileView from '@/views/ProfileView.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            layout: 'default-layout'
        }
    },

    {
        path: '/product/:id',
        name: 'product',
        component: ProductView,
        meta: {
            layout: 'default-layout'
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {
            layout: 'profile-layout'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router