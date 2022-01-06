import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueRouteMiddleware from 'vue-route-middleware'
import auth from '../middleware/auth'

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
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/legalnotice',
		name: 'LegalNotice',
		component: () => import('../views/LegalNotice.vue')
	},
	{
		path: '/support',
		name: 'Support',
		component: () => import('../views/Support.vue')
	},
	{
		path: '/post',
		name: 'Post',
		component: () => import('../views/Post.vue'),
		meta: {
			middleware: auth
		}
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/Profile.vue'),
		meta: {
			middleware: auth
		}
	}
]

const router = new VueRouter({
  routes
})

router.beforeEach(VueRouteMiddleware());

export default router
