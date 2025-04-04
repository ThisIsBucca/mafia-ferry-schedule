import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Run the build command
console.log('Building the project...')
execSync('vite build', { stdio: 'inherit' })

// Copy the public/index.html to dist/index.html
console.log('Copying index.html to dist directory...')
fs.copyFileSync(
  join(__dirname, 'public', 'index.html'),
  join(__dirname, 'dist', 'index.html')
)

console.log('Build completed successfully!') 