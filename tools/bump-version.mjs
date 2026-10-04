// Sube la versión de los CSS y JS (el ?v= de cada enlace) para que los navegadores
// descarguen los archivos nuevos en vez de usar los guardados en caché.
// Después regenera los metadatos (robots, sitemap, manifiesto) y las páginas de caso. Correr: node tools/bump-version.mjs
// Si cambió el título, la categoría o las etiquetas de un proyecto, antes correr: python tools/make-og.py
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const d = new Date();
const pad = (n) => String(n).padStart(2, '0');
const version = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}`;

for (const file of ['index.html', '404.html', 'tools/make-case-pages.mjs']) {
  const path = join(root, file);
  const before = readFileSync(path, 'utf8');
  const after = before.replace(/(assets\/(?:css|js)\/[\w-]+\.(?:css|js))\?v=[\w]+/g, `$1?v=${version}`);
  writeFileSync(path, after);
}
execFileSync(process.execPath, [join(root, 'tools/make-seo.mjs')], { stdio: 'inherit' });
execFileSync(process.execPath, [join(root, 'tools/make-case-pages.mjs')], { stdio: 'inherit' });
console.log(`versión ${version}`);
