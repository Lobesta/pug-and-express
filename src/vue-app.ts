import Vue from 'vue';
import { createRouter } from './router';
const layout = eval("import('./layout.vue')");

export function createApp() {
	const router = createRouter();
	const app = new Vue({
		router,
		render: h => h(layout)
	});
	return { app, router };
}
