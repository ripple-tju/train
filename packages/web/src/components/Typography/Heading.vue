<template>
	<div
		:id="`h-${order.join('-')}`"
		class="typo-heading"
		:class="[`text-h${Number(level) + 3}`]"
	><span class="q-mr-sm">{{ order.join('.') }}.</span><slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useContent } from './use/Content';

const content = useContent();

type LevelNumber = 1 | 2 | 3;
type LevelString = '1' | '2' | '3';

const props = withDefaults(
	defineProps<{
		level?: LevelNumber | LevelString
	}>(),
	{
		level: 1,
	},
);

const order = ref<number[]>([]);

if (content.registerHeading !== undefined) {
	order.value = content.registerHeading(Number(props.level));
}

defineOptions({ name: 'TypoHeading' });
</script>
