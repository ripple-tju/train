<template>
	<div>
		<typo-title :author="[]">人民日报：AI编辑部</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>AI编辑部主要分为三大类功能：智能工具箱（多媒体内容生产）、素材库（云端储存）和智能编辑器（文稿智能编辑）。AI编辑部从2020年初开始筹备，与在视频云、人工智能等领域领先的技术公司阿里云共同研发，并于2020年全国两会前夕成功发布，AI编辑部1.0（初代）即融合了人工智能“看”“听”“悟”“审”“查”等各方面能力，多角度、全方位为两会期间全媒体新闻采编生产赋能。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>AI编辑部服务报社两会报道已经3年，3年期间完成了两次大的升级，2021年前夕重点升级了“看”“悟”“审”能力，“看”增加了精编制作、智能海报、一键特写等素材处理能力；“悟”增加了多模检索的搜索和识别能力；“审”重点提升了内容智能审核能力，报社需要确保发布内容的安全和事实准确。智能审核功能依托大数据平台和成熟的人工智能算法，精准识别视频、图片中的各类要素和场景，并为后续人工核检提供参考意见，可大幅降低人工审核成本和时间，有效规避审核疏漏。2022年两会技术部和新媒体中心联合推出AI编辑部3.0，推出AI编辑部移动版、事实核查、5G全媒体生产、视频加密暗水印、热点汇聚、智能会议纪要、一键生成视频、播报数字人等八大新功能，为编辑记者提供移动化视频采集、编辑和发布能力，打造“云端一体”的智能媒体生产传输链路，搭建准确全面的智能事实核查平台，提供丰富全面的新闻线索事件，全面优化新媒体作品生产设计流程，深度赋能报社全媒体两会报道。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-heading :level="2">云上精编</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>结合云桌面的特点，AI编辑部充分利用云端资源进行计算和存储，兼容Windows和Mac系统，集成了诸如Premiere、大洋非编、新奥特非编等主流非编工具，传输采用Citrix
					ICA数据交换协议，确保云桌面传输的高效性和流畅性。在两会新闻现场，前方编辑记者仅需一键点击连接云桌面，在AI编辑部中将云直播的视频流拉流并存储在云桌面上，可与后方团队协同办公，同时接入云桌面进行精编操作，最终直接发布到报社两微两端、人民网、人民数字屏等终端，免去素材传送再沟通精修繁琐流程。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>前方编辑记者在云桌面制作超高清视频素材时，不仅需要更高的算力、更快地存储，还需要更快的访问速度和更精细化的显示效果，人民日报社技术部联合中国移动，以5G+边缘计算的技术实现云桌面访问加速。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>为保障数据安全，AI编辑部云端采用了私有化部署的方式，将前线采访素材、关键数据等储存到报社自己的数据中心中。</span
				></typo-paragraph
			>
			<typo-heading :level="2">智能审核</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>AI编辑部2.0版开发了智能审核功能。针对报社全媒体采编部门在新闻生产中遇到的新情况和新需求，AI编辑部结合官方海量舆情、预警大数据平台、智能视觉算法，对视频、语音、文本、图像等内容多维理解，进行结构化标签提取，实现对全媒体素材中的涉政人物、违规场景等内容的智能审核，为报社全媒体的内容审核提供有力技术支撑和参考，有效规避因人工审核疏漏造成不良政治影响的风险。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>智能审核还包括“一键核查”功能，系统可将文章中出现领导人姓名、重要讲话、重要文件等进行快速标注，提高审查效率。</span
				></typo-paragraph
			>
			<typo-heading :level="2">智能海报</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>智能海报功能基于深度学习，从特定主题的现有海报设计稿中提炼萃取该类主题海报的设计经验，即从高维的、海量的海报数据中提取背景纹理、布局配色、字体大小、设计元素及其相对位置等隐含特征并对其进行量化，通过大量学习总结出通用设计知识模型，并在此模型约束下基于多智能体强化学习与生成对抗网络（GAN）等技术对元素、布局、背景颜色等海报各构成要素进行多维度拓展变换与重组排列，再经评估后择优选用，从而举一反三智能构建出数量庞大、风格各异又和谐美观、符合设计规范的特定主题模板库。编辑可根据生产需求，快速检索相应主题的模板，只需替换其中的核心宣传图片及文案即可快速生成和发布海报。</span
				></typo-paragraph
			>
			<typo-heading :level="2">多模搜索</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>为方便编辑记者更精准、快速地找到全媒体素材，多模搜索功能借助人脸识别、物体识别、语音识别、自然语言处理、OCR识别及视频DNA的底层算法能力、用AI技术对新闻素材加强语义理解和归纳总结，为编辑记者提供智能文本搜索、图片搜索、视频搜索、多语言搜索、语义搜索等业务场景，快速提升编辑记者的新闻生产效率。</span
				></typo-paragraph
			>
			<typo-heading :level="2">一键特写</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>一键特写功能可将大型会议中16：9的多人视频素材，按照单个人物进行快速裁剪，智能生成单人的竖屏视频，同时保持关键信息的完整性，实现对视频核心内容的聚焦，便于编辑在短视频平台发布作品，也可满足受众对单个人物的观看需求和移动端观看习惯。</span
				></typo-paragraph
			>
			<typo-heading :level="2">智能数据导图生成</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>在这个功能模块中，只需上传Excel数据表，便自动可生成可视化的动态数据导图，成为新闻的发布素材。目前该功能包含十几种动态可视化数据制作模板，有专业的平台人员负责更新模板。编辑记者不需要美工基础和技术背景，就能快速地制作出专业精美的动态数据导图，提升新闻报道的说服力和表现力。</span
				></typo-paragraph
			>
			<typo-heading :level="2">传播力智能分析</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>该功能对全媒体新闻数据进行监控和采集，以可视化的方式呈现新闻传播力指数和分析报告，为新闻单位开展传播状态监测、效果评估、舆情监测提供了有力支撑。</span
				></typo-paragraph
			>
			<typo-heading :level="2">智能剪辑</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>把视频中的语言提取成文字，可通过定位文字来定位对应的视频、通过删减文字来删减对应的视频。方便传统的文字编辑剪辑视频。</span
				></typo-paragraph
			>
			<typo-heading :level="2">数字水印</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>该功能把数字信号嵌入数字载体(包括多媒体、文档、软件等)中，数字水印可以是图像、文字、符号、数字等所有可以作为标识的信息。数字水印可以作为维权证据、信息统计工具等。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>一是在保障技术安全的前提下，与商业技术公司强强联合。互联网“大厂”有强大的云计算能力，有雄厚的技术基础设施提供算力，但是在应用场景方面还有待探索。人民日报作为媒体行业的领军者，有丰富、前沿的应用场景让新技术“落地”，让智能技术辅助内容生产。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>二是紧密结合纸媒特点，AI技术能帮助人工做好一部分报纸精细化检查的工作。人民日报是一张“政治纸”，是不能有差错的。人民日报的排版分单、双号，还要考虑照片背面是否有字会造成歧义等。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>三是依托庞大的数据库和知识库。比如，AI智能编辑部接入了中纪委建设的全国副部级及以上领导的人脸数据库。此外，还有支持自定义的10万多个标签库。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>AI编辑部的功能并不是一成不变的，而是结合用户需要，不断地优化。每年两会前，技术部会与各业务部门深入探讨AI编辑部可完善和提升的地方，并不断促进功能迭代、算法优化。AI编辑部未来将被构建为底层平台，建设专属数据中心，为报社的纸媒、新媒体、社属企业和子报刊提供智能服务。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>AI编辑部的智能写作只能起到辅助作用，不能完全脱离人工。从某种程度上讲，把语料元素加入到语言模型中，形成的人工智能生成文章，没有基于新闻事实、没有基于调查研究、没有真知灼见，违背了新闻创作的初心。在新闻创作时，智能写作的应用场景上是有限制的，不能完全依靠这些智能工具。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>对于传统的编辑、记者来说，有自己的传统创作逻辑，可能短时间内无法接受、适应智能编辑应用。AI编辑部还要继续进行推广，调动大家的主动性和积极性，让更多人接受，成为他们创作的好帮手。此外，AI编辑部还要与业务流程、业务平台紧密融合，让使用者更方便地操作，以需求为导向，根据一线记者、编辑的使用反馈，结合“区块链”“虚拟现实”等前沿技术，不断增加、丰富新功能，为使用者提供更好地服务和支持。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
