// This is just an example,
// so you can safely delete all default props below

export default {
	':': ':',
	app: {
		title: 'Case Database',
		author: 'New Media of Tianjin University',
		feature: {
			metric: 'Metric',
			index: 'Index',
		},
	},
	data: {
		content: {
			author: 'author',
			source: 'source',
			category: 'category',
		},
		category: {
			video: 'video',
			student: 'student',
			people: 'people',
			smart: {
				root: '',
				master: '',
				province: '',
				other: '',
			},
			ai: {
				root: '',
				master: '',
				province: '',
				generation: '',
			},
			service: {
				root: '',
				master: '',
				province: '',
				city: '',
				district: '',
				platform: '',
			},
			development: {
				root: '',
				master: '',
				province: '',
				department: '',
				district: '',
			},
			internet: {
				root: '',
				master: '',
				province: '',
				brand: '',
			},
			all: '',
		},
	},
	page: {
		home: {
			search: {
				placeholder: 'Please input some keyword',
				hint: 'white space to split keywords, press Enter to search',
			},
		},
		authentication: {
			title: 'Authentication',
			username: 'Username',
			password: 'Password',
			signin: 'sign in',
			remembered: 'remember me',
			placeholder: {
				username: 'Please ENTER your username',
				password: 'Please ENTER your password',
			},
		},
	},
	typo: {
		title: {
			source: 'source',
			author: 'author',
			unknown: {
				source: 'unknown',
				author: 'unknown',
			},
		},
		reference: {
			text: {
				undefined: 'undefined',
			},
		},
	},
};
