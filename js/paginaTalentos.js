import { talentos, mapaTalentos } from "./bancoTalentos";
import { exibirInfo } from "./youtubeApi";
/* Importando uma função que pega dados da API do YouTube. */

const parametros = new URLSearchParams(window.location.search);

let talentoAtual = null;

const mainContainer = document.querySelector('main');
const thumbnails = document.querySelector('div.thumbnails');
const fotoPrincipal = document.querySelector('div.fotoPrincipal');
const botaoVoltarPagina = document.querySelector('main nav button');
const articleDesc = document.querySelector('#imagensDesc article');
const asideHistoria = document.querySelector('#historiaDetalhes aside');
const tabelaDetalhes = document.querySelector('#historiaDetalhes aside table tbody');
const secaoClipes = document.querySelector('section#clipes div');

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

const criarLinhaTabela = (chave, valor) => {
    const coluna1 = document.createElement('td');
    const coluna2 = document.createElement('td');
    const linha = document.createElement('tr');

    coluna1.textContent = chave;
    coluna2.textContent = valor;

    linha.append(coluna1, coluna2);

    tabelaDetalhes.appendChild(linha);
}

const exibirThumbnails = () => {
    criarElementoImagem(talentoAtual.outfits[0], fotoPrincipal);

    for ( let i = 0; i < talentoAtual.outfits.length; i++ ) {
        criarElementoImagem(talentoAtual.outfits[i], thumbnails);
    }
}

const exibirDescDetalhes = async () => {
    articleDesc.textContent = talentoAtual.descricao;

    const infoCanal = await exibirInfo(talentoAtual.canal);
    /* talentoAtual.canal representa o @ do canal. Ex: exibirInfo(@WatsonAmelia) */
    /* Essa função primeiro chama uma função para verificar se a api foi carregada, para evitar problemas com a assíncronia da API, como tentar acessar uma propriedade de um objeto que não está definido ainda pois a API não terminou de iniciar. */

    const numeroInscritos = infoCanal.result.items[0].statistics.subscriberCount;
    /* Acessando uma parte específica do resultado. */

    criarLinhaTabela('Aniversário:', talentoAtual.aniversario);
    criarLinhaTabela('Altura:', talentoAtual.altura);
    criarLinhaTabela('Ilustrador(a):', talentoAtual.ilustrador);
    criarLinhaTabela('Nome dos fãs:', talentoAtual.nomeFas);
    criarLinhaTabela('Grupo:', talentoAtual.grupo);
    criarLinhaTabela('Inscritos:', Intl.NumberFormat('pt-br').format(numeroInscritos));

    if ( talentoAtual?.canalSecreto ) {
        let link = document.createElement('a');

        link.setAttribute('href', `https://youtube.com/${talentoAtual.canalSecreto}`);
        link.setAttribute('target', '_blank');

        link.textContent = 'Canal Secreto';
        asideHistoria.appendChild(link);
    }
}

const criarEmbedClipes = () => {
    for (let index = 0; index < talentoAtual.clipes.length; index++) {
        let frame = document.createElement('iframe');
        frame.src = `https://youtube.com/embed/${talentoAtual.clipes[index]}`;
        frame.allowFullscreen = true;
        frame.setAttribute('frameborder', 0);
        frame.setAttribute('width', '400px');
        frame.setAttribute('height', '240px');
        frame.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope');

        secaoClipes.appendChild(frame);
    }
}

if ( parametros.has('t') ) {
    const nomeTalento = parametros.get('t');
    
    for ( let i = 0; i < talentos.length; i++ ) {
        if ( talentos[i].nome === nomeTalento ) {
            talentoAtual = talentos[i];
        }
    }

    if ( !talentoAtual ) {
        mainContainer.textContent = 'Parâmetro inválido. Retornando a página inicial.';

        setTimeout(() => {
            window.location.assign('../index.html');
        }, 3000);
    }

    document.title = `Hololive English - ${talentoAtual.nome}`;

    exibirThumbnails();
    exibirDescDetalhes();
    criarEmbedClipes();
}

else {
    window.location.assign('../index.html');
}

botaoVoltarPagina.addEventListener('click', () => {
    window.location.assign('../index.html');
})