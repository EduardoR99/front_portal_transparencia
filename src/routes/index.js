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
            path: '/colatina/:menu/:submenu',
            name: 'searchs',
            component: searchs
        },
        {
            path: '/colatina/:menu/:submenu/:id',
            name: 'detailedSearchs',
            component: detailedSearchs
        }
    ]
})

export default router
