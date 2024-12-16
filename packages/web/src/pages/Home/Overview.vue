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
				style="background-color: rgba(255, 255, 255, 0.2); border-radius: 200px"
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
			<div class="full-width q-mt-xl row">
				<div class="col-shrink">
					<q-select
						color="white"
						filled
						dark
						square
						v-model="categoryList"
						multiple
						:options="categoryOptions"
						:label="$t('data.content.category')"
						style="max-width: 20em; min-width: 10em"
					/>
				</div>
				<div class="col-grow">
					<q-input
						dark
						square
						color="white"
						outlined
						standout
						filled
						v-model="keyword"
						clearable
						:placeholder="$t('page.home.search.placeholder')"
						:hint="$t('page.home.search.hint')"
						@keyup.enter="toIndexPage"
					>
						<template v-slot:prepend>
							<q-icon
								name="search"
								@click="toIndexPage"
							/>
						</template>
					</q-input>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { CategoryItem } from 'src/Spec';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSpec } from 'src/Spec';

const keyword = ref<string>('');

const { categoryOptions } = useSpec();
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

defineOptions({ name: 'AppMetricOverview' });
</script>

<style lang="scss">
#app-home {
	background-image: url('./chalkboard.jpg');
	background-repeat: repeat;
}
</style>
