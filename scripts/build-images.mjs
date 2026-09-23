// Crops every Figma image slot exactly as placed in the design (imageTransform / scaleMode)
// and writes a 2x WebP per slot to public/img, plus src/data/images.json (nodeId -> file).
// Source images: design/source-img/<sha1>.jpeg (Figma image hash = SHA-1 of original bytes).
// design/source-img is NOT committed (originals include uncropped people and a licence plate); keep it locally to re-run.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const map = JSON.parse(fs.readFileSync('design/imagemap.json', 'utf8')).rows;
const srcDir = 'design/source-img';
const files = fs.readdirSync(srcDir);
const out = {};
fs.mkdirSync('public/img', { recursive: true });
const slug = (s) => s.replace(/^IMG:/, '').replace(/\(.*?\)/g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');

for (const [frame, nodeId, name, hash, mode, t, , w, h] of map) {
  const file = files.find((f) => f.startsWith(hash));
  if (!file) { console.error('MISSING source', hash, name); process.exitCode = 1; continue; }
  const src = path.join(srcDir, file);
  const meta = await sharp(src).metadata();
  const iw = meta.width, ih = meta.height;
  let left, top, cw, ch;
  if (mode === 'CROP') {
    left = t[0][2] * iw; top = t[1][2] * ih; cw = t[0][0] * iw; ch = t[1][1] * ih;
  } else { // FILL = cover, centred
    const s = Math.max(w / iw, h / ih);
    cw = w / s; ch = h / s; left = (iw - cw) / 2; top = (ih - ch) / 2;
  }
  const L = Math.max(0, Math.round(left)), T = Math.max(0, Math.round(top));
  const W = Math.min(iw - L, Math.round(cw)), H = Math.min(ih - T, Math.round(ch));
  const outName = `${slug(name)}-${frame.replace(':', '-')}-${w}x${h}.webp`;
  await sharp(src).extract({ left: L, top: T, width: W, height: H })
    .resize(w * 2, h * 2, { fit: 'fill', kernel: 'lanczos3' })
    .webp({ quality: 80 }).toFile(path.join('public/img', outName));
  out[nodeId] = { src: `/img/${outName}`, width: w, height: h, frame, name };
}
fs.writeFileSync('src/data/images.json', JSON.stringify(out, null, 2));
console.log('wrote', Object.keys(out).length, 'images');
