<template>
	<div>
		<typo-title>中文</typo-title>
		<typo-heading>test</typo-heading>
		<typo-heading level="2">test</typo-heading>
		<typo-section>
			<typo-paragraph :indent="2"
				>ppppp<typo-reference :order="1">some thing</typo-reference
				><typo-link href="http://baidu.com">sssss</typo-link></typo-paragraph
			>
			<typo-figure
				title="test"
				src="https://selfpage-gips.cdn.bcebos.com/49ac150a38ed84fd0f468fb9b6e5bf1c.jpeg"
			></typo-figure>
			<typo-embed
				src="//player.bilibili.com/player.html?isOutside=true&aid=113605190092727&bvid=BV1m2iBYQEmM&cid=27207274148"
			></typo-embed>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
