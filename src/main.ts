import {createApp} from 'vue'
import App from './App.vue'
import './samples/node-api'

import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App)
    .use(router)
    .use(Varlet)
    .mount('#app')
    .$nextTick(() => {
        postMessage({payload: 'removeLoading'}, '*')
    })
