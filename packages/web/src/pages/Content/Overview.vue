<template>
	<q-page
		padding
		class="row justify-center"
	>
		<div
			class="app-page-content col"
			style="max-width: 1200px"
		>
			<typo-content>
				<!-- <div class="app">Content{{ id }}</div> -->
				<component :is="DocumentationInstance"></component>
			</typo-content>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import type { ComponentCustomOptions } from 'vue';
import { computed } from 'vue';
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

console.log($route.hash);

defineOptions({ name: 'AppContentOverview' });
</script>
