import type {RouteRecordRaw} from "vue-router";
import Layout from './components/Layout.vue'
import M1List from './components/M1List.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/list',
        children: [
            {
                path: 'list',
                component: M1List
            }
        ]
    }
]

export default routes;
