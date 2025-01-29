import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import searchs from "../views/searchs.vue";
import detailedSearchs from "../views/detailedSearchs.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/despesas/empenhos',
            name: 'searchs',
            component: searchs
        },
        {
            path: '/despesas/empenhos/:id',
            name: 'detailedSearchs',
            component: detailedSearchs
        }
    ]
})

export default router
