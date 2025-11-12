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
			{ label: t('data.category.reactive'), value: 3 },
		],
	};
}

export function useNavigator() {
	const { t } = useI18n();

	return [
		{
			value: 0x100,
			label: t('data.category.smart.root'),
			children: [
				{ value: 0x101, label: t('data.category.smart.master') },
				{ value: 0x102, label: t('data.category.smart.province') },
				{ value: 0x103, label: t('data.category.smart.other') },
			],
		},
		{
			value: 0x400,
			label: t('data.category.development.root'),
			children: [
				{ value: 0x401, label: t('data.category.development.master') },
				{ value: 0x402, label: t('data.category.development.province') },
				{ value: 0x403, label: t('data.category.development.department') },
				{ value: 0x404, label: t('data.category.development.district') },
			],
		},
		{
			value: 0x200,
			label: t('data.category.ai.root'),
			children: [
				{ value: 0x201, label: t('data.category.ai.master') },
				{ value: 0x202, label: t('data.category.ai.province') },
				{ value: 0x203, label: t('data.category.ai.generation') },
			],
		},
		{
			value: 0x500,
			label: t('data.category.internet.root'),
			children: [
				{ value: 0x501, label: t('data.category.internet.master') },
				{ value: 0x502, label: t('data.category.internet.province') },
				{ value: 0x503, label: t('data.category.internet.brand') },
			],
		},
		{
			value: 0x300,
			label: t('data.category.service.root'),
			children: [
				{ value: 0x301, label: t('data.category.service.master') },
				{ value: 0x302, label: t('data.category.service.province') },
				{ value: 0x303, label: t('data.category.service.city') },
				{ value: 0x304, label: t('data.category.service.district') },
				{ value: 0x305, label: t('data.category.service.platform') },
			],
		},
		{
			value: null,
			label: t('data.category.all'),
			children: [
				{ value: 0x000, label: t('data.category.student') },
				{ value: 0x001, label: t('data.category.people') },
				{ value: 0x002, label: t('data.category.video') },
				{ value: 0x003, label: t('data.category.reactive') },
			],
		},
	];
}

interface NameRecord {
	[key: string]: number
}

interface ValueRecord {
	[key: number]: string
}

interface CategoryDictionary {
	TO_NAME: ValueRecord
	TO_VALUE: NameRecord
}

const TO_NAME: ValueRecord = {
	[0x000]: 'student',
	[0x001]: 'people',
	[0x002]: 'video',
	[0x003]: 'reactive',

	[0x100]: 'smart',
	[0x101]: 'smart.master',
	[0x102]: 'smart.province',
	[0x103]: 'smart.other',

	[0x200]: 'ai',
	[0x201]: 'ai.master',
	[0x202]: 'ai.province',
	[0x203]: 'ai.generation',

	[0x300]: 'service',
	[0x301]: 'service.master',
	[0x302]: 'service.province',
	[0x303]: 'service.city',
	[0x304]: 'service.district',
	[0x305]: 'service.platform',

	[0x400]: 'development',
	[0x401]: 'development.master',
	[0x402]: 'development.province',
	[0x403]: 'development.department',
	[0x404]: 'development.district',

	[0x500]: 'internet',
	[0x501]: 'internet.master',
	[0x502]: 'internet.province',
	[0x503]: 'internet.brand',
};

const TO_VALUE: NameRecord = {};

for (const value in TO_NAME) {
	const name = TO_NAME[value] as string;

	TO_VALUE[name] = Number(value);
}

export const CATEGORY: CategoryDictionary = { TO_NAME, TO_VALUE };
