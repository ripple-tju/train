<template>
	<q-page
		padding
		class="flex justify-center"
	>
		<div
			class="app-page-content row"
			style="max-width: 1200px"
		>
			<div
				class="col-md-8 col-12"
				style="font-size: 16px; line-height: 36px"
			>
				<typo-content @toc-ok="(list) => updateToc(list)">
					<!-- <div class="app">Content{{ id }}</div> -->
					<component :is="DocumentationInstance"></component>
				</typo-content>
			</div>
			<div class="col-md-4 q-pa-md gt-md">
				<q-list dense>
					<q-item
						clickable
						v-for="item in finalToc"
						:key="item.id"
					>
						<q-item-section :style="{ 'padding-left': `${item.level * 1}em` }">
							<router-link
								:to="{ hash: `#${item.id}` }"
								class="text-black"
								style="text-decoration: none"
							>
								<span class="q-mr-xs">{{ item.order }}.</span>{{ item.text }}
							</router-link>
						</q-item-section>
					</q-item>
				</q-list>
			</div>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import type { ComponentCustomOptions } from 'vue';
import type { TocItem } from 'src/components/Typography/Content.vue';

import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import * as Documentation from 'src/documentation/index';
import NotFound from '../ErrorNotFound.vue';

const $route = useRoute();
const id = computed<string>(() => $route.params.id as string);

const DocumentationInstance = computed<ComponentCustomOptions>(() => {
	if (Object.hasOwn(Documentation.map, id.value)) {
		return Documentation.map[id.value] as ComponentCustomOptions;
	}

	return NotFound;
});

const toc = ref<TocItem[]>([]);

function updateToc(list: TocItem[]) {
	toc.value = list;
}

interface FinalTocItem {
	text: string
	id: string
	order: string
	level: number
}

const finalToc = computed<FinalTocItem[]>(() => {
	return toc.value.map((item) => {
		return {
			text: item.text,
			id: 'h-' + item.order.join('-'),
			order: item.order.join('.'),
			level: item.level,
		};
	});
});

defineOptions({ name: 'AppContentOverview' });
</script>
