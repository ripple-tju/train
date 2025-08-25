import type { RouteRecordNormalized } from 'vue-router';
import { defineRouter } from '#q-app/wrappers';

import {
	createMemoryHistory,
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';

import routes from './routes';
import { API } from 'src/backend';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const ROUTE_IS = {
	REQUIRED: {
		AUTHENTICATED: (route: RouteRecordNormalized) => {
			return route.meta.AuthenticatedRequired;
		},
		UNAUTHENTICATED: (route: RouteRecordNormalized) => {
			return route.meta.UnauthenticatedRequired;
		},
	},
};

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
	const createHistory = process.env.SERVER
		? createMemoryHistory
		: process.env.VUE_ROUTER_MODE === 'history'
			? createWebHistory
			: createWebHashHistory;

	const Router = createRouter({
		async scrollBehavior(to, from, saved) {
			if (to.hash === '' || to.hash === '#') {
				return { top: 0 };
			}

			await sleep(100);

			const el = document.querySelector(to.hash);

			if (el === null) {
				return { ...saved };
			}

			return {
				el: to.hash,
				top: 50,
			};
		},
		routes,

		// Leave this as is and make changes in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		history: createHistory(process.env.VUE_ROUTER_BASE),
	});

	Router.beforeResolve(async (to) => {
		const authenticated = await API.Principal.get()
			.then(() => true, () => false);

		console.log(authenticated);

		if (to.matched.some(ROUTE_IS.REQUIRED.AUTHENTICATED)) {
			return authenticated ? true : { name: 'App.Authentication' };
		}

		if (to.matched.some(ROUTE_IS.REQUIRED.UNAUTHENTICATED)) {
			return authenticated ? { name: 'App.Home' } : true;
		}

		return true;
	});

	return Router;
});
