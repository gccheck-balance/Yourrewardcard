// Deploy to Vercel using VERCEL_TOKEN from .env
// Run: node deploy-vercel.js

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env
try {
  const envPath = path.join(__dirname, '.env');
  const env = fs.readFileSync(envPath, 'utf-8');
  env.split('\n').forEach(line => {
    const eq = line.indexOf('=');
    if (eq > 0) {
      const key = line.slice(0, eq).trim();
      const val = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      if (key) process.env[key] = val;
    }
  });
} catch (e) {}

const token = process.env.VERCEL_TOKEN?.trim();
if (!token) {
  console.log('');
  console.log('VERCEL_TOKEN not found in .env');
  console.log('1. Get a token from https://vercel.com/account/tokens');
  console.log('2. Add to .env: VERCEL_TOKEN=your_token');
  console.log('3. Run: node deploy-vercel.js');
  process.exit(1);
}

console.log('Deploying to Vercel...');
const child = spawn('npx', ['vercel', '--token', token, '--yes', '--prod'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
});
child.on('close', (code) => process.exit(code || 0));
