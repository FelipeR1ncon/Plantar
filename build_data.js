// Genera web/assets/js/data.js desde el CFG extraído del brochure,
// reescribiendo rutas de imagen hacia assets/img/<slug>.<ext>
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, 'assets/img');
const SRC = path.join(__dirname, 'assets/js/_cfg_extract.js');

const MANUAL = {
  'TOSTÓN DE YUCA.png': 'toston-de-yuca-empaque',
  'toston de limón.png': 'toston-de-limon-v2',
  'STRIPS TOSTÓN MADURO.png': 'strips-toston-maduro',
  'MOCKUPS PAPA LIMÓN PATAKIS 28GR.png': 'mockups-papa-limon-patakis-28gr',
  'ÑAME.png': 'niame',
};

function slugify(p) {
  const base = path.basename(p);
  if (MANUAL[base]) return MANUAL[base];
  return base
    .replace(/\.(png|jpg|jpeg)$/i, '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const missing = [];
function resolveImg(p) {
  if (!p) return p;
  const slug = slugify(p);
  for (const ext of ['png', 'jpg']) {
    if (fs.existsSync(path.join(IMG_DIR, `${slug}.${ext}`))) {
      return `assets/img/${slug}.${ext}`;
    }
  }
  missing.push(`${p} -> ${slug}`);
  return `assets/img/${slug}.png`;
}

const IMG_KEYS = new Set(['image', 'empaque', 'img', 'imagen', 'logo']);
function walk(node) {
  if (Array.isArray(node)) { node.forEach(walk); return; }
  if (node && typeof node === 'object') {
    for (const k of Object.keys(node)) {
      const v = node[k];
      if (IMG_KEYS.has(k) && typeof v === 'string' && v) node[k] = resolveImg(v);
      else if (k === 'empaques' && Array.isArray(v) && typeof v[0] === 'string') {
        node[k] = v.map(resolveImg);
      } else walk(v);
    }
  }
}

const code = fs.readFileSync(SRC, 'utf8');
const CFG = eval(`(function(){ ${code}; return CFG; })()`);
walk(CFG);

const out = `/* Datos del sitio Plantar — generado desde el brochure. */\nconst CFG = ${JSON.stringify(CFG, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'assets/js/data.js'), out);
console.log('data.js written,', out.length, 'bytes');
console.log('productos:', CFG.productos.length);
if (missing.length) console.log('MISSING:\n' + missing.join('\n'));
