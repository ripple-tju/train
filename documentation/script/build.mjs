import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import * as crypto from 'node:crypto';

import './check.mjs';

const RETURN_TRUE_THROW_FALSE = [() => true, () => false];

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const outputDir = path.join(dirname, '../output.gen');

const Pathname = {
	output: outputDir,
	doc: path.join(dirname, '../docs'),
	contents: path.join(outputDir, 'contents'),
	indexes: path.join(outputDir, 'indexes'),
	static: path.join(outputDir, 'static'),
};

const Node = {
	async 'heading'({ text, level = 1 }, ctx) {
		ctx.doc.push(`${ctx.indent()}<typo-heading :level="${level}">${text}</typo-heading>\n`);
		ctx.length += text.length;
	},
	async 'chart'() {

	},
	async 'embed'({ src }, ctx) {
		ctx.doc.push(`${ctx.indent()}<typo-embed src="${src}" />\n`);
		ctx.embed++;
	},
	async 'figure'({ src, title = null, href = null }, ctx) {
		const { ext } = path.parse(src);
		const inputPath = path.join(ctx.sectionsPath, src);
		const sha256 = crypto.createHash('sha256');
		const file = await fs.readFile(inputPath);

		sha256.update(file);

		const hash = sha256.digest('hex');
		const outputPath = path.join(Pathname.static, `${hash}${ext}`);

		await fs.copyFile(inputPath, outputPath);

		const attrs = [`src="static/${hash}${ext}"`];

		if (title !== null) {
			attrs.push(`title="${title}"`);
		}

		if (href !== null) {
			attrs.push(`href="${href}"`);
		}

		ctx.doc.push(`${ctx.indent()}<typo-figure${attrs.map(span => {
			return ` ${span}`;
		}).join('')} />\n`);

		ctx.figure++;
	},
	async 'link'({ text, href }, ctx) {
		ctx.doc.push(`<typo-link href="${href}">${text}</typo-link>`);
		ctx.length += text.length;
		ctx.link++;
	},
	async 'paragraph'(options, ctx) {
		ctx.doc.push(`${ctx.indent()}<typo-paragraph :indent="2">`);

		let text = '';

		for (const span of options) {
			if (typeof span === 'string') {
				ctx.doc.push(`<span>${span}</span>`);
				ctx.length += span.length;
				text += span;
			} else {
				const [type, options] = span;

				await Node[type](options, ctx);
			}
		}

		if (ctx.abstract.length < 100) {
			ctx.abstract += text;
		}

		ctx.doc.push('</typo-paragraph>\n');
	},
	async 'reference'({ text }, ctx) {
		ctx.doc.push(`<typo-reference :order="${++ctx.reference}">${text}</typo-reference>`);
		ctx.length += text.length;
	},
	async 'table'({ src, title = null }, ctx) {
		const { ext } = path.parse(src);
		const inputPath = path.join(ctx.sectionsPath, src);
		const sha256 = crypto.createHash('sha256');
		const file = await fs.readFile(inputPath);

		globalThis.console.log(inputPath);
		sha256.update(file);

		const hash = sha256.digest('hex');
		const outputPath = path.join(Pathname.static, `${hash}${ext}`);

		await fs.copyFile(inputPath, outputPath);

		const attrs = [`src="static/${hash}${ext}"`];

		if (title !== null) {
			attrs.push(`title="${title}"`);
		}

		ctx.doc.push(`${ctx.indent()}<typo-table${attrs.map(span => {
			return ` ${span}`;
		}).join('')} />\n`);

		ctx.table++;
	},
};

const Generator = {
	async Output() {
		if (await fs.access(Pathname.output).then(...RETURN_TRUE_THROW_FALSE)) {
			await fs.rm(Pathname.output, { recursive: true, force: true });
		}

		await fs.mkdir(Pathname.output);
		await fs.mkdir(Pathname.contents);
		await fs.mkdir(Pathname.static);
		await fs.mkdir(Pathname.indexes);
	},
	async Index() {
	},
	async Content() {
		const OutputData = [];

		const docsPath = Pathname.doc;

		for (const dirent of await fs.readdir(Pathname.doc, {
			withFileTypes: true,
		})) {
			const id = dirent.name;
			const docPath = path.join(docsPath, id);
			const metadataPath = path.join(docPath, 'metadata.json');
			const sectionsPath = path.join(docPath, 'sections');

			const ctx = {
				id, length: 0, depth: 0, doc: [], abstract: '',
				figure: 0, embed: 0, reference: 0, link: 0, table: 0,
				indent: () => new Array(ctx.depth).fill('\t').join(''),
				sectionsPath,
			};

			const {
				title,
				author = [],
				source = null,
				tags = [],
				sections,
			} = JSON.parse(await fs.readFile(metadataPath, 'utf-8'));

			OutputData.push(ctx);

			ctx.title = title;
			ctx.author = author;
			ctx.source = source;
			ctx.tags = tags;

			ctx.doc.push('<template>\n');
			ctx.depth++;

			ctx.doc.push(`${ctx.indent()}<div>\n`);
			ctx.depth++;

			const titleAttrs = [];

			titleAttrs.push(`:author="[${author.map(item => `'${item}'`).join(', ')}]"`);
			if (source !== null) {
				titleAttrs.push(`source="${source}"`);
			}

			ctx.doc.push(`${ctx.indent()}<typo-title${titleAttrs.map(span => {
				return ` ${span}`;
			}).join('')}>${title}</typo-title>\n`);

			for (const name of sections) {
				ctx.doc.push(`${ctx.indent()}<typo-section>\n`);
				ctx.depth++;

				const sectionPath = path.join(sectionsPath, `${name}.json`);
				const section = JSON.parse(await fs.readFile(sectionPath, 'utf-8'));

				for (const [type, options] of section.content) {
					await Node[type](options, ctx);
				}

				ctx.depth--;
				ctx.doc.push(`${ctx.indent()}</typo-section>\n`);
			}

			ctx.depth--;
			ctx.doc.push(`${ctx.indent()}</div>\n`);

			ctx.depth--;
			ctx.doc.push('</template>\n');
			ctx.doc.push('\n<script setup lang="ts">\ndefineOptions({ name: \'ContentInstance\' });\n</script>');
		}

		for (const { id, doc } of OutputData) {
			const docPath = path.join(Pathname.contents, `${id}.vue`);

			await fs.writeFile(docPath, doc.join(''));
			globalThis.console.log(`Built: Content::${id}`);
		}


		const index = OutputData.map(item => {
			return {
				id: item.id,
				abstract: item.abstract.substring(0, 100),
				length: item.length,
				title: item.title,
				author: item.author,
				source: item.source,
				figure: item.figure,
				embed: item.embed,
				reference: item.reference,
				link: item.link,
				table: item.table,
			};
		});

		await fs.writeFile(path.join(Pathname.indexes, 'primary.json'), JSON.stringify(index, null, '\t'));

		globalThis.console.log('Built: Index::Primary');
	},
};

await Generator.Output();
await Generator.Content();
