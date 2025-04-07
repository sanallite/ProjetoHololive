/* Banco de talentos com os dados das nossas Idols. */

const nomesGrupos =  [ 'Myth', 'Promise','Advent', 'Justice' ];

const talentos = [
    {
        nome: 'Gawr Gura',
        descricao: `Gura é amigável e prontamente agradável, e muitas vezes diverte seus espectadores com travessuras tolas. Ela não tem senso de direção, muitas vezes escreve e pronuncia palavras incorretamente, tem problemas para se lembrar de sua própria idade e sempre falha em resolver problemas básicos de matemática, levando os espectadores a chamá-la afetuosamente de "tubarão burro". De forma memorável, um espectador declarou que "Gura tem um coração de ouro e uma cabeça de osso.`,
        aniversario: '20 de Junho',
        altura: '141cm',
        ilustrador: 'Amashiro Natsuki',
        nomeFas: 'Chumbuds',
        grupo: 'Myth',
        canal: '@GawrGura'
    },
    {
        nome: 'Amelia Watson',
        descricao: `Afiliada - Amelia é uma garota bastante excêntrica que costuma ser vista se misturando ou provocando suas colegas membros da holoMyth. Ela geralmente é gentil, solidária e doce, como mostrado quando frequentemente assiste aos streams de seus colegas e muitas vezes ajuda Gura de bom grado no Minecraft. No entanto, Amelia também gosta de brincar com os outros membros e, às vezes, até fazer comentários obscenos, como nomear uma de suas minas no Minecraft "Gura's Backdoor".`,
        aniversario: '06 de Janeiro',
        altura: '150cm',
        ilustrador: 'Nabi',
        nomeFas: 'Teamates',
        grupo: 'Myth',
        canal: '@WatsonAmelia',
        canalSecreto: '@dooby3d'
    },
    {
        nome: 'Takanashi Kiara',
        descricao: `Kiara é entusiasmada, amigável e aberta com seus sentimentos. Ela se preocupa muito com seus amigos e familiares e sente muita falta deles enquanto está no exterior. Embora enérgica e às vezes caótica por natureza, e ansiosa para colaborar com outros membros, ela é secretamente bastante tímida. Ela às vezes tem cérebro de pássaro, sendo esquecida ou tendo um curto período de atenção. Ela prefere videogames com objetivos fixos, como RPGs, em vez de jogos de mundo aberto como Minecraft.`,
        aniversario: '06 de Julho',
        altura: '165cm',
        ilustrador: 'huke',
        nomeFas: 'KFP',
        grupo: 'Myth',
        canal: '@TakanashiKiara'
    },
    {
        nome: 'Mori Calliope',
        descricao: `Calliope está igualmente empolgada com o rap e com a "colheita". Suas armas favoritas incluem sua foice (apelidada de "Ricky") e o mangual, uma arma medieval feita de uma bola de metal com pontas em uma corrente.<br>
        Calliope é conhecido por ter uma das vozes mais graves do hololive, ainda mais do que Nekomata Okayu, Tokoyami Towa e A-chan. Embora fluente em inglês, Calliope muitas vezes não consegue entender os modos de fala atuais, como o uso de contrações ou gírias modernas. Ela é facilmente perturbada pelo romance, levando alguns a chamá-la de "tsundereaper".`,
        aniversario: '04 de Abril',
        altura: '167cm',
        ilustrador: 'Yukisame',
        nomeFas: 'Dead Beats',
        grupo: 'Myth',
        canal: '@MoriCalliope'
    },
    {
        nome: `Ninomae Ina'nis`,
        descricao: `Ina é uma garota gentil, pacífica e pé no chão, tanto que reverte o estresse e a insanidade de seus espectadores, em vez de encorajá-los, apesar de seu papel Lovecraftiano como "a donzela que fala pelos antigos deuses".<br>
        Ela é atenciosa e gentil; Takanashi Kiara relata que, quando ela está deprimida, Ina é sempre a primeira a enviar uma mensagem para ela. Em total contraste com o gremlin salgado Amelia, Ina tem paciência quase infinita e é amplamente considerada o membro mais bem-comportado de sua geração.`,
        aniversario: '20 de Maio',
        altura: '157cm',
        ilustrador: 'Kuroboshi Kouhaku',
        nomeFas: 'Tentacult',
        grupo: 'Myth',
        canal: '@NinomaeInanis'
    },
    {
        nome: 'IRyS',
        descricao: `IryS é uma garota doce e um tanto tímida que mantém a positividade perto de seu coração, olhando para o lado bom das coisas enquanto encoraja os outros a fazerem o mesmo. Ao mesmo tempo, ela costuma exibir um lado mais "sádico", com uma tendência à violência e (muitas vezes sem querer) dizendo coisas questionáveis. A dualidade de sua personalidade é frequentemente ridicularizada por seus fãs como a dicotomia entre seus lados angelicais e demoníacos.`,
        aniversario: '07 de Março',
        altura: '166cm',
        ilustrador: 'redjuice',
        nomeFas: 'IRyStocrats',
        grupo: 'Project IRyS / Promise',
        canal: '@IRyS'
    },
    {
        nome: 'Tsukumo Sana',
        descricao: `Graduada - Tsukumo Sana tinha uma atitude alegre e às vezes infantil, e estava sempre transbordando de entusiasmo borbulhante, não importa o que estivesse fazendo. Ela tinha interesse em astronomia e astrologia e frequentemente fazia referências ao espaço. Ela gostava de seus colegas hololive -membros do Conselho, e constantemente os adorava sempre que tinha a chance. Sana gostou de compartilhar curiosidades, principalmente aquelas com grandes números. Ela também pode ter uma tendência a exagerar, já que a idade e a altura irrestrita que ela escreveu em sua estreia estavam erradas em uma ordem de magnitude.`,
        aniversario: '10 de Junho',
        altura: '169cm (com limitador, e sem limitador 1.697.840km)',
        ilustrador: 'pako',
        nomeFas: 'Sanallites',
        grupo: 'Council',
        canal: '@TsukumoSana',
        canalSecreto: '@notNamie'
    },
    {
        nome: 'Ceres Fauna',
        descricao: `Graduada - Na estreia, Hakos Baelz descreveu Fauna como uma mãe natural, uma beleza reconfortante e alguém que dá os melhores carinhos na cabeça. Os fãs também notaram rapidamente sua notável semelhança com Yukihana Lamy em muitos aspectos, desde o tom de voz e a personalidade maternal até o motivo geral da natureza. Fauna parece ser extremamente protetora com seus fãs e Nanashi Mumei ao ponto de possessividade e ciúme extremo, e não hesitará em mudar para um tom mais condescendente quando se depara com algo inaceitável. Devido a seus traços possessivos, Fauna freqüentemente tenta convencer Mumei e os humanos a "voltarem à natureza" sempre que Mumei fica chateado. Fauna também fica embaraçada com bastante facilidade e usa o tique verbal "uuuu" com frequência`,
        aniversario: '21 de Março',
        altura: '164cm',
        ilustrador: 'Tohsaka Asagi',
        nomeFas: 'Saplings',
        grupo: 'Council / Promise',
        canal: '@CeresFauna',
        canalSecreto: '@niminightmare'
    },
    {
        nome: 'Ouro Kronii',
        descricao: `Ouro Kronii é muito confiante, egocêntrica e completamente sem medo de se elogiar. No entanto, ela também se descreve como alguém que geralmente não é uma pessoa feliz, a ponto de listar o "medo existencial" como um hobby. Kronii pode ser brincalhona às vezes, especialmente com seus Kronies, e a combinação de seu humor inexpressivo e piadas secas contrasta com muitos dos outros membros que são mais extrovertidos ou mais gentis com suas palavras.<br>
        Sua voz é poderosa e bem controlada, dando uma vibe de "irmã mais velha", embora sua personalidade real seja um pouco mais próxima de uma "tia legal" ou um personagem de alívio cômico dolorosamente identificável. Sua confiança projetada e auto-elogio podem ser interpretados como um mecanismo de enfrentamento para o sofrimento constante que ela suporta, tanto devido à sua hilariante má sorte quanto ao fato de que os outros adoram provocá-la tanto.`,
        aniversario: '14 de Março',
        altura: '168cm',
        ilustrador: 'WADARCO',
        nomeFas: 'Kronies',
        grupo: 'Council / Promise',
        canal: '@OuroKronii'
    },
    {
        nome: 'Nanashi Mumei',
        descricao: `Na estreia, Mumei deu a impressão de uma garota alegre e gentil, de fala mansa e um tanto inocente, especialmente quando comparada a seus colegas. Ela era inicialmente muito tímida e muitas vezes visivelmente nervosa durante as transmissões.<br>
        No entanto, conforme ela ganhou confiança no streaming, uma personalidade diferente surgiu. Os fluxos de Mumei são agora caracterizados pela dualidade entre um tom de energia relativamente baixa, relaxante e confortável para outro lado mais espontâneo e enérgico; com ela frequentemente demonstrando tendências psicopáticas nesses momentos. Embora a disparidade entre seus pensamentos macabros e sua voz fofa tenha surpreendido muitos no início, a linha que separa esses dois lados se tornou um ponto indistinto – com a apreciação de Mumei pelo grotesco e “amaldiçoado” sendo totalmente abraçada pelos Hoomans hoje.`,
        aniversario: '04 de Agosto',
        altura: '156cm',
        ilustrador: 'azure',
        nomeFas: 'Hoomans',
        grupo: 'Council / Promise',
        canal: '@NanashiMumei',
        canalSecreto: '@shachimu'
    },
    {
        nome: 'Hakos Baelz',
        descricao: `Hakos Baelz é barulhenta, imprevisível e caótico=a. Apesar disso, ela parece ter talento para liderar as discussões e manter as coisas o mais organizadas possível, como visto na primeira reunião do hololive -Council-. Ceres Fauna até a descreveu como uma líder nata, e Baelz eventualmente abraçou o papel de "Líder do -Conselho-". Em contraste com sua natureza caótica, ela fala com bastante carinho dos outros membros do Conselho, e é considerada por eles adorável por sua vez. Baelz também pode ser facilmente perturbada se as coisas não acontecerem do jeito dela.`,
        aniversario: '29 de Fevereiro',
        altura: '149cm',
        ilustrador: 'Mika Pikazo',
        nomeFas: 'Brats',
        grupo: 'Council / Promise',
        canal: '@HakosBaelz'
    },
    {
        nome: 'Shiori Novella',
        descricao: `Impulsionada por sua sede de conhecimento, Shiori Novella é “The Archiver”. Ela transforma suas histórias favoritas e memórias preciosas em marcadores e os salva. Por infortúnio, descobriu-se que ela obteve conhecimento proibido em uma de suas histórias e foi presa. Mas para ela, essa experiência em si é apenas uma história fascinante. Para continuar sua busca por mais histórias, ela planejou e executou uma fuga da prisão.`,
        aniversario: '02 de Maio',
        altura: '163cm',
        ilustrador: 'KAYAHARA',
        nomeFas: 'Novelites',
        grupo: 'Advent',
        canal: '@ShioriNovella'
    },
    {
        nome: 'Koseki Bijou',
        descricao: `Formada a partir da cristalização de todas as formas de emoção humana, Koseki Bijou é “A Jóia das Emoções”. Ao longo de anos e anos, emoções de beleza e sujeira se entrelaçaram nela sob imensa pressão, resultando em um brilho incomparável.
        <br>Seu brilho antigo e místico causou conflitos entre as massas de gananciosos, que lutaram pela posse dela. Isso a levou a ser presa em segredo, longe do alcance dos humanos.`,
        aniversario: '14 de Abril',
        altura: '140cm',
        ilustrador: 'Kitada mo',
        nomeFas: 'Pebbles',
        grupo: 'Advent',
        canal: '@KosekiBijou'
    },
    {
        nome: 'Nerissa Ravencroft',
        descricao: `Com um profundo amor pela música, Nerissa Ravencroft é “O Demônio do Som”. Seu amor poderoso se transformou em um poder sombrio que habitava seu canto, dando à sua música o potencial de enlouquecer o mundo inteiro. Os deuses, temerosos de sua bela voz, decidiram selá-la por toda a eternidade, mas isso não selou seu desejo de cantar para os outros. Enquanto ela estava selada, ela conheceu a cultura otaku japonesa e atualmente é fascinada por canções de ídolos e lanternas. Talvez a vida dela na prisão não tenha sido tão ruim assim.`,
        aniversario: '21 de Novembro',
        altura: '175cm',
        ilustrador: 'ebplus',
        nomeFas: 'Jailbirds',
        grupo: 'Advent',
        canal: '@NerissaRavencroft'
    },
    {
        nome: 'Fuwawa Abyssgard',
        descricao: `A fofa irmã gêmea mais velha dos Cães de Guarda Demoníacos, que foram selados na Cela por serem um pé no saco, Fuwawa Abyssgard é "The Fluffy One". Seu dever é cuidar com calma de sua irmã gêmea mais nova, Mococo, e de seu animal de estimação, Pero, mas essa calma pode durar pouco. No final das contas, ela é uma garota animada e barulhenta que adora conversar e brincar.`,
        aniversario: '01 de Fevereiro',
        altura: '155cm',
        ilustrador: 'ICOMOCHI',
        nomeFas: 'Ruffians',
        grupo: 'Advent',
        canal: '@FUWAMOCOch'
    },
    {
        nome: 'Mococo Abyssgard',
        descricao: `A irmã gêmea mais nova e peluda dos Cães de Guarda Demoníacos, que foram selados na Cela por serem um pé no saco, Mococo Abyssgard é "The Fuzzy One". A indisciplinada Mococo passava todo o tempo presa assistindo anime e jogando, muitas vezes atraindo sua irmã gêmea mais velha, Fuwawa, e seu animal de estimação, Pero, para travessuras mais caóticas. Há rumores de que ela participou da fuga da prisão só por diversão.`,
        aniversario: '02 de Fevereiro',
        altura: '155cm',
        ilustrador: 'ICOMOCHI',
        nomeFas: 'Ruffians',
        grupo: 'Advent',
        canal: '@FUWAMOCOch'
    },
    {
        nome: 'Elizabeth Rose Bloodflame',
        descricao: `A Rainha Escarlate, Elizabeth Rose Bloodflame abre caminho para o mundo e todo o seu povo.<br>
        Ela não apenas fica na vanguarda durante as missões com suas proezas físicas, mas também captura os corações de todos ao seu redor com sua bela voz para cantar.<br>
        Ela é altamente autodisciplinada e um pouco dura demais consigo mesma, mas, talvez devido à ênfase de sua cultura na educação e nas maneiras, ela tende a ser um pouco branda com as pessoas ao seu redor.<br>
        Como resultado, ela passa seus dias estressada com seu trabalho coordenando a Justiça, mas parece que não há nada que uma boa soneca em uma cama confortável não possa consertar.`,
        aniversario: '25 de Abril',
        altura: '171cm',
        ilustrador: 'MEPHISTO',
        nomeFas: 'Rosarians',
        grupo: 'Justice',
        canal: '@holoen_erbloodflame'
    },
    {
        nome: 'Gigi Murin',
        descricao: `Nascida e criada sob a bandeira da Liberdade, Gigi Murin é uma caçadora de espírito livre e gremlin travessa.<br>
        Enquanto ela é proficiente em perseguir alvos com pura intuição, ela luta com a memorização de direções e tomar decisões calculadas.<br>
        Ela afirma que prefere não passar muito tempo pensando porque isso faz sua cabeça doer.<br>
        Essas peculiaridades também estão presentes em sua vida cotidiana, onde ela tende a priorizar seu desejo instintivo por diversão e ser boba sobre qualquer outra coisa.<br>
        Ela costuma ser a fonte de dores de cabeça para quem está ao seu redor, causando problemas porque ela “achou que seria engraçado.”`,
        aniversario: '18 de Outubro',
        altura: '153cm',
        ilustrador: 'Makihitsuji',
        nomeFas: 'Grems',
        grupo: 'Justice',
        canal: '@holoen_gigimurin'
    },
    {
        nome: 'Cecilia Immergreen',
        descricao: `Cecilia Immergreen é um autômato antigo, com propensão para flores, chá e criação musical.<br>
        Elaborada na antiguidade, Cecília foi originalmente feita para ser dedicada à servidão eterna.<br>
        No entanto, nos últimos tempos, ela começou a relaxar no trabalho, cozinhando preguiçosamente principalmente batatas junto com tudo o mais que encontrava na cozinha.<br>
        Ela praticamente abandonou seus deveres, fazendo o mínimo e mergulhando principalmente em seus vários hobbies astutos.<br>
        Com novos interesses na vida, ela assume cada nova experiência com a pura curiosidade de uma jovem.`,
        aniversario: '11 de Novembro',
        altura: '162cm',
        ilustrador: 'DSmile',
        nomeFas: 'Otomos',
        grupo: 'Justice',
        canal: '@holoen_ceciliaimmergreen'
    },
    {
        nome: 'Raora Panthera',
        descricao: `A Artista dos Olhos de Deus, Raora Panthera é dotada de proezas investigativas e descritivas.<br>
        Seus meios de coleta de informações são diversos, utilizando não apenas sua agilidade e habilidades sociais, mas também diversas plataformas de mídia social e outros métodos únicos.<br>
        As composições faciais que ela desenha com base nas informações que coleta são conhecidas por sua precisão, quase como se ela estivesse olhando diretamente para os criminosos enquanto desenha.<br>
        No entanto, hoje em dia, seu olhar é direcionado para encontrar novas pizzarias e desfrutar da cultura pop do extremo leste.`,
        aniversario: '11 de Maio',
        altura: '158cm',
        ilustrador: 'Nekojira',
        nomeFas: 'Chattini',
        grupo: 'Justice',
        canal: '@holoen_raorapanthera'
    }
];

