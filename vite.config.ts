import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

function customPublicCopy() {
  return {
    name: 'custom-public-copy',
    closeBundle() {
      const publicDir = 'public';
      const outDir = 'dist';

      if (existsSync(publicDir)) {
        const files = readdirSync(publicDir);
        files.forEach(file => {
          if (file.includes('copy')) return;

          try {
            const srcPath = join(publicDir, file);
            const destPath = join(outDir, file);

            if (statSync(srcPath).isFile()) {
              copyFileSync(srcPath, destPath);
            }
          } catch (err) {
            console.warn(`Could not copy ${file}:`, err.message);
          }
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), customPublicCopy()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: false,
});
