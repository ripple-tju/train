<template>
	<q-page
		padding
		class="row justify-center"
	>
		<div
			class="row q-col-gutter-md"
			style="max-width: 1200px"
		>
			<div
				class="col-md-3 col-sm-6 col-12"
				v-for="item in filterd"
				:key="item.id"
			>
				<q-card class="full-height">
					<img src="https://cdn.quasar.dev/img/mountains.jpg" />

					<q-card-section>
						<div
							:title="item.title"
							class="text-h6 ellipsis full-width"
						>
							<router-link
								class="text-black"
								:to="{
									name: 'App.Content.Detail',
									params: { id: item.id },
								}"
								>{{ item.title }}
							</router-link>
						</div>
						<div class="text-subtitle2">作者：{{ item.author }}</div>
						<div class="text-subtitle2">来源：{{ item.source }}</div>
					</q-card-section>

					<q-card-section class="q-pt-none">{{ item }}</q-card-section>
				</q-card>
			</div>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import primary from 'src/documentation/primary.json';

interface IndexItem {
	id: string
	title: string
	author: string
	source: string
	figure: number
	embed: number
	reference: number
	link: number
	table: number
}

const { t } = useI18n();

const filterd = computed<IndexItem[]>(() => {
	return primary.map((item) => {
		return {
			...item,
			author: item.author.length === 0 ? t('typo.title.unknown.author') : item.author.join(', '),
			source: item.source === null ? t('typo.title.unknown.source') : item.source,
		};
	});
});

defineOptions({ name: 'AppContentOverview' });
</script>
