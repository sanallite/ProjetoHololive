/* Player de música */

import { musicas } from "./bancoTalentos";

const secaoPlayer = document.querySelector('section#musicas');
const player = document.querySelector('audio.player');
const botaoPlay = document.querySelector('button.play');
const botaoPause = document.querySelector('button.pause');
const botaoProxima = document.querySelector('button.proxima');
const botaoAnterior = document.querySelector('button.anterior');
const nomeMusica = document.querySelector('section#musicas p.nome');

let indiceAtual = 0;

const tocar = () => {
    player.play();
    nomeMusica.textContent = musicas[indiceAtual].nome;
}

const pausar = () => {
    player.pause();
}

const anterior = () => {
    if ( indiceAtual === 0 ) {
        indiceAtual = musicas.length - 1;
    }

    else {
        indiceAtual -= 1;
    }

    player.pause();
    nomeMusica.textContent = '';

    player.setAttribute('src', musicas[indiceAtual].src);
    player.play();
    nomeMusica.textContent = musicas[indiceAtual].nome;
}

const proxima = () => {
    if ( indiceAtual === musicas.length -1 ) {
        indiceAtual = 0;
    }

    else {
        indiceAtual += 1;
    }

    player.pause();
    nomeMusica.textContent = '';

    player.setAttribute('src', musicas[indiceAtual].src);
    player.play();
    nomeMusica.textContent = musicas[indiceAtual].nome;
}

player.setAttribute('src', musicas[indiceAtual].src);
player.volume = 0.3;

tocar();

botaoPlay.addEventListener('click', tocar);
botaoPause.addEventListener('click', pausar);
botaoAnterior.addEventListener('click', anterior);
botaoProxima.addEventListener('click', proxima);