/* Integração com a API do YouTube. */

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
/* Importando uma variável de ambiente. */

const MAX_RESULTS = 3;
/* Definindo a quantidade máxima padrão de resultados para um busca, pouco usado no momento. */

let apiPronta = false;
let emProgresso = false;
/* Variáveis para indicar o estado atual da API e sua inicialização. */

let filaCallbacks = [];
/* Vetor para armazenar mais de uma chamada de inicialização da API. */

/* Função auxíliar que verifica o estado da API para então executar a função recebida por parâmetro, junto com seus parâmetros, ou argumentos. */
const executarQuandoPronta = async (funcao, ...args) => {
    try {
        if (apiPronta === false) {
            await iniciarApi();
        }

        return await funcao(...args);
        /* Exemplo: return await obterInfoCanal('@TakanashiKiara') Retorna o valor de retorno da função assíncrona obterInfoCanal, com as informações pertinentes ao canal que tem aquele arroba. */
    }
    
    catch (erro) {
        console.error('Erro ao executar a função com a API: '+erro);
        throw erro;    
    }
}

/* Função pública que é exportada, usando como ponte a função que verifica o estado da API antes de executar a função desejada, para garantir que a API esteja carregada. Recebe o @ do canal na função exibirInfoTalentos no app.js e retorna o valor de retorno de executarQuandoPronta que retorna o valor de retorno de obterInfoCanal, que é o resultado da consulta na API, referente ao canal específicado. */
const exibirInfo = async (arrobaCanal) => executarQuandoPronta(obterInfoCanal, arrobaCanal);

/* Função pública que é exportada, que primeiro obtém os detalhes do canal específcado para então retornar o valor de retorno de obterUploadsCanal, que é o resultado de uma busca na API, uma lista dos vídeos mais recentes de um canal, com o parâmetro da quantidade de resultados, com o padrão sendo o valor da variável definida pra isso. */
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

/* Função príncipal com uma promessa, que primeiro verifica o estado da API e então começa o processo de inicialização, usando then e catch. */
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
            /* Caso a função tenha sido chamada enquanto outra instância estava executando o código abaixo.Armazena os callbacks da promessa no array e retorna a promessa pendente, para então resolvê-las ou rejeitá-las após a API estiver pronta ou ter falhado ao iniciar, assim evitando inicializações paralelas e garantindo que todas as chamadas de função esperem até a API estiver pronta. */
        }

        emProgresso = true;

        /* Função que carrega o cliente da biblioteca de APIs do Google, chamando uma função anônina que carrega a API do YouTube e então resolve a promessa. */
        gapi.load('client', () => {
            gapi.client.setApiKey(API_KEY);
            
            gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
            .then(() => {
                console.log('API do YouTube inicializada com sucesso.');
                apiPronta = true;
                emProgresso = false;

                resolve(true);
                /* Resolvendo a promessa atual. */

                filaCallbacks.forEach(element => element.resolve(true));
                filaCallbacks = [];
                /* Cada promessa anterior que foi armazenada no array vai ser resolvida já que a API foi carregada e então o array é limpo. */
            })
            .catch((erro) => {
                console.log('Erro ao carregar a API do YouTube: ', JSON.stringify(erro));
                emProgresso = false;

                reject(erro);
                /* Rejeitando a promessa atual. */

                filaCallbacks.forEach(element => element.reject(false));
                filaCallbacks = [];
                /* Cada promessa anterior que foi armazenada no vetor vai ser rejeitada, já que a API não foi carregada e então o vetor é limpo. Como essas inicializações são chamadas quando o usuário clica numa foto de perfil de um talento, vide exibirFotosPefilTalentos em app.js, podem ser feitas novas tentativas facilmente. */
            })
        })
    })
}

/* Função interna que não é exportada, que faz uma consulta na API, buscando as informações de um canal cujo arroba, ou customUrl foi recebido. */
const obterInfoCanal = async (arrobaCanal = '@hololiveEnglish') => {
    try {
        if ( !gapi.client.youtube ) {
            throw new Error('A API não foi iniciada.');
        }
        /* Esse erro não é pra acontecer, já que essa função só é executada se a função executarQuandoPronta verificar que a API foi carregada. */

        const detalhesCanal = await gapi.client.youtube.channels.list({
            'part': [
                'contentDetails',
                'statistics',
                'snippet'
            ],
            'forHandle': arrobaCanal
        })
        /* part representa quais tipos de informação você quer receber, nesse caso na busca por canais: channels.list, e forHandle é a forma de identificação do canal utilizada, também podendo ser usado o id do canal ou o nome de usúario. */

        console.log(`Informações do canal ${arrobaCanal} obtidas com sucesso!`);

        return detalhesCanal;
    }

    catch (erro) {
        console.error(`Erro ao obter as informações do canal ${arrobaCanal}: ${erro}`);
        throw erro;
    }
}

/* Função interna que não é exportada, que recebe um objeto com as informações de um canal, e a quantidade de resultados desejada, para então fazer uma busca na playlist de uploads desse canal, retornando o objeto de resposta inteiro, mas com o objetivo príncipal de pegar o vídeo mais recente. */
const obterUploadsCanal = async (canal, quantidade = MAX_RESULTS) => {
    try {
        if ( !canal || !canal.result || !canal.result.items || !canal.result.items === 0 ) {
            throw new Error('Detalhes do canal inválidos ou vazios.');
        }

        const idPlaylistUploads = canal.result.items[0].contentDetails.relatedPlaylists.uploads;
        const urlCanal = canal.result.items[0].snippet.customUrl;
        /* Acessando informações específicas do canal recebido. */

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

export { iniciarApi, exibirInfo, exibirUploads };
/* Exportando as funções que o app vai chamar durante a execução. */