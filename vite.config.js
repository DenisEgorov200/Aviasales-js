import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/modules/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      assets: path.resolve(__dirname, './src/assets/'),
      scss: path.resolve(__dirname, './src/assets/scss/'),
      variables: path.resolve(__dirname, './src/assets/scss/variables'),
    },
  },
});
