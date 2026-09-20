import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const docsDir = path.resolve('docs');

try {
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
  }

  fs.cpSync(distDir, docsDir, { recursive: true });
  console.log('Successfully synced build output to /docs folder!');
} catch (err) {
  console.error('Error copying to docs:', err);
}
