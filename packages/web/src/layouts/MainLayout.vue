<template>
	<q-layout view="lHh Lpr lFf">
		<q-header
			bordered
			style="background-color: #983a42"
			class="flex justify-center"
		>
			<q-toolbar style="max-width: 1224px">
				<q-toolbar-title>
					<router-link
						class="text-white"
						:to="{ name: 'App.Home' }"
						style="text-decoration: none"
						><q-avatar
							size="36px"
							class="q-mr-md bg-white"
							><q-img
								src="logo.jpeg"
								:img-style="{ transform: 'scale(1.5)' }"
							></q-img></q-avatar
						>{{ $t('app.title') }}
					</router-link>
				</q-toolbar-title>

				<q-btn
					class="self-stretch"
					flat
					square
					:to="{
						name: 'App.Feature.Content',
					}"
					>{{ $t('app.feature.index') }}</q-btn
				>
			</q-toolbar>
		</q-header>

		<q-page-container style="padding-bottom: 0">
			<router-view />
		</q-page-container>
		<q-footer
			bordered
			class="bg-grey-3 text-grey-8"
			style="position: static"
		>
			<q-toolbar>
				<q-toolbar-title class="text-center text-overline">
					Copyright © 2023-present New Media, Tianjin University.
				</q-toolbar-title>
			</q-toolbar>
		</q-footer>
	</q-layout>
</template>

<script setup lang="ts"></script>
