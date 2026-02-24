/**
 * Generates favicon.ico and PNG icons from public/images/tours/brand/udahni-avanturu-logo.png
 * Run: node scripts/generate-icons.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public", "images", "tours", "brand", "udahni-avanturu-logo.png");
const outDir = join(root, "public", "icons");

const SIZES = [16, 32, 48, 180, 192, 512];
const ICO_SIZES = [16, 32, 48];

async function main() {
  const sharp = (await import("sharp")).default;
  const toIco = (await import("to-ico")).default;

  mkdirSync(outDir, { recursive: true });

  const buffer = readFileSync(logoPath);
  const pngBuffers = [];

  for (const size of SIZES) {
    const out = await sharp(buffer)
      .resize(size, size)
      .png()
      .toBuffer();
    writeFileSync(join(outDir, `icon-${size}.png`), out);
    if (ICO_SIZES.includes(size)) pngBuffers.push(out);
  }

  const ico = await toIco(pngBuffers);
  writeFileSync(join(root, "public", "favicon.ico"), ico);

  console.log("Icons generated in public/icons and public/favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
