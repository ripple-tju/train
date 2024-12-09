<template>
	<div>
		<typo-title :author="[]">传播大脑科技（浙江）股份有限公司：媒体内容生产类AIGC应用-传播大模型</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"><span>本项目基于开源大模型打造的聚焦在传媒领域的垂直大模型，致力于打造媒体工作者的AI助理，从媒体行业的核心需求出发，重塑内容生产力和创造力。该产品基于开源大语言模型和多模态大模型构建，同时整合了向量检索、知识增强、模型微调和提示工程等技术，形成了四大核心功能：智能对话、智能创作、智能检索和智能插件，同时每个核心功能下衍生出多个子功能，例如媒资多模态检索、热点推荐、实时资讯生成以及文生成图和图生成图等。媒体创作者在工作中的工作痛点，包括信息过载、内容生产速度要求高以及不断变化的趋势。该产品的目标是提供一体化解决方案，以满足媒体从业者在信息处理、内容创作和搜索方面的多样化需求。因此，该产品以技术创新为基础，提供了一种更智能、更高效的方式来应对这些挑战。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"><span>为了实现这一创新的产品，我们采用了一系列关键的做法和设计。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>首先，我们选择了开源大语言模型作为产品的底座。这些模型拥有强大的自然语言处理和图像理解能力，为后续功能提供了坚实的基础。在基座大模型基础上，依托大量媒资数据对媒体领域的特定需求进行模型微调，使其更好地适应领域内的术语和风格，从而提高模型的准确性和可用性。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>第二、引入向量检索技术。将多模态的数据以向量形式进行存储和计算，以便高效地检索媒体资料和信息。媒体工作者通过资源检索可以轻松地查找他们需要的内容，提升工作效率。同时，为了缓解模型生成的幻觉问题，我们还结合知识外挂和增强技术，用于丰富和完善媒体资料，从而提供更准确的信息。知识增强技术能够将模型输出的信息与外部知识库进行比对，并填补信息的不足之处。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>第三、提示工程是产品背后的另一个重要组成部分，通过合理的提示工程，一方面可以引导模型生成更好的结果，另一方面也可以让用户更好地使用产品，提供实时反馈和建议，以优化用户体验。此外在功能设计上，派生出多个子功能，充分满足媒体工作者在不同场景下的需求，如媒资多模态检索，用户以图像、文本、音频等多种方式检索媒体资料；热点推荐，为用户提供与其兴趣相关的新闻热点；实时资讯生成，帮助用户在快速传播的新闻事件中快速生成相关报道；文生成图和图生成文则通过将文本和图像互相转换，加快内容创作。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"><span>在媒体领域的传播大模型产品中采用了多项关键技术来实现其核心功能：</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>1、大模型微调技术：构建大量高质量的媒体领域数据，并制作指令微调数据集，在内容创作，风格改写，内容续写等多个媒体相关任务下进行微调训练，以提高模型的可用性。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2、多模态向量检索技术：利用向量库将多模态信息转成向量，通过向量检索技术，建立了一个高效的资源检索框架，用户可通过多种方式快速找到所需的媒体资料和信息。 </span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3、知识增强技术：为缓解大模型在结果生成过程中的幻觉问题，引入知识增强技术与外部知识库进行交互，以补充和约束模型的输出，从而提高信息的准确性和完整性。 </span></typo-paragraph>
			<typo-paragraph :indent="2"><span>4、长文本建模技术：通过长文本建模和切片方式突破大模型输入限制，以适配媒体领域文章过长场景。 </span></typo-paragraph>
			<typo-paragraph :indent="2"><span>5、提示工程：构建单步和多步的提示推理框架，提升模型对提示内容的理解，从而更好的生成内容细节，提升用户体验。 </span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"><span>目前传播大模型是首个聚焦文化传媒领域打造并落地使用的大模型，浙报集团媒立方以及全省媒体一体化生产平台已经集成了大模型的多项能力并开放给浙江省73家媒体机构内测使用。在业务领域，覆盖媒体工作的各大场景，能够更快速、更准确地应对信息传播的需求，也为媒体工作开展提供便利：</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>1、提高工作效率：传播大模型产品使媒体从业者能够更轻松地找到所需的信息，更快速的生产内容，从而节省了大量的时间和精力。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2、提升内容质量：产品的智能创作功能和强大的生成能力，帮助内容生产者生成更具质量的内容。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3、降低成本：通过提高工作效率和自动化一些任务，我们的产品还有助于降低媒体从业者的成本，进而提高了盈利能力。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>4、优化创作体验：传播大模型提供了一种新的内容生产和交互方式，通过简单的提示和操作就能获取想要的结果，提升了交互体验。获得2023年中国新媒体大会“融媒有技”优秀案例。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"><span>通过大模型和AIGC技术，传播大模型实现了在媒体领域的应用，为媒体工作者提升了工作效率和体验。但也还面临着诸多挑战需要不断优化和改进：</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>1、内容生成质量：尽管大模型可以生成文本，但在生成的内容质量方面仍有改进空间。生成的文本可能存在错误、不准确性或与用户预期不符，需要更多的人工审查和改进。 </span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2、内容风格的迁移：大模型可能在内容生成时难以保持一致的风格和语调，这可能导致生成内容的不连贯性，尤其是当需要符合特定的编辑要求时。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3、结果的可控性：大模型生成的内容通常是自动化的，难以完全控制。这可能导致内容与编辑政策相悖或不符合伦理要求，因此需要监督和审核。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>4、技术可解释性：大模型通常被认为是黑盒模型，难以解释其决策和预测过程。这可能降低用户对系统的信任。研究可解释性人工智能技术至关重要。</span></typo-paragraph>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>