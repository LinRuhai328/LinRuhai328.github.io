import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const socialCard = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4efe7"/>
  <rect x="72" y="72" width="1056" height="486" rx="6" fill="#faf7f2" stroke="#d9cfc3" stroke-width="2"/>
  <path d="M112 130h72" stroke="#a34938" stroke-width="8"/>
  <text x="112" y="300" fill="#28231f" font-family="Georgia, 'Times New Roman', serif" font-size="116" font-weight="700">River</text>
  <text x="118" y="375" fill="#6f655c" font-family="'Microsoft YaHei', sans-serif" font-size="38">思考，学习，与沿途所得。</text>
  <text x="118" y="500" fill="#a34938" font-family="Arial, sans-serif" font-size="26" letter-spacing="2">LINRUHAI328.GITHUB.IO</text>
</svg>`;

await sharp(Buffer.from(socialCard)).png().toFile("public/default-og.png");
await writeFile("public/default-og.svg", socialCard.trimStart());
