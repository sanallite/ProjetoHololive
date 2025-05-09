/* Scripts da página principal. */

import { talentos, nomesGrupos, mapaFotosGrupos, mapaTalentos, Myth } from "./bancoTalentos.js";
/* Importação das variáveis no meu banco de dados local. */

import { exibirUploads } from './youtubeApi.js';
/* Importando uma função que pega dados da API do YouTube. */

const playerMusica = document.querySelector('audio.player');

const destacarBotao = () => {
    const grupoAtual = localStorage.getItem('grupo') || 'Myth';

    const botoes = document.querySelectorAll('button.nomesGrupos');

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('destaque');

        if ( botoes[i].classList.contains(grupoAtual) ) {
            const elemento = botoes[i];

            elemento.classList.add('destaque');
        }        
    }
}

/* Função que cria botões de acordo com a quantidade de grupos no array de nomes. */
const exibirNomesGrupos = () => {
    const navGrupos = document.getElementById('grupos');

    nomesGrupos.forEach(element => {
        let botao = document.createElement('button');
        botao.textContent = element;
        botao.className = `nomesGrupos hoverRoxo ${element}`;

        navGrupos.appendChild(botao);

        botao.addEventListener('click', () => {
            exibirFotosPefilTalentos(mapaFotosGrupos[element]);
            /* Usando notação de colchetes para acessar uma propriedade do objeto que mapeia todos os vetores que contém as fotos de perfil dos talentos. Esse valor será o parâmetro recebido pela função do escutador de evento, que iterará sobre o vetor. Ex: mapaFotosGrupos["Myth"] retorna o vetor Myth. */

            window.localStorage.setItem('grupo', element);
            /* Armazenando o nome do grupo. */

            destacarBotao();
        });
        /* Cada botão criado terá um escutador de eventos, ao ser clicado executará uma função anônima, que chama outra com um parâmetro diferente de acordo com o elemento do array, que representa um dos grupos. */
    })
    /* Para cada item do array de nomes, será executada uma função que recebe o elemento atual como parâmetro e então cria botões para serem exibidos na tela. */
}

/* Função que exibe as fotos de pefil dos talentos do grupo escolhido, com o inicial sendo o Myth e podendo ser mudado apertando nos botões com os nomes dos grupos. */
const exibirFotosPefilTalentos = grupo => {
/* Síntaxe de função arrow com apenas um parâmetro */

    const sectionTalentosImgs = document.querySelector('section#talentosImgs');
    const fotosExibidas = document.querySelectorAll('section#talentosImgs div.fotoContainer');

    for ( let i = 0; i < fotosExibidas.length; i++ ) {
        sectionTalentosImgs.removeChild(fotosExibidas[i]);
    }
    /* Iterando sobre cada elemento encontrado pelo querySelectorAll, e então removendo esses elementos como filhos da seção que contêm as fotos de perfil, para que assim cada vez que for chamada a função pelo escutador de eventos, as fotos que estavam sendo exibidas antes sejam removidas */

    for (let i = 0; i < grupo.length; i++) {
        let container = document.createElement('div');
        container.classList.add('fotoContainer');

        let nome = document.createElement('p');

        let imagem = document.createElement('img');
        imagem.setAttribute('src', `${grupo[i][0]}`);
        imagem.className = `fotoPerfilTalento ${grupo[i][1]}`;
        /* O array de fotos é uma matriz com cada elemento sendo outro array, com o primeiro elemento sendo o caminho da foto e o segundo o nome do talento, que é usado na chamada do escutador de eventos. */

        imagem.addEventListener('click', () => {
            exibirInfoTalentos(mapaTalentos[grupo[i][1]]);

            window.localStorage.setItem('talento', grupo[i][1]);
            /* Armazenando o nome do talento. */
        });
        /* Quando uma das imagens for clicada será chamada uma função que envia como parâmetro uma propriedade do objeto mapaTalentos, com o valor dessa propriedade sendo um objeto que contém os dados do talento em outro array. Ex: mapaTalentos[grupo[i][1]] = mapaTalentos['Gura'] */

        imagem.addEventListener('pointerover', () => { 
            nome.classList.add('nomeTalento');
            nome.textContent = mapaTalentos[grupo[i][1]].nome;

            container.appendChild(nome);
        });
        /* Adicionando um texto "flutuante" para mostrar o nome de cada talento, apenas quando o mouse passsar sobre ou o elemento receber um toque */

        imagem.addEventListener('pointerout', () => {
            let nomes = document.querySelectorAll('#talentosImgs p.nomeTalento');
            
            for (let i = 0; i < nomes.length; i++) {
                container.removeChild(nomes[i]);
            }
        })
        /* Quando o elemento não está no focado do apontador, o elemento que exibe o nome é removidos */

        container.appendChild(imagem);
        sectionTalentosImgs.appendChild(container);
    }
    /* Para cada elemento do vetor que contém as imagens, será criado um elemento html para exibi-lás */
}

