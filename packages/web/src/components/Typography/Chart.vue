<template>
	<div class="typo-chart row justify-center">
		<div
			class="col-12"
			style="max-width: 600px; max-height: 300px;"
		>
			<VueUiQuickChart
				:dataset="dataset"
				:config="config"
			></VueUiQuickChart>
		</div>
		<div class="text-center q-mt-md col-12">{{ props.title }}</div>
	</div>
</template>

<script setup lang="ts">
import type { VueUiQuickChartConfig } from 'vue-data-ui';

import { onBeforeMount, ref } from 'vue';
import { VueUiQuickChart } from 'vue-data-ui';

const props = withDefaults(
	defineProps<{
		src: string
		title?: string | null
	}>(),
	{
		title: null,
	},
);

const config = ref<VueUiQuickChartConfig>({
	zoomXy: false,
	showLegend: false,
	responsive: true,
	showUserOptions: false,
	xyPeriods: ['1', '2', '3'],
	xyPeriodLabelsRotation: 10,
	xyPaddingBottom: 0,
});

const dataset = ref<number[]>([1]);

onBeforeMount(async () => {
	const response = await fetch(props.src);
	const { x, y } = await response.json();

	config.value.xyPeriods = x;
	dataset.value = y;

	let max = -Infinity, min = Infinity;

	for (const value of y) {
		if (value > max) {
			max = value;
		}

		if (value < min) {
			min = value;
		}
	}

	config.value.xyScaleSegments = Math.max(5, Math.round((max - min) / 10));
});

defineOptions({ name: 'TypoChart' });
</script>
