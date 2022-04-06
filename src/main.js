import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/main.scss'

import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import {
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate/dist/vee-validate.full.esm'
// import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)
library.add(far)

import i18n from './i18n'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('validation-provider', ValidationProvider)
app.component('validation-observer', ValidationObserver)

app.use(i18n)

app.use(BootstrapVue3)
app.use(store)
app.use(router)

app.mount('#app')
