<template>
	<div>
		<typo-title :author="[]">半岛网新闻视频化平台实践</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>半岛网新闻视频化平台是在视频传播越来越普及的今天，辅助新闻媒体快速传播内容的一个功能平台，其主要目标是将传统的图文新闻自动转换成视频新闻。这个平台的核心功能是整合图文、音频、视频等各种媒体内容，并按照预设的模板或者其它既定形式生成视频。视频可以发布到半岛网及相关平台账号，项目使用了Python、ffmpeg、moviepy、以及人工智能匹配、人工智能摘要、人工智能分类等技术。通过平台，每天可以自动生产视频新闻超过1000条，大大增强了媒体的传播力。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"><span>平台的核心工作主要分为以下几步：</span></typo-paragraph>
			<typo-paragraph :indent="2"
				><span
					>1.
					数据采集通过分布式爬虫技术以及自由接口对新闻媒体数据进行抓取和融合，通过机器学习算法对内容进行进行初步筛查、过滤不合适的内容，保留有效数据进入大数据处理库。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>2.
					数据识别通过NLP自然语言处理系统对文本数据进行进行智能分类、情感分析，通过图像识别技术对图像进行文本化转换，识别图像内容和图片类型，过滤非法图片。通过智能视觉技术，对视频类数据进行逐帧识别，识别视频性质，清理非法内容。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>3.
					语音合成通过分析内容的分类、情感等要素，找到出最适合的配音方案，通过语音合成技术，将内容转换成最适合的语音，计算语音长度，用于后续适配整个视频内容的长度。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>4.
					素材匹配除调取新闻内容本身的图片、视频等素材外，对素材库（包括图片、视频、背景音乐、音效等）进行内容搜索，匹配与内容符合的相关素材，参考PageRank算法配对图片和文字内容，根据语音合成的长度，对素材进行时间点控制和时长控制。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>5.
					视频合成综合内容文本、内容图片、内容视频、匹配素材、配音、视频模版等要素，最终通过视频合成技术按照各要素的关键帧设置进行生产，最终视频根据要分发的渠道和需求不同，自动生成多种风格，对于要求较高视频在生成前可以进行人工调整参数，以达到最优效果。</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>6.
					视频发布：自动生成的视频，通过人工审核后，发布到半岛网，同时发布到抖音、视频号等自媒体平台。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>系统采用自研+云服务的方式，其中数据采集使用Python+Scrapy构建，内容自动分类、情感分析、智能摘要、素材匹配等功能采用NLP模型自主开发，语音合成采用阿里云的语音合成接口，视频合成使用Python+FFMpeg的开源方案。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>系统上线后，大大增加了一般新闻内容转视频的速度，根据新闻量，每天生成300条左右视频，理论上每天可以生成1000条以上，系统帮助半岛网抢占了很多新闻时机，保障了在第一时间生产出视频发布到网站和各大平台。系统上线前半岛网在抖音平台每天只能上传10个视频左右，上线后，每天抖音可以达到100条左右视频，上线前抖音的粉丝量始终增长缓慢，每月大概增长几千粉丝，上线后平均每月增加10万粉丝以上。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>将一些不需要太多人工创意的工作交给了计算机完成，利用现有的大数据和人工智能技术，打造出了一个模拟人工的工作的平台，在各个环节上利用计算机的效率优势节省了大量人工，提升了80%以上的工作效率。下一步将通过AI丰富视频产出形式，包括按类别定制虚拟主播、加入更多的风格模版等，进一步提升视频的质量和生产效率。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
