import Vue from "vue";

export default function createView(context: {[k:string]:any}){
	return new Vue({
		data: {
			url: context.url
		},
		template: `<div>The visited URL is: {{ url }}</div>`
	});
}
