import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/post1',
    name: 'Post1',
    component: () => import('../views/Post1.vue')
  }
  ,
  {
    path: '/post2',
    name: 'Post2',
    component: () => import('../views/Post2.vue')
  },
  {
    path: '/post3',
    name: 'Post3',
    component: () => import('../views/Post3.vue')
  },
  {
    path: '/opinion',
    name: 'Opinion',
    component: () => import('../views/Opinion.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router