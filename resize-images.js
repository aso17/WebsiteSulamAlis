const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ubah path sesuai dengan struktur kamu
const inputFolder = path.join(__dirname, 'src/assets/images/Services/ModelSulamAlis');
const outputFolder = path.join(__dirname, 'src/assets/images/OptimezeImage');

const sizes = [
    { name: 'small', width: 480 },
    { name: 'medium', width: 768 },
    { name: 'large', width: 1024 },
];

// Buat folder output jika belum ada
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach((file) => {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    sizes.forEach(({ name, width }) => {
        const outputPath = path.join(outputFolder, `${baseName}-${name}.webp`);

        sharp(path.join(inputFolder, file))
            .resize({ width })
            .webp({ quality: 80 }) // Atur kualitas sesuai kebutuhan
            .toFile(outputPath)
            .then(() => {
                console.log(`✅ Created: ${outputPath}`);
            })
            .catch((err) => {
                console.error(`❌ Error processing ${file}:`, err);
            });
    });
});
