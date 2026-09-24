const fs = require('fs');
const sharp = require('sharp');
const imagesJsonPath = 'src/data/images.json';
const images = JSON.parse(fs.readFileSync(imagesJsonPath, 'utf8'));

async function processImage(filename, nodeId, width, height, isMobile=false) {
    const pngPath = `public/img/${filename}.png`;
    const webpPath = `public/img/${filename}.webp`;
    await sharp(pngPath).webp({ quality: 90 }).toFile(webpPath);
    images[nodeId] = {
        src: `/img/${filename}.webp`,
        width: width,
        height: height,
        frame: isMobile ? "226:1106" : "226:698",
        name: filename.split('-')[0] // rough name
    };
    fs.unlinkSync(pngPath);
    console.log(`Processed ${filename}`);
}

async function run() {
    await processImage('wood-house-226-698-1280x820', '226:700', 1280, 820);
    await processImage('wood-house-226-1106-780x1688', '226:1108', 780, 1040, true);
    await processImage('modern-home-226-698-720x496', '226:1418', 720, 496);
    fs.writeFileSync(imagesJsonPath, JSON.stringify(images, null, 2));
}
run();
