<template>
	<q-page
		padding
		class="flex column items-center"
	>
		<div class="app-page-content">
			<div class="app">Content{{ id }}</div>
			<component :is="`ContentDetail:${id}`"></component>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute();
const id = computed<string>(() => $route.params.id as string);

defineOptions({ name: 'AppContentOverview' });
</script>
