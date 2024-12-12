<template>
	<div class="typo-embed q-my-md row justify-center">
		<div class="col col-lg-8">
			<q-video
				:ratio="16 / 9"
				:src="props.src"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	src: string
}>();

defineOptions({ name: 'TypoEmbed' });
</script>
