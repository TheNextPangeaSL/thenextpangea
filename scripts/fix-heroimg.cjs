const fs = require('fs');
const path = require('path');

// Mapping of file -> original backgroundImage value (from git diff)
const originals = {
  'aditive-algorithm.astro': '`${base}images/add2man-bg.png`',
  'aditive-manufacturing.astro': '`${base}images/aditive/aditive-bg.png`',
  'antifriccion.astro': '`${base}images/Antifriccion.png`',
  'arquea.astro': '`${base}images/arquea/arquea-bg.png`',
  'buscai.astro': '`${base}images/buscai-bg.png`',
  'dxter-simulators.astro': '`${base}images/sim-bg.png`',
  'dxter.astro': '`${base}images/dxter-bg.png`',
  'fast-reporting-tool.astro': '`${base}images/fast-reporting-bg.png`',
  'fpgas.astro': '`${base}images/fpgas-bg.png`',
  'heaters.astro': '`${base}images/Heaters.png`',
  'imagia.astro': '`${base}images/Imagia.png`',
  'planifai.astro': '`${base}images/PlanifAI.png`',
  'sensorica.astro': '`${base}images/sensorica-bg.png`',
};

const dir = path.join(__dirname, '..', 'src', 'pages', 'productos');

for (const [file, origVal] of Object.entries(originals)) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Restore backgroundImage
  content = content.replace(
    /backgroundImage=\{heroImg\}/,
    `backgroundImage={${origVal}}`
  );
  
  fs.writeFileSync(fp, content, 'utf8');
  console.log(`Fixed backgroundImage in ${file}`);
}

// Also fix [slug].astro: remove the heroImages import if present
const slugFile = path.join(dir, '[slug].astro');
let slugContent = fs.readFileSync(slugFile, 'utf8');
slugContent = slugContent.replace(/import \{ getHeroImage \} from "@\/data\/heroImages";\r?\n/, '');
slugContent = slugContent.replace(/const heroImg = getHeroImage\("[^"]+"\)!;\r?\n/, '');
fs.writeFileSync(slugFile, slugContent, 'utf8');
console.log('Fixed [slug].astro');

// Delete the fabricated heroImages.ts file if it exists
const heroImagesFile = path.join(__dirname, '..', 'src', 'data', 'heroImages.ts');
if (fs.existsSync(heroImagesFile)) {
  fs.unlinkSync(heroImagesFile);
  console.log('Deleted fabricated src/data/heroImages.ts');
}

console.log('Done!');
