import { copyFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const rxjsRoot = path.join(root, 'node_modules', 'rxjs');

const copies = [
  ['dist/types/index.d.ts', 'index.d.ts'],
  ['dist/types/operators/index.d.ts', 'operators/index.d.ts'],
  ['dist/types/ajax/index.d.ts', 'ajax/index.d.ts'],
  ['dist/types/fetch/index.d.ts', 'fetch/index.d.ts'],
  ['dist/types/testing/index.d.ts', 'testing/index.d.ts'],
  ['dist/types/webSocket/index.d.ts', 'webSocket/index.d.ts']
];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(rxjsRoot))) {
    return;
  }

  for (const [source, target] of copies) {
    const sourcePath = path.join(rxjsRoot, source);
    const targetPath = path.join(rxjsRoot, target);

    if (!(await exists(sourcePath)) || (await exists(targetPath))) {
      continue;
    }

    await mkdir(path.dirname(targetPath), { recursive: true });
    await copyFile(sourcePath, targetPath);
  }
}

main().catch((error) => {
  console.error('Failed to patch RxJS type files:', error);
  process.exitCode = 1;
});
