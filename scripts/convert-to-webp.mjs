/**
 * Convierte todos los .png / .jpg / .jpeg de src/assets a .webp
 * Conserva los originales (no los borra) — solo crea el .webp al lado.
 *
 * Uso:
 *   npm install --save-dev sharp
 *   node scripts/convert-to-webp.mjs
 */
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, "..", "src", "assets");
const QUALITY = 80; // 75–85 es el punto dulce calidad/peso para mockups UI

const VALID_EXT = [".png", ".jpg", ".jpeg"];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await walk(fullPath));
    } else if (VALID_EXT.includes(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertFile(filePath) {
  const ext = path.extname(filePath);
  const webpPath = filePath.slice(0, -ext.length) + ".webp";

  const beforeSize = (await stat(filePath)).size;

  await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);

  const afterSize = (await stat(webpPath)).size;
  const savedPct = (100 - (afterSize / beforeSize) * 100).toFixed(0);

  console.log(
    `✓ ${path.relative(ASSETS_DIR, filePath)} → .webp  ` +
    `(${(beforeSize / 1024).toFixed(0)}KB → ${(afterSize / 1024).toFixed(0)}KB, -${savedPct}%)`
  );
}

async function main() {
  console.log(`Buscando imágenes en ${ASSETS_DIR}...\n`);
  const files = await walk(ASSETS_DIR);

  if (files.length === 0) {
    console.log("No se encontraron .png/.jpg/.jpeg.");
    return;
  }

  for (const file of files) {
    try {
      await convertFile(file);
    } catch (err) {
      console.error(`✗ Error con ${file}:`, err.message);
    }
  }

  console.log(`\nListo. ${files.length} imágenes procesadas.`);
  console.log("Los archivos originales NO se borraron — actualiza los imports manualmente o pídeme que lo haga.");
}

main();
