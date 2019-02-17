import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import web from './modules/web'
import desktop from './modules/desktop'
import server from './modules/server'
import unity from './modules/unity'

const router = new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('views/home/index.vue')
        },
        {
            path: '/type',
            component: () => import('views/child_View/index.vue'),
            children: [
                ...web,
                ...desktop,
                ...server,
                ...unity
            ]
        },

    ]
});

export function createRouter() {
    return router;
}
