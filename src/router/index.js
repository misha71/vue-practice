import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Delivery from "@/pages/Delivery.vue";
import Post from "@/pages/Post.vue";
import Catalog from "@/pages/Catalog.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/about/',
            component: About
        },
        {
            path: '/catalog/',
            component: Catalog
        },
        {
            path: '/delivery/',
            component: Delivery
        },
        {
            path: '/post/:id/',
            component: Post
        },
    ]
})

export default router
