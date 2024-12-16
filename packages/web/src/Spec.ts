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
