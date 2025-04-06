/* Integração com a API do YouTube. */

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const MAX_RESULTS = 3;

let apiPronta = false;
let emProgresso = false;
let filaCallbacks = [];

const executarQuandoPronta = async (funcao, ...args) => {
    try {
        if (apiPronta === false) {
            await iniciarApi();
        }

        return await funcao(...args);
    }
    
    catch (erro) {
        console.error('Erro ao executar a função com a API: '+erro);
        throw erro;    
    }
}

const exibirInfo = async (arrobaCanal) => executarQuandoPronta(obterInfoCanal, arrobaCanal);

const exibirUploads = async (arrobaCanal, quantidadeResultados = MAX_RESULTS) => {
    try {
        const canal = await executarQuandoPronta(obterInfoCanal, arrobaCanal);

        return await obterUploadsCanal(canal, quantidadeResultados);
    }

    catch (erro) {
        console.error('Falha ao exibir os uploads: '+erro);
        throw erro;
    }
}

const iniciarApi = () => {
    return new Promise((resolve, reject) => {
        if ( apiPronta ) {
            console.log('A API já estava inicializada.');
            resolve(true);
            return;
        }

        if ( emProgresso ) {
            console.log('Inicialização em andamento, adicionando a fila.');
            filaCallbacks.push({ resolve, reject });
            return;
        }

        emProgresso = true;

        gapi.load('client', () => {
            gapi.client.setApiKey(API_KEY);
            
            gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
            .then(() => {
                console.log('API do YouTube inicializada com sucesso.');
                apiPronta = true;
                emProgresso = false;

                resolve(true);

                filaCallbacks.forEach(element => element.resolve(true));
                filaCallbacks = [];
            })
            .catch((erro) => {
                console.log('Erro ao carregar a API do YouTube: ', JSON.stringify(erro));
                emProgresso = false;

                reject(erro);

                filaCallbacks.forEach(element => element.reject(false));
                filaCallbacks = [];
            })
        })
    })
}

const obterInfoCanal = async (arrobaCanal = '@hololiveEnglish') => {
    try {
        if ( !gapi.client.youtube ) {
            throw new Error('A API não foi iniciada.');
        }

        const detalhesCanal = await gapi.client.youtube.channels.list({
            'part': [
                'contentDetails',
                'statistics',
                'snippet'
            ],
            'forHandle': arrobaCanal
        })

        console.log(`Informações do canal ${arrobaCanal} obtidas com sucesso!`);

        return detalhesCanal;
    }

    catch (erro) {
        console.error(`Erro ao obter as informações do canal ${arrobaCanal}: ${erro}`);
        throw erro;
    }
}

const obterUploadsCanal = async (canal, quantidade = MAX_RESULTS) => {
    try {
        if ( !canal || !canal.result || !canal.result.items || !canal.result.items === 0 ) {
            throw new Error('Detalhes do canal inválidos ou vazios.');
        }

        const idPlaylistUploads = canal.result.items[0].contentDetails.relatedPlaylists.uploads;
        const urlCanal = canal.result.items[0].snippet.customUrl;

        const resposta = await gapi.client.youtube.playlistItems.list({
            'part': [
                'snippet',
                'contentDetails'
            ],
            'playlistId': idPlaylistUploads,
            'maxResults': quantidade
        });

        console.log(`Uploads do canal ${urlCanal} obtidos com sucesso!`);

        return resposta;
    }

    catch (erro) {
        console.error('Erro ao obter uploads do canal: '+erro);
        throw erro;
    }
}

export { iniciarApi, exibirInfo, exibirUploads }