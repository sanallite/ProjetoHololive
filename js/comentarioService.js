/* Acessando e manipulando os comentários no banco de dados. */

import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig";
/* Métodos do Firestore e as definições do banco desse app. */

/* Função assíncrona que tenta adicionar um documento no Firestore e retorna objetos que contém as informações relevantes sobre essa tentativa. Recebe como parâmetro os valores digitados nos campos input e textarea. */
const adicionarComentario = async (nome, comentario) => {
    try {
        if ( nome.trim() && comentario.trim() ) {
            const docRef = await addDoc(collection(db, 'comentarios'), {
                nome: nome,
                comentario: comentario,
                dataPublicacao: new Date()
            })

            return {
                sucesso: true,
                log: 'Documento criado com o id: ' + docRef.id,
                mensagem: 'Comentário adicionado com Sucesso!'
            }
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
    },
    (erro) => {
        console.error('Erro na consulta de comentários: '+erro);
        callbackFn([], erro);
    });

    return unsubscribe;
}

export const commentService = { adicionarComentario, buscarComentarios };