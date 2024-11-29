<template>
	<div class="q-mb-xl q-pb-md typo-title">
		<div class="text-h1 text-center"><slot></slot></div>

		<div class="row justify-center q-mt-md text-grey text-center">
			<div class="col-4">
				<span>{{ $t('typo.title.author') }}{{ $t(':') }}</span
				><span>{{ author }}</span>
			</div>
			<div class="col-4">
				<span>{{ $t('typo.title.source') }}{{ $t(':') }}</span
				><span>{{ source }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = withDefaults(
	defineProps<{
		source?: string | null;
		author?: string | null;
	}>(),
	{
		source: null,
		author: null,
	},
);

const author = computed(() => {
	if (props.author === null) {
		return t('typo.title.unknown.author');
	}

	return props.author;
});

const source = computed(() => {
	if (props.source === null) {
		return t('typo.title.unknown.source');
	}

	return props.source;
});

defineOptions({ name: 'TypoTitle' });
</script>

<style lang="scss">
.typo-title {
	border-bottom: 1px solid $separator-color;
}
</style>
