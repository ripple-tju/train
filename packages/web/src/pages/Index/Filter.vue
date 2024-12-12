<template>
	<div class="q-mb-sm">
		<div>
			<q-input
				v-model="keyword"
				dense
				outlined
				clearable
				placeholder="请输入关键字"
				@keydown.enter="appendKeyword"
			/>
		</div>
		<div class="q-mt-xs">
			<q-badge
				color="secondary"
				rounded
				v-if="props.modelValue.length === 0"
				>*</q-badge
			>
			<q-badge
				class="q-mr-xs"
				rounded
				v-for="(keyword, index) in props.modelValue"
				:key="index"
				>{{ keyword
				}}<q-icon
					class="q-ml-xs"
					name="close"
					@click="removeKeyword(index)"
				/>
			</q-badge>

			<q-badge
				color="red"
				rounded
				v-if="props.modelValue.length > 0"
				@click="clearAll()"
				>&nbsp;<q-icon name="close" />&nbsp;</q-badge
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
	defineProps<{
		modelValue: string[]
	}>(),
	{
		modelValue: () => [],
	},
);

const emit = defineEmits<{
	(e: 'update:modelValue', keywords: string[]): void
}>();

const keyword = ref<string>('');

function appendKeyword() {
	if (keyword.value === '') {
		return;
	}

	emit('update:modelValue', [...props.modelValue, keyword.value]);
	keyword.value = '';
}

function removeKeyword(at: number) {
	emit('update:modelValue', [...props.modelValue].toSpliced(at, 1));
}

function clearAll() {
	emit('update:modelValue', []);
}

defineOptions({ name: 'IndexFilterPanel' });
</script>
