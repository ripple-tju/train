<template>
	<div class="typo-content"><slot></slot></div>
</template>

<script setup lang="ts">
import { provide, reactive, onBeforeUpdate, onMounted, ref } from 'vue';
import * as Key from './ContentProvideSymbol';

provide(Key.IsInContent, true);

const headingStack = reactive<number[]>([]);

export interface TocItem {
	level: number
	text: string
	order: number[]
}

const tocItemList = reactive<TocItem[]>([]);

onBeforeUpdate(() => headingStack.splice(0));

provide(Key.RegisterHeading, (level, text) => {
	const delta = level - headingStack.length;

	if (delta > 0) {
		headingStack.push(...new Array(delta).fill(0));
	}

	if (level < headingStack.length) {
		headingStack.splice(delta);
	}

	if (level === headingStack.length) {
		;(headingStack[headingStack.length - 1] as number)++;
	}

	const order = [...headingStack];

	tocItemList.push({ level, text, order });

	return order;
});

const title = ref<string>('');

provide(Key.RegisterTitle, (text) => {
	title.value = text;
});

const emit = defineEmits<{
	(e: 'toc-ok', toc: TocItem[]): void
}>();

onMounted(() => emit('toc-ok', tocItemList));

defineOptions({ name: 'TypoContent' });
defineExpose({ title });
</script>
