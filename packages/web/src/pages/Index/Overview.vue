<template>
	<q-page
		padding
		class="row justify-center"
	>
		<div
			class="row q-col-gutter-md full-width"
			style="max-width: 1200px"
		>
			<div
				class="col-md-4 col-sm-6 col-12"
				v-for="item in filterd"
				:key="item.id"
			>
				<q-card class="full-height">
					<q-img
						src="https://cdn.quasar.dev/img/material.png"
						:ratio="21 / 9"
					>
						<div class="absolute-bottom-right"></div>
					</q-img>

					<q-card-section class="row q-pb-none">
						<div
							:title="item.title"
							class="text-h6 ellipsis"
						>
							<router-link
								class="text-black"
								style="text-decoration: none"
								:to="{
									name: 'App.Content.Detail',
									params: { id: item.id },
								}"
								>{{ item.title }}
							</router-link>
						</div>
						<div class="text-caption col-12 text-grey-8">作者：{{ item.author }}</div>
						<div class="text-caption col-12 text-grey-8">来源：{{ item.source }}</div>
					</q-card-section>

					<q-separator
						inset
						class="q-my-xs"
					/>
					<q-card-section class="q-py-xs">
						<q-badge
							style="width: 5em"
							color="secondary"
						>
							<q-icon
								name="translate"
								class="q-mx-xs"
							/>{{ item.length }}</q-badge
						>

						<q-badge
							style="width: 4em"
							class="q-ml-xs"
						>
							<q-icon
								name="arrow_outward"
								class="q-mx-xs"
							/>{{ item.link }}</q-badge
						>

						<q-badge
							style="width: 4em"
							class="q-ml-xs"
							color="green"
						>
							<q-icon
								name="format_quote"
								class="q-mx-xs"
							/>{{ item.reference }}</q-badge
						>

						<q-badge
							style="width: 4em"
							class="q-ml-xs"
							color="red"
						>
							<q-icon
								name="image"
								class="q-mx-xs"
							/>{{ item.figure }}</q-badge
						>

						<q-badge
							style="width: 4em"
							class="q-ml-xs"
							color="red"
						>
							<q-icon
								name="table_chart"
								class="q-mx-xs"
							/>{{ item.table }}</q-badge
						>
					</q-card-section>
					<q-card-section
						class="q-py-none ellipsis-3-lines q-mb-md"
					>{{ item.abstract }}</q-card-section>
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
	id: string;
	abstract: string;
	length: number;
	title: string;
	author: string;
	source: string;
	figure: number;
	embed: number;
	reference: number;
	link: number;
	table: number;
}

const { t } = useI18n();

const filterd = computed<IndexItem[]>(() => {
	return primary.map((item) => {
		const { author, source } = item;

		return {
			...item,
			author: author.length > 0 ? author.join(', ') : t('typo.title.unknown.author'),
			source: source === null ? t('typo.title.unknown.source') : source,
		};
	});
});

defineOptions({ name: 'AppContentOverview' });
</script>
