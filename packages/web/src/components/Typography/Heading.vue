<template>
	<div :class="[`text-h${Number(level)+1}`]"><slot></slot></div>
</template>

<script setup lang="ts">
type LevelNumber = 1 | 2 | 3 | 4 | 5;
type LevelString = '1' | '2' | '3' | '4' | '5';

withDefaults(defineProps<{
	level?: LevelNumber | LevelString;
}>(), {
	level: 1,
});

defineOptions({ name: 'TypoHeading' });
</script>
