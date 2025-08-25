import type { RouteRecordRaw } from 'vue-router';
import { h } from 'vue';
import { RouterView } from 'vue-router';

const MIDDLE_ROUTER_VIEW = {
	name: 'MiddleRouterView',
	render: () => h(RouterView),
};

const routes: RouteRecordRaw[] = [
	{
		name: 'App.Authentication',
		path: '/authentication',
		component: () => import('pages/Authentication.vue'),
		meta: {
			UnauthenticatedRequired: true,
		},
	},
	{
		name: 'App.Home',
		path: '',
		component: () => import('pages/Home/Overview.vue'),
		meta: {
			AuthenticatedRequired: true,
		},
	},
	{
		name: 'App.Feature',
		path: '',
		component: () => import('layouts/MainLayout.vue'),
		meta: {
			AuthenticatedRequired: true,
		},
		redirect: { name: 'App.Feature.Content' },
		children: [
			{
				name: 'App.Feature.Content',
				path: 'content',
				redirect: { name: 'App.Feature.Content.Index' },
				component: MIDDLE_ROUTER_VIEW,
				children: [
					{
						name: 'App.Feature.Content.Index',
						path: '',
						component: () => import('pages/Index/Overview.vue'),
					},
					{
						name: 'App.Feature.Content.Detail',
						path: ':id',
						component: () => import('pages/Content/Overview.vue'),
					},
				],
			},
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue'),
	},
];

export default routes;
