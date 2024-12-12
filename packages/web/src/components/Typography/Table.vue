<template>
	<div class="typo-table q-my-md row justify-center">
		<div class="col-12">
			<q-markup-table
				separator="cell"
				flat
				bordered
				dense
				square
			>
				<thead
					v-if="Array.isArray(table.head)"
					class="bg-grey-3"
				>
					<tr
						v-for="(col, index) in table.head"
						:key="index"
					>
						<th
							v-for="(value, index) in col"
							:key="index"
							:style="{ width: `${1 / col.length}%` }"
						>
							<div>{{ value }}</div>
						</th>
					</tr>
				</thead>
				<tbody v-if="Array.isArray(table.body)">
					<tr
						v-for="(col, index) in table.body"
						:key="index"
					>
						<td
							v-for="(value, index) in col"
							:key="index"
						>
							<div>{{ value }}</div>
						</td>
					</tr>
				</tbody>
			</q-markup-table>
			<div class="text-center">{{ props.title }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

type DataArea = (string | number | boolean | null)[][]

interface TableDescriptor {
	head?: DataArea
	body?: DataArea
}

const props = withDefaults(
	defineProps<{
		src: string
		title?: string | null
	}>(),
	{
		title: null,
	},
);

const table = ref<TableDescriptor>({});

onBeforeMount(async () => {
	await fetch(props.src).then(async (response) => {
		const { head, body } = (await response.json()) as TableDescriptor;

		if (head !== undefined) {
			table.value.head = head;
		}

		if (body !== undefined) {
			table.value.body = body;
		}
	});
});

defineOptions({ name: 'TypoTable' });
</script>

<style lang="scss">
.typo-table {
	.q-table--no-wrap th,
	.q-table--no-wrap td {
		white-space: pre-wrap;
	}
}
</style>
