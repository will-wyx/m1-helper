import type {RouteRecordRaw} from "vue-router";
import Layout from './components/Layout.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
    }
]

export default routes;