const pastaFotosPefil =  '../assets/img/perfis';

const fotos = [
    [ // Myth
        [`${pastaFotosPefil}/gura.png`, 'Gura'], [`${pastaFotosPefil}/ame.png`, 'Amelia'], [`${pastaFotosPefil}/kiara.png`, 'Kiara'], 
        [`${pastaFotosPefil}/mori.png`, 'Calli'], [`${pastaFotosPefil}/ina.png`, 'Ina'], 
    ],
    
    [ // Council / Promise
        [`${pastaFotosPefil}/irys.png`, 'IRyS'], [`${pastaFotosPefil}/sana.png`, 'Sana'], [`${pastaFotosPefil}/fauna.png`, 'Fauna'],
        [`${pastaFotosPefil}/kronii.png`, 'Kronii'], [`${pastaFotosPefil}/mumei.png`, 'Mumei'], [`${pastaFotosPefil}/baelz.png`, 'Baelz']
        
    ],

    [ // Advent
        [`${pastaFotosPefil}/shiori.png`, 'Shiori'], [`${pastaFotosPefil}/bijou.png`, 'Bijou'], [`${pastaFotosPefil}/nerissa.png`, 'Nerissa'],
        [`${pastaFotosPefil}/fuwawa.png`, 'Fuwawa'], [`${pastaFotosPefil}/mococo.png`, 'Mococo'] 
        
    ],

    [ // Justice
        [`${pastaFotosPefil}/liz.png`, 'Elizabeth'], [`${pastaFotosPefil}/gigi.png`, 'Gigi'], [`${pastaFotosPefil}/ceci.png`, 'Cecilia'],
        [`${pastaFotosPefil}/raora.png`, 'Raora']
    ]
]

export const [ Myth, Promise, Advent, Justice ] = fotos;
/* Desestruturando o array matriz de fotos para cada grupo e então criando um objeto abaixo para mapear esses vetores. */

export const mapaFotosGrupos = {
    'Myth': Myth,
    'Promise': Promise,
    'Advent': Advent,
    'Justice': Justice
}

export const mapaTalentos = {
    'Gura': talentos[0],
    'Amelia': talentos[1],
    'Kiara': talentos[2],
    'Calli': talentos[3],
    'Ina': talentos[4],
    'IRyS': talentos[5],
    'Sana': talentos[6],
    'Fauna': talentos[7],
    'Kronii': talentos[8],
    'Mumei': talentos[9],
    'Baelz': talentos[10],
    'Shiori': talentos[11],
    'Bijou': talentos[12],
    'Nerissa': talentos[13],
    'Fuwawa': talentos[14],
    'Mococo': talentos[15],
    'Elizabeth': talentos[16],
    'Gigi': talentos[17],
    'Cecilia': talentos[18],
    'Raora': talentos[19]
}
/* Mapeando cada item do vetor para acessar com mais facilidade as informações dos talentos. */

export { nomesGrupos, talentos };