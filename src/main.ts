import {createApp} from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .use(Antd)
    .mount('#app')
    .$nextTick(() => {
        postMessage({payload: 'removeLoading'}, '*')
    })
