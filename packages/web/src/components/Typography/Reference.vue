<template>
	<sup class="text-grey q-mx-xs"
		><span
			@mouseenter="isShow = true"
			@mouseleave="isShow = false"
			>[{{ props.order }}]</span
		><q-tooltip
			v-model="isShow"
			anchor="top middle"
			><slot>{{ $t('typo.reference.text.undefined') }}</slot></q-tooltip
		></sup
	>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
	defineProps<{
		order?: number
	}>(),
	{
		order: 0,
	},
);

const isShow = ref<boolean>(false);

defineOptions({ name: 'TypoReference' });
</script>
