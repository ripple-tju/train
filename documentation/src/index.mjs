import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';

import * as Ow from '@produck/ow';
import { Ajv } from 'ajv';
import addFormats from 'ajv-formats';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const ajv = new Ajv({
	strict: true,
});

addFormats(ajv);

const Name = {
	Metadata: 'metadata.json',
	Section: 'sections',
};

const Location = {
	Metadata: path.join(__dirname, 'schemas/metadata.json'),
	Section: path.join(__dirname, 'schemas/section.json'),
	Docs: path.join(__dirname, '../docs'),
};

const Schema = {
	Metadata: await fs.readFile(Location.Metadata, 'utf-8').then(JSON.parse),
	Section: await fs.readFile(Location.Section, 'utf-8').then(JSON.parse),
};

const Validator = {
	Metadata: ajv.compile(Schema.Metadata),
	Section: ajv.compile(Schema.Section),
};

const UUID_REG = /[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}/i;

/** @param {import('fs').Dirent} dirent */
function isMetadataFile(dirent) {
	return dirent.name === Name.Metadata && dirent.isFile();
}

/** @param {import('fs').Dirent} dirent */
function isSectionDirectory(dirent) {
	return dirent.name === Name.Section && dirent.isDirectory();
}

await (async function validateDocs() {
	const docPathList = await fs.readdir(Location.Docs, { withFileTypes: true });

	for (const docDirent of docPathList) {
		const { name } = docDirent;

		if (!docDirent.isDirectory()) {
			Ow.Error.Common(`Non-directory detected in "docs/": ${name}`);
		}

		if (!UUID_REG.test(name)) {
			Ow.Error.Common(`Bad directory name in "docs/": ${name}`);
		}

		const docPath = path.join(Location.Docs, name);
		const docRootPathList = await fs.readdir(docPath, { withFileTypes: true });

		if (docRootPathList.length !== 2) {
			Ow.Error.Common('There should be "metadata.json", "section/" in doc directory.');
		}

		const metadataPath = path.join(docPath, Name.Metadata);
		const sectionsPath = path.join(docPath, Name.Section);

		if (!docRootPathList.some(isMetadataFile)) {
			Ow.Error.Common(`Missing file "${metadataPath}"`);
		}

		if (!docRootPathList.some(isSectionDirectory)) {
			Ow.Error.Common(`Missing directory "${path.join(docPath, Name.Section)}"`);
		}

		const metadata = await fs.readFile(metadataPath, 'utf-8').then(JSON.parse);

		Validator.Metadata(metadata);

		const { sections } = metadata;
		const sectionsPathList = await fs.readdir(sectionsPath, { withFileTypes: true });

		if (sectionsPathList.length !== sections.length) {
			Ow.Error.Common(`Bad files count ${sections.length} expected.`);
		}

		for (const name of sections) {
			const sectionPath = path.join(sectionsPath, `${name}.json`);

			if (!sectionsPathList.some(dirent => dirent.name === `${name}.json`)) {
				Ow.Error.Common(`Missing section file at ${sectionPath}.`);
			}

			const section = await fs.readFile(sectionPath, 'utf-8').then(JSON.parse);

			Validator.Section(section);
		}
	}

	globalThis.console.log('OK!');
}());
