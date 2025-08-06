import { execSync } from 'child_process';

try {
    console.log('🛠️ Running prisma generate...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('✅ Prisma client generated');
} catch (err) {
    console.error('❌ Prisma generation failed:', err);
    process.exit(1);
}

import('./src/server.js');