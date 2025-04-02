import { comentService } from './comentarioService';

const campoComent = document.querySelector('section#comentarios textarea');
const campoNome = document.querySelector('section#comentarios input:first-of-type');
const formComentarios = document.querySelector('section#comentarios form');
const botaoSubmit = document.querySelector('section#comentarios input[type="submit"]');
const mensagemResposta = document.querySelector('p.feedbackComent');
const listaComentarios = document.querySelector('div#listaComentarios');

const alternarCampos = campo => campo.toggleAttribute('disabled');

const exibirComentarios = (comentarios, erro) => {
    if ( erro ) {
        console.error(erro);

        const mensagem = document.createElement('p');
        mensagem.textContent = erro;
        listaComentarios.appendChild(mensagem);

        return;
    }

    else {
        comentarios.forEach(element => {
            const container = document.createElement('div');

            const nome = document.createElement('p');
            nome.textContent = element.nome;

            const comentario = document.createElement('p');
            comentario.textContent = element.comentario;

            container.classList.add('comentario');
            container.append(nome, comentario);

            listaComentarios.append(container);
        });
    }
}

formComentarios.addEventListener('submit', async (event) => {
    event.preventDefault();

    alternarCampos(campoNome);
    alternarCampos(campoComent);
    alternarCampos(botaoSubmit);

    const resposta = await comentService.adicionarComentario(campoNome.value, campoComent.value);

    if ( resposta.sucesso === true ) {
        console.log(resposta?.log);
        
        mensagemResposta.textContent = resposta.mensagem || 'Comentário criado com sucesso!';

        setTimeout(() => {
            alternarCampos(campoNome);
            alternarCampos(campoComent);
            alternarCampos(botaoSubmit);
        }, 300000)
    }

    else {
        console.log(resposta?.log);

        mensagemResposta.textContent = resposta.mensagem || 'Não foi possível criar o comentário.';

        alternarCampos(campoNome);
        alternarCampos(campoComent);
        alternarCampos(botaoSubmit);
    }
})

const unsubscribe = comentService.buscarComentarios(exibirComentarios);

window.addEventListener('beforeunload', () => {
    unsubscribe();
})