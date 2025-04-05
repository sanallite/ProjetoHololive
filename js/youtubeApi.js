/* Integração com a API do YouTube. */

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const MAX_RESULTS = 5;

const carregarCliente = async () => {
    gapi.client.setApiKey(API_KEY);

    try {
        const carregar = await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');

        console.log('API do YouTube foi carregada.');
        return carregar;
    }

    catch (erro) {
        console.log('Erro ao carregar API do YouTube: '+erro.message);
        console.error(JSON.stringify(erro));
        return;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gapi.load('client', carregarCliente);
})

const exibirInfoCanal = async (idCanal = 'https://www.youtube.com/@hololiveEnglish') => {
    if (!gapi?.client?.youtube) {
        console.error("API do YouTube não foi inicializada.");
        return Promise.reject("API não inicializada.");
    }

    console.log(idCanal)
}

setTimeout(exibirInfoCanal, 2000)