/* Configuração da conexão com o Firebase, iniciando o app e o banco de dados Firestore. */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
    /* Importando as variáveis de ambiente que contém as informações relevantes do app, usando o prefixo VITE_ que indica que elas são seguras para serem exibidas no código do lado cliente, já que nesse caso o mais importante são as regras e restrições que você define no Firebase. */
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
/* Exportando os objetos com as informações do app. */