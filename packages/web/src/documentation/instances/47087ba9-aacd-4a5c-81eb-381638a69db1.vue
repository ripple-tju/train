<template>
	<div>
		<typo-title :author="[]">人民网“天目”智能识别系统</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"><span>2023年12月9日，人民网正式发布“天目”智能识别系统，探索“用AI治理AI”的内容风控新模式。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"><span>“天目”由传播内容认知全国重点实验室（人民网）研发，能够对人工智能生成内容进行识别，对深度伪造内容进行检测，对合成手段进行追根溯源。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"><span>研究发现，以语言模型的困惑度、词频特征为切入点，AI生成模型倾向于采用高频词，而人类写作的选词则更具有随机性。基于此，人民网研发了语义与风格特征融合的语言模型评价方法，推出“天目”系统，用于快速区分机器生成内容与人工创作内容。系统支持单次最多10万字的数据检测，对疑似AI生成句段明确标识，一键生成检测报告。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"><span>公开测试数据显示，“天目”对国内外主要人工智能大模型生成中文文本的识别准确率达到93%。同时，系统不留存、不转用任何检测数据，充分保护用户的数据隐私与安全。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"><span>保证新闻的真实性，一直以来都是媒体的重要职责。人工智能技术生成的内容伪装性和欺骗性都很强，的确有可能会导致更多的虚假内容产生。因此，要用AI对抗AI。基于一些防御性人工智能技术，首先判断信息内容是否为人工智能技术生成，向用户发出预警。随着主流价值语料库的规模不断扩大，还能够通过人工智能技术将存疑信息与语料库内数据进行对比，从而帮助用户判断出信息是否与事实相符，若为谣言，还能够列举其中哪些信息点是错误的。通过AI技术学习训练相关数据，推出针对性的智能检测产品，可以起到保护版权、维护内容安全的作用，在内容安全、版权保护方面有广阔的市场应用前景。</span></typo-paragraph>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>