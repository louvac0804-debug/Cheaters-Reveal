const fs = require('fs');
const path = require('path');

try {
  const { createCanvas } = require('canvas');
  
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  
  // Créer le dégradé de fond
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#ff69b4');
  gradient.addColorStop(1, '#4169e1');
  
  // Dessiner le cercle de fond
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(256, 256, 240, 0, Math.PI * 2);
  ctx.fill();
  
  // Dessiner le cœur brisé (rose)
  ctx.fillStyle = '#ff1493';
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.moveTo(256, 200);
  ctx.bezierCurveTo(256, 180, 240, 160, 220, 160);
  ctx.bezierCurveTo(200, 160, 184, 180, 184, 200);
  ctx.bezierCurveTo(184, 220, 220, 260, 256, 300);
  ctx.bezierCurveTo(292, 260, 328, 220, 328, 200);
  ctx.bezierCurveTo(328, 180, 312, 160, 292, 160);
  ctx.bezierCurveTo(272, 160, 256, 180, 256, 200);
  ctx.fill();
  
  // Ligne de brisure
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(256, 220);
  ctx.lineTo(256, 300);
  ctx.stroke();
  
  // Dessiner la loupe (bleu/blanc)
  ctx.globalAlpha = 1;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(320, 320, 56, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(360, 360);
  ctx.lineTo(400, 400);
  ctx.stroke();
  
  // Sauvegarder en JPG
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  const outputPath = path.join(__dirname, '../public/logo.jpg');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ Logo JPG créé avec succès : public/logo.jpg');
} catch (error) {
  console.log(`
⚠️  Canvas nécessite des dépendances système.

📋 MÉTHODE ALTERNATIVE POUR OBTENIR LE JPG :

1. Allez sur https://cheaterreveal.vercel.app/logo.svg
2. Faites clic droit → 'Enregistrer l'image sous'
3. Utilisez un convertisseur en ligne :
   - https://convertio.co/svg-jpg/
   - https://cloudconvert.com/svg-to-jpg
   - Uploadez le SVG et téléchargez le JPG

Le favicon est déjà configuré et apparaîtra dans l'onglet du navigateur !
`);
}

