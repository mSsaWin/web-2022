import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DefaultLayout from '@/layouts/default-layout'
import ProfileLayout from '@/layouts/profile-layout'

Vue.config.productionTip = false

Vue.component("default-layout", DefaultLayout)
Vue.component("profile-layout", ProfileLayout)

Vue.prototype.$http = axios.create({
    baseURL: 'Тут ссылка на api сервера'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')