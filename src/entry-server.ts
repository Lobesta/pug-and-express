import { createVue } from "./vue-app";

export default function createView(context: { [k: string]: any; }) {
	return new Promise<Vue>((resolve, reject) => {
		const { vue, router } = createVue();

		// サーバーサイドのルーターの場所を設定します
		router.push(context.url);

		// ルーターが非同期コンポーネントとフックを解決するまで待機します
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();
			// 一致するルートがない場合、404で拒否します
			if (!matchedComponents.length) {
				reject({ code: 404 });
			}

			// プロミスは描画できるようにアプリケーションインスタンスを解決するべきです
			resolve(vue);
		}, reject);
	});
}
