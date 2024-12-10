<template>
	<div class="typo-content"><slot></slot></div>
</template>

<script setup lang="ts">
import { provide, reactive, onBeforeUpdate } from 'vue';
import * as Key from './ContentProvideSymbol';

provide(Key.IsInContent, true);

const headingStack = reactive<number[]>([]);

onBeforeUpdate(() => headingStack.splice(0));

provide(Key.RegisterHeading, (level) => {
	const delta = level - headingStack.length;

	if (delta > 0) {
		headingStack.push(...new Array(delta).fill(0));
	}

	if (level < headingStack.length) {
		headingStack.splice(delta);
	}

	if (level === headingStack.length) {
		(headingStack[headingStack.length - 1] as number)++;
	}

	return [...headingStack];
});

defineOptions({ name: 'TypoContent' });
</script>
