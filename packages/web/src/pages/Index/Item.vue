<template>
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
						name: 'App.Feature.Content.Detail',
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
				style="width: 3em"
				class="q-ml-xs"
			>
				<q-icon
					name="arrow_outward"
					class="q-mr-xs"
				/>{{ item.link }}</q-badge
			>

			<q-badge
				style="width: 3em"
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
		<q-card-section class="q-py-none ellipsis-3-lines q-mb-md">{{ item.abstract }}</q-card-section>
	</q-card>
</template>

<script lang="ts" setup>
export interface IndexItem {
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

const props = defineProps<{
	data: IndexItem
}>();

const item = props.data;

defineOptions({ name: 'IndexItem' });
</script>
