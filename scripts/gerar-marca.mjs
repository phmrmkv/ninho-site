// Gera favicon-32.png, apple-touch-icon.png e og-image.jpg a partir do logo real do Ninho (public/favicon.svg).
// Uso: node scripts/gerar-marca.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const logo = readFileSync('public/favicon.svg');
await sharp(logo, { density: 600 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(logo, { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

// Logo embutido no SVG da imagem social: o desenho do svg, sem o elemento raiz.
const interno = readFileSync('public/favicon.svg', 'utf8').replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const fonte = 'font-family="Segoe UI, Arial, Helvetica, sans-serif"';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fundoog" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e1617"/><stop offset="1" stop-color="#0b2a2f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fundoog)"/>
  <rect width="1200" height="14" fill="#3fc9d3"/>
  <g transform="translate(80 70) scale(0.5)">${interno}</g>
  <text x="235" y="150" ${fonte} font-size="64" font-weight="800" fill="#e6efee">Ninho</text>
  <text x="80" y="330" ${fonte} font-size="76" font-weight="800" fill="#e6efee">Servidor local para</text>
  <text x="80" y="418" ${fonte} font-size="76" font-weight="800" fill="#3fc9d3">Windows, em um arquivo.</text>
  <text x="80" y="520" ${fonte} font-size="34" font-weight="600" fill="#a9c2c3">Local server for Windows, in one file.</text>
  <text x="80" y="570" ${fonte} font-size="30" font-weight="600" fill="#e2a766">Gratuito e de código aberto · Free and open source</text>
</svg>`;
await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('marca gerada');
