<template>
	<div class="typo-figure q-my-md row justify-center">
		<a
			class="col col-lg-8"
			:href="props.href"
			:style="{
				'pointer-events': props.href === '' ? 'none' : 'auto'
			}"
		>
			<q-img
				class="typo-figure-image"
				:src="props.src"
			>
				<div
					v-show="props.title !== null"
					style="padding: 0;"
					:style="{
						'pointer-events': props.href === '' ? 'none' : 'auto'
					}"
					class="absolute-bottom text-subtitle1 text-center q-pa-none"
				>
					{{ props.title }}
				</div>
			</q-img>
		</a>
		<div class="typo-figure-title"></div>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		src: string
		title?: string | null
		href?: string
	}>(),
	{
		title: null,
		href: '',
	},
);

defineOptions({ name: 'TypoFigure' });
</script>
