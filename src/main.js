import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavPage from './components/NavPage.vue'

let app = createApp(App)

let routes = [
    {path:'/', component: HelloWorld},
    {path:'/nav', component: NavPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)

app.mount('#app')
