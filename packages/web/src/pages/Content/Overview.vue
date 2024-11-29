<template>
	<q-page padding class="flex column items-center">
		<div class="app-page-content">
			<!-- <div class="app">Content{{ id }}</div> -->
			<component :is="DocumentationInstance"></component>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import { computed, ComponentCustomOptions } from 'vue';
import { useRoute } from 'vue-router';

import * as Documentation from 'src/documentation/index';
import NotFound from '../ErrorNotFound.vue';

const $route = useRoute();
const id = computed<string>(() => $route.params.id as string);

const DocumentationInstance = computed<ComponentCustomOptions>(() => {
	if (Object.hasOwn(Documentation.map, id.value)) {
		return Documentation.map[id.value];
	}

	return NotFound;
});

defineOptions({ name: 'AppContentOverview' });
</script>
