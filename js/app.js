import { talentos, nomesGrupos, mapaFotosGrupos, mapaTalentos, Myth, Promise, Advent, Justice } from "./bancoTalentos.js";
/* Importação das variáveis no meu banco de dados local */

import { exibirInfo, exibirUploads } from './youtubeApi.js';

/* Função que cria botões de acordo com a quantidade de grupos no array de nomes. */
const exibirNomesGrupos = () => {
    const navGrupos = document.getElementById('grupos');

    nomesGrupos.forEach(element => {
        let botao = document.createElement('button');
        botao.textContent = element;
        botao.className = `nomesGrupos ${element}`;

        navGrupos.appendChild(botao);

        botao.addEventListener('click', () => {
            exibirFotosPefilTalentos(mapaFotosGrupos[element]);
            /* Usando notação de colchetes para acessar uma propriedade do objeto que mapeia todos os vetores que contém as fotos de perfil dos talentos. Esse valor será o parâmetro recebido pela função do escutador de evento, que iterará sobre o vetor. Ex: mapaFotosGrupos["Myth"] retorna o vetor Myth. */
        });
        /* Cada botão criado terá um escutador de eventos, ao ser clicado executará uma função anônima, que chama outra com um parâmetro diferente de acordo com o elemento do array, que representa um dos grupos. */
    })
    /* Para cada item do array de nomes, será executada uma função que recebe o elemento atual como parâmetro e então cria botões para serem exibidos na tela. */
}

/* Função que exibe as fotos de pefil dos talentos do grupo escolhido, com o inicial sendo o Myth e podendo ser mudado apertando nos botões com os nomes dos grupos. */
const exibirFotosPefilTalentos = grupo => {
/* Síntaxe de função arrow com apenas um parâmetro */

    const sectionTalentosImgs = document.querySelector('section#talentosImgs');
    const fotosExibidas = document.querySelectorAll('.fotoPerfilTalento');

    for ( let i = 0; i < fotosExibidas.length; i++ ) {
        sectionTalentosImgs.removeChild(fotosExibidas[i]);
    }
    /* Iterando sobre cada elemento encontrado pelo querySelectorAll, e então removendo esses elementos como filhos do contâiner que contêm as fotos de perfil, para que assim cada vez que for chamada a função pelo escutador de eventos, as fotos que estavam sendo exibidas antes sejam removidas */

    for (let i = 0; i < grupo.length; i++) {
        let imagem = document.createElement('img');
        imagem.setAttribute('src', `${grupo[i][0]}`);
        imagem.className = `fotoPerfilTalento ${grupo[i][1]}`;
        /* O array de fotos é uma matriz com cada elemento sendo outro array, com o primeiro elemento sendo o caminho da foto e o segundo o nome do talento, que é usado na chamada do escutador de eventos. */

        imagem.addEventListener('click', () => {
            exibirInfoTalentos(mapaTalentos[grupo[i][1]]);
        });
        /* Quando uma das imagens for clicada será chamada uma função que envia como parâmetro uma propriedade do objeto mapaTalentos, com o valor dessa propriedade sendo um objeto que contém os dados do talento em outro array. Ex: mapaTalentos[grupo[i][1]] = mapaTalentos['Gura'] */

        sectionTalentosImgs.appendChild(imagem);
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

    const infoCanal = await exibirInfo(talento.canal);
    const uploadsCanal = await exibirUploads(talento.canal, 1);

    console.log(infoCanal);
    console.log(uploadsCanal);

    let numeroInscritos = infoCanal.result.items[0].statistics.subscriberCount;
    let idVideoMaisRecente = uploadsCanal.result.items[0].contentDetails.videoId;

    let divInfo = document.createElement('div');
    divInfo.className = `descTalento ${talento.nome}`;

    let nome = document.createElement('h3');
    nome.textContent = talento.nome;

    let desc = document.createElement('p');
    desc.innerHTML = talento.descricao;

    let inscritos = document.createElement('p');
    inscritos.textContent = 'Inscritos: '+numeroInscritos;

    let linkLive = document.createElement('a');
    linkLive.setAttribute('href', `https://youtube.com/watch?v=${idVideoMaisRecente}`);
    linkLive.setAttribute('target', '_blank');
    linkLive.textContent = 'Livestream';

    divInfo.appendChild(nome);
    divInfo.appendChild(desc);
    divInfo.append(inscritos, linkLive);

    articleTalentos.appendChild(divInfo);
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

        if ( element.nome === 'Tsukumo Sana' ) {
            element.altura = '169cm*';
        }
        /* Simplificando a exibição da altura na tabela, com os detalhes sendo exibidos no tfoot e na tela de descrição da Sana. */

        let colunaAltura = document.createElement('td');
        colunaAltura.textContent = element.altura;
        
        linha.append(colunaNome, colunaAniversario, colunaAltura);
        /* Colocando vários elementos como filhos do elemento linha. */

        corpoTabela.appendChild(linha);
    })
    /* Para cada elemento do array de talentos será executada uma função arrow que cria elementos html dinâmicamente para formar uma tabela. */
}

/* Estado inicial da página */
exibirNomesGrupos();
exibirFotosPefilTalentos(Myth);
exibirInfoTalentos(mapaTalentos['Gura']);
criarTabelaInfo();