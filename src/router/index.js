import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import CoursesView from '../views/CoursesView.vue'
import CourseDetails from '../views/CourseDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView
  },
  {
    path: '/courses/:id',
    name: 'courseDetails',
    props: true,
    component: CourseDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