/* Função para exibir as informações de um talento que inicialmente é a Gura, criando elementos html dinâmicamente, com essa função sendo executada pelo escutador de eventos quando uma foto de perfil dos talentos é clicada. */
const exibirInfoTalentos = async talento => {
    const articleTalentos = document.querySelector('#talentosDesc');
    const descricoesTalentos = document.querySelectorAll('.descTalento');

    for (let i = 0; i < descricoesTalentos.length; i++) {
        articleTalentos.removeChild(descricoesTalentos[i]);
    }
    /* Removendo os elementos com as informações que estavam sendo exibidas na tela, para exibir as informações do talento que tava a foto clicada. */

    articleTalentos.textContent = 'Carregando...';
    /* A cada chamada da função, após a remoção dos elementos filhos será exibido um texto para indicar que estamos esperando as resposta da API. */

    const uploadsCanal = await exibirUploads(talento.canal, 1);
    /* Essa função primeiro chama uma função para verificar se a api foi carregada, para evitar problemas com a assíncronia da API, como tentar acessar uma propriedade de um objeto que não está definido ainda pois a API não terminou de iniciar. */

    console.log(uploadsCanal);

    articleTalentos.textContent = '';

    const idVideoMaisRecente = uploadsCanal.result.items[0].contentDetails.videoId;
    /* Acessando uma parte específica do resultado. */

    let nome = document.createElement('h3');
    nome.textContent = talento.nome;

    let desc = document.createElement('p');
    desc.innerHTML = talento.descricao;

    let infoLive = document.createElement('h3');
    infoLive.textContent = 'Vídeo mais recente:'

    let frameVideo = document.createElement('iframe');
    frameVideo.setAttribute('src', `https://youtube.com/embed/${idVideoMaisRecente}`);
    frameVideo.setAttribute('width', '100%');
    frameVideo.setAttribute('height', '320px');
    frameVideo.setAttribute('allowfullscreen', true);
    frameVideo.setAttribute('frameborder', 0);
    frameVideo.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope');

    let linkPag2 = document.createElement('a');
    linkPag2.setAttribute('href', `paginas/talentos.html?t=${talento.nome}`);
    linkPag2.classList.add('hoverRoxo');
    linkPag2.textContent = 'Ir para página do talento';

    linkPag2.addEventListener('click', () => {
        sessionStorage.setItem('tempoAtualMusica', playerMusica.currentTime);
    })

    articleTalentos.append(nome, desc, infoLive, frameVideo, linkPag2);
}

/* Função que cria uma tabela com algumas informações dos talentos. */
const criarTabelaInfo = () => {
    const corpoTabela = document.querySelector('tbody.tabelaInfo');
    /* Selecionado o elemento tbody com a classe tabelaInfo */

    talentos.forEach(element => {
        let linha = document.createElement('tr');

        let colunaNome = document.createElement('th');
        colunaNome.textContent = element.nome;

        let colunaAniversario = document.createElement('td');
        colunaAniversario.textContent = element.aniversario;

        let colunaAltura = document.createElement('td');
        if ( element.nome === 'Tsukumo Sana' ) {
            colunaAltura.textContent = '169cm*';
        }
        /* Simplificando a exibição da altura na tabela, com os detalhes sendo exibidos no tfoot e na tela de descrição da Sana. */

        else {
            colunaAltura.textContent = element.altura;
        }
        
        linha.append(colunaNome, colunaAniversario, colunaAltura);
        /* Colocando vários elementos como filhos do elemento linha. */

        corpoTabela.appendChild(linha);
    })
    /* Para cada elemento do array de talentos será executada uma função arrow que cria elementos html dinâmicamente para formar uma tabela. */
}

/* Estado inicial da página */
exibirNomesGrupos();
criarTabelaInfo();
destacarBotao();

const nomeArmazenado = localStorage.getItem('talento');
const grupoArmazenado = localStorage.getItem('grupo');

exibirInfoTalentos(mapaTalentos[nomeArmazenado] || mapaTalentos['Calli']);
/* Como é exibido na inicialização da página a seção com as informações de um talento, a API também já inicia aqui. */

exibirFotosPefilTalentos(mapaFotosGrupos[grupoArmazenado] || Myth);
/* Primeiro foram pegos os itens do armazenamento local, essas funções usam os valores armazenados como seus parâmetros OU (||) um valor que é usado como padrão, isso elimina duas estruturas if/else para verificar se as constantes tem valores definidos e válidos. Isso mesmo se eu editar os itens locais manualmente, se por exemplo talento tiver o valor 'Namie', que não é uma propriedade existente nos objetos que fazem o mapeamento, o valor padrão é invocado. */