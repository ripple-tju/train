import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import * as url from 'url';

const RETURN_TRUE_THROW_FALSE = [() => true, () => false];

async function empty(pathname) {
	if (await fs.access(pathname).then(...RETURN_TRUE_THROW_FALSE)) {
		await fs.rm(pathname, { recursive: true, force: true });
	}
}

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const outputDir = path.join(dirname, '../output.gen');
const webPath = path.join(dirname, '../../packages/web');
const webDocPath = path.join(webPath, 'src/documentation');

for (const indexName of ['primary', 'keyword']) {
	await empty(path.join(webDocPath, `${indexName}.json`));

	await fs.rename(
		path.join(outputDir, `indexes/${indexName}.json`),
		path.join(webDocPath, `${indexName}.json`),
	);

	globalThis.console.log(`Moved: ${indexName}.json`);
}


const contentsPath = path.join(outputDir, 'contents');
const instancesDir = path.join(webDocPath, 'instances');

for (const dirent of await fs.readdir(contentsPath, { withFileTypes: true })) {
	const { name } = dirent;
	const srcPath = path.join(contentsPath, name);
	const dstPath = path.join(instancesDir, name);

	await empty(dstPath);
	await fs.rename(srcPath, dstPath);
	globalThis.console.log(`Moved: ${name}`);
}

const staticPath = path.join(webPath, 'public/static');

await empty(staticPath);
await fs.rename(path.join(outputDir, 'static'), staticPath);
globalThis.console.log('Moved: static/');
