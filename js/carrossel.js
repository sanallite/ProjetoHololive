const primeiraImagem = document.querySelector('div.papel1');
const segundaImagem = document.querySelector('div.papel2');
const terceiraImagem = document.querySelector('div.papel3');

const caminhoFotos = '../assets/img/wallpapers';

const teste = [`${caminhoFotos}/holomyth.webp`, `${caminhoFotos}/council.jpg`, `${caminhoFotos}/advent.webp`, `${caminhoFotos}/justice.png`];

let intervalo = null;
let indice = 0;

const alternarImagens = () => {
    let atual = teste[indice];
    let anterior;
    let proxima;

    if ( indice < teste.length ) {
        segundaImagem.style.backgroundImage = `url(${atual})`;

        anterior = teste[indice - 1];
        primeiraImagem.style.backgroundImage = `url(${anterior})`;

        proxima = teste[indice + 1] || teste[0];
        terceiraImagem.style.backgroundImage = `url(${proxima})`;

        indice++;
    }

    else if ( indice === teste.length ) {
        indice = 0;
    }
}

const exibirCarrossel = () => {
    if (intervalo) {
        clearInterval(intervalo);
    }

    intervalo = setInterval(() => {
        alternarImagens();
    }, 5000)
}

exibirCarrossel();