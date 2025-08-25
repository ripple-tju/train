<template>
	<div
		class="fullscreen"
		id="page-authentication"
	>
		<div class="fixed-center">
			<q-card
				id="page-authentication-card"
				class="full-height text-no-wrap"
			>
				<q-card-section
					class="full-height"
					horizontal
				>
					<q-img
						class="col-5 gt-sm"
						src="https://cdn.quasar.dev/img/material.png"
					/>

					<q-card-section class="col col-md-7 col-12 q-pa-xl">
						<q-card-section class="q-my-xl text-center">
							<div class="text-h3">{{ t('page.authentication.title') }}</div>
							<div class="text-subtitle2 q-mt-sm text-grey-8">
								{{ t('app.title') }}
							</div>
						</q-card-section>

						<q-form
							name="app-authentication"
							@submit.prevent
						>
							<q-input
								stack-label
								autocomplete="off"
								v-model="form.username"
								:label="t('page.authentication.username')"
								name="username"
								:placeholder="t('page.authentication.placeholder.username')"
							>
								<template v-slot:prepend>
									<q-icon name="person" />
								</template>
							</q-input>

							<q-input
								stack-label
								clearable
								type="password"
								autocomplete="off"
								v-model="form.password"
								:label="t('page.authentication.password')"
								name="password"
								:placeholder="t('page.authentication.placeholder.password')"
							>
								<template v-slot:prepend>
									<q-icon name="lock" />
								</template>
							</q-input>

							<q-toggle
								class="q-mt-md text-uppercase"
								v-model="form.remembered"
								:label="t('page.authentication.remembered')"
							/>

							<div class="q-mt-md">
								<q-btn
									:label="t('page.authentication.signin')"
									type="submit"
									style="background-color: #983a42;"
									text-color="white"
									class="full-width"
									:disable="!canSignIn"
									@click="signIn"
								/>
							</div>
						</q-form>
					</q-card-section>
				</q-card-section>
			</q-card>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

import { API } from 'src/backend';

const { t } = useI18n();
const router = useRouter();
const $q = useQuasar();

const form = reactive<{
	username: string | null;
	password: string | null;
	remembered: boolean;
}>({
	username: null,
	password: null,
	remembered: false,
});

async function signIn() {
	const { username, password } = form;

	if (username === null || password === null) {
		return;
	}

	try {
		await API.Principal.create(username, password);
		await router.push('/');
	} catch {
		$q.dialog({
			title: '认证失败',
			message: '用户名或密码错误',
			ok: false,
		});
	}
}

const canSignIn = computed<boolean>(() => {
	const { username, password } = form;

	if (username === null || password === null) {
		return false;
	}

	if (username.length === 0 || password.length === 0) {
		return false;
	}

	return true;
});

defineOptions({ name: 'PageAuthentication' });
</script>

<style lang="scss">
$color: #ddd;

#page-authentication-card {
	width: 720px;
}

@media (max-width: $breakpoint-sm-max) {
	#page-authentication-card {
		width: 360px;
	}
}

#page-authentication {
	background: radial-gradient($color 3px, transparent 4px),
		radial-gradient($color 3px, transparent 4px),
		linear-gradient(#fff 4px, transparent 0),
		linear-gradient(
			45deg,
			transparent 74px,
			transparent 75px,
			$color 75px,
			$color 76px,
			transparent 77px,
			transparent 109px
		),
		linear-gradient(
			-45deg,
			transparent 75px,
			transparent 76px,
			$color 76px,
			$color 77px,
			transparent 78px,
			transparent 109px
		),
		#fff;
	background-size:
		109px 109px,
		109px 109px,
		100% 6px,
		109px 109px,
		109px 109px;
	background-position:
		54px 55px,
		0px 0px,
		0px 0px,
		0px 0px,
		0px 0px;
}
</style>
