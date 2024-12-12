<template>
	<div>
		<typo-title :author="[]">齐鲁壹点：“壹点天玑”党媒大模型</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>“壹点天玑”党媒大模型平台是面向传媒行业的大语言模型，以主流价值观为引领，通过海量的新闻行业大数据训练，加私域小数据微调，具有多模态内容生成、跨模态内容理解、私域数据解析、多轮人机对话等功能，数据安全可控，核心功能包括智能问答、在线搜索、知识检索库、多模态内容生成、跨模态内容理解，可高效便捷地帮助用户进行内容生产与传播，是面向党媒的专属大模型。具有以下四个特色：一体化：仅需小规模的算力资源，即可实现模型的训练、微调、推理一体化。私有化：支持离线私有化部署、定制化训练，训练数据不出域，prompt
					沙盒机制防泄密。行业化：深耕党媒行业大数据，支持接入媒体私域数据库和知识库。场景化：针对传媒行业的实际应用场景，提供了大量丰富、精准的
					prompt 指令集。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"><span>第一步：数据标注、预处理</span></typo-paragraph>
			<typo-paragraph :indent="2"
				><span
					>（1）预训练数据：预训练数据可以帮助大模型具备较为稳固的知识储备。部分数据来自网络上共享的开源预训练数据集，主要是官方发布的已经进行过初步数据清洗的公共数据。另一部分来自抓取的党媒网站的新闻、文件、公开数据库等。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>（2）指令数据：指令数据是用于大模型的微调训练数据集。可以使得大模型适应下游任务。指令数据一部分来自官方机构公布的指令数据，如复旦大学MOSS团队开源的中英文多轮对话数据，包含100万+数据，CLUE中文数据集等。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>（3）本地知识库：本地知识库可以帮助党媒大模型更好的扩充知识库。使用中文embedding模型，将本地党媒数据进行切分、分段、编码，以便进行相似查询。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"><span>第二步：大模型预训练</span></typo-paragraph>
			<typo-paragraph :indent="2"
				><span
					>（1）首选需要选定预训练大模型基座，党媒大模型选用多种国产大模型，如Baichuan2,
					ChatGLM2,Qwen2等大模型。并配置预训练所需环境。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>（2）进行词表扩充。为了降低模型的训练难度，在原有的词表上进行扩充，将一些常见的中文token手动添加到原来的Tokenizer中，从而降低训练难度。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>（3）预训练。PreTraining 的思路很简单，就是输入文本，让模型做Next Token
					Prediction的任务。预训练过程中用到的方法有：数据源采样、数据预处理、模型结构。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"><span>第三步：指令微调</span></typo-paragraph>
			<typo-paragraph :indent="2"
				><span>（1）准备好将上一步训练好的预训练模型，并配置好微调环境。</span></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>（2）数据预处理。将第一步准备好的alpaca数据集转化为按行存储的Intruct格式数据，然后把数据划分为train.txt和valid.txt，保存在./data/example/路径下。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>（3）使用lora脚本进行预训练。第四步：模型评测及优化根据评测结果，对预训练数据集、微调数据集进行专项升级，然后重复步骤二、三、四。第五步：模型部署和调用。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>“壹点天玑”党媒大模型是大语言模型（LLM）的一种，是基于大量数据进行预训练的超大型深度学习模型。预训练将大量低成本收集的训练数据放在一起，经过某种预训练的方法去学习其中的共性，然后将其中的共性“移植”到特定任务的模型中，再使用相关特定领域的少量标注数据进行
					“微调”。因此，模型只需要从“共性” 出发，去 “学习”
					该特定任务的“特殊”部分。完成预训练之后，还要采用监督学习、奖励模型以及强化学习进行进一步的微调。通过构建党媒大模型，帮助党媒平台借助大语言模型的AI能力，进行内容生产、管理的技术升级。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>本项目旨在通过构建党媒大模型，切实发挥好主流媒体的正能量强引导作用，提升主流媒体的传播效能。具体绩效目标如下：</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>1、技术创新与领先成功构建具有领先水准的大语言模型，以及多模态意识形态和文化安全感知评估模型，确保技术的创新性和领先性。在相关领域发表高质量的学术论文和技术报告，在国际国内期刊和学术会议上发表论文5篇以上，以展示在大模型技术研发方面的成果和能力。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>2、性能与应用效果通过多轮评估和优化，确保核心技术模型的准确率、召回率和F1值等性能指标达到行业领先水准。在传播应用场景中，验证模型的效果和价值，如通过模型分析和优化传播策略和内容，提升传播效果和影响力。申请国家发明专利3项以上，申请计算机著作权3项以上，申请国家、行业、地方或团体标准至少1项。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>3、数据资源与研究基础建立和完善相关的大规模数据资源库，为未来的研究和应用提供数据基础和支持。建立与相关研究机构和企业的合作关系，共同推动传播领域的研究和技术创新。每年召开1-2次相关的学术会议，为政府、学界和企业界人士搭建产学研合作交流的平台。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>4、技术转化与社会效益通过与政府、企业的合作，将研究成果转化为具有实际应用价值的技术产品和服务。通过项目的实施和成果，提升主流媒体的舆论宣传引导能力。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>5、团队建设与能力提升建立一支懂媒体、掌握核心技术的研发创新团队，提升团队在传播技术研发和应用方面的能力和经验。项目执行期内，每年引进专业人才，逐步建设成为一支结构合理的创新研发团队。通过项目实施，提升团队的项目管理、技术研发和应用推广等多方面能力，为未来的研究和项目提供人才支持和经验积累。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>在全球信息化的大背景下，传播技术和媒体领域正在迅速进化并重塑人们的交流方式。人工智能、元宇宙等前沿技术的崛起，不仅仅是技术的革新，更意味着传统信息传播模式的颠覆和重构。这些技术将重新定义人类如何获取、分享和处理信息，它们对未来的社会、经济、文化和人类关系的影响将是深远的。尤其在文化、旅游、教育、社交和娱乐等领域，新型传播技术的应用有望打破旧有的行业界限。在这样的大趋势下，急需在前沿传播领域进行深入研究和实践，以应对未来的挑战和把握新的机遇，党媒大模型就是这样一个风口，将能创造出前所未有的用户体验与商业价值。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>响应全球传播变革数字化、网络化和智能化正在深刻地重塑全球的传播生态，我们正处于一个信息爆炸和高度连接的时代，而如何有效地生产、加工和传递信息，正成为当下传播领域的关键课题。“壹点天玑”党媒大语言模型以主流价值观为引领，通过海量的新闻行业大数据训练，可高效便捷地帮助用户进行内容生产与传播，为传统的传播内容和形式注入新的活力，确保主流媒体的声音能够更远、更准、更有影响力地传播出去。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>满足生成式人工智能AIGC技术革新发展的需要生成式人工智能AIGC已成为当下信息化发展的四大支柱。首先，人工智能为信息处理、筛选与传递带来了前所未有的便捷性和准确性。“壹点天玑”党媒大模型通过深度学习、机器学习等技术手段，可以更快更准地为目标受众提供所需的信息，提高传播的效果和效率，确保主流媒体在这场技术变革中始终走在前列。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>催生创新产业链随着党媒大模型技术和应用的开发，将产生一系列新的产业和商业模式，将帮助培育孵化媒体新兴产业，为媒体发展增长提供新的动力。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
