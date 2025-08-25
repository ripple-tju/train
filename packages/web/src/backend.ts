
interface PrincipalData {
	accountId: string;
	username: string;
	createdAt: Date;
}

interface PrincipalData {
	accountId: string;
	username: string;
	createdAt: Date;
}

function PrincipalData(
	username: string,
	createdAt: Date = new Date(),
): PrincipalData {
	return {
		accountId: crypto.randomUUID(),
		username,
		createdAt,
	};
}

const KEY = {
	PRINCIPAL: 'principal',
};

export const API = {
	Principal: {
		async get() {
			const hash = localStorage.getItem(KEY.PRINCIPAL);

			if (typeof hash !== 'string') {
				throw new Error('Unauthenticated.');
			}

			const response = await fetch(`/data/principal/${hash}.json`);

			if (!response.ok) {
				throw new Error('Unauthenticated.');
			}

			return await response.json().catch(() => {
				throw new Error('Unauthenticated.');
			}) as PrincipalData;;
		},
		async create(username: string, password: string) {
			const encoder = new TextEncoder();
			const data = encoder.encode(`${username}-${password}`);
			const buffer = await window.crypto.subtle.digest('SHA-256', data);
			const array = Array.from(new Uint8Array(buffer));
			const hash = array.map(b => b.toString(16).padStart(2, '0')).join('');
			const response = await fetch(`/data/principal/${hash}.json`);

			if (!response.ok) {
				throw new Error('Authentication failed.');
			}

			localStorage.setItem(KEY.PRINCIPAL, hash);

			return await response.json().catch(() => {
				throw new Error('Authentication failed.');
			}) as PrincipalData;;
		},
		async delete() {
			localStorage.removeItem(KEY.PRINCIPAL);
		},
	},
};
