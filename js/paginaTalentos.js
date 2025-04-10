import { talentos, mapaTalentos } from "./bancoTalentos";

const parametros = new URLSearchParams(window.location.search);

let talentoAtual = null;

const mainContainer = document.querySelector('main');
const thumbnails = document.querySelector('div.thumbnails');
const fotoPrincipal = document.querySelector('div.fotoPrincipal');
const botaoVoltarPagina = document.querySelector('main nav button');

const criarElementoImagem = (img, container) => {
    const elemento = document.createElement('img');
    elemento.setAttribute('src', img);
    container.appendChild(elemento);

    if ( container === thumbnails ) {
        elemento.addEventListener('click', () => {
            let fotoPrincipalAtual = document.querySelector('div.fotoPrincipal img');
            fotoPrincipalAtual.setAttribute('src', img);
        })
    }
}

const exibirThumbnails = () => {
    criarElementoImagem(talentoAtual.outfit1, thumbnails);
    criarElementoImagem(talentoAtual.outfit1, fotoPrincipal);

    if ( talentoAtual?.outfit2 ) {
        criarElementoImagem(talentoAtual.outfit2, thumbnails);
    }

    if ( talentoAtual?.outfit3 ) {
        criarElementoImagem(talentoAtual.outfit3, thumbnails);
    }

    if ( talentoAtual?.outfit4 ) {
        criarElementoImagem(talentoAtual.outfit4, thumbnails);
    }

    if ( talentoAtual?.outfit5 ) {
        criarElementoImagem(talentoAtual.outfit5, thumbnails);
    }

    if ( talentoAtual?.outfit6 ) {
        criarElementoImagem(talentoAtual.outfit6, thumbnails);
    }

    if ( talentoAtual?.outfit7 ) {
        criarElementoImagem(talentoAtual.outfit7, thumbnails);
    }

    if ( talentoAtual?.outfit18 ) {
        criarElementoImagem(talentoAtual.outfit8, thumbnails);
    }
}

if ( parametros.has('t') ) {
    const arrobaTalento = parametros.get('t');
    
    for ( let i = 0; i < talentos.length; i++ ) {
        if ( talentos[i].canal === arrobaTalento ) {
            talentoAtual = talentos[i];
        }
    }

    if ( !talentoAtual ) {
        mainContainer.textContent = 'Parâmetro inválido. Retornando a página inicial.';

        setTimeout(() => {
            window.location.assign('../index.html');
        }, 3000);
    }

    exibirThumbnails();
}

else {
    window.location.assign('../index.html');
}

botaoVoltarPagina.addEventListener('click', () => {
    window.location.assign('../index.html');
})