<template>
	<div>
		<typo-title
			:author="[]"
			source="人民网"
			>人民日报媒体技术公司+腾讯云：中国媒体融合云</typo-title
		>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>人民日报媒体技术公司联合腾讯云共同发布我国首个媒体融合云服务平台——中国媒体融合云。中国媒体融合云服务的客户范围广，包括央媒、省级媒体和市区县媒体。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>平台的设计思路上，最开始规划的是智能大数据服务（智能媒资服务），以自由化部署的方式提供给客户。由于本地部署开发、维护成本较高，后期就把平台架设在了共有云上。智能化的公共云是未来的发展趋势，它能充分发挥大数据和智能AI的技术特性，越通过大量数据训练，能力就会越强。中国媒体融合云的定位是“通过共有云服务对外提供具体的应用服务”。这种云服务的方式能使数据和算法有“成长性”。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>中国媒体融合云处于应用层，其中可以接入各种智能工具模块，提供各类智能服务。人民日报媒体技术公司把智能化服务、大数据服务汇聚成“云服务”，集中在中国媒体融合云上。中国媒体融合云可以为客户提供一系列的智能化工具，比如智能写作助手、智能标签分类、智能关键词提取、智能摘要、智能标题、智能推荐、智能审核等。这些智能工具通过API、SDK接口接入到中国媒体融合云的融媒生产系统中，并根据客户需要进行调整。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>除了应用层面，人民日报媒体技术公司也在进行技术研发。比如公司建立了自己的大数据库、进行个性化算法研究，能根据实际媒体业务需要对产品进行分级、分层、分类改造。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>在应用效果上，中国媒体融合云的智能图像识别功能识别速度快、识别准确率高，能极大辅助并在一定程度上替代人工审核图片（图片、视频的抽帧识别与分析技术已经比较成熟）。但在智能写作、智能语音助手方面，受制于自然语言处理技术瓶颈（当前与文字、语义相关的智能化技术普遍存在技术瓶颈），仍离不开人工审核和修改。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>技术创新是媒体融合发展核心驱动力，但也是传统媒体转型中的难点和痛点。人民日报媒体技术股份有限公司和腾讯云为推动媒体融合发展、合力打造的中国媒体融合云，将为所有合作媒体提供各类新型内容生产、大数据运营、人工智能等应用，一站式解决融合发展技术难题，从选题策划、采编生产、分发传播、盈利分成全流程突破融合瓶颈。中国媒体融合云通过让新型媒体技术“工具化”“傻瓜化”，实现技术的“隐身”，让媒体人重新回归内容创作的核心竞争力。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
