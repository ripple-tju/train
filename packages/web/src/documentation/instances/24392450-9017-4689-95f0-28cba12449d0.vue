<template>
	<div>
		<typo-title :author="[]">深圳新闻网：基于大数据技术的互联网多媒体应用统一分析系统</typo-title>
		<typo-section>
			<typo-heading :level="1">案例概述</typo-heading>
			<typo-paragraph :indent="2"><span>本项目通过建设基于大数据技术的互联网多媒体应用统一分析系统，打通数据的采、存、管、用全流程服务，实现数据统一存储管理、统一智能分析、统一挖掘利用，为多媒体传播的智能化分析应用提供全方位支撑。利用大数据信息处理技术实现对多媒体内容生产作出提前的分析，为多媒体宣传工作者的内容产出提供了前瞻性的参考，辅助多媒体工作者能够有效地、准确地抓住公众关注侧重点，从信息题材的选取，到信息内容的生产，再到传播分析，促进多媒体在“四力”建设发展上的作用。本项目为深圳市科技创新委员会批准立项的深圳市科技创新重大研究课题项目。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例做法</typo-heading>
			<typo-paragraph :indent="2"><span>本项目采用数据仓库之存储计算分离及物化视图技术、数据湖的接入与查询的技术、半结构化数据管理系统中的多样数据索引及自然语言处理技术等，针对数据仓库资源隔离、大规模数据湖分析平台、高性能GPU与CPU混合计算引擎、柔性的半结构化数据管理系统等技术，解决了四大问题：</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>解决数据孤岛问题：大数据开发治理平台可以打破数据孤岛，实现数据的统一管理和共享。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>提高数据质量：大数据开发治理平台可以规范数据的采集、存储、处理和分析流程，保证数据的准确性、完整性和一致性，提高数据质量，为决策提供更加可靠的数据支持。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>加快数据处理速度：大数据开发治理平台可以优化数据处理流程，使得数据的处理速度更加快捷，在保证数据质量的同时，提高企业的工作效率。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>降低数据管理成本：大数据开发治理平台可以自动化管理数据处理流程，减少人工干预的成本，同时可以对企业资源进行优化配置，降低企业的管理成本。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">核心技术</typo-heading>
			<typo-paragraph :indent="2"><span>本项目采用数据仓库之存储计算分离及物化视图技术、数据湖的接入与查询的技术、半结构化数据管理系统中的多样数据索引及自然语言处理技术等，针对数据仓库资源隔离、大规模数据湖分析平台、高性能GPU与CPU混合计算引擎、柔性的半结构化数据管理系统进行技术创新，其创新点主要有：</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>1、本项目中的数据湖分析平台高度集成数据传输、数据计算与工作流调度器，同时提供逻辑数据湖可以方便地进行外部数据的接入与各种外部数据仓库的联合查询；它提供流批一体的引擎，可以基于此进行数据的批量与流式数据分析；支持流式数据接入数据湖的能力与ACID支持，同时满足批量与流式计算效率的大幅提升。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>2、本项目是首次尝试在全数据科学流程，包括数据分析、SQL查询、机器学习、深度学习和可视化方面，探索全新的CPU与GPU的混合计算。业内当前主要的创新集中在数据科学与机器学习的分布式计算引擎上面，在深度学习计算引擎方面，GPU加速应用较广，本项目通过在单机上利用CPU与GPU的混合计算引擎，在大量数据量上的计算效率方面可以做到单计算节点等同于10-20台分布式计算性能。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>3、本项目使用基于存储计算分离的技术，将系统的计算节点和存储节点分离，用户可以根据系统对不同资源的需求，分别扩充不同种类的资源。同时还引入一种自适应技术，通过系统自动感知各个资源的负载，可以根据用户的配置，通过API自动申请资源和释放资源。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例成效</typo-heading>
			<typo-paragraph :indent="2"><span>本项目获得2023年“王选新闻科学技术奖”项目奖二等奖。2023年5月，深圳新闻网组织专家委员会召开“基于大数据技术的互联网多媒体应用统一分析系统”项目技术鉴定会，经鉴定：</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>项目通过对基于大数据的分布式数据收集平台、基于流处理大数据实时计算任务平台、大数据批示任务计算平台和具有稳定性和可靠性的超大容量的分布式关系型大数据存储平台等关键技术的研发，构建了深圳新闻网数据分析及治理平台和多媒体应用统一分析平台，打通数据的采、存、管、用全流程服务，实现数据统一存储管理、统一智能分析、统一挖掘利用，为多媒体传播的智能化分析应用提供全方位支撑。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>该项目开发的系统具备热点发现、内容发布、资讯共享、新媒体监管、传播量化分析等能力，可为政府和企业客户提供快速、精准和个性化的多媒体应用统一分析能力。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>该项目获得计算机软件著作权14项，申请相关发明专利9项，获得发明专利授权3项，发表论文4篇，软件测试报告一份，国内领先技术查新报告一份。</span></typo-paragraph>
			<typo-paragraph :indent="2"><span>该项目取得良好的社会效益和显著的经济效益。综上所述，该项目技术领先，具有创新性和实用性，达到国内领先水平。</span></typo-paragraph>
		</typo-section>
		<typo-section>
			<typo-heading :level="1">案例启示</typo-heading>
			<typo-paragraph :indent="2"><span>本项目研究成果对促进深圳新闻网数字媒体发展有重要作用，已经应用在中国国际人才交流大会官网、中国文化产业网、深圳新闻网、Eyeshenzhen（深圳外宣官网）、罗湖Plus、光明融媒、龙岗融媒、龙华融媒、深爱大鹏等，有成功落地经验。本项目具有创新性和示范性，对媒体融合技术进行更深层次地创新和互通，借助深度学习与专家系统使数字媒体数据管理更科学化，推动数字媒体智能化发展。</span></typo-paragraph>
		</typo-section>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentInstance' });
</script>