<template>
	<div>
		<typo-title :author="['张佳兴']" source="新媒体与传播学院">AI赋能：央视听媒体大模型推动媒体产业智能化转型——央视听媒体大模型案例分析</typo-title>
		<typo-section>
			<typo-heading :level="1">案例背景</typo-heading>
			<typo-paragraph :indent="2"><span>在数字化和智能化的浪潮下，媒体内容的创作和传播方式正在经历深刻的变革，面临新的挑战和机遇。随着人工智能技术的快速发展，特别是自然语言处理（NLP）和计算机视觉（CV）的进步，媒体行业开始探索如何利用这些技术提升内容创作的效率和质量。央视听媒体大模型（CMG Media GPT）正是在这样的背景下应运而生，为了提高内容生产的效率和质量，同时满足用户对个性化和互动性的需求，上海人工智能实验室与中央广播电视总台联合发布了“央视听媒体大模型”（CMG Media GPT）。这一模型专注于视听媒体内容生产，旨在通过AI技术推动媒体编创范式的变革，提高内容生产的效率和质量。</span></typo-paragraph>
			<typo-figure src="static/21dee043a3512ca59cbb541f61405e2ed4423aac32b15ebcf0109aeebf819e6f.png" />
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例目标</typo-heading>
			<typo-paragraph :indent="2"><span>1. 提升内容创作的效率：通过AI辅助，减少人工编辑和创作的时间，将记者解放出来，快速生成高质量的媒体内容。目标是实现内容生产的自动化和智能化，从而提高工作效率，降低成本，并确保内容的及时性和准确性。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2. 丰富内容形式：利用AI技术生成多样化的内容，如数字人主播、互动式视频等，提升用户体验。目标是创造新颖的内容形式，吸引更广泛的观众群体，同时提供更加沉浸式和互动性的观看体验。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3. 增强内容的互动性和个性化：通过AI理解用户需求，生成符合用户口味的内容，提高用户参与度。目标是建立一个更加个性化的内容生态系统，使得内容生产更加贴近用户的实际需求和偏好，从而增强用户忠诚度和品牌影响力。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>4. 推动媒体行业创新：通过引入先进的AI技术，推动媒体行业的创新和发展。目标是引领媒体行业向更加高效和创新的方向发展，为行业树立新的技术标杆。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>5. 实现内容生产的可持续发展：通过AI技术的应用，实现内容生产的可持续发展，减少对人力资源的依赖，同时提高内容的质量和多样性。目标是构建一个能够自我更新和自我完善的内容生产体系，确保媒体内容的长期竞争力。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>6. 促进全球文化交流：利用AI技术跨越语言和文化的障碍，促进全球文化交流。目标是利用AI技术生成多语种内容，支持国际化传播，增强不同文化之间的理解和互动。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>7. 提升媒体内容的安全性和真实性：通过AI技术的应用，提高媒体内容的安全性和真实性，防止虚假信息的传播。目标是建立一个更加可靠和可信的内容生态系统，为用户提供高质量的信息服务。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>通过这些目标的实现，央视听媒体大模型不仅能够提升媒体内容生产的效率和质量，还能够丰富内容形式，增强用户互动性，推动媒体行业的创新和发展，同时促进全球文化交流，提升媒体内容的安全性和真实性。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例实施</typo-heading>
			<typo-heading :level="2">内容创作</typo-heading>
			<typo-paragraph :indent="2"><span>央视听媒体大模型能够理解视频内容并生成相应的文字描述，央视听大模型具备了强大的视频理解能力和视听媒体问答能力，AI相当于拥有了感知真实世界的“眼睛”和“耳朵”。同时，央视听大模型可根据提供的视频创作文字——从主持词到新闻稿件，甚至诗歌。媒体编辑可在大模型的协助下，一键为视频生成风格各异的解说词，当前生成内容已覆盖美食、文化和科技等多个领域。例如，对于历史纪录片《中国诗词大会》中“看图猜诗词”环节的视频，模型能够理解视频内容并生成对应的古诗《望庐山瀑布》。此外，模型还能根据用户输入的文本指令，为视频生成风格各异的解说词，覆盖美食、文化和科技等多个领域。</span></typo-paragraph>
			<typo-figure src="static/dca3ed61770020013a06f527e704176558b2b6ebe845ed99f558323b0a8778c9.png" />
			<typo-figure src="static/7730958d1f295b4c562ba4654d4060f2f9e4ab98efcab4ec541abb19da5a2ee8.png" />
			<typo-heading :level="2">数字人主播生成</typo-heading>
			<typo-paragraph :indent="2"><span>央视听媒体大模型可以快速生成数字人主播，使用较短的真人采集视频即可生成对应的数字人。数字人主播能够根据既定文案和背景场景快速生成播报视频，并且能够自动学习真人的语言及动作习惯，使得形象更逼真，表情更自然。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>通过央视听大模型的生成技术，不仅可实现主播“分身”，更能简化视频播报的创作过程。用户在视频创作素材库选择视频模板，输入文案，便可一键生成知识分享、品牌宣传、短视频带货、培训宣讲、热点资讯等各类数字人视频。大模型中还提供AI文案编写功能，用户输入粗略想法即可快速生成播报文案，并合成数字人视频。目前，“数字人直播”支持中英文等多语种播报，同时兼容国内多地区方言播报，随着语言版本的不断扩充，用户可以轻松创作更多跨语种的国际化内容。</span></typo-paragraph>
			<typo-figure src="static/651d4e29de949924999b6996736f5b912196425a5bec88d3555957b528947dca.png" />
			<typo-heading :level="2">场景渲染与编辑</typo-heading>
			<typo-paragraph :indent="2"><span>基于全球首个城市级NeRF实景三维大模型书生·天际，央视听媒体大模型提供了场景渲染的能力，可以进行高精度实景三维建模，并对城市场景进行编辑，如移除、新建、旋转城市建筑，对场景进行光照、季节等风格变换。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-heading :level="2">多模态理解与交互</typo-heading>
			<typo-paragraph :indent="2"><span>央视听媒体大模型的核心能力之一是其多模态理解与交互能力。这意味着模型能够同时处理和理解文本、图像和视频等多种类型的数据。这种能力使得模型能够像人类一样，通过视觉和听觉信息来理解世界，从而在内容创作中提供更丰富、更准确的输出。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>模型采用生成式人工智能技术，基于文本输入，模型能够生成视频、图像、解说词等多样化的内容，支持故事一致性和镜头连贯性，适用于动画、电视节目等制作。能够根据输入的指令或数据生成新的、有意义的内容。用户可以通过简单的光标和文字指令，快速修改或编辑图像和视频，实现内容的个性化创作。这种技术在视频解说词生成、数字人主播的对话和表情模拟等方面发挥了关键作用。 </span></typo-paragraph>
			<typo-heading :level="2">生成式人工智能</typo-heading>
			<typo-paragraph :indent="2"><span>基于文本输入，模型能够生成视频、图像、解说词等多样化的内容，支持故事一致性和镜头连贯性，适用于动画、电视节目等制作。用户可以通过简单的光标和文字指令，快速修改或编辑图像和视频，实现内容的个性化创作。</span></typo-paragraph>
			<typo-heading :level="2">深度学习与神经网络</typo-heading>
			<typo-paragraph :indent="2"><span>央视听媒体大模型基于深度学习框架，特别是神经网络技术，这些技术使得模型能够从大量的数据中学习和提取特征，从而实现对复杂视听内容的理解和生成。</span></typo-paragraph>
			<typo-heading :level="2">自然语言处理（NLP）</typo-heading>
			<typo-paragraph :indent="2"><span>模型在自然语言处理方面的能力是其另一核心技术，它使得模型能够理解和生成自然语言，包括对语言的语义理解、情感分析以及语言风格的模仿。模型将图像和视频视为一种“语言”，通过视觉与语言的对齐，降低了人工智能视觉任务的门槛，提高了图像和视频内容的理解能力。</span></typo-paragraph>
			<typo-heading :level="2">计算机视觉（CV）</typo-heading>
			<typo-paragraph :indent="2"><span>在计算机视觉领域，模型能够识别和理解图像和视频中的对象、场景和动作，这是实现视频内容分析和数字人主播表情生成的关键。利用真人采集视频，模型能够快速生成数字人主播，这些数字人能够根据既定文案和背景场景生成播报视频，并自动学习真人的语言和动作习惯。</span></typo-paragraph>
			<typo-heading :level="2">场景渲染与三维建模</typo-heading>
			<typo-paragraph :indent="2"><span>利用全球首个城市级NeRF实景三维大模型书生·天际（在CityNeRF基础上，上海AI实验室进一步研发出第二代CityNeRF技术，即GridNeRF。基于网格（Grid）表征和NeRF表征相结合的双支模型结构（GridNeRF），支持模型的多层级拓展，为城市级大范围建模奠定了技术基础。），央视听媒体大模型能够进行高精度实景三维建模，并对城市场景进行编辑，这在影视制作和虚拟场景构建中具有重要应用价值。</span></typo-paragraph>
			<typo-heading :level="2">对话系统</typo-heading>
			<typo-paragraph :indent="2"><span>模型的对话系统允许用户通过自然语言与AI进行交互，用户可以通过对话来指导内容的生成，如指定视频的解说风格或要求数字人主播模拟特定的播报内容。</span></typo-paragraph>
			<typo-heading :level="2">内容个性化与推荐</typo-heading>
			<typo-paragraph :indent="2"><span>通过对用户行为和偏好的分析，模型能够生成个性化的内容推荐，提升用户满意度和参与度。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>这些核心技术的结合使得央视听媒体大模型能够在视听媒体内容生产中实现自动化、智能化，从而推动媒体行业向更加高效和创新的方向发展。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例效果</typo-heading>
			<typo-paragraph :indent="2"><span>1. 提高效率：央视听媒体大模型的应用显著提高了内容创作的效率，减少了人工编辑的时间，使得媒体机构能够更快地响应市场和用户需求。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2. 丰富内容形式：通过AI生成的数字人主播和互动式视频，央视听媒体大模型丰富了媒体内容的形式，提供了更加生动和多样化的观看体验。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3. 增强互动性：央视听媒体大模型能够根据用户的反馈和喜好生成内容，提高了用户的参与度和满意度。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例总结</typo-heading>
			<typo-paragraph :indent="2"><span>央视听媒体大模型作为AI技术在媒体领域的应用案例，展示了AI在提升内容创作效率、丰富内容形式和增强用户互动性方面的潜力。通过与中央广播电视总台的合作，上海AI实验室成功地将AI技术应用于视听媒体内容生产，为媒体行业带来了新的变革。这个案例不仅体现了AI技术的进步，也反映了媒体行业对于技术创新的积极响应和探索。随着技术的不断进步，未来央视听媒体大模型有望在更多领域发挥作用，推动媒体行业的持续发展和创新。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"><span>1. 技术创新与行业融合：央视听媒体大模型的成功案例表明，将前沿的AI技术与媒体行业深度融合，能够推动行业的创新和发展。这种融合不仅提高了内容创作的效率和质量，还为观众带来了全新的互动体验。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2. 用户体验优先：AI技术的应用应始终以提升用户体验为核心目标。央视听媒体大模型通过生成逼真的数字人主播和个性化的内容，满足了用户对于高质量、多样化内容的需求，增强了用户的观看体验。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3. 数据驱动的内容创作：央视听媒体大模型的案例强调了大数据在内容创作中的重要性。通过分析和利用中央广播电视总台的海量视听数据，模型能够更准确地理解用户需求，生成更符合市场趋势的内容。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>4. 跨学科合作的重要性：上海AI实验室与中央广播电视总台的合作展示了跨学科合作在推动技术创新和应用中的重要作用。不同领域的专家共同工作，能够加速技术的研发和落地，实现技术的最大化利用。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>5. 持续的技术创新：随着技术的不断发展，媒体行业需要持续关注和引入新的技术，以保持竞争力。央视听媒体大模型的案例表明，通过不断的技术创新，媒体机构可以开拓新的市场机会，引领行业发展。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>6. 社会责任与伦理考量：在利用AI技术推动媒体创新的同时，也应考虑到社会责任和伦理问题，确保技术的应用不会侵犯用户隐私，不会传播虚假信息，以及不会加剧社会分化。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>7. 教育与培训：随着AI技术在媒体行业的广泛应用，对媒体工作者的培训和教育也需要更新，以适应新的工作方式和技能要求。媒体机构应投资于员工的再培训，确保他们能够有效地利用新技术。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>通过央视听媒体大模型的案例，我们可以看到AI技术在媒体行业的广泛应用前景，以及它为行业带来的积极变革。同时，这也提醒我们，在享受技术带来的便利的同时，也应关注技术发展可能带来的挑战，并采取相应的措施来应对。</span></typo-paragraph>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>