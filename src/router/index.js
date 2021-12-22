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
		path: '/signup',
		name: 'Signup',
		component: () => import('../views/Signup.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/legalnotice',
		name: 'LegalNotice',
		component: () => import('../views/LegalNotice.vue')
	}
]

const router = new VueRouter({
  routes
})

export default router
