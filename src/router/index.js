import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Pricing from '../views/Pricing.vue'
import Forums from '../views/Forums.vue'
import BookLibrary from '../views/BookLibrary.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: ContactUs,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
  {
    path: '/forums',
    name: 'legalForums',
    component: Forums,
  },
  {
    path: '/book-library',
    name: 'bookLibrary',
    component: BookLibrary,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
