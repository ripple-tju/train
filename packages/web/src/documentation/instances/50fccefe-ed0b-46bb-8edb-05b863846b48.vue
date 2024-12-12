<template>
	<div>
		<typo-title :author="[]">人民网“主流价值语料库”</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>为补齐国产大模型语料短板，人民网面向大模型在预训练、监督微调、强化学习等不同任务的语料需求，建设来源权威、领域丰富、知识全面、形态丰富的主流价值语料库，包括基础语料、问答语料、事实语料、风控语料等。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>人民网研发建设主流价值语料库，启动AI训练师计划，针对当前大模型普遍回答不好的重大、敏感、复杂问题，组织全体员工、汇集各方资源，精心编撰建设优质问答语料，帮助国产AI系统建设安全合规的语料体系，更好实现价值观对齐。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>人民网、传播内容认知全国重点实验室在对国内主流大模型进行安全评测的基础上，针对大模型普遍遇到的意识形态安全问题、短板问题，依托党报党网长期建设发展形成的新闻、理论、评论、政策和科普等权威优质资源，以及党和国家重要文献资源，经科学采样、归集、清洗、标注、定制、风控，形成主流价值语料集，为人工智能大模型提供安全语料支撑、知识增强服务、持续发展护航。人民网主流价值语料库可直接用于生成式人工智能模型训练和精调，具备主流价值、安全合规、覆盖全面、直接管用四大特征，能够解决大模型在语料方面的刚性需求、紧急需求、安全需求。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>人民网主流价值语料库目前已完成300多亿字基础语料、12万道问答语料，并在部分大模型厂家得到应用验证，相关工作成果助推了国产人工智能大模型的安全、规范和可持续发展，为生成式人工智能领域提供了更多的规范和参考。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>在人工智能时代，媒体的重要职责之一就是保证意识形态的安全。当前，人工智能大模型已经成为一种生成式信息传播工具，因此对于大模型价值观的训练是必要的。主流媒体应主动适应、参与人工智能应用和创新，走出一条“用AI治理AI”的“科技向善”之路，用技术赋能价值导向和意识形态传播。唯有技术与内容二者同频同向，构建起互促共进的正向互动关系，才能更好营造健康可持续的产业生态，天朗气清的良好网络空间。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
