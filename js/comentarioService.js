/* Acessando e manipulando os comentários no banco de dados. */

import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig";
/* Métodos do Firestore e as definições do banco desse app. */

/* Função assíncrona que tenta adicionar um documento no Firestore e retorna objetos que contém as informações relevantes sobre essa tentativa. Recebe como parâmetro os valores digitados nos campos input e textarea. */
const adicionarComentario = async (nome, comentario) => {
    try {
        /* Primeiro é feita a verificação se os campos estão vazios. */
        if ( nome.trim() && comentario.trim() ) {
            const docRef = await addDoc(collection(db, 'comentarios'), {
                nome: nome,
                comentario: comentario,
                dataPublicacao: new Date()
            })
            /* Se o documento for adicionado com sucesso, docRef armazenará suas informações. */

            return {
                sucesso: true,
                log: 'Documento criado com o id: ' + docRef.id,
                mensagem: 'Comentário adicionado com Sucesso!'
            }
            /* Retorno padronizado, com um indicador se o documento foi adicionado, uma mensagem para exibir no console e outra para exibir na tela. */
        }

        else {
            return {
                sucesso: false,
                mensagem: 'Não deixe os campos vazios.',
                log: 'Não deixe os campos vazios.'
            }
        }
    }

    catch ( erro ) {
        return {
            sucesso: false,
            mensagem: 'Não foi possível adicionar o comentário. ' + erro.message,
            log: erro
        }
    }
}

/* Função que adiciona uma consulta em tempo real no banco de dados Firestore, adiciona os resultados num vetor e chama uma função de callback que é recebida por parâmetro, enviando o vetor agora com os resultados ou vazio em caso de erro. */
const buscarComentarios = async (callbackFn) => {
    const busca = query(collection(db, 'comentarios'), orderBy('dataPublicacao', 'desc'));

    const unsubscribe = onSnapshot(busca, ( querySnapshot ) => {
        let lista = [];

        querySnapshot.forEach(doc => {
            lista.push({
                ...doc.data()
            })
        })

        callbackFn(lista);
        /* Ex: exibirComentarios([{nome: 'A', comentario: 'Olá mundo'}]) */
    },
    (erro) => {
        console.error('Erro na consulta de comentários: '+erro);
        callbackFn([], erro);
    });

    return unsubscribe;
    /* Retornando a função de consulta, que se for chamada remove a inscrição no escutador onSnapshot. */
}

export const commentService = { adicionarComentario, buscarComentarios };
/* Mapeando duas funções em um objeto para facilitar na importação. */