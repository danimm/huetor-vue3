import { createApp } from 'vue'
import './style.css'
import router from './router'
import i18n from './i18n'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(BootstrapVue)

app.mount('#app')
