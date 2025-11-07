const fs = require('fs');
const path = require('path');

// Lire le SVG
const svgContent = fs.readFileSync(path.join(__dirname, '../public/logo.svg'), 'utf8');

// Créer un fichier HTML temporaire pour la conversion
const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; background: transparent; }
    svg { width: 512px; height: 512px; }
  </style>
</head>
<body>
  ${svgContent}
  <script>
    const svg = document.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    canvas.width = 512;
    canvas.height = 512;
    
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/jpeg', 0.95);
      console.log(dataURL);
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  </script>
</body>
</html>`;

console.log(`
📋 POUR CONVERTIR LE LOGO EN JPG :

Le fichier logo.svg est dans public/logo.svg

MÉTHODE SIMPLE :
1. Ouvrez https://cheaterreveal.vercel.app/logo.svg dans votre navigateur
2. Faites clic droit sur l'image → 'Enregistrer l'image sous'
3. Utilisez un convertisseur en ligne : https://convertio.co/svg-jpg/
   - Uploadez le SVG
   - Téléchargez le JPG

OU utilisez ce lien direct pour télécharger :
https://cheaterreveal.vercel.app/logo.svg
`);

