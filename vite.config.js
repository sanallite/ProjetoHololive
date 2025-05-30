/* Configuração do Vite */

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: ['chrome89', 'firefox89', 'safari15', 'edge89'],
    // Para suportar top level await.
    
    // Esta é a configuração crucial - múltiplos pontos de entrada
    rollupOptions: {
      input: {
        // Página principal
        main: resolve(__dirname, 'index.html'),
        // Página do talento
        talentos: resolve(__dirname, 'paginas/talentos.html')
      }
    }
  },
  
  // Configuração para lidar com assets de forma mais inteligente
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp', '**/*.svg', '**/*.ico', '**/*.mp3']
});