import { createWebHashHistory, createRouter } from "vue-router"
import HomeView from './pages/HomeView.vue'
import LoginPage from './pages/LoginPage.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path: '',
            component: HomeView
        },
        {
            path: '/login',
            component: LoginPage
        }
    ]
})

export default router