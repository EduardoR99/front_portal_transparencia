import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import searchs from "../views/searchs.vue";
import detailedSearchs from "../views/detailedSearchs.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/colatina/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/colatina/empenho',
            name: 'home',
            component: searchs
        },
        {
            path: '/colatina/empenho/:subMenu',
            name: 'home',
            component: detailedSearchs
        }
    ]
})

export default router
