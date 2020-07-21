import Vue from 'vue';
import Router from 'vue-router';
import Component from 'vue-class-component';

Vue.use(Router);

@Component({template: `<div> this is toppage component </div>`})
class TopVue extends Vue {}

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{path: "/top", component: TopVue}
		]
	});
}
