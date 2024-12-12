<template>
	<div
		:id="id"
		class="typo-heading q-my-lg text-weight-regular"
		style="line-height: normal"
		:class="[`text-h${Number(level)}`]"
		:style="{ 'font-size': `${fontSize[Number(level)]}px` }"
	>
		<span class="q-mr-sm">{{ order.join('.') }}.</span><a ref="text"><slot></slot></a>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useContent } from './use/Content';

const content = useContent();
const fontSize = [30, 28, 24, 20, 18, 16];

type LevelNumber = 1 | 2 | 3 | 4 | 5 | 6
type LevelString = '1' | '2' | '3' | '4' | '5' | '6'

const props = withDefaults(
	defineProps<{
		level?: LevelNumber | LevelString
	}>(),
	{
		level: 1,
	},
);

const order = ref<number[]>([]);
const text = ref<HTMLAnchorElement | null>(null);
const id = computed<string>(() => `h-${order.value.join('-')}`);

onMounted(() => {
	if (content.registerHeading !== undefined) {
		if (text.value !== null) {
			order.value = content.registerHeading(Number(props.level), text.value.innerText);
		}
	}
});

defineOptions({ name: 'TypoHeading' });
</script>
