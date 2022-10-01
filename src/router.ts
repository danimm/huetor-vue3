import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('./views/Home.vue'))
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: defineAsyncComponent(() => import('./views/Reviews.vue'))
  },
  {
    path: '/contact',
    name: 'Contact',
    component: defineAsyncComponent(() => import('./views/Contact.vue'))
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: defineAsyncComponent(() => import('./views/Gallery.vue'))
  },
  {
    path: '/legal',
    name: 'Legal',
    component: defineAsyncComponent(() => import('./views/Legal.vue'))
  },
  {
    path: '/privacity',
    name: 'Privacity',
    component: defineAsyncComponent(() => import('./views/Privacity.vue'))
  },
  {
    path: '/activities',
    name: 'Activities',
    component: defineAsyncComponent(() => import('./views/Activities.vue'))
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;