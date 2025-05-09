/* Player de música */

import { musicas } from "./bancoTalentos";
/* Importando o objeto com as informações das músicas. */

const player = document.querySelector('audio.player');
const botaoPlay = document.querySelector('button.play');
const botaoPause = document.querySelector('button.pause');
const botaoProxima = document.querySelector('button.proxima');
const botaoAnterior = document.querySelector('button.anterior');
const nomeMusica = document.querySelector('section#musicas p.nome');
const barra = document.querySelector('section#musicas div.progresso');
const barraProgresso = document.querySelector('section#musicas div.barraProgresso');
const imagemCapa = document.querySelector('section#musicas img.capa');
const campoInput = document.querySelector('section#comentarios input[type="text"]');
const campoTextArea = document.querySelector('section#comentarios textarea');

let indiceAtual = Number(sessionStorage.getItem('musicaAtual')) || 0;
let tempoAtual = Number(sessionStorage.getItem('tempoAtualMusica')) || 0;
/* Pegando os itens do armazenamento da sessão, que são strings que precisam ser convertidos em números, um valor padrão também é definido. */

let nomeInicial = musicas[indiceAtual].nome;
/* O nome da música exibido quando a página carrega. */

/* Função auxiliar para exibição dos botões de controle da música. */
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
/* Se os campos input não estiverem em foco, esse será o manipulador de eventos acionado, para tocar ou pausar a música ao apertar a tecla space. */
const tocarPausarTecla = (event) => {
    if ( event.code === 'Space' ) {
        event.preventDefault();

        if ( player.paused ) {
            tocar();
        }

        else {
            pausar();
        }
    }
}

const alternarEscutadorEvento = (mudanca) => {
    if ( mudanca === 'remover' ) {
        document.removeEventListener('keydown', tocarPausarTecla);
    }

    else if ( mudanca === 'adicionar' ) {
        document.addEventListener('keydown', tocarPausarTecla);
    }
}

/* Função para fazer a música tocar e exibir os detalhes relacionados a ela. */
const tocar = () => {
    player.play();
    nomeMusica.textContent = musicas[indiceAtual].nome;
    imagemCapa.setAttribute('src', musicas[indiceAtual].capa);
    alternarBotoes();

    sessionStorage.setItem('musicaAtual', indiceAtual);
    /* Armazenando apenas o índice. */
}

const pausar = () => {
    player.pause();
    alternarBotoes();
}

/* Funções para alterar a música a ser tocada, de acordo com seu índice no vetor. */
const anterior = () => {
    if ( indiceAtual === 0 ) {
        indiceAtual = musicas.length - 1;
        /* Indo pra última. */
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
        /* Voltando a primeira. */
    }

    else {
        indiceAtual += 1;
    }

    pausar();
    player.setAttribute('src', musicas[indiceAtual].src);
    tocar();
}

/* Estado inicial da página. */
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

/* Quando a música acabar, vai pra próxima. */
player.addEventListener('ended', () => {
    proxima();
});

/* A função manipuladora de eventos calcula a porcentagem percorrida da música para estilizar a barra de progresso a cada atualização do tempo da música, várias vezes por segundo. */
player.addEventListener('timeupdate', () => {
    /* Verificação para garantir que os metadados foram carregados. */
    if ( player.duration ) {
        const porcentagem = (player.currentTime / player.duration) * 100;
        barraProgresso.style.width = `${porcentagem}%`;
    }
});

/* A função manipuladora de eventos captura onde foi clicado para alterar o tempo atual da música. */
barra.addEventListener('click', event => {
    const dimensoes = barra.getBoundingClientRect();
    /* Pegando as dimensões do elemento e sua posição exata na tela, de acordo com o viewport. */

    const larguraBarra = dimensoes.width;
    const localClique = event.clientX - dimensoes.left;
    /* Pegando a posição horizontal onde aconteceu o clique e subtraindo o espaço que está a esquerda da barra, assim pegamos em qual posição do elemento foi feito o clique, desconsiderando as margens e etc. Ex: dimensoes.left = 16 (px), event.clientX = 125.6 então localCLique = 109.6 */

    const porcentagem = (localClique / larguraBarra);
    /* Ex: localClique = 109.6, larguraBarra = 300, Então 109.6/300 = 0.41866. */

    player.currentTime = player.duration * porcentagem;
    /* Exemplo: player.duration = 240, porcentagem = 0.41866 então currentTime = 100.4784 segundos, em torno de 1 minuto e 40 segundos na música. */
});

/* Escutadores de eventos nos campos de texto, para remover ou adicionar o escutador que lida com a as teclas, evitando o conflito entre o uso dos inputs com o controle do player. */
campoInput.addEventListener('focus', () => {
    alternarEscutadorEvento('remover');
});

campoInput.addEventListener('blur', () => {
    alternarEscutadorEvento('adicionar');
})

campoTextArea.addEventListener('focus', () => {
    alternarEscutadorEvento('remover');
})

campoTextArea.addEventListener('blur', () => {
    alternarEscutadorEvento('adicionar');
})

/* Estudador de eventos no documento, onde apertando Space toca ou pausa a música. */
document.addEventListener('keydown', tocarPausarTecla);

/* Escutador de eventos na janela, que antes de descarregar, salva no armazenamento da sessão o tempo atual da música, para que possamos retornar pra aquele momento facilmente quando abrirmos a página de novo. */
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('tempoAtualMusica', player.currentTime || 0);
});