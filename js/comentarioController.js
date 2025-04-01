import { adicionarComentario } from './comentarioService';

const campoComent = document.querySelector('section#comentarios textarea');
const campoNome = document.querySelector('section#comentarios input:first-of-type');
const formComentarios = document.querySelector('section#comentarios form');
const botaoSubmit = document.querySelector('section#comentarios input[type="submit"]');
const mensagemResposta = document.querySelector('p.feedbackComent');

const alternarCampos = campo => campo.toggleAttribute('disabled');

formComentarios.addEventListener('submit', async (event) => {
    event.preventDefault();

    alternarCampos(campoNome);
    alternarCampos(campoComent);
    alternarCampos(botaoSubmit);

    const resposta = await adicionarComentario(campoNome.value, campoComent.value);

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