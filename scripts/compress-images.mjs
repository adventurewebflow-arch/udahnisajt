import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const inputDir = 'C:/Users/kokni/Desktop/zelengora-trnovacko-sutjeska';
const outputDir = 'public/images/tours/gallery';

mkdirSync(outputDir, { recursive: true });

const files = readdirSync(inputDir).filter((f) =>
  /\.(jpg|jpeg|png|webp)$/i.test(f),
);

for (const file of files) {
  const name = file.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
  await sharp(join(inputDir, file))
    .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(outputDir, name));
  console.log(`✓ ${name}`);
}
console.log('Gotovo!');
