import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));
const About = lazy(() => import('../pages/About.page'));
const Service = lazy(() => import('../pages/Service.page'));
const NotFound = lazy(() => import('../pages/Page404.page'));

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'About',
        path: '/about',
        exact: true,
        component: About,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Service',
        path: '/service',
        exact: true,
        component: Service,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'NotFound',
        path: '/*',
        exact: false,
        component: NotFound,
        authentication: false,
    }
];

export default routes;