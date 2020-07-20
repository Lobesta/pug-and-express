import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{ path: '/top', component: () => eval("import('./views/Index.vue')") },
			{ path: '/', redirect: '/top' }
		]
	});
}
