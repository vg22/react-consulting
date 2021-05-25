import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));
const NotFound = lazy(() => import('../pages/Page404.page'));

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false
    },
    {
        name: 'NotFound',
        path: '/*',
        exact: false,
        component: NotFound,
        authentication: false
    }
];

export default routes;