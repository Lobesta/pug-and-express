import Vue from "vue";
import { createRouter } from "./router";

export function createVue(){
	const router = createRouter()
	const vue = new Vue({
		// ルーターをルートVueインスタンスに注入します
		router,
		// render: h => h(Layout)
		template: `
		<div>
			<header> Hello, Vue SSR </header>
			<router-view></router-view>
		</div>`
	  })
	return { vue, router }
}
