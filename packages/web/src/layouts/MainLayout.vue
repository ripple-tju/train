<template>
	<q-layout view="lHh Lpr lFf">
		<q-header bordered>
			<q-toolbar>
				<q-toolbar-title>{{ $t('app.title') }}</q-toolbar-title>

				<q-btn
					class="self-stretch"
					flat
					square
					:to="{
						name: 'App.Content',
					}"
					>{{ $t('app.feature.index') }}</q-btn
				>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>
		<q-footer
			bordered
			class="bg-grey-3 text-grey-8"
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
