import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'root',
		component: () => import('@/AppLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () =>
					import('@/views/home/HomeView.vue'),
			},
			{
				path: '/about',
				name: 'About',
				component: () =>
					import('@/views/about/AboutView.vue'),
			},
			{
				path: '/three',
				name: 'Interview',
				component: () =>
					import('@/views/Interview/interview.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
