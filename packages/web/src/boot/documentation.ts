import { boot } from 'quasar/wrappers';
import { defineAsyncComponent } from 'vue';

export default boot(function DocumentationLoader({
	app,
}) {
	app.component('ContentDetail:test', defineAsyncComponent(() =>{
		return import('src/documentation.gen/test.vue');
	}));
});
