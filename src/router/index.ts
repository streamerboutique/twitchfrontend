import Vue from 'vue'
import VueRouter from 'vue-router'
import Panel from '../views/Panel.vue'
import Config from '@/views/Config.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/panel',
        name: 'panel',
        component: Panel
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: Panel
    }, {
        path: '/config',
        name: 'config',
        component: Config
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
