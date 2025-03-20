import { nomesGrupos, mapaFotosGrupos, Myth, Promise, Advent, Justice } from "./bancoTalentos.js";
/* Importação das variáveis no meu banco de dados local */

/* Função que cria botões de acordo com a quantidade de grupos no array de nomes. */
const exibirNomesGrupos = () => {
    const navGrupos = document.getElementsByClassName('grupos')[0];
    /* Pegando o primeiro elemento do resultado, o que tem índice 0. */

    nomesGrupos.forEach(element => {
        let botao = document.createElement('button');
        botao.textContent = element;
        botao.className = `nomesGrupos ${element}`;

        navGrupos.appendChild(botao);

        botao.addEventListener('click', () => {
            exibirFotosPefilTalentos(mapaFotosGrupos[element]);
            /* Usando notação de colchetes para acessar uma propriedade do objeto que mapeia todos os vetores que contém as fotos de perfil dos talentos. Esse valor será o parâmetro recebido pela função do escutador de evento, que iterará sobre o vetor. Ex: mapaFotosGrupos["Myth"] retorna o vetor Myth. */
        });
        /* Cada botão criado terá um escutador de eventos, ao ser clicado executará uma função com um parâmetro diferente. */
    });
    /* Para cada item do array de nomes, será executada uma função que recebe o elemento atual como parâmetro e então cria botões para serem exibidos na tela. */
}

/* Função que exibe as fotos de pefil dos talentos do grupo escolhido, com o inicial sendo o Myth e podendo ser mudado apertando nos botões com os nomes dos grupos. */
const exibirFotosPefilTalentos = grupo => {
/* Síntaxe de função arrow com apenas um parâmetro */

    const sectionTalentosImgs = document.querySelector('section.talentosImgs');
    const fotosExibidas = document.querySelectorAll('.fotoPerfilTalento');

    for ( let i = 0; i < fotosExibidas.length; i++ ) {
        sectionTalentosImgs.removeChild(fotosExibidas[i]);
    }
    /* Iterando sobre cada elemento encontrado pelo querySelectorAll, e então removendo esses elementos como filhos do contâiner que contêm as fotos de perfil, para que assim cada vez que for chamada a função pelo escutador de eventos, as fotos que estavam sendo exibidas antes sejam removidas */

    for (let i = 0; i < grupo.length; i++) {
        let imagem = document.createElement('img');
        imagem.setAttribute('src', `${grupo[i]}`);
        imagem.className = 'fotoPerfilTalento';
        sectionTalentosImgs.appendChild(imagem);
    }
    /* Para cada elemento do vetor que contém as imagens, será criado um elemento html para exibi-lás */
}

exibirNomesGrupos();
exibirFotosPefilTalentos(Myth);
