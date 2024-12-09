import type { ComponentCustomOptions } from 'vue';
import { defineAsyncComponent } from 'vue';
import primary from './primary.json';

const list = primary.map(item => item.id);

export const map: Record<string, ComponentCustomOptions> = {};

for (const id of list) {
	map[id] = defineAsyncComponent(() => import(`./instances/${id}.vue`));
}
