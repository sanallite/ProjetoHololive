/* Player de música */

import { musicas } from "./bancoTalentos";

const player = document.querySelector('audio.player');
const botaoPlay = document.querySelector('button.play');
const botaoPause = document.querySelector('button.pause');
const botaoProxima = document.querySelector('button.proxima');
const botaoAnterior = document.querySelector('button.anterior');
const nomeMusica = document.querySelector('section#musicas p.nome');
const barra = document.querySelector('section#musicas div.progresso');
const barraProgresso = document.querySelector('section#musicas div.barraProgresso');
const imagemCapa = document.querySelector('section#musicas img.capa');

let indiceAtual = Number(sessionStorage.getItem('musicaAtual')) || 0;
let tempoAtual = Number(sessionStorage.getItem('tempoAtualMusica')) || 0;
let nomeInicial = musicas[indiceAtual].nome || "";

const alternarBotoes = () => {
    if ( player.paused ) {
        botaoPause.classList.add('hidden');
        botaoPlay.classList.remove('hidden');
    }

    else {
        botaoPlay.classList.add('hidden');
        botaoPause.classList.remove('hidden');
    }
}

const tocar = () => {
    player.play();
    nomeMusica.textContent = musicas[indiceAtual].nome;
    imagemCapa.setAttribute('src', musicas[indiceAtual].capa);
    alternarBotoes();

    sessionStorage.setItem('musicaAtual', indiceAtual);
}
const pausar = () => {
    player.pause();
    alternarBotoes();
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

nomeMusica.textContent = nomeInicial;

player.setAttribute('src', musicas[indiceAtual].src);
player.volume = 0.25;
player.currentTime = tempoAtual;

imagemCapa.setAttribute('src', musicas[indiceAtual].capa);

alternarBotoes();

botaoPlay.addEventListener('click', tocar);
botaoPause.addEventListener('click', pausar);
botaoAnterior.addEventListener('click', anterior);
botaoProxima.addEventListener('click', proxima);

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

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('tempoAtualMusica', player.currentTime || 0);
});