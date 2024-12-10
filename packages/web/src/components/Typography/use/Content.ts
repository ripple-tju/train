import { inject } from 'vue';
import * as Key from '../ContentProvideSymbol';

export function useContent() {
	if (!inject(Key.IsInContent)) {
		throw new Error('Not in a <typo-content>.');
	}

	return {
		registerHeading: inject(Key.RegisterHeading),
	};
}
