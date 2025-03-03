<template>
	<div
		id="app-home"
		class="flex justify-center content-center fit fixed q-pa-md non-selectable"
	>
		<div
			style="max-width: 800px"
			class="full-width flex column items-center justify-center"
		>
			<div
				class="row q-px-lg"
				style="background-color: rgba(255, 255, 255, 0.3); border-radius: 200px"
			>
				<div class="col flex items-center gt-sm">
					<q-avatar
						size="120px"
						class="q-mx-md bg-white"
						style="outline: 6px solid #fff; opacity: 0.95"
						><q-img
							src="logo.jpeg"
							:img-style="{ transform: 'scale(1.01)' }"
						></q-img
					></q-avatar>
				</div>
				<div class="col-grow text-white flex items-center justify-center column">
					<div class="text-h3 q-px-md q-mt-sm">{{ $t('app.title') }}</div>
					<div class="text-overline">{{ $t('app.author') }}</div>
				</div>
			</div>
			<div
				id="saarching"
				class="full-width q-mt-xl row"
			>
				<div class="col-grow">
					<q-input
						dark
						square
						color="accent"
						outlined
						standout
						filled
						v-model="keyword"
						clearable
						:placeholder="$t('page.home.search.placeholder')"
						:hint="$t('page.home.search.hint')"
						@keyup.enter="toIndexPage"
					>
						<template v-slot:append>
							<q-btn
								@click="toIndexPage"
								outline
								>搜索
							</q-btn>
						</template>
					</q-input>
				</div>
			</div>
			<div
				id="keyword-pool"
				class="full-width"
				style="max-height: 300px"
			>
				<vue-ui-word-cloud
					@click="appendKeyword"
					:dataset="keywordData"
					:config="{
						responsive: true,
						userOptions: { show: false },
						style: {
							chart: {
								backgroundColor: '#00000000',
								tooltip: {
									offsetY: 9999,
								},
							},
						},
					}"
				></vue-ui-word-cloud>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { CategoryItem } from 'src/Spec';

import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { VueUiWordCloud } from 'vue-data-ui';

import keywordData from 'src/documentation/keyword.json';

const keyword = ref<string>('');

const categoryList = ref<CategoryItem[]>([]);

const router = useRouter();

function toIndexPage() {
	const query: { [key: string]: string } = {};

	if (keyword.value.length > 0) {
		query.keyword = keyword.value.split(' ').join(',');
	}

	if (categoryList.value.length > 0) {
		query.category = categoryList.value.map((item) => item.value).join(',');
	}

	router.push({ name: 'App.Feature.Content.Index', query });
}

watch(keyword, () => {
	if (keyword.value === null) {
		keyword.value = '';
	}
});

watch(categoryList, () => {
	if (categoryList.value === null) {
		categoryList.value = [];
	}
});

function appendKeyword({ target }: MouseEvent) {
	if (target instanceof SVGTextElement) {
		const text = target.textContent as string;
		const list = keyword.value.split(' ');

		if (!list.includes(text)) {
			keyword.value = [...list, text].join(' ').trim();
		}
	}
}

defineOptions({ name: 'AppMetricOverview' });
</script>

<style lang="scss">
#app-home {
	background-image: url('./chalkboard.jpg');
	background-repeat: repeat;

	&::before {
		content: '';
		display: block;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		background-color: #000;
		background-image: url('/background.jpg');
		background-size: cover;
		background-repeat: repeat;
		opacity: 0.35;
		z-index: -1;
	}

	.q-field--filled.q-field--dark .q-field__control {
		background-color: rgba(255, 255, 255, 0.2);
	}
}

#keyword-pool {
	text {
		cursor: pointer;
	}
}
</style>
