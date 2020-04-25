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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName: "login"*/ '../views/Login.vue')
  },
  {
    path: '/Signup',
    name: 'signup',
    component: () => import(/*webpackChunkName: "login"*/ '../views/Signup.vue')
  },
  {
    path: '/Loggedin',
    name: 'loggedin',
    component: () => import(/*webpackChunkName: "loggedin"*/ '../views/users/Loggedin.vue')
  },
  {
    path: '/users/profile',
    name: 'profile',
    component: () => import(/*webpackChunkName: "profile"*/ '../views/users/Profile.vue')

  },
  {
    path: '/users/start',
    name: 'start',
    component: () => import(/*webpackChunkName: "start"*/ '../views/users/activities/Start.vue'),
    props: true
    
  },
  {
    path: '/users/planning',
    name:'planning',
    component:() => import(/*webpackChunkName: "planning" */'../views/users/activities/Planning.vue')
  },
  
  {
    path: '/users/execution',
    name:'execution',
    component:() => import(/*webpackChunkName: "execution" */'../views/users/activities/Execution.vue')
  },
  {
    path: '/users/closing',
    name:'closing',
    component:() => import(/*webpackChunkName: "closing" */'../views/users/activities/Closing.vue')
  },
  
  {
    path: '/users/control',
    name:'control',
    component:() => import(/*webpackChunkName: "control" */'../views/users/activities/Control.vue')
  },
  {
    path: '/users/myprojects',
    name:'myprojects',
    component:() => import(/*webpackChunkName: "control" */'../views/users/MyProjects.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
