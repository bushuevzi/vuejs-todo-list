import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/Home";

// Реигистрация роутера как плагина
Vue.use(Router);

export default new Router({
    mode:'history',         // Url будет содержать несколько сегментов разделенных слешами
    routes: [
        // Страницы
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./pages/Todos.vue')
        }
    ]
})
