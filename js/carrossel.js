/* Exibição em formato de carrossel automático. */

const secaoWallpapers = document.getElementById('talentosWallpapers');
const primeiraImagem = document.querySelector('div.papel1');
const segundaImagem = document.querySelector('div.papel2');
const terceiraImagem = document.querySelector('div.papel3');
/* Elemento pai e os elementos que terão as imagens de fundo alterados. */

const caminhoImagens = '../assets/img/wallpapers';

const wallpapers = [`${caminhoImagens}/holomyth.webp`, `${caminhoImagens}/council.jpg`, `${caminhoImagens}/advent.webp`, `${caminhoImagens}/justice.png`];

const mensagem = document.createElement('p');
mensagem.classList.add('hoverRoxo');

let intervalo = null;
let indice = 1;
/* Como as imagens de fundo iniciais foram definidas em wallpapers.css, a primeira imagem a ser exibida na div central, a segunda, será a com índice 1. */

/* Função que cria o intervalo de tempo. */
const exibirCarrossel = () => {
    intervalo = setInterval(() => {
        alternarImagens();
    }, 5000)
}

const limparIntervalo = () => {
    clearInterval(intervalo);
    intervalo = null;
    console.log('Intervalo de tempo limpo.');
}

/* Função para remover a mensagem que indica se o carrossel foi pausado ou vai voltar a rodar, depois de 5 segundos. */
const removerMensagem = () => {
    setTimeout(() => {
        if ( secaoWallpapers.contains(mensagem) ) {
            secaoWallpapers.removeChild(mensagem);
        }
    }, 5000);
}

const definirImagemCamada = (elemento, caminho) => elemento.style.backgroundImage = `url(${caminho})`;

const alternarIntervalo = () => {
    if (intervalo) {
        limparIntervalo();

        mensagem.textContent = 'Carrossel Pausado';
        secaoWallpapers.appendChild(mensagem);

        removerMensagem();
    }
    /* Será a variável não ter o valor nulo, o que índica que o intervalo de tempo está rodando, será chamada a função para limpar o intervalo e redefinir o valor da variável, além de exibir uma mensagem na tela e chamar outra função pra removê-la. */

    else {
        exibirCarrossel();

        mensagem.textContent = 'Carrossel Iniciado';
        secaoWallpapers.appendChild(mensagem);

        removerMensagem();
    }
    /* Se a variável for nula, o intervalo é recriado, para continuar a exibição das imagens. */
}

const aplicarAnimacao = (acao, elemento) => {
    const camadaAtual = elemento.querySelector('.camada-atual');
    const camadaNova = elemento.querySelector('.camada-nova');

    if ( acao === 'addClasses' ) {
        elemento.classList.add('slide-right');
        camadaAtual.classList.add('fade-out');
        camadaNova.classList.add('fade-in');
    }

    else {
        camadaAtual.classList.remove('fade-out');
        camadaNova.classList.remove('fade-in');
    }
}

/* Função que define os wallpapers alternadamente, sendo executada a cada intervalo de tempo. */
const alternarImagens = () => {
    let atual = wallpapers[indice];
    let anterior = wallpapers[indice - 1] || wallpapers[wallpapers.length - 1];
    /* Caso indice - 1 retorne um valor undefined, o que acontece se o valor de índice for 0, o valor do indice será o tamanho do array - 1, indicando o último elemento. */

    let proxima = wallpapers[indice + 1] || wallpapers[0];
    /* Caso índice + 1 retorne um valor undefined, o que acontece se o valor de índice for maior que a quantidade de elementos no array, o valor do índice será 0, indicando o primeiro elemento. */

    definirImagemCamada(primeiraImagem.querySelector('.camada-nova'), anterior);
    definirImagemCamada(segundaImagem.querySelector('.camada-nova'), atual);
    definirImagemCamada(terceiraImagem.querySelector('.camada-nova'), proxima);
    /* Atualizando as camadas novas com as próximas imagens, buscando nos elementos pais. Exemplo: proxima = wallpapers[2] = '../assets/img/wallpapers/advent.webp' */

    aplicarAnimacao('addClasses', primeiraImagem);
    aplicarAnimacao('addClasses', segundaImagem);
    aplicarAnimacao('addClasses', terceiraImagem);

    setTimeout(() => {
        definirImagemCamada(primeiraImagem.querySelector('.camada-atual'), anterior);
        definirImagemCamada(segundaImagem.querySelector('.camada-atual'), atual);
        definirImagemCamada(terceiraImagem.querySelector('.camada-atual'), proxima);
        /* Movendo o conteúdo da camada nova para a camada atual */

        aplicarAnimacao('resetarCamada', primeiraImagem);
        aplicarAnimacao('resetarCamada', segundaImagem);
        aplicarAnimacao('resetarCamada', terceiraImagem);
        /* Restaurando as opacidades para o próximo ciclo. */

        primeiraImagem.classList.remove('slide-right');
        segundaImagem.classList.remove('slide-right');
        terceiraImagem.classList.remove('slide-right');
    }, 1000)

    indice = (indice + 1) % wallpapers.length;
    /* Incrementação do valor do índice. O novo valor vai ser o resto da divisão, ou módulo, entre o tamanho do array e indice + 1, isso garante que o valor do índice irá corresponder a um elemento do array, pois ele vai ser menor do que o tamanho dele. */
}

/* Estado inicial da página. */
window.addEventListener('beforeunload', alternarIntervalo);
/* O intervalo vai ser limpo sempre que a janela for fechada ou recarregada. */

primeiraImagem.addEventListener('dblclick', alternarIntervalo);
segundaImagem.addEventListener('dblclick', alternarIntervalo);
terceiraImagem.addEventListener('dblclick', alternarIntervalo);
/* Escutadores de evento nos três elementos de imagem. */

alternarIntervalo();
/* Execução inicial do alternador de intervalo, que quando a página for carregada, irá iniciar o intervalo que alterna entres as imagens do carrossel. */