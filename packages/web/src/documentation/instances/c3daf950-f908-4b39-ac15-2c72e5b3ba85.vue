<template>
	<div>
		<typo-title
			:author="['壹刻校园']"
			source="壹刻校园"
			>“建筑花开”AI视频制作说明</typo-title
		>
		<typo-section>
			<typo-embed
				src="https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114097333017490&bvid=BV1KY9qYsENL&cid=28667285389&p=1"
			/>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">创意来源</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>以天津大学地标建筑为创意来源，结合初春开学季，利用AI技术制作春日天大。对天津大学经典建筑进行艺术再现，展现新学期天大校园的青春与活力。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">创意素材</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>以天津大学地标建筑和天津大学校徽为素材，兼顾天津大学卫津路校区和北洋园校区，包括卫津路校区东门、汉白玉校徽石、北洋园校区北洋纪念亭、宣怀广场、校训石、国家大型地震工程模拟研究设施、卫津路校区北洋纪念亭、大学生活动中心、杏荪楼、求是亭、建筑学院、第九教学楼、冯骥才文学艺术研究院等十余座天津大学特色建筑。视频结局以天津大学校徽收尾。</span
				></typo-paragraph
			>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">提示词撰写</typo-heading>
			<typo-heading :level="2">制作过程</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>首先准备好建筑和校徽的原始照片，使用堆友生成建筑花开的图片，并使用PS进行色调调整和文字修正；其次，三张照片为一组镜头导入runway中进行AI视频生成，直至生成所有镜头；最后使用剪映软件进行视频合成和后期配乐。</span
				></typo-paragraph
			>
			<typo-heading :level="2">堆友</typo-heading>
			<typo-paragraph :indent="2"><span>网站：https://d.design/?from=bddy</span></typo-paragraph>
			<typo-paragraph :indent="2"
				><span
					>提示词：万物新生，建筑外面裹着牡丹花，建筑上开满牡丹花，飞舞的蝴蝶，蓝天白云，春天，万物复苏，天空通透干净</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"
				><span
					>使用模型：3D立体|SHMILY龙章凤彩、奇妙电商场景(0.5)、WB春意盎然/春天/青苔(0.5)、WB春暖花开/鲜花造型(0.5)</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"><span>参考图玩法：参考边缘</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>分辨率：1152*760</span></typo-paragraph>
			<typo-heading :level="2">runway</typo-heading>
			<typo-paragraph :indent="2"><span>网站：https://runwayml.com/</span></typo-paragraph>
			<typo-paragraph :indent="2"
				><span
					>提示词：3D dribbling, one shot, cinematic dribbling, FPV view, push lens First person
					view shot of a [subject]. Hyper speed fly, dynamic motion, dynamic blur,
					timelapse,30xspeed, in the style of [describe style; ex. cinematic, muted color
					palette]</span
				></typo-paragraph
			>
			<typo-paragraph :indent="2"><span>时长选择：10s</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">传播效果</typo-heading>
			<typo-paragraph :indent="2"
				><span
					>通过AI视频的艺术形式传递天津大学校园文化与活力，吸引更多学生和校外人士关注。发布后一天内推文阅读量2.4W+，视频号点赞量600+。</span
				></typo-paragraph
			>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>
