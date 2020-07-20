import { createApp } from './vue-app';
import { CombinedVueInstance } from 'vue/types/vue';

export default (context: { [k: string]: any; }) => {
	return new Promise<CombinedVueInstance<Vue, object, object, object, Record<never, any>>>((resolve, reject) => {
		const { app, router } = createApp();

		router.push(context.url);

		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();
			if (!matchedComponents.length) {
				reject({ code: 404 });
			}
			resolve(app);
		}, reject);
	});
};
