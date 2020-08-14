import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home_name',
    component: Home
  },
  {
    path: '/first_path',
    name: 'First',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'First' */ '../views/First.vue')
  },
  {
    path: '/second_path',
    name: 'Second',
    component: () => import(/*webpackChunkName: 'Second'*/ '../views/Second.vue')
  },
  {
    path: '/third_path',
    name: 'Third',
    component(){return import('../views/Third.vue')}
  }
]

const router = new VueRouter({
  routes
})

export default router
