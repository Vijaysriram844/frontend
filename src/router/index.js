import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/Product.vue'
import Category from '../components/Category.vue'

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'product', component: Product },
    { path: '/category', name: 'category', component: Category }
  ]
})

export default router
