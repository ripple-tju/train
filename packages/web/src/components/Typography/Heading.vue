<template>
	<div
		class="typo-heading"
		:class="[`text-h${Number(level) + 3}`]"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
type LevelNumber = 1 | 2 | 3;
type LevelString = '1' | '2' | '3';

withDefaults(
	defineProps<{
		level?: LevelNumber | LevelString
	}>(),
	{
		level: 1,
	},
);

defineOptions({ name: 'TypoHeading' });
</script>
