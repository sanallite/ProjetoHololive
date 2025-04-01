import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const adicionarComentario = async (nome, comentario) => {
    try {
        if ( nome.trim() && comentario.trim() ) {
            const docRef = await addDoc(collection(db, 'comentarios'), {
                nome: nome,
                comentario: comentario
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

export { adicionarComentario }