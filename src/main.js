import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import i18n from './i18n'

const app = createApp(App)

app.use(i18n)

app.use(BootstrapVue3)
app.use(store)
app.use(router)

app.mount('#app')
