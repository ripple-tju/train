<template>
	<div class="q-mb-sm">
		<div class="row">
			<div class="col-grow">
				<q-input
					style="border-left: none"
					square
					v-model="keyword"
					filled
					clearable
					placeholder="请输入关键字"
					@keydown.enter="appendKeyword"
				>
					<template v-slot:prepend>
						<q-icon
							name="search"
							@click="appendKeyword"
						/>
					</template>
				</q-input>
			</div>
		</div>
		<div class="q-mt-xs">
			<q-badge
				color="secondary"
				rounded
				v-if="props.keywords.length === 0"
				>*</q-badge
			>
			<q-badge
				class="q-mr-xs"
				rounded
				v-for="(keyword, index) in props.keywords"
				:key="index"
				>{{ keyword
				}}<q-icon
					class="q-ml-xs cursor-pointer"
					name="close"
					@click="removeKeyword(index)"
				/>
			</q-badge>

			<q-badge
				color="red"
				rounded
				class="cursor-pointer"
				v-if="props.keywords.length > 0"
				@click="clearAll"
				>&nbsp;<q-icon
					name="close"
					class="cursor-pointer"
				/>&nbsp;</q-badge
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { CategoryItem } from 'src/Spec';

import { ref, watch } from 'vue';
import { useSpec } from 'src/Spec';

const { categoryOptions } = useSpec();

const props = withDefaults(
	defineProps<{
		keywords: string[]
		categories: number[]
	}>(),
	{
		keywords: () => [],
		categories: () => [],
	},
);

const emit = defineEmits<{
	(e: 'update:keywords', keywords: string[]): void
	(e: 'update:categories', categories: number[]): void
}>();

const keyword = ref<string>('');
const category = ref<CategoryItem[]>([]);

function appendKeyword(event: MouseEvent) {
	if (keyword.value === '') {
		return;
	}

	emit('update:keywords', [...props.keywords, ...keyword.value.split(' ')]);
	keyword.value = ''
	;(event.target as HTMLInputElement).blur();
}

function removeKeyword(at: number) {
	emit('update:keywords', [...props.keywords].toSpliced(at, 1));
}

function clearAll() {
	emit('update:keywords', []);
}

watch(
	props.categories,
	() => {
		category.value = props.categories.map((value) => {
			return categoryOptions.find((item) => item.value === value) as CategoryItem;
		});
	},
	{
		immediate: true,
	},
);

defineOptions({ name: 'IndexFilterPanel' });
</script>
