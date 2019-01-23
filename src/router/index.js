import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import home from './modules/home'
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
        ...home,
        ...web,
        ...desktop,
        ...server,
        ...unity
    ]
});

export function createRouter() {
    return router;
}
