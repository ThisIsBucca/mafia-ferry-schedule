const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Run the build command
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Copy the public/index.html to dist/index.html
console.log('Copying index.html to dist directory...');
fs.copyFileSync(
  path.join(__dirname, 'public', 'index.html'),
  path.join(__dirname, 'dist', 'index.html')
);

console.log('Build completed successfully!'); 