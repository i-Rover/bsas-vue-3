import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/Onboarding/SignUp.vue'
import SignIn from '../views/Onboarding/SignIn.vue'
import Dashboard from '../views/Content/Dashboard.vue';
import UnderDev from '../views/Widget/UnderDev.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },  
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/underdev',
      name: 'underdev',
      component: UnderDev
    },
  ]
})

export default router
