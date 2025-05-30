/* Configuração do Vite */

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: ['chrome89', 'firefox89', 'safari15', 'edge89'],
    /* O transpilador terá como alvo as versões dos navegadores que suportam top-level await, que permite usar await diretamente no nível superior de um módulo. Usado no arquivo "comentarioController.js" */
    
    /* Múltiplos pontos de entrada */
    rollupOptions: {
      input: {
        // Página principal
        main: resolve(__dirname, 'index.html'),
        /* A função resolve constrói caminhos absolutos, garantido compatibilidade entre sistemas operacionais. __dirname representa o diretório onde está o arquivo atual, nesse caso é a pasta raiz. Assim a referência vai ser sempre relativa a localização desse arquivo, independentemente do onde for executado o comando de build. */

        // Página do talento
        talentos: resolve(__dirname, 'paginas/talentos.html')
      }
    }
  }
});