<template>
	<div
		class="typo-heading"
		:class="[`text-h${Number(level) + 2}`]"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
type LevelNumber = 1 | 2 | 3 | 4;
type LevelString = '1' | '2' | '3' | '4';

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
