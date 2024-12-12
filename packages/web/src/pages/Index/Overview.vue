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

			<div class="row q-col-gutter-md">
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
							<div class="text-caption col-12 text-grey-8">
								{{ $t('data.content.author') }}{{ $t(':') }}{{ item.author }}
							</div>
							<div class="text-caption col-12 text-grey-8">
								{{ $t('data.content.source') }}{{ $t(':') }}{{ item.source }}
							</div>
						</q-card-section>

						<q-separator
							inset
							class="q-my-xs"
						/>
						<q-card-section class="q-py-xs">
							<q-badge
								style="width: 5.5em"
								color="secondary"
							>
								<q-icon
									name="translate"
									class="q-mr-xs"
								/>{{ item.length }}</q-badge
							>

							<q-badge
								style="width: 3.5em"
								class="q-ml-xs"
							>
								<q-icon
									name="arrow_outward"
									class="q-mr-xs"
								/>{{ item.link }}</q-badge
							>

							<q-badge
								style="width: 3.5em"
								class="q-ml-xs"
								color="green"
							>
								<q-icon
									name="format_quote"
									class="q-mr-xs"
								/>{{ item.reference }}</q-badge
							>

							<q-badge
								style="width: 3em"
								class="q-ml-xs"
								color="red"
							>
								<q-icon
									name="image"
									class="q-mr-xs"
								/>{{ item.figure }}</q-badge
							>

							<q-badge
								style="width: 3em"
								class="q-ml-xs"
								color="red"
							>
								<q-icon
									name="table_chart"
									class="q-mr-xs"
								/>{{ item.table }}</q-badge
							>

							<q-badge
								style="width: 3em"
								class="q-ml-xs"
								color="red"
							>
								<q-icon
									name="ondemand_video"
									class="q-mr-xs"
								/>{{ item.embed }}</q-badge
							>
						</q-card-section>
						<q-card-section class="q-py-none ellipsis-3-lines q-mb-md">{{
							item.abstract
						}}</q-card-section>
					</q-card>
				</div>
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
	abstract: string
	length: number
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
