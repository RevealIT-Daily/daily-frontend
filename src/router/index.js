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

  // AUTH ROUTES //
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
  //** AUTH ROUTES **//

  // USER ROUTES //
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
    name: 'planning',
    component: () => import(/*webpackChunkName: "planning" */'../views/users/activities/Planning.vue')
  },

  {
    path: '/users/execution',
    name: 'execution',
    component: () => import(/*webpackChunkName: "execution" */'../views/users/activities/Execution.vue')
  },
  {
    path: '/users/closing',
    name: 'closing',
    component: () => import(/*webpackChunkName: "closing" */'../views/users/activities/Closing.vue')
  },

  {
    path: '/users/control',
    name: 'control',
    component: () => import(/*webpackChunkName: "control" */'../views/users/activities/Control.vue')
  },
  {
    path: '/users/myprojects',
    name: 'myprojects',
    component: () => import(/*webpackChunkName: "myprojects" */'../views/users/MyProjects.vue')
  },
  //** USER ROUTES **//

  // ADMIN ROUTES //
  {
    path: '/admin/status',
    name: 'admin/status',
    component: () => import(/*webpackChunkName: "admin/status" */'../views/admin/status/Status.vue')
  },
  {
    path: '/admin/account_type',
    name: 'admin/account_type',
    component: () => import(/*webpackChunkName: "admin/account_type"*/'../views/admin/account_type/AccountType.vue')
  },
  {
    path: '/admin/default_role',
    name: 'admin/default_role',
    component: () => import(/*webpackChunkName: "admin/default_role"*/'../views/admin/default_role/DefaultRole.vue')
  },
  //**PASSWORD ROUTES **/
  {
    path: '/ForgotPassword',
    name: '/ForgotPassword',
    component: () => import(/*webpackChunkName: "/ForgotPassword"*/'../views/ForgotPassword.vue')
  },
  {
    path: '/ResetPassword',
    name: '/ResetPassword',
    component: () => import(/*webpackChunkName: "/ResetPassword"*/'../views/ResetPassword.vue')
  }
  //** ADMIN ROUTES **//
]

const router = new VueRouter({
  routes
})

export default router
