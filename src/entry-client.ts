import { createVue } from './vue-app';

const { vue, router } = createVue();

router.onReady(() => {
	vue.$mount('#app');
});
