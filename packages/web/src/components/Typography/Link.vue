<template>
	<a
		:href="props.href"
		:style="{
			'pointer-events': props.href === '' ? 'none' : 'auto',
		}"
		><slot></slot
	></a>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		/**
		 * Not clickable if ''
		 */
		href?: string
	}>(),
	{
		href: '',
	},
);

defineOptions({ name: 'TypoLink' });
</script>
