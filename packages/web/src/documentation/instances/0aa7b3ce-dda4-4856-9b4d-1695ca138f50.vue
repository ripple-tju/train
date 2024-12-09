<template>
	<div>
		<typo-title author="">传播大脑科技（浙江）股份有限公司：智能媒资跨模态检索</typo-title>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"><span>智能媒资跨模态检索将成为媒体内容生产行业的重要工具，为新闻机构、内容创作者和普通用户提供了改善工作效率和信息获取能力的机会。相信这一项目将在不断持续生产海量内容的数字时代中发挥重要作用，为用户提供更好的多媒体内容检索和管理体验。理解和融合多种媒体类型的信息仍然很难，不同媒体之间的语义差异，以及多模态信息的整合和推理仍然需要进一步的研究和开发。随着跨媒体数据不断增加，有效的数据存储、检索和分析也将成为一个不小的挑战。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"><span>大规模数据处理：AIGC应用能够处理大规模数据集，从互联网上搜集和索引各种媒体内容。这使其能够涵盖广泛的主题和领域，满足不同用户群体的需求。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>内容聚合和标签化：自动聚合和标签化各种类型的内容，以帮助用户更容易地浏览和筛选结果。例如，提供关键词标签、主题标签和情感分析等细分标签数据，提供更深入的内容相关信息。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>可视化检索界面：AIGC应用提供直观的用户界面，允许用户通过图形化方式进行检索。用户可以通过对话、检索界面等方式进行搜索，并查看结果，轻松找到他们需要的信息。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"><span>随着数字媒体内容的爆炸性增长，用户面临着巨大的信息过载问题。从图像和视频到文本和音频，多种媒体类型的信息淹没了用户，使他们难以找到自己需要的内容。为了解决这一挑战，我们开发了智能媒资库跨模态检索产品。智能媒资跨模态语义检索是一种基于多种媒体（如文本、图像、视频等）的信息检索技术。其核心思想在于利用多种媒体类型的数据，通过跨模态的信息融合和语义理解，以更精准、全面的方式满足用户的查询需求。例如，当用户提供一个查询，可能使用一段长句子描述目标内容、或用一张任意含义的图片，或一个视频片段，跨模态语义检索技术可以实现从内容库中通过自然语言查询的方式检索到对应的图片和视频，提升搜索效率和体验。跨模态语义检索能力，支持与媒资系统、智能创作助理、内容巡查等场景结合，有效提升资源查询的准确性和效率，同步确保内容安全，让用户能更轻松地发现和利用媒体资源，充分挖掘资源的潜在价值。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"><span>更自由的自然语言查询：能够理解用户的自然语言查询，可以有效兼容同义词、别名等不同的表达方式。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>更细粒度的检索：支持兼容查询语句对于多重细节的描述，比如检索“穿着汉服在西湖边拍照”、“一群人在海边奔跑”。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>支持多重限定条件、多种描述方式：支持通过多种方式描述和多重条件限定进行检索，比如检索“数十名汉服爱好者齐聚杭州西溪湿地参加花朝节活动”。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"><span>1、多模态搜索：模型具备跨越图像、视频、文本和音频的多模态搜索能力。用户可以通过不同的媒体类型输入查询，例如，他们可以上传一张图片，或者输入文字描述，以寻找相关文本、图片、视频等。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2、智能检索算法：项目采用最先进的机器学习和深度学习技术，以不断改进检索算法，提高搜索结果的准确性和相关性。应用还能够理解用户的查询意图，根据上下文推荐相关内容，从而提供个性化的搜索体验。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3、向量数据库：通过向量计算技术将多模态信息转成向量，通过向量检索技术，建立了一个高效的资源检索框架，用户可通过多种方式快速找到所需的媒体资料和信息。 </span></typo-paragraph>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>