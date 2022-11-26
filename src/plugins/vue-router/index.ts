import { PageName } from '@/common/constants';
import ForbiddenPageVue from '@/modules/errors/pages/ForbiddenPage.vue';
import NotFoundPageVue from '@/modules/errors/pages/NotFoundPage.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/404',
        name: PageName.NOT_FOUND_PAGE,
        component: NotFoundPageVue,
        meta: {
            public: true,
        },
    },
    {
        path: '/403',
        name: PageName.FORBIDDEN_PAGE,
        component: ForbiddenPageVue,
        meta: {
            public: true,
        },
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;
