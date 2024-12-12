<template>
	<q-page
		padding
		class="flex justify-center"
	>
		<div
			class="fit"
			style="max-width: 1200px"
		>
			<q-breadcrumbs class="q-mb-md">
				<q-breadcrumbs-el icon="home" />
				<q-breadcrumbs-el :label="$t('app.feature.index')" />
			</q-breadcrumbs>

			<index-filter-panel v-model="keywordList"></index-filter-panel>

			<div class="row q-col-gutter-md">
				<div
					class="col-md-4 col-sm-6 col-12"
					v-for="item in filterd"
					:key="item.id"
				>
					<index-item-card :data="item"></index-item-card>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import type { IndexItem } from './Item.vue';

import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import primary from 'src/documentation/primary.json';

import IndexItemCard from './Item.vue';
import IndexFilterPanel from './Filter.vue';

const { t } = useI18n();
const keywordList = ref<string[]>([]);

const filterd = computed<IndexItem[]>(() => {
	let result = primary.map((item) => {
		const { author, source } = item;

		return {
			...item,
			author: author.length > 0 ? author.join(', ') : t('typo.title.unknown.author'),
			source: source === null ? t('typo.title.unknown.source') : source,
		};
	});

	for (const keyword of keywordList.value) {
		const reg = new RegExp(`\\S*${keyword}\\S*`, 'i');

		result = result.filter((item) => {
			if (reg.test(item.abstract)) {
				return true;
			}

			if (reg.test(item.author)) {
				return true;
			}

			if (reg.test(item.source)) {
				return true;
			}

			if (reg.test(item.title)) {
				return true;
			}

			return false;
		});
	}

	return result;
});

defineOptions({ name: 'AppContentOverview' });
</script>
