const fs = require('fs');
const path = require('path');

try {
  const { createCanvas } = require('canvas');
  
  // Version 1 : Logo avec fond noir
  const canvas1 = createCanvas(512, 512);
  const ctx1 = canvas1.getContext('2d');
  
  // Fond noir
  ctx1.fillStyle = '#000000';
  ctx1.fillRect(0, 0, 512, 512);
  
  // Créer le dégradé de fond
  const gradient1 = ctx1.createLinearGradient(0, 0, 512, 512);
  gradient1.addColorStop(0, '#ff69b4');
  gradient1.addColorStop(1, '#4169e1');
  
  // Dessiner le cercle de fond
  ctx1.fillStyle = gradient1;
  ctx1.beginPath();
  ctx1.arc(256, 256, 240, 0, Math.PI * 2);
  ctx1.fill();
  
  // Dessiner le cœur brisé (rose)
  ctx1.fillStyle = '#ff1493';
  ctx1.globalAlpha = 0.95;
  ctx1.beginPath();
  ctx1.moveTo(256, 200);
  ctx1.bezierCurveTo(256, 180, 240, 160, 220, 160);
  ctx1.bezierCurveTo(200, 160, 184, 180, 184, 200);
  ctx1.bezierCurveTo(184, 220, 220, 260, 256, 300);
  ctx1.bezierCurveTo(292, 260, 328, 220, 328, 200);
  ctx1.bezierCurveTo(328, 180, 312, 160, 292, 160);
  ctx1.bezierCurveTo(272, 160, 256, 180, 256, 200);
  ctx1.fill();
  
  // Ligne de brisure
  ctx1.strokeStyle = '#ffffff';
  ctx1.lineWidth = 8;
  ctx1.beginPath();
  ctx1.moveTo(256, 220);
  ctx1.lineTo(256, 300);
  ctx1.stroke();
  
  // Dessiner la loupe (blanc)
  ctx1.globalAlpha = 1;
  ctx1.strokeStyle = '#ffffff';
  ctx1.lineWidth = 12;
  ctx1.beginPath();
  ctx1.arc(320, 320, 56, 0, Math.PI * 2);
  ctx1.stroke();
  
  ctx1.beginPath();
  ctx1.moveTo(360, 360);
  ctx1.lineTo(400, 400);
  ctx1.stroke();
  
  // Sauvegarder en JPG avec fond noir
  const buffer1 = canvas1.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(path.join(__dirname, '../public/logo-fond-noir.jpg'), buffer1);
  console.log('✅ Logo avec fond noir créé : public/logo-fond-noir.jpg');
  
  // Version 2 : Logo sans fond (transparent - PNG)
  const canvas2 = createCanvas(512, 512);
  const ctx2 = canvas2.getContext('2d');
  
  // Fond transparent (pas de fill)
  
  // Créer le dégradé de fond
  const gradient2 = ctx2.createLinearGradient(0, 0, 512, 512);
  gradient2.addColorStop(0, '#ff69b4');
  gradient2.addColorStop(1, '#4169e1');
  
  // Dessiner le cercle de fond
  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(256, 256, 240, 0, Math.PI * 2);
  ctx2.fill();
  
  // Dessiner le cœur brisé (rose)
  ctx2.fillStyle = '#ff1493';
  ctx2.globalAlpha = 0.95;
  ctx2.beginPath();
  ctx2.moveTo(256, 200);
  ctx2.bezierCurveTo(256, 180, 240, 160, 220, 160);
  ctx2.bezierCurveTo(200, 160, 184, 180, 184, 200);
  ctx2.bezierCurveTo(184, 220, 220, 260, 256, 300);
  ctx2.bezierCurveTo(292, 260, 328, 220, 328, 200);
  ctx2.bezierCurveTo(328, 180, 312, 160, 292, 160);
  ctx2.bezierCurveTo(272, 160, 256, 180, 256, 200);
  ctx2.fill();
  
  // Ligne de brisure
  ctx2.strokeStyle = '#ffffff';
  ctx2.lineWidth = 8;
  ctx2.beginPath();
  ctx2.moveTo(256, 220);
  ctx2.lineTo(256, 300);
  ctx2.stroke();
  
  // Dessiner la loupe (blanc)
  ctx2.globalAlpha = 1;
  ctx2.strokeStyle = '#ffffff';
  ctx2.lineWidth = 12;
  ctx2.beginPath();
  ctx2.arc(320, 320, 56, 0, Math.PI * 2);
  ctx2.stroke();
  
  ctx2.beginPath();
  ctx2.moveTo(360, 360);
  ctx2.lineTo(400, 400);
  ctx2.stroke();
  
  // Sauvegarder en PNG (transparent)
  const buffer2 = canvas2.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '../public/logo-transparent.png'), buffer2);
  console.log('✅ Logo sans fond (transparent) créé : public/logo-transparent.png');
  
  // Aussi en JPG sans fond (fond blanc par défaut)
  const canvas3 = createCanvas(512, 512);
  const ctx3 = canvas3.getContext('2d');
  
  // Fond blanc
  ctx3.fillStyle = '#ffffff';
  ctx3.fillRect(0, 0, 512, 512);
  
  // Copier le contenu du logo
  const gradient3 = ctx3.createLinearGradient(0, 0, 512, 512);
  gradient3.addColorStop(0, '#ff69b4');
  gradient3.addColorStop(1, '#4169e1');
  
  ctx3.fillStyle = gradient3;
  ctx3.beginPath();
  ctx3.arc(256, 256, 240, 0, Math.PI * 2);
  ctx3.fill();
  
  ctx3.fillStyle = '#ff1493';
  ctx3.globalAlpha = 0.95;
  ctx3.beginPath();
  ctx3.moveTo(256, 200);
  ctx3.bezierCurveTo(256, 180, 240, 160, 220, 160);
  ctx3.bezierCurveTo(200, 160, 184, 180, 184, 200);
  ctx3.bezierCurveTo(184, 220, 220, 260, 256, 300);
  ctx3.bezierCurveTo(292, 260, 328, 220, 328, 200);
  ctx3.bezierCurveTo(328, 180, 312, 160, 292, 160);
  ctx3.bezierCurveTo(272, 160, 256, 180, 256, 200);
  ctx3.fill();
  
  ctx3.strokeStyle = '#ffffff';
  ctx3.lineWidth = 8;
  ctx3.beginPath();
  ctx3.moveTo(256, 220);
  ctx3.lineTo(256, 300);
  ctx3.stroke();
  
  ctx3.globalAlpha = 1;
  ctx3.strokeStyle = '#ffffff';
  ctx3.lineWidth = 12;
  ctx3.beginPath();
  ctx3.arc(320, 320, 56, 0, Math.PI * 2);
  ctx3.stroke();
  
  ctx3.beginPath();
  ctx3.moveTo(360, 360);
  ctx3.lineTo(400, 400);
  ctx3.stroke();
  
  const buffer3 = canvas3.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(path.join(__dirname, '../public/logo-sans-fond.jpg'), buffer3);
  console.log('✅ Logo sans fond (fond blanc) créé : public/logo-sans-fond.jpg');
  
  console.log('\n📁 Fichiers créés :');
  console.log('  - public/logo-fond-noir.jpg (avec fond noir)');
  console.log('  - public/logo-transparent.png (transparent)');
  console.log('  - public/logo-sans-fond.jpg (fond blanc)');
  
} catch (error) {
  console.error('Erreur:', error.message);
}

