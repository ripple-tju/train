import { boot } from 'quasar/wrappers';

import Chart from 'components/Typography/Chart.vue';
import Embed from 'components/Typography/Embed.vue';
import Figure from 'components/Typography/Figure.vue';
import Heading from 'components/Typography/Heading.vue';
import Paragraph from 'components/Typography/Paragraph.vue';
import Reference from 'components/Typography/Reference.vue';
import Section from 'components/Typography/Section.vue';
import Table from 'components/Typography/Table.vue';
import Title from 'components/Typography/Title.vue';

export default boot(function TypographyLoader({ app }) {
	app.component('TypoChart', Chart);
	app.component('TypoEmbed', Embed);
	app.component('TypoFigure', Figure);
	app.component('TypoHeading', Heading);
	app.component('TypoParagraph', Paragraph);
	app.component('TypoReference', Reference);
	app.component('TypoSection', Section);
	app.component('TypoTable', Table);
	app.component('TypoTitle', Title);
});
