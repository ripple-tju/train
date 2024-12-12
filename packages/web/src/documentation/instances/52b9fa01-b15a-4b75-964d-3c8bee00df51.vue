<template>
	<div>
		<typo-title :author="[]">齐鲁壹点：壹点智能推荐系统</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>智能推荐系统是基于算法推荐引擎的内容推荐系统。主要用于稿件、视频、音频、广告等内容的推荐。算法推荐引擎是主动发现用户当前或潜在需求的定律，并主动推送信息给用户的信息网络。挖掘用户的喜好和需求，主动向用户推荐其感兴趣或者需要的对象。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>一是利用已有大数据资料利用内容、用户行为、社交关系网络等多种方法，进行算法分析，算法推荐引擎利用为用户推送其喜欢的内容。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>二是利用齐鲁壹点现有分发渠道，结合实际情况，搭建内容分发渠道（今日头条、腾讯新闻、网易新闻等头部媒体），全网自动分发本地新闻。实现各平台数据的实时监控和录入分析。全部流程可以根据规则做到自动化，减少人工干预。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>智能推荐系统采用离线推荐和在线推荐两种模式。其中视频特征结合了深度学习技术提取180类标签供推荐系统使用，音频特征结合语音识别技术、实体识别技术以及实体组合技术完成特征的提取。同时利用流处理和离线批处理技术完成对用户阅读画像的多维度构建，实现千人千面的阅读效果。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>通过搭建壹点智能推荐系统，旨在解决传统媒体转型普遍面临的智能化、数字化、智慧化程度低，内容聚合弱、分发不够精准等卡脖子难题，为众多传统媒体的融合转型做出战略性、前瞻性贡献，构建起全新的媒体内容传播渠道，增加内容的精准送达率，提升用户的使用体验和忠诚度，让主力军全面占领主阵地。同时，通过壹点智能推荐系统的运营，有效增加了广告、特定内容推送等业务成效，在经营上助力媒体实现更大创收。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>在智能化方面，通过不断探索大数据、人工智能、云计算等技术在媒体中的应用，在内容生产与传播上，全面实现更加适应主流媒体的智能采集、智能生产、智能推荐、智能分发、智能接收和智能反馈等功能。该算法通过将主流价值观与个性化服务相结合，加大正能量、主旋律内容的供给、推送和传播，营造风清气正的主流媒体内容生态。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
