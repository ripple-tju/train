<template>
	<div>
		<typo-title
			:author="[]"
			source="人民网"
			>人民网写易智能创作引擎</typo-title
		>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>人民日报社主管、依托人民网建设的传播内容认知国家重点实验室推出的人工智能写稿秘书“写易”创作引擎，依托自主研发的主流价值观大模型针对写作场景训练而成。“写易”智能创作引擎适合党政党媒、央企国企、学校医院等有日常阅读需求和写作需求的群体，提供专业权威、系统整体、持续更新的数智服务，从而更好地启发创作者的写作灵感。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>“写易”智能创作引擎，拥有优质写作素材库、知识库，包含习近平系列重要讲话数据库、人民日报写作素材库等优质内容。相较于其他大模型，“写易”通过AI训练学习符合我国主流价值观的数据集和媒体语料库，内容涵盖政治、经济、文化、社会、生态、党建、国防、外交等重点领域，保障生成内容安全；依托大模型技术构建写易写稿秘书，实现基于标题生成观点评论、学习体会、方案策划等题材文章的功能，并融合基于检索增强的观点辅助两阶段生成能力。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>“写易”智能创作引擎深入挖掘用户需求，构建了“随查”“随写”“随审”的交互体验,
					具有创作高效、安全准确、内容丰富的特点。其主要功能有：</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>高效的智能创作引擎：“写易”智能创作引擎依托于超过25万条的权威主流语料库，创新性地实现了基于检索增强的辅助生成能力。可通过标题自动生成优质核心内容，同时结合标题与观点等上下文信息，为用户生成相关性更强、准确性更高的文章素材，从而显著提升写作效率；</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>专业的涉政内容审校：1.原文引用检测：检测文本是否引用了重要讲话、重要政策文件，分析引用的规范性，同时给出原文的出处等溯源信息。2.规范表述审校：对领导人重要讲话、党和国家重大政策重要文件等文本进行规范性检测。3.人物信息审校：对文本中出现的人物姓名及职务信息等进行勘误检测。4.关键信息审核：检测文本中有标志性、代表性的重大事件、重要人物、重要敏感信息等内容。5.基础纠错：对文本中的错别字检测、标点符号错误检测，包括中文、英文拼写、成对标点、特殊数字与符号等错误；</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>内容丰富的写作素材知识库：依托人民网和人民日报，配备强大的资料库，系统化整理信息，按照时间、内容、形式、图文音频等多维度进行分类汇总。及时同步《人民日报》每日的精选文章，实时提炼更新当日最优标题、最美佳句、最优词语等内容，为用户提供新鲜的写作素材。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>目前，“写易”智能创作引擎可结合客户数据库进行定制，具体而言，人民网以行业客户数据库语料为核心，《人民日报》内容为辅助，为客户定制化训练“写易”智能创作语言大模型，帮助提高写作能力、积累写作素材、规范写作格式。在写作过程中还可以为标题撰写、修辞使用、引用诗文和网言网语等提供丰富素材，帮助创作者启发灵感、提供思路，从而自动、高效地生成符合客户写作场景的素材，为客户提供全维、全时、全域的智能化服务，助力工作效率大幅提升。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>“写易”已在多个党政系统应用，具备高效创作、安全准确和内容丰富的特性，通过检索增强的辅助生成能力，为用户提供高质量文章素材，尤其在智能审校和专业知识提供方面表现出色。生成式人工智能正在加速升级内容生产业态，为媒体机构和内容创作者提供通用型创作工具，提升内容生产和分发效率，为内容创作赋能。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
