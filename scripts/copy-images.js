const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'nextImageExportOptimizer');
const OUTPUT_DIR = path.join(__dirname, '..', 'out', 'nextImageExportOptimizer');

function copyDir(src, dest) {
  // Check if source exists
  if (!fs.existsSync(src)) {
    console.warn(`Source directory not found: ${src}`);
    return;
  }

  // Create destination if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Get all files in source
  const files = fs.readdirSync(src);

  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });

  console.log(`✓ Copied optimized images from ${src} to ${dest}`);
}

// Also copy the hashes file if it exists
const hashesSource = path.join(__dirname, '..', 'public', 'next-image-export-optimizer-hashes.json');
const hashesOutput = path.join(__dirname, '..', 'out', 'next-image-export-optimizer-hashes.json');

if (fs.existsSync(hashesSource)) {
  fs.copyFileSync(hashesSource, hashesOutput);
  console.log('✓ Copied image hashes metadata');
}

try {
  copyDir(SOURCE_DIR, OUTPUT_DIR);
  console.log('✓ Image optimization files successfully copied to output directory');
} catch (error) {
  console.error('Error copying image files:', error);
  process.exit(1);
}
