<template>
	<p
		class="typo-paragraph q-my-xs"
		:style="{
			'text-indent': `${props.indent}em`,
		}"
	>
		<slot></slot>
	</p>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		indent?: number
	}>(),
	{
		indent: 0,
	},
);

defineOptions({ name: 'TypoParagraph' });
</script>
