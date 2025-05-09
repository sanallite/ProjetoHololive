/* Manipulando os comentários na interface. */

import { commentService } from './comentarioService';
/* Esse é um objeto que mapeia as funções que são exportadas no outro arquivo, para podermos acessarmos nesse arquivo como métodos. */

const campoComent = document.querySelector('section#comentarios textarea');
const campoNome = document.querySelector('section#comentarios input:first-of-type');
const formComentarios = document.querySelector('section#comentarios form');
const botaoSubmit = document.querySelector('section#comentarios input[type="submit"]');
const mensagemResposta = document.querySelector('p.feedbackComment');
const listaComentarios = document.querySelector('div#listaComentarios');

const classes = ['scAzul', 'scTurquesa', 'scAmarelo', 'scLaranja', 'scRoxo', 'scVermelho'];
/* Classes CSS */

const alternarCampos = campo => campo.toggleAttribute('disabled');
/* Desativando a interação com os elementos html através de um atributo. */

/* Função para escolher um item aleatório do vetor, que define uma classe para estilização dos comentários. */
const corAleatoria = () => {
    let escolha = Math.floor(Math.random() * classes.length);

    return escolha;
}

/* Função que é usada como callback do método que faz uma busca no banco de dados de comentários no Firestore. Essa função cria elementos com o conteúdo de cada documento na coleção comentários. Recebe como parâmetro um array e um objeto de erro, que é nulo por padrão, caso não tenha sido um segundo parâmetro na chamada dessa função. */
const exibirComentarios = (comentarios, erro = null) => {
    if ( erro ) {
        console.error(erro);

        const mensagem = document.createElement('p');
        mensagem.textContent = erro;
        listaComentarios.appendChild(mensagem);

        return;
    }

    else {
        listaComentarios.innerHTML = '';
        /* Para remover o conteúdo desse elemento é preciso usar o innerHTML, pois o onSnapshot precisa que esse nó continue intacto na árvore do documento, então não dá pra usar métodos como removeChild. */
        
        /* Para cada item do array, que são objetos com os dados dos documentos encontrados na consulta, serão criados elementos para exibição desses comentários. */
        comentarios.forEach(element => {
            const container = document.createElement('div');
            const divCommentDate = document.createElement('div');

            const nome = document.createElement('p');
            nome.textContent = element.nome;

            const comentario = document.createElement('p');
            comentario.textContent = element.comentario;

            const publicacao = element.dataPublicacao.toDate();
            /* Convertendo o timestamp do Firebase em uma data válida para usar os métodos do JS */

            const corComentario = classes[corAleatoria()];
            container.classList.add(corComentario);
            /* Adicionando uma classe aleatória, para replicar as diferentes cores dos Super Chats do YouTube! */

            const data = document.createElement('p');
            data.textContent = `${String(publicacao.getDate()).padStart(2, '0')} de ${publicacao.toLocaleString('pt-br', { month: 'long' })} de ${publicacao.getFullYear()}`;
            /* Data formatada dojeito que eu quero. Ex: 06 de abril de 2025. */ 

            container.classList.add('comentario');

            divCommentDate.append(comentario, data);
            container.append(nome, divCommentDate);

            listaComentarios.append(container);
        });
    }
}

const unsubscribe = await commentService.buscarComentarios(exibirComentarios);
/* Armazenando a função de retorno do método buscarComentarios, que é uma promesa do onSnapshot, que se executada remove a inscrição do escutador de consultas em tempo real. */

/* Escutador de eventos assíncrono para chamar o método de adição de comentários, que processa os resultados para dar uma resposta ao usuário. */
formComentarios.addEventListener('submit', async (event) => {
    event.preventDefault();

    alternarCampos(campoNome);
    alternarCampos(campoComent);
    alternarCampos(botaoSubmit);
    /* Primeiro os elementos são desativados... */

    const resposta = await commentService.adicionarComentario(campoNome.value, campoComent.value);

    if ( resposta.sucesso === true ) {
        console.log('Resposta da adição de comentários: '+resposta?.log);

        mensagemResposta.style.display = 'block';
        mensagemResposta.textContent = resposta.mensagem || 'Comentário criado com sucesso!';
        /* Definindo mensagens padrão caso tenha sido recebido um valor não definido. */

        setTimeout(() => {
            mensagemResposta.textContent = '';
            mensagemResposta.style.display = 'none';
        }, 5000)        

        campoNome.value = '';
        campoComent.value = '';

        setTimeout(() => {
            alternarCampos(campoNome);
            alternarCampos(campoComent);
            alternarCampos(botaoSubmit);
        }, 300000)
        /* ...E só serão ativados depois de cinco minutos, em caso de sucesso, ou imediatamente caso contrário. */
    }

    else {
        console.log('Resposta da adição de comentários: '+resposta?.log);

        mensagemResposta.style.display = 'block';
        mensagemResposta.textContent = resposta.mensagem || 'Não foi possível criar o comentário.'; 

        setTimeout(() => {
            mensagemResposta.textContent = '';
            mensagemResposta.style.display = 'none';
        }, 5000)

        alternarCampos(campoNome);
        alternarCampos(campoComent);
        alternarCampos(botaoSubmit);
    }
})

/* Removendo ou limpando a inscrição manualmente como a janela for fechada ou recarregada. */
window.addEventListener('beforeunload', () => {
    unsubscribe();
    console.log('Inscrição cancelada.');
})

/* Forma simples de testar se a função de limpeza da inscrição do escutador em tempo real onSnapshot está ocorrendo corretamente. Após clicar no botão, se um comentário for adicionado ou alterado, não será feita nenhuma mudança na exibição. */
const botaoTeste = document.createElement('button');
botaoTeste.textContent = 'Desinscrever-se';
botaoTeste.addEventListener('click', () => {
    console.log(unsubscribe);
    unsubscribe();
    console.log(unsubscribe);
})
/* formComentarios.append(botaoTeste); */