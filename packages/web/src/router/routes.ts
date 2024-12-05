import type { RouteRecordRaw } from 'vue-router';
import { h } from 'vue';
import { RouterView } from 'vue-router';

const MIDDLE_ROUTER_VIEW = {
	name: 'MiddleRouterView',
	render: () => h(RouterView),
};

const routes: RouteRecordRaw[] = [
	{
		name: 'UI.Main',
		path: '/',
		redirect: { name: 'App.Home' },
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				name: 'App.Home',
				path: '',
				redirect: { name: 'App.Metric' },
			},
			{
				name: 'App.Content',
				path: 'content',
				redirect: { name: 'App.Content.Index' },
				component: MIDDLE_ROUTER_VIEW,
				children: [
					{
						name: 'App.Content.Index',
						path: '',
						component: () => import('pages/Index/Overview.vue'),
					},
					{
						name: 'App.Content.Detail',
						path: ':id',
						component: () => import('pages/Content/Overview.vue'),
					},
				],
			},
			{
				name: 'App.Metric',
				path: 'metric',
				component: () => import('pages/Metric/Overview.vue'),
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
