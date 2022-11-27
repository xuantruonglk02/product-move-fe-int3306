import { PageName } from '@/common/constants';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from './pages/LoginPage.vue';

const authRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: PageName.LOGIN_PAGE,
                component: LoginPage,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
];

export default authRoutes;
