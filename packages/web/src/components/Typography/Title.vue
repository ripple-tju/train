<template>
	<div class="q-mb-md typo-title">
		<div
			class="text-h1 text-center text-weight-medium"
			style="font-size: 30px; line-height: normal"
		>
			<slot></slot>
		</div>

		<div
			class="row justify-center q-mt-md text-grey text-center"
			style="font-size: 12px"
		>
			<div class="col-lg-4 col-6">
				<span>{{ $t('typo.title.author') }}{{ $t(':') }}</span
				><span>{{ author }}</span>
			</div>
			<div class="col-lg-4 col-6">
				<span>{{ $t('typo.title.source') }}{{ $t(':') }}</span
				><span>{{ source }}</span>
			</div>
		</div>

		<q-separator class="q-mt-sm" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = withDefaults(
	defineProps<{
		source?: string | null
		author?: string[]
	}>(),
	{
		author: () => [],
		source: null,
	},
);

const author = computed(() => {
	if (props.author.length === 0) {
		return t('typo.title.unknown.author');
	}

	return props.author.join(', ');
});

const source = computed(() => {
	if (props.source === null) {
		return t('typo.title.unknown.source');
	}

	return props.source;
});

defineOptions({ name: 'TypoTitle' });
</script>
