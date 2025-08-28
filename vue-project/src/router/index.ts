import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/task-template',
      name: 'task-template', 
      component: () => import('../components/TaskTemplate/TaskTemplate.vue'),
    },
    {
      path: '/task-props-event',
      name: 'task-props-event', 
      component: () => import('../components/TaskPropsEvent/TaskPropsEvent.vue'),
    },
  ],
})

export default router
