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
					stretch
					v-for="(top, index) in categoryList"
					:key="index"
					flat
					square
					:label="top.label"
					:to="{
						name: 'App.Feature.Content',
						query: { ...$route.query, category: top.value },
					}"
					:class="{ 'bg-brown-9': $route.query.category?.includes(String(top.value)) }"
				>
					<q-menu>
						<q-list dense>
							<q-item
								v-for="child in top.children"
								:key="child.value"
								clickable
								:to="{
									name: 'App.Feature.Content',
									query: {
										...$route.query,
										category: [top.value, child.value].filter((v) => v).join(','),
									},
								}"
								class="text-black"
							>
								<q-item-section>
									<q-item-label>{{ child.label }}</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
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

<script setup lang="ts">
import { useNavigator } from 'src/Spec';

const categoryList = useNavigator();
</script>
