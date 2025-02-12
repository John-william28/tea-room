import { createWebHashHistory, createRouter } from "vue-router"
import HomeView from './pages/HomeView.vue'
import LoginPage from './pages/LoginPage.vue'
import SessionPage from './pages/SessionPage.vue'

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
        },
        {
            path: '/session/:id',
            component: SessionPage
        }
    ]
})

export default router