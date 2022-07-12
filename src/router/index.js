import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import BigChart from '../views/BigChart.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/wykres3',
        name: 'BigChart',
        component: BigChart
    }
]

const router =createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})
export default router
