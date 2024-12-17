import { useI18n } from 'vue-i18n';

export interface CategoryItem {
	label: string
	value: number
}

export function useSpec() {
	const { t } = useI18n();

	return {
		categoryOptions: [
			{ label: t('data.category.student'), value: 0 },
			{ label: t('data.category.people'), value: 1 },
			{ label: t('data.category.video'), value: 2 },
		],
	};
}

export const CATEGORY = {
	TO_NAME: {
		0: 'student',
		1: 'people',
		2: 'video',
	},
	TO_VALUE: {
		student: 0,
		people: 1,
		video: 2,
	},
};
