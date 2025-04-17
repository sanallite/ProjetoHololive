/* Player de música */

import { musicas } from "./bancoTalentos";

const secaoPlayer = document.querySelector('section#musicas');
const player = document.querySelector('audio.player');
const botaoPlay = document.querySelector('button.play');
const botaoPause = document.querySelector('button.pause');
const botaoProxima = document.querySelector('button.proxima');
const botaoAnterior = document.querySelector('button.anterior');
const nomeMusica = document.querySelector('section#musicas p.nome');
const barra = document.querySelector('section#musicas div.progresso');
const barraProgresso = document.querySelector('section#musicas div.barraProgresso');

let indiceAtual = Number(sessionStorage.getItem('musicaAtual')) || 0;

const tocar = () => {
    player.play();
    nomeMusica.textContent = musicas[indiceAtual].nome;
    botaoPlay.classList.add('hidden');
    botaoPause.classList.remove('hidden');

    sessionStorage.setItem('musicaAtual', indiceAtual);
    console.log(sessionStorage.getItem('musicaAtual'));
}
const pausar = () => {
    player.pause();
    botaoPause.classList.add('hidden');
    botaoPlay.classList.remove('hidden');
}

const anterior = () => {
    if ( indiceAtual === 0 ) {
        indiceAtual = musicas.length - 1;
    }

    else {
        indiceAtual -= 1;
    }

    pausar();
    player.setAttribute('src', musicas[indiceAtual].src);
    tocar();
}

const proxima = () => {
    if ( indiceAtual === musicas.length -1 ) {
        indiceAtual = 0;
    }

    else {
        indiceAtual += 1;
    }

    pausar();
    player.setAttribute('src', musicas[indiceAtual].src);
    tocar();
}

player.setAttribute('src', musicas[indiceAtual].src);

botaoPlay.addEventListener('click', tocar);
botaoPause.addEventListener('click', pausar);
botaoAnterior.addEventListener('click', anterior);
botaoProxima.addEventListener('click', proxima);

player.addEventListener('loadedmetadata', () => {
    player.volume = 0.3;
    tocar();
})

player.addEventListener('ended', () => {
    proxima();
});

player.addEventListener('timeupdate', () => {
    if ( player.duration ) {
        const porcentagem = (player.currentTime / player.duration) * 100;
        barraProgresso.style.width = `${porcentagem}%`;
    }
});

barra.addEventListener('click', event => {
    const dimensoes = barra.getBoundingClientRect();
    const larguraBarra = dimensoes.width;
    const localClique = event.clientX - dimensoes.left;
    const porcentagem = (localClique / larguraBarra);

    player.currentTime = player.duration * porcentagem;
});

document.addEventListener('keydown', (event) => {
    if ( event.code === 'Space' ) {
        event.preventDefault();

        if ( player.paused ) {
            tocar();
        }

        else {
            pausar();
        }
    }
});