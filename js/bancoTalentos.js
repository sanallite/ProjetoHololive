/* Banco de talentos com os dados das nossas Idols. */

const pastaFotosPefil =  '../assets/img/perfis';
const pastaMusicas = '../assets/audio';
const pastaCapas = '../assets/img/capas';

const nomesGrupos =  [ 'Myth', 'Promise','Advent', 'Justice' ];

const idAboveBelow = 'ilLEj-SCCn8?si=DFoGkchdxtYOkHYa';
const idBauDol = 'aThUfmKQgaY?si=EtFcsbwRIZU7AJJC';
const idSirens = 'SxRbAEjDS9k?si=kbXTJvapX-w8QWGX';
const idRebellion = 'pYNYhSsR8EE?si=o5lFrYN0DK6Xj1ks';
const idNotAPhase = 'xxzw7-sCdnQ?si=oeyk2Ve9NTIVhDxm';
const idRise = 'jHibTDJlTJw?si=Ifp_zzk0k00DICTT';
/* Ids de clipes de música, que são exibidos na página do talento. */

const talentos = [
    {
        nome: 'Gawr Gura',
        descricao: `<p>Graduada - Gura é amigável e simpática, e frequentemente diverte seus espectadores com palhaçadas tolas. Ela não tem senso de direção, frequentemente escreve e pronuncia palavras errado, tem dificuldade para se lembrar da própria idade e falha constantemente em resolver problemas básicos de matemática, levando os espectadores a chamá-la carinhosamente de "tubarão burro". De forma memorável, um espectador declarou que "Gura tem um coração de ouro e uma cabeça de osso".</p>

        <details>
        <summary>Ler mais</summary>
        <p>Às vezes, ela também pode ser preguiçosa. Muitas vezes, esquece de alimentos perecíveis até que eles comecem a apodrecer e come papinha de bebê "porque não precisa cozinhar... [ou] mastigar".</p>

        <p>No entanto, apesar de suas péssimas habilidades em matemática e ortografia, Gura é perspicaz, inteligente e possui vasto conhecimento sobre fatos sobre tubarões. Quando questionada sobre o motivo de não estar "boing boing", ela se desculpou afirmando que era "hidrodinâmica". Sua habilidade com jogos de ritmo acelerado é excepcional, e ela é extremamente ambiciosa. Ela também ocasionalmente faz piadas obscenas e está familiarizada com a cultura moderna de memes, à qual faz referência com frequência.</p>
        </details>`,
        aniversario: '20 de Junho',
        altura: '141cm',
        ilustrador: 'Amashiro Natsuki',
        nomeFas: 'Chumbuds',
        grupo: 'Myth',
        canal: '@GawrGura',
        canalSecreto: '@senzawa',
        dataGraduacao: '01 de Maio de 2025',
        outfits: [
            `${pastaFotosPefil}/gura.png`,
            `${pastaFotosPefil}/gura2.png`,
            `${pastaFotosPefil}/gura3.png`,
            `${pastaFotosPefil}/gura4.png`,
            `${pastaFotosPefil}/gura5.png`,
        ],
        clipes: [
            'nCQ_zZIiGLA?si=WI0q2qHolutgEzlU', // reflect
            'aetXqd9B8WE?si=7QjbZlZy3G-lpwy8', // q
            'twUFbqyul_M?si=d7XiMH3Kj7bE2yZd', // ash again
            'pKJErsN-ylU?si=_qlkgTD9CEVQGm0y', // journey like a thousand years
        ],
        historia: `<h3>Audição</h3>
            <p>Em 23 de abril de 2020, após o sucesso do grupo de VTubers Hololive, em japonês , a Cover Corporation anunciou audições para membros que falam inglês. A rodada inicial de audições durou até 24 de maio.</p>

            <p>Gura conheceu a hololive pela primeira vez através de Say! Fanfare! de Shirakami Fubuki, que apareceu como uma música no jogo de ritmo Muse Dash. Ela só descobriu o que era a Hololive mais tarde e decidiu se inscrever após saber das audições da Hololive em inglês pelo Twitter. Seu vídeo de audição inicial foi exagerado, que ela descartou em favor de um que representasse melhor sua personalidade. Ela passou para uma segunda rodada de audições, seguida por uma terceira rodada, normalmente consistindo de uma chamada de vídeo, que Gura recusou. Apesar disso, ela foi selecionada para se juntar ao Hololive.</p>
            
            <p>Durante sua audição, Gura desenhou um personagem bonitinho em uma "postura de poder" com as mãos na cintura, o que ela creditou como uma boa impressão. Gura se lembra de ter sido questionada sobre a Fundação SCP , um wiki de artigos que descrevem artefatos e seres fictícios, embora tivesse que admitir que não sabia o que era.</p>
            
            <p>Os membros do -Myth- começaram a treinar por volta de junho de 2020, três meses antes de sua estreia.</p>
            
            <p>O design de Gawr Gura era conhecido por outros membros do holoEN já em 2 de julho de 2020, quando Amelia Watson desenhou a primeira fanart de Gawr Gura. Este não era o design finalizado, no entanto, e uma mudança de design não especificada foi feita antes da estreia de Gura. Transmissões de teste internas de pré-estreia foram conduzidas entre todos os membros da Hololive English, onde em um caso um bug fez com que Gura aparecesse sem nenhuma roupa.</p>
        
            <p>O canal da Gura no YouTube e a sua conta no Twitter foram criados em 16 de julho de 2020.</p>
            
            <p>Em 8 de setembro de 2020, Gawr Gura foi revelada pela primeira vez em um pequeno vídeo promocional ao lado dos outros quatro membros da hololive -Myth-. Um anúncio simultâneo foi feito na conta do Twitter da Hololive japonesa e na conta do Twitter em inglês da hololive. Ao mesmo tempo, Gura fez seu primeiro tweet, famoso pela letra "a".</p>

            <h3>Estréia</h3>
            <p>A estreia de Gura foi agendada para 12 de setembro de 2020, às 14h PDT, embora ela tenha se atrasado 12 minutos e 32 segundos para sua estreia devido a um problema técnico. Ela foi a quarta das cinco integrantes originais da hololive inglês a estrear no mesmo dia. Mais de 45.000 espectadores assistiram ao evento, no qual ela impressionou os espectadores com uma versão do single pop urbano de Tatsuro Yamashita, "Ride on Time", de 1980.</p>

            <p>Em uma análise semestral de sua estreia, ela descreveu estar tão nervosa que conseguia sentir o coração batendo na cabeça e ter problemas estomacais, pois estava nervosa demais para comer antes da transmissão. Antes da transmissão, ela assistiu aos vídeos de estreia de vários streamers da hololive japonesa para se preparar.</p>
            
            <p>Os eventos de estreia foram concluídos com o primeiro evento de colaboração da Hololive English às 18h35 PDT, no qual Gura transmitiu junto com os outros quatro membros da Hololive English.</p>
            
            <h3>Aposentadoria</h3>
            <p>Em 15 de abril de 2025, Gura anunciou que se formaria/aposentaria da hololive em 1º de maio de 2025, devido a desentendimentos com a gerência e a direção da empresa. Uma declaração da COVER Corp foi divulgada imediatamente após a transmissão. A transmissão do anúncio de Gura atingiu 244.132 espectadores no pico. O vídeo alcançou a posição #1 em tendências no YouTube e recebeu mais de 2 milhões de visualizações em doze horas. O preço das ações da COVER Corp caiu 10% após a notícia. No mesmo período, o tweet do anúncio recebeu mais de 225.000 curtidas e 12.000 respostas, incluindo mensagens de apoio de membros da hololive e de vários VTubers corporativos e independentes importantes.</p>

            <p>Em 19 de abril, Gura lançou sua última música original, Ash Again. A música foi escrita pelo compositor de Devil May Cry, Casey Edwards, e o videoclipe foi animado por Mazumaro, mais conhecido pela animação de fã de 2022, "Myth's Bad Ending."</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Gawr_Gura">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Amelia Watson',
        descricao: `<p>Afiliada - Amelia é uma garota excêntrica, brincalhona e cheia de personalidade, conhecida por provocar seus colegas da holoMyth de forma carinhosa. gentil e prestativa, ela frequentemente apoia os membros da hololive, assistindo às transmissões dos colegas e ajudando — especialmente Gura — em jogos como Minecraft. Sua fama de solucionadora de problemas técnicos rendeu o meme "Amelia Tech Tips", em alusão ao canal Linus Tech Tips.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Apesar de seu lado doce, Amelia também é travessa, com um humor carregado de piadas de duplo sentido discretas, como nomear uma mina "Gura's Backdoor" com um emoticon sugestivo. Em jogos competitivos como Apex Legends e Valorant, seu lado mais caótico aflora no chamado "Modo Gremlin": gananciosa, barulhenta, antidesportiva e hilariamente dramática, o que lhe rendeu o apelido de "Gamer de Verdade" — tanto pela dedicação quanto pelo comportamento levemente tóxico.</p>

        <p>Esse modo inclui uma voz caricata, descrita como um misto de chiado agudo e brinquedo moribundo, usada com frequência ao trollar o próprio chat. Em uma ocasião memorável, ela escureceu propositalmente os shaders do Minecraft e fingiu ter “consertado” o problema, gerando risadas e confusão. Apesar de tentar conter esse lado, seus impulsos gremlin são difíceis de controlar.</p>

        <p>Entre suas piadas mais emblemáticas está o infame “Groundpound a sua mãe!”, dito em tom grave durante uma transmissão e que virou marca registrada. Amelia parece não ter filtro — ou melhor, tem um, mas frequentemente ignora o que ele filtra.</p>

        <p>Sua mistura de gentileza, irreverência e imprevisibilidade faz dela uma figura extremamente carismática e divertida, cativando o público com sua química única entre caos e ternura.</p>
        </details>`,
        aniversario: '06 de Janeiro',
        altura: '150cm',
        ilustrador: 'Nabi',
        nomeFas: 'Teamates',
        grupo: 'Myth',
        canal: '@WatsonAmelia',
        canalSecreto: '@dooby3d',
        dataGraduacao: '30 de Setembro de 2024',
        outfits: [
            `${pastaFotosPefil}/ame.png`,
            `${pastaFotosPefil}/ame2.png`,
            `${pastaFotosPefil}/ame3.png`,
            `${pastaFotosPefil}/ame4.png`,
            `${pastaFotosPefil}/ame5.png`,
        ],
        clipes: [
            'NOrfhrL0D9k?si=zKZs_U4Ckg77_E5S', // ookami blue
            'fYVweqOW31w?si=ayHzzHuoO1NwaZGC', // chiku taku
            'VupT9JCJaOY?si=MuX4TAbnnXvM1sNM', // myth or treat
            'zbgWUK_tidI?si=NQ7wK6otg-mKtEnj', // non-fiction
        ],
        historia: `<h3>Audição</h3>
            <p>Em 23 de abril de 2020, após o sucesso do grupo de VTubers Hololive, em japonês, a Cover Corporation anunciou audições para membros que falam inglês. A rodada inicial de audições durou até 24 de maio.</p>

            <p>Amelia descobriu a hololive originalmente por meio de clipes no Twitter e descobriu a audição da mesma forma. Ela se juntou a eles na esperança de encontrar mais amigos gamers e garotas bonitas.</p>

            <p>Em sua audição, Amelia Watson admitiu que, embora se sentisse boa em videogames e tivesse uma personalidade divertida, não era particularmente habilidosa em canto ou desenho. Ela interpretou como um bom sinal quando Cover respondeu, aconselhando-a a começar a ter aulas de canto imediatamente. Ela preparou um grande número de perguntas para fazer aos entrevistadores, a fim de demonstrar seu interesse. Ame havia estudado medicina de emergência como carreira reserva.</p>

            <p>Ame comemorou sua aprovação na audição arrumando seu quarto.</p>

            <p>Os membros do -Myth- começaram a treinar por volta de junho de 2020, três meses antes de sua estreia.</p>

            <p>O canal do Ame no YouTube e a conta no Twitter foram criados em 16 de julho.</p>

            <p>Em 8 de setembro de 2020, Watson Amelia foi revelada pela primeira vez em um pequeno vídeo promocional ao lado dos outros quatro membros da hololive -Myth-. Um anúncio simultâneo foi feito na conta do Twitter da Hololive japonesa e na conta do Twitter em inglês da hololive. Seu primeiro tweet foi feito no mesmo dia.</p>

            <h3>Estréia</h3>
            <p>Ame fez sua transmissão de estreia em 12 de setembro de 2020. Ela foi o quinto e último membro da hololive -Myth- a estrear.</p>

            <p>Ame dormiu apenas algumas horas nas 36 horas anteriores à sua transmissão, tendo ficado acordada para assistir às estreias dos membros anteriores e preparar o conteúdo para o seu próprio. Ela pretendia abrir com um vídeo elaborado descrevendo suas origens na década de 1920, mas não foi concluído a tempo. Ame começou com um sotaque britânico antes de revelar que era uma farsa (uma manobra sugerida pela empresária Enma para apaziguar os espectadores que esperavam que um personagem no estilo Sherlock Holmes fosse britânico). Ela cantou Puru Puru Pururin, uma música de inserção do anime Welcome to the NHK. Ela concluiu a transmissão de estreia com uma experiência surreal na qual injetou no espectador "Watson Concoction", resultando em alucinações bizarras.</p>

            <p>Uma hora e 35 minutos depois, a estreia de Ame foi seguida pela primeira transmissão de colaboração hololive -Myth- durante a qual ela desempenhou seu papel de detetive investigando os outros membros.</p>
            
            <h3>Conclusão das Atividades Gerais</h3>
            <p>Em 20 de setembro de 2024, Amelia anunciou o fim de suas atividades gerais como membro da hololive. Em um movimento incomum, ela não chegou a chamar isso de "graduação". Um anúncio no site da Hololive esclareceu que, embora a produção do canal de Ame no YouTube, as atividades nas redes sociais e a participação em eventos ao vivo fossem encerradas, ela permaneceria como "afiliada" da Hololive.</p>

            <p>Na seção de comentários de seu vídeo de anúncio, Amelia descartou os rumores de que se juntaria à equipe da Hololive, embora continuasse a oferecer suporte técnico aos membros. Ela esclareceu que esse status de afiliada lhe permitiria continuar a participar de projetos da Hololive no futuro. Isso incluiria aparições de voz em músicas e covers, e aparições em projetos ainda não especificados.</p>

            <p>A última semana de streaming de Ame contou com colaborações com todos os membros atuais da Hololive English, uma transmissão beneficente que arrecadou US$ 214.915,19 para a conservação do oceano, a conclusão de seus jogos Elden Ring e The Elder Scrolls IV: Oblivion, uma colaboração -Myth- espelhando a estreia do grupo, uma transmissão final de "AmeSame" com Gawr Gura e várias despedidas emocionadas de outros membros da Hololive English.</p>

            <p>Sua transmissão final foi realizada em 30 de setembro de 2024. Alcançou mais de 136.000 espectadores no pico e recebeu mais de US$ 96.000 em Superchats. Seu canal alcançou 1,8 milhão de inscritos ao final da transmissão. A transmissão também anunciou o lançamento do conjunto de produtos "Immortalized as Marketable Plushies 4EVER", com pelúcias portáteis de Bee Ame, o mascote do Investigador e Bubba, além de um espelho de pub Space Ame e uma carta manuscrita duplicada. A capa de travesseiro Watson Amelia também foi relançada.</p>

            <p>Seu status oficial foi alterado para "[Afiliada]" no site oficial da Hololive. Seu canal no YouTube continua online. Suas assinaturas e conteúdo exclusivo para membros continuaram até 31 de outubro, às 7h59 PDT. Os fãs puderam continuar enviando cartas até 29 de novembro.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Watson_Amelia">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Takanashi Kiara',
        descricao: `<p>Kiara é conhecida por sua energia vibrante, atitude positiva e afeto aberto por amigos e fãs. Comunicativa e extrovertida, não hesita em liderar colaborações e assumir o papel de apresentadora quando necessário. Sua personalidade marcante também se reflete em suas músicas originais, como “SPARKS” e “HINOTORI”, ambas repletas de ritmo acelerado e mensagens encorajadoras.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Apesar da confiança que demonstra em público, Kiara é secretamente tímida e propensa a distrações e esquecimentos. Prefere jogos com objetivos definidos, como RPGs, a experiências mais abertas. Sua dedicação aos colegas é constante, mencionando e elogiando seus genmates com frequência — em especial Calliope, com quem compartilha uma dinâmica divertida e flertadora que reforça o vínculo entre ambas.</p>

        <p>Seu relacionamento com a base de fãs, os KFP, é caloroso e caótico: entre demonstrações de carinho e gratidão, não é raro ver Kiara despachando-os, em tom de brincadeira, para a famigerada “Sala de Sempre”. Embora muitas vezes vista como tola e ousada — como mostrado em um gráfico onde foi classificada como “máxima obscenidade e pouca inteligência” —, Kiara surpreende com momentos de empatia e clareza emocional.</p>

        <p>Descrita por Amelia como alguém de “voz adorável e atitude positiva”, e por Calliope como uma cantora talentosa e trabalhadora incansável, Kiara também se destaca por sua fluência em japonês e seu esforço constante em tudo o que faz.</p>
        </details>
`,
        aniversario: '06 de Julho',
        altura: '165cm',
        ilustrador: 'huke',
        nomeFas: 'KFP',
        grupo: 'Myth',
        canal: '@TakanashiKiara',
        outfits: [
            `${pastaFotosPefil}/kiara.png`,
            `${pastaFotosPefil}/kiara2.png`,
            `${pastaFotosPefil}/kiara3.png`,
            `${pastaFotosPefil}/kiara4.png`,
            `${pastaFotosPefil}/kiara5.png`,
            `${pastaFotosPefil}/kiara6.png`,
            `${pastaFotosPefil}/kiara7.png`,
        ],
        clipes: [
            'QI96hnhcr2E?si=jHsyrn1MUwhbxYtY', // do u
            '6L4NNkF2Knc?si=M2ckWbBOauIn7diV', // chimera
            'LIOTD5ndZEE?si=zwHF08cfKoFQaYbn', // mirage
            '4ytZJoWR2mI?si=aFKFh42lIKLjEWn9', // reunion
        ],
        historia: `<h3>Audição</h3>
            <p>Takanashi Kiara era fã da Hololive antes de fazer o teste. Ela ouviu falar da Hololive pela primeira vez quando descobriu Shirakami Fubuki, e posteriormente se tornou uma fã tão ávida de Usada Pekora que se gabou de ter assistido a todos os seus vídeos no YouTube. Depois de muitos contratempos na vida, Kiara infelizmente emigrou para o Japão com um visto único pouco antes do surto da pandemia do coronavírus, deixando-a sem nenhum trabalho e impedindo-a de visitar sua terra natal.</p>

            <p>Em 23 de abril de 2020, após o sucesso do grupo de VTubers Hololive, em japonês, a Cover Corporation anunciou audições para membros que falam inglês. A rodada inicial de audições durou até 24 de maio.</p>

            <p>Kiara soube das audições da HoloEN depois que elas já tinham começado e entrou na metade do período de audição. Ela escreveu um roteiro para sua audição em um documento do Word no espaço de duas horas em um surto de inspiração. Ela gravou uma série de takes para um cover de música. Ela recebeu uma resposta alguns dias depois. Ela passou para uma segunda e terceira rodadas de audições, ambas envolvendo ligações telefônicas. Kiara conseguiu se preparar para a terceira rodada estimando com sucesso o que seria pedido a ela e credita seu talento para a criatividade por ajudá-la a pensar na hora. Embora ela não esperasse ser selecionada no início, ela descreve sua confiança em seu conjunto de habilidades como um fator em seu sucesso.</p>

            <p>Os membros do -Myth- começaram a treinar por volta de junho de 2020, três meses antes de sua estreia.</p>

            <p>O canal do YouTube e as contas do Twitter de Kiara foram criados em 16 de julho. Nos bastidores, seu modelo Live2D foi o último dos cinco membros do Myth a ser concluído, apenas cerca de três dias antes da estreia.</p>

            <p>Em 8 de setembro de 2020, Takanashi Kiara foi revelada pela primeira vez em um pequeno vídeo promocional ao lado dos outros quatro membros da Hololive -Myth-. Um anúncio simultâneo foi feito na conta do Twitter da Hololive japonesa e na conta do Twitter em inglês da Hololive. Ela fez seu primeiro tweet mais tarde naquele dia.</p>

            <h3>Estréia</h3>
            <p>Kiara fez sua transmissão de estreia em 12 de setembro de 2020. Ela foi a segunda integrante da Hololive -Myth- a estrear. Sua primeira transmissão começou com uma animação de livro de histórias narrada por Mori Calliope. Ela estava extremamente nervosa no início da transmissão, durante a qual falou em inglês, japonês e alemão. Ela encerrou a transmissão cantando o hino da Hololive, Shiny Smily Story, prometendo realizar o sonho de Yagoo, uma referência à visão inicial do fundador da Hololive como uma agência de ídolos.</p>
            
            <h3>Em 2025</h3>
            <p>Em 4 de janeiro, o traje principal de Kiara foi atualizado para a versão 3.0. Kiara tem muito mais movimento. Os novos recursos incluem a capacidade de mudar a aparência dos olhos (brilhantes, olhos de coração, remover o brilho ou ficar mais vermelhos), chorar, mostrar a língua, acenar com a mão, usar um teclado, segurar um controle, usar uma mesa digitalizadora e criar emotes como corações ou um ponto de exclamação.</p>

            <p>Em 28 de fevereiro, Kiara recebeu novas variantes para seu sétimo traje 2D, que foram mencionadas anteriormente na revelação do traje. Kiara tem um novo penteado, cabelos longos e ondulados com bastante volume. Kiara pode usar uma minissaia rosa com um chaveiro dourado preso a um cinto azul, a saia pode ser usada por cima das leggings ou de novas meias arrastão.</p>

            <p>Em 8 de março, ela estreou seu traje de ídolo 3D na Hololive 6th fes Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 2. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 1º de abril, Crabbywawa foi apresentada como uma nova personagem. Ela compartilha o mesmo modelo 3D base de Frogiwawa.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Takanashi_Kiara">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Mori Calliope',
        descricao: `<p>Calliope, a aprendiz da Ceifadora, combina uma atitude descolada com uma seriedade surpreendente. Em suas transmissões e músicas, ela mostra confiança e dedicação, mas também revela um lado tímido ao interagir com novas pessoas, especialmente senpais. Sua postura relaxada contrasta com momentos de conversa profunda com o público, o que lhe rendeu o respeito tanto dos fãs quanto de outras integrantes da hololive.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Durante colaborações com suas colegas do holoMyth, Calli exibe um lado mais brincalhão e leve, oferecendo aos espectadores uma faceta mais descontraída. Por trás das câmeras, é notoriamente dedicada: trabalha duro em músicas e projetos, muitas vezes sem dormir, sempre recompensando os fãs com lançamentos bem produzidos e emocionantes.</p>

        <p>Apaixonada por rap e pela “colheita”, suas armas favoritas incluem uma foice chamada Ricky e um mangual medieval. É reconhecida por ter uma das vozes mais graves da hololive, superando até nomes como Okayu, Towa e A-chan. Apesar de fluente em inglês, frequentemente se confunde com gírias e expressões modernas, o que, combinado à sua tendência a se emocionar com romances, levou fãs a apelidá-la carinhosamente de “tsundereaper”.</p>

        <p>Fora do palco, Calli é cabeça de vento e esquecida — como contou Kiara, ela é do tipo que perde o celular mesmo quando ele está no bolso da jaqueta. Ainda assim, sua ética de trabalho impressiona, mesmo que às vezes vá além do saudável.</p>
        </details>`,
        aniversario: '04 de Abril',
        altura: '167cm',
        ilustrador: 'Yukisame',
        nomeFas: 'Dead Beats',
        grupo: 'Myth',
        canal: '@MoriCalliope',
        outfits: [
            `${pastaFotosPefil}/mori.png`,
            `${pastaFotosPefil}/mori2.png`,
            `${pastaFotosPefil}/mori3.png`,
            `${pastaFotosPefil}/mori4.png`,
            `${pastaFotosPefil}/mori5.png`,
            `${pastaFotosPefil}/mori6.png`,
            `${pastaFotosPefil}/mori7.png`,
            `${pastaFotosPefil}/mori8.png`,
        ],
        clipes: [
            'BXB26PzV31k?si=swExk-s6maoKuCnk', // end of a life
            'J7tp_0lFI0I?si=mXjy2aFnrQr4PokW', // overkill
            'X_4pIzwShRw?si=ItrwxXOrm3K-iT32', // seeing stars
            'S2dWTOCdnEA?si=ZG6X7bJuBdcQx7HG', // the show goes on
        ],
        historia: `<h3>Audição</h3>
            <p>Em 23 de abril de 2020, após o sucesso do grupo de VTubers Hololive, em japonês, a Cover Corporation anunciou audições para membros que falam inglês. A rodada inicial de audições durou até 24 de maio.</p>

            <p>Mori Calliope ouviu falar da Hololive pela primeira vez depois de ver clipes no YouTube, particularmente a infame história do band-aid de Natsuiro Matsuri. Ela ouviu falar da audição da hololive em inglês por meio de amigos. Ela começou a assistir aos vídeos da Hololive nos intervalos do trabalho para se familiarizar com os outros membros e ficou animada com a possibilidade de se juntar a eles. Calli já havia passado vários anos fazendo música para um público de no máximo vinte pessoas.</p>

            <p>Calli fez o teste descrevendo suas melhores características e habilidades e adotando um tom profissional. Ela atribui seu sucesso ao seu trabalho árduo e à sua disposição para arriscar em novas oportunidades. Após ser selecionada, Calli levou algum tempo para aceitar o sucesso.</p>

            <p>Os membros do -Myth- começaram a treinar por volta de junho de 2020, três meses antes de sua estreia. O modelo Live2D de Calli foi o primeiro a ser concluído, cerca de um mês antes da estreia.</p>

            <p>O canal de Calli no YouTube foi criado em 16 de julho, e sua conta no Twitter foi criada no mesmo mês.</p>

            <p>Em 8 de setembro de 2020, Mori Calliope foi revelada pela primeira vez em um pequeno vídeo promocional ao lado dos outros quatro membros da Hololive -Myth-. Um anúncio simultâneo foi feito na conta do Twitter da hololive japonesa e na conta do Twitter em inglês da Hololive. Ela fez seu primeiro tweet no mesmo dia.</p>

            <h3>Estréia</h3>
            <p>Calli fez sua transmissão de estréia em 12 de setembro de 2020. Ela foi a primeira integrante da Hololive -Myth- a estrear. Ela apresentou a estreia de sua primeira música de rap original, "失礼しますが、RIP♡", conhecida em inglês como "Excuse My Rudeness, But Could You Please RIP?". A música foi lançada em seu canal do YouTube no mesmo dia.</p>
            
            <h3>Em 2025</h3>
            <p>Em 12 de janeiro de 2025, durante uma transmissão de karaokê de resistência, Calli atingiu 2.500.000 inscritos no YouTube.</p>

            <p>Em 13 de fevereiro, Calli estreou seu nono traje 2D. Calli tem uma variedade de penteados, cabelos longos e ondulados com um rabo de cavalo lateral, suas mechas internas são brancas, no outro ela tem cabelo curto, ambos os estilos podem ser complementados com fitas brancas em forma de flores e uma faixa azul na cabeça. Ela também pode usar seu penteado original. Calli usa uma camisa branca de mangas compridas, sem ombros, com botões dourados e uma fita preta na gola. As mangas têm um padrão de renda florido. Ela usa uma saia rosa ou azul de cintura alta. Ela tem um cinto preto na perna. Calli usa saltos altos brilhantes, pretos, de tira. Calli também pode usar um suéter azul que diz "Underworld University", segurar um Death Sensei de pelúcia e usar óculos de armação branca.</p>

            <p>Em 26 de fevereiro, Calliope realizou seu segundo concerto solo GriMoire no Hollywood Palladium. Este é o primeiro concerto solo de um talento Hololive fora do Japão. Durante o concerto Calli também estreou um novo traje 3D com o mesmo design visto no material promocional. Ela tem um longo rabo de cavalo decorado com uma fita preta, nas laterais ela tem dois pares de hairpins. Calli usa um vestido espartilho preto com mangas de renda. O vestido tem uma janela de decote com um contorno dourado. Abaixo do peito, o vestido tem cintos cruzados com fivelas douradas. O vestido é complementado com uma jaqueta curta preta com gola fofa e punhos que podem ser removidos. A gola tem um broche dourado com uma joia vermelha. A saia tem um interior vermelho. Calli tem meias e botas pretas de renda.</p>

            <p>Em 8 de março, ela estreou seu traje de ídolo 3D na Hololive 6th fes Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 2. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Mori_Calliope">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: `Ninomae Ina'nis`,
        descricao: `<p>Ina é uma garota gentil, pacífica, de fala mansa e pé no chão, com um temperamento tranquilo, tanto que ela reverte o estresse e a insanidade em seus espectadores em vez de encorajá-los, apesar de seu papel lovecraftiano como "a donzela que fala pelos deuses antigos". Ela é muito carinhosa e consciente com seus companheiros, capaz de falar extensivamente sobre cada um e suas respectivas peculiaridades.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Ela é atenciosa e gentil; Takanashi Kiara conta que, quando ela está triste, Ina é sempre a primeira a mandar mensagem. Em completo contraste com a gremlin irritadiça Amelia, Ina tem uma paciência quase infinita e é amplamente considerada a integrante mais bem-comportada de sua geração.</p>

        <p>Ina é muito engajada na cultura popular, com gostos extremamente diversos, apreciando uma grande variedade de gêneros em um conjunto igualmente amplo de mídias, seja anime mecha, pop rock, FPS, entre outros. Uma característica notável de Ina é seu talento artístico significativo, ilustrando diversos conteúdos promocionais para a HoloEN, bem como a maioria dos recursos que utiliza para suas atividades no VTuber.</p>

        <p>Ina é famosa pelo uso de trocadilhos e pelas piadas secas de "tiozão".</p>
        </summary>`,
        aniversario: '20 de Maio',
        altura: '157cm',
        ilustrador: 'Kuroboshi Kouhaku',
        nomeFas: 'Tentacult',
        grupo: 'Myth',
        canal: '@NinomaeInanis',
        outfits: [
            `${pastaFotosPefil}/ina.png`,
            `${pastaFotosPefil}/ina2.png`,
            `${pastaFotosPefil}/ina3.png`,
            `${pastaFotosPefil}/ina4.png`,
            `${pastaFotosPefil}/ina5.png`,
            `${pastaFotosPefil}/ina6.png`,
        ],
        clipes: [
            '8ZdLXELdF9Q?si=uH3edpRY0QImxrpH', // violet
            'XzkNg89Cq9Y?si=cudpaW5ZkaM9szmw', // meconopsis
            'LtTO1HMGjqA?si=6fEX1zHRY7KSnC4N', // temari
            '0wO8d70KSXw?si=cF7eWat0hxHJp5ko', // odysee
        ],
        historia: `<h3>Audição</h3>
            <p>Em 23 de abril de 2020, após o sucesso do grupo de VTubers Hololive, em japonês, a Cover Corporation anunciou audições para membros que falam inglês. A rodada inicial de audições durou até 24 de maio.</p>

            <p>Ninomae Ina'nis fez o teste para a hololive por impulso. Como artista, ela passou grande parte do seu tempo praticando arte solitária e viu a hololive como uma oportunidade de mudança. Ela não dormiu por mais de 24 horas antes do teste ao vivo, o que ela credita por deixá-la mais falante do que o normal. Ela cantou um verso de uma música, embora se descrevesse como não tendo confiança para cantar, e passou o resto falando sobre comida, incluindo gyoza gigante e Dr. Oopsie.</p>

            <p>Os membros do -Myth- começaram a treinar por volta de junho de 2020, três meses antes de sua estreia.</p>

            <p>O canal de Ina no YouTube foi criado em 16 de julho, e sua conta no Twitter foi criada no mesmo mês.</p>

            <p>Em 8 de setembro de 2020, Ninomae Ina'nis foi revelada pela primeira vez em um pequeno vídeo promocional ao lado dos outros quatro membros da hololive -Myth-. Um anúncio simultâneo foi feito na conta do Twitter da Hololive japonesa e na conta do Twitter em inglês da Hololive. Ela fez seu primeiro tweet no mesmo dia: uma captura de tela japonesa de 8 bits do Dragon Quest traduzida como "Não me provoque! Eu não sou uma tako ruim."</p>

            <h3>Estréia</h3>
            <p>Ina fez sua estreia na transmissão em 12 de setembro de 2020. Ela foi o terceiro membro da Hololive -Myth- a estrear.</p>

            <h3>Em 2025</h3>
            <p>Em 14 de fevereiro de 2025, Ina estreou a atualização 3.0 para seu modelo 2D principal. A atualização melhora os movimentos da modelo, adicionando novos movimentos como acenar com as mãos, mostrar a língua e novas expressões com efeitos. Ela pode usar mouse, teclado, controle de jogo e mesa digitalizadora. Ina também ganhou um novo chapéu para seu sexto traje 2D.</p>

            <p>Em 28 de fevereiro, Ina, Bijou, Gigi e Raora estrearam novos mascotes Palico como parte de um patrocínio do jogo Monster Hunter Wilds.</p>

            <p>Em 9 de março, ela estreou seu traje de ídolo 3Dna Hololive 6th fes. Color Rise Harmony durante o dia 2 do evento, ESTÁGIO 3. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Ninomae_Ina%27nis">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'IRyS',
        descricao: `<p>IRyS é uma garota doce, um tanto tímida, que mantém a positividade em seu coração, enxergando o lado bom das coisas e incentivando os outros a fazerem o mesmo. Ao mesmo tempo, ela frequentemente demonstra um lado mais "sádico", com uma propensão à violência e (muitas vezes sem querer) dizendo coisas questionáveis. A dualidade de sua personalidade é frequentemente ridicularizada por seus fãs como a dicotomia entre seus lados angelical e demoníaco. IRyS não consegue evitar falar de vez em quando com nuances pervertidas, mesmo sem querer.</p>

        <p>Sua voz é aguda, suave e calma, semelhante à de Yukihana Lamy, embora ela possa produzir um tom mais poderoso e profundo ao cantar, semelhante à capacidade vocal de Tokoyami Towa.</p>`,
        aniversario: '07 de Março',
        altura: '166cm',
        ilustrador: 'redjuice',
        nomeFas: 'IRyStocrats',
        grupo: 'Project: HOPE / Promise',
        canal: '@IRyS',
        outfits: [
            `${pastaFotosPefil}/irys1.png`,
            `${pastaFotosPefil}/irys.png`,
            `${pastaFotosPefil}/irys3.png`,
            `${pastaFotosPefil}/irys4.png`,
            `${pastaFotosPefil}/irys5.png`,
        ],
        clipes: [
            'y2vrlxmOp7U?si=3xFYEFeif2ls5Dab', // sparks of joy
            'fevB6h3-kfE?si=RbHMBej0-_aaIDwq', // gravity
            'dFZ1oTSFuIE?si=Li8lYXx8G5f8CDk6', // twilight
            'EXM0EE_NpQc?si=o53R3eEzgTEPUgGa', // diamond girlfriend
        ],
        historia: `<h3>Audição</h3>
            <p>Em 30 de novembro de 2020, a conta oficial do Twitter da Hololive anunciou o início das audições para um VSinger para a Hololive English; as audições estavam abertas até 29 de janeiro JST.</p>

            <p>Em 7 de julho de 2021, uma contagem regressiva de estreia começou no canal da Hololive em inglês, intitulada "#CountdownWitnesser #hololiveEnglish". Quando a contagem regressiva de 8 horas chegou ao fim, um novo vídeo foi lançado no canal. Este vídeo era um teaser animado revelando IRyS como parte do "Projeto: HOPE", além de se tornar o primeiro VSinger da Hololive em inglês.</p>

            <p>Sua conta no Twitter foi criada em fevereiro de 2021, enquanto seu canal no YouTube foi criado em 20 de maio de 2021. Depois de fazer seu primeiro tweet em 7 de julho, seu canal no YouTube e sua conta no Twitter foram restringidos devido à atividade excessiva. Nos dias seguintes, antes de sua estreia, IRyS atingiu 200.000 assinantes em seu canal no YouTube.</p>

            <p>Em 11 de julho de 2021, poucas horas antes de sua estreia no stream, a restrição em sua conta do Twitter foi suspensa. IRyS estreou com uma transmissão introdutória em seu canal do YouTube no mesmo dia, onde apresentou uma versão curta de sua primeira música original e PV "Caesura of Despair". IRyS também anunciou que lançaria seu primeiro EP 𝄆 Caesura of Despair no dia seguinte, 12 de julho, em várias plataformas de streaming. Ela também ultrapassou o marco de 300.000 assinantes do Youtube após sua estreia.</p>
            
            <p>Em 8 de março, ela estreou seu hololive 6th fes. Traje de ídolo 3D Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 1. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <h3>Promise</h3>
            <p>Em 9 de outubro de 2023, IRyS, Ceres Fauna, Ouro Kronii, Nanashi Mumei e Hakos Baelz anunciaram que formariam a nova unidade "hololive English -Promise-". Combinando o grupo Council com Project: HOPE. Embora não declarado na colaboração 3D, o encerramento do "Project: HOPE" foi anunciado no site da hololive logo depois.</p>

            <h3>Em 2024</h3>
            <p>Em 30 de janeiro, IRyS estreou seu quarto traje 2D. IRyS usa twintails trançados baixos caindo para a frente e franja reta. IRyS usa uma roupa de colegial azul escura com uma fita cor de vinho. A gola é decorada com broches Gloom & Bloom e GuyRyS. Ela tem meias brancas soltas e tênis branco e preto. IRyS também pode usar uma jaqueta azul clara brilhante com elementos verde-limão neon e alguns remendos, ela pode fechar ou abrir o zíper. IRyS também tem a opção de usar um fone de ouvido. Ela tem duas variantes de óculos, normais e outra com lentes opacas em espiral.</p>
            
            <p>Em 6 de março, às 16h04 GMT, IRyS atingiu 1.000.000 de inscritos no YouTube durante uma transmissão de karaokê de resistência. Isso a torna a 40ª integrante da Hololive e a 2ª na Hololive English -Promise- a atingir esse marco.</p>

            <p>Em 13 de abril, IRyS estreou um novo acessório para seu terceiro traje 2D. Ela tem uma capa preta com tema de coelho, com fitas rosa e bordas brancas fofas.</p>

            <p>Em 24 de maio, durante o meio aniversário de -Promise-, IRyS estreou um acessório tiara para seu terceiro traje 2D.</p>

            <p>Em 1º de junho, IRyS estreou uma versão de verão de seu quarto traje 2D com um esquema de cores predominantemente branco e mangas curtas, juntamente com um novo penteado curto e solto. Os broches Bloom, Gloom e GuyRyS também podem brilhar na luz.</p>

            <p>Em 11 de julho, durante seu terceiro aniversário, IRyS lançou sua nova música original "Carbonated Love".</p>

            <p>Em 31 de agosto, como parte do projeto ENigmatic Recollection, os membros da Hololive English estrearam um novo acessório para seus trajes 2D principais. Eles usam as capas branca e azul vistas pela primeira vez no vídeo de introdução do projeto e na arte conceitual relacionada. A capa inclui uma gema azul contendo um símbolo que representa suas guildas afiliadas.</p>

            <p>Em 8 de outubro, durante a primeira transmissão de aniversário do -Promise-, eles anunciaram seu musical 3D "The Broken Promise".</p>

            <p>Em 14 de dezembro, -Promise- realizou seu musical: "hololive English -Promise- 1st Anniversary Musical: The Broken Promise."</p>

            <p>Em 20 de dezembro, IRyS e outros membros estrearam suas fantasias de Papai Noel 3D. A fantasia tem duas versões, vermelha e branca.</p>

            <h3>Em 2025</h3>
            <p>Em 15 de março, durante a comemoração de seu aniversário, IRyS lançou sua nova música original "DIAMOND GIRLFRIEND " e seu quarto EP "YaBAI".</p>

            <p>Em 1º de abril, Umino Miruku (うみのみるく), que significa "leite do mar" ou "ostra" em japonês, foi apresentada. Ela se apresentou como a vizinha de IryS e uma ostra que se transformou em uma garota vinda do Oceano Pacífico. Ela tem cabelo rosa, heterocromia e veste um cardigã cor de vinho e uniforme branco de marinheiro.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/IRyS">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Tsukumo Sana',
        descricao: `<p>Graduada - Tsukumo Sana era vibrante, descontraída e curiosa, com uma teimosia determinada que a levava a perseguir seus objetivos com entusiasmo contagiante. Sua personalidade infantil e efervescente se manifestava tanto em seu jeito de falar quanto em sua abordagem lúdica aos jogos, sempre repleta de trocadilhos e piadas sutis — até mesmo suas colegas, como Ina’nis, por vezes eram pegas de surpresa.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Apaixonada por astronomia e astrologia, Sana recheava suas transmissões com referências ao espaço e curiosidades numéricas exageradas, como sua altura e idade “oficiais”, deliberadamente absurdas. Era também afetuosa com suas colegas da hololive Council, mimando-as sempre que podia, e possuía um talento artístico notável.</p>

        <p>Apesar de ser a personificação do espaço, Sana mantinha uma atitude surpreendentemente realista. Quando enfrentou desafios pessoais, como a perda de seu animal de estimação, comunicou-se com maturidade e honestidade com seus Sanallites, lembrando-os da importância de respeitar o próprio tempo. Seu equilíbrio entre brincadeiras cósmicas e empatia genuína deixou uma marca calorosa entre fãs e colegas.</p>

        <p>Descrita por Baelz como “uma ドM (masoquista) por excelência, com habilidades artísticas insanas e um coração do tamanho do universo”, Sana irradiava generosidade e alegria por onde passava — mesmo que, acidentalmente, destruísse o planeta de vez em quando.</p>
        </details>`,
        aniversario: '10 de Junho',
        altura: '169cm (com limitador, e sem limitador 1.697.840km)',
        ilustrador: 'pako',
        nomeFas: 'Sanallites',
        grupo: 'Council',
        canal: '@TsukumoSana',
        canalSecreto: '@notNamie',
        dataGraduacao: '31 de Julho de 2022',
        outfits: [
            `${pastaFotosPefil}/sana.png`,
            `${pastaFotosPefil}/sana2.webp`,
            `${pastaFotosPefil}/sana3.webp`,
        ],
        clipes: [
            'R8y1aWMlPOs?si=A6aAcs2bm01KdXSl', // astro girl
            'uFJHdT_ie9U?si=GZgdygJsmeBwBPsY', // ochane kirou
            'U-9M-BjFYMc?si=157VmwrZRQof_F62', // hikaru nara
            idRise
        ],
        historia: `<h3>Audição</h3>
            <p>Após o sucesso da Hololive English em 2020 e 2021, a COVER Corporation anunciou audições para um segundo lote de membros de 12 de fevereiro a 26 de março de 2021. As contas do Twitter para os cinco novos membros foram criadas em junho de 2021 e as contas do YouTube foram criadas em 26 de julho de 2021.</p>

            <p>Os vídeos teaser para a nova geração começaram no canal oficial da Hololive em inglês no YouTube em agosto de 2021. Em 1º de agosto, "Prelude" revelou uma história de deuses criando os quatro conceitos de espaço, natureza, tempo e civilização. Em 14 de agosto, "Omen" descreveu a criação de avatares desses quatro conceitos mais o da força primordial do Caos, revelando cinco silhuetas. Em 17 de agosto, "Council" revelou os cinco novos membros da Hololive em inglês e anunciou uma grande estreia agendada para o próximo fim de semana. Embora o termo tradicional "geração" não tenha sido oficialmente usado para se referir aos novos membros, que foram chamados de "Hololive English Generation 2" pelos fãs, os novos membros formaram um grupo conhecido como "-Council-".</p>

            <p>Após a conclusão do PV de estreia de Council, as contas do Twitter e do YouTube de todos os cinco novos membros foram reveladas, e cada um fez seu primeiro tweet.</p>

            <p>Em 17 de agosto de 2021, cerca de 24 horas após o anúncio inicial, Tsukumo Sana atingiu 100.000 inscritos no YouTube antes de sua estreia. No entanto, o YouTube logo removeu cerca de metade desse número, possivelmente devido ao crescimento repentino de inscritos em um canal ainda sem vídeos, o que pode ter acionado um algoritmo antibot do YouTube. Sua contagem de inscritos foi reduzida novamente logo após ela atingir 170.000 inscritos no YouTube.</p>

            <h3>Estréia</h3>
            <p>A estreia de Tsukumo Sana estava marcada para 22 de agosto. No entanto, as estreias do "Council" foram adiadas por 24 horas devido a problemas técnicos não especificados, que os membros, brincando, atribuíram à "maldição EN", uma tendência percebida dos membros da Hololive english de sofrerem com problemas técnicos inesperados. As estreias foram remarcadas para o mesmo horário no domingo, 22 de agosto (horário dos EUA/Europa) ou na segunda-feira, 23 de agosto (horário do Japão).</p>

            <p>A transmissão de estreia de Sana atingiu um pico de audiência de mais de 84.000. Durante a transmissão, ela removeu seu limitador e cresceu até seu tamanho natural massivo, jogando a Terra para fora de órbita. No entanto, seus espectadores de alguma forma sobreviveram, e ela ainda conseguiu transmitir por tempo suficiente para cantar Seikan Hikou, uma música do popular anime de ficção científica Macross Frontier.</p>
            
            <h3>Aposentadoria</h3>
            <p>Em 11 de julho de 2022, Sana anunciou que se aposentaria de suas atividades em 31 de julho, tornando-se a primeira YouTuber virtual em inglês da Hololive a se graduar. Tanto Sana quanto a Cover Corp. declararam que, em última análise, foi um pedido de Sana para sua formatura.</p>

            <p>Antes do anúncio, os fãs de Sana esperavam que o anúncio estivesse relacionado à divulgação das fotografias do telescópio espacial James Webb pela NASA, que coincidentemente ocorreu no mesmo dia. Mais tarde, ela publicou um perfil no Twitter discutindo as imagens do telescópio e foi tomada por uma onda de apoio e votos de melhoras dos fãs.</p>

            <p>Sana agendou um grande número de colaborações em julho antes de sua aposentadoria, incluindo uma Bread Review com Watson Amelia, jogos retrô com Anya Melfissa e Pavolia Reine, Power Wash Simulator com Kobo Kanaeru, Minecraft com Tsunomaki Watame, Mario Party Superstars com Hakos Baelz e os holomembers "australianos" Akai Haato e Takanashi Kiara, uma sessão de perguntas e respostas sobre Marshmallow com Omaru Polka, uma lista de lanches australianos com Baelz, uma revisão de anatomia com Mori Calliope e Nanashi Mumei, reforma de sauna do Minecraft com Ceres Fauna, Clubhouse Games com Kaela Kovalskia, desenho com Vestia Zeta, Switch Sports com Yozora Mel, Minecraft com Ouro Kronii e Moona Hoshinova e um espaço no Twitter com Amane Kanata.</p>

            <p>Em 20 de julho, durante uma transmissão no canal de Mumei, -Council- e IRyS estrearam os modelos 3D "Beeg Smol" projetados por Sana.</p>

            <p>Em 31 de julho, Sana se aposentou de suas atividades em uma transmissão de formatura intitulada "Sana é ETERNA!" A transmissão atingiu pouco mais de 99.000 espectadores em seu pico.</p>

            <p>Na transmissão, ela leu mensagens e desenhos de outros membros da Hololive. Ela removeu seu limitador e o jogou na Terra, enquanto dizia aos seus Sanallites que não se arrependia de tê-los conhecido. O segundo segmento foi um show com a primeira música com Bae, Mumei e Kiara, mostrando vários clipes de suas transmissões anteriores. A segunda música contou com Fauna, IRyS, Calli e Ina, exibindo fan art de Sana. A terceira música contou com Kronii, Gura e Ame, junto com o mascote de Sana, o pão de cachorro Sanallite. A quarta música contou com todos os membros da hololive em inglês cantando "Ochame Kinou". A quinta e última música contou com IRyS e -Council- cantando a música original de Sana: "Astrogirl". O terceiro segmento da transmissão foi de Sana agradecendo aos seus espectadores enquanto repetia um trecho de sua palestra anterior, quando anunciou sua formatura da hololive.</p>

            <p>A última atividade de Sana foi em sua conta no Twitter, onde ela publicou a foto final apresentada em sua transmissão de formatura com a mensagem: "Eu não estou sozinha e você também não!" Ela então retuitou uma fan art dela mesma desenhada por seu ilustrador de personagens, pako.</p>

            <p>Antes de se formar, Sana também preparou uma mensagem pré-gravada para o aniversário de Nanashi Mumei, em 4 de agosto, que Mumei tocou durante sua transmissão de comemoração. Dado o momento da aposentadoria de Sana, Mumei foi a única integrante do -Council- e do Projeto: HOPE que não pôde comemorar seu aniversário enquanto Sana estava ativa.</p>

            <p>Em 23 de agosto, durante a comemoração do primeiro aniversário do -Council-, elas estrearam sua primeira música original do grupo: "Rise", com o videoclipe estreando logo após o término da transmissão. Sana também aparece na música mesmo após sua aposentadoria, provavelmente gravando antes de se aposentar.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Tsukumo_Sana">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Ceres Fauna',
        descricao: `<p>Graduada - Fauna é uma menina de fala mansa com uma aura reconfortante e maternal, embora tenha dito que tende a se considerar mais como uma irmã mais velha. Ela tem um talento inato para chamar a atenção de quem está ao seu redor, apesar de sua voz suave. Sua aura e voz reconfortantes são uma ótima combinação durante suas transmissões de ASMR, que frequentemente incluem uma variedade de segmentos, desde limpeza de ouvidos até longas discussões off-topic. Como a personificação da natureza, Fauna tem sido capaz de encantar e se firmar facilmente nos corações de seus jovens e colegas membros do Conselho, tanto com sua beleza física quanto com sua personalidade.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Em sua estreia, Hakos Baelz descreveu Fauna como uma mãe nata, uma beleza encantadora e alguém que dá os melhores tapinhas na cabeça. Os fãs também notaram rapidamente sua semelhança impressionante com Yukihana Lamy em muitos aspectos, desde o tom de voz e a personalidade maternal até sua inspiração natural em geral.</p>

        <p>Fauna parece ser extremamente protetora com seus fãs e com Nanashi Mumei, a ponto de demonstrar possessividade e ciúme extremo, e não hesita em adotar um tom mais condescendente quando se depara com algo inaceitável. Devido aos seus traços possessivos, Fauna frequentemente tenta convencer Mumei e os humanos a "retornar à natureza" sempre que Mumei fica chateada. Fauna também se envergonha com bastante facilidade e usa o tique verbal "uuuu" com frequência.</p>
        </details>`,
        aniversario: '21 de Março',
        altura: '164cm',
        ilustrador: 'Tohsaka Asagi',
        nomeFas: 'Saplings',
        grupo: 'Council / Promise',
        canal: '@CeresFauna',
        canalSecreto: '@niminightmare',
        dataGraduacao: '03 de Janeiro de 2025',
        outfits: [
            `${pastaFotosPefil}/fauna.png`,
            `${pastaFotosPefil}/fauna2.png`,
            `${pastaFotosPefil}/fauna3.png`,
            `${pastaFotosPefil}/fauna4.png`,
        ],
        clipes: [
            '0RMVJTLZOzQ?si=TjzPQ0JHv2VsfHGA', // let me stay here
            'IdgKmhbsZt0?si=Em9kqh_FB5Xp4RGV', // (cover em jp)
            'bbJqGGRQ32k?si=0wfx5UP71lOxpV35', // suki yuki maji magic
            idNotAPhase
        ],
        historia: `<h3>Audição</h3>
            <p>Após o sucesso da Hololive English em 2020 e 2021, a COVER Corporation anunciou audições para um segundo lote de membros de 12 de fevereiro a 26 de março de 2021. As contas do Twitter para os cinco novos membros foram criadas em junho de 2021 e as contas do YouTube foram criadas em 26 de julho de 2021.</p>

            <p>Fauna se inspirou a se juntar à hololive depois de assistir às estreias da primeira geração da Hololive em inglês em 2020. Ela se inscreveu imediatamente assim que as audições foram abertas e foi aceita em sua primeira audição. Uma confusão temporária na tradução inicialmente a fez ser vista como uma girafa, em vez de um kirin mítico.</p>

            <p>Os vídeos teaser para a nova geração começaram no canal oficial da hololive em inglês no YouTube em agosto de 2021. Em 1º de agosto, "Prelude" revelou uma história de deuses criando os quatro conceitos de espaço, natureza, tempo e civilização. Em 14 de agosto, "Omen" descreveu a criação de avatares desses quatro conceitos mais o da força primordial do Caos, revelando cinco silhuetas. Em 17 de agosto, "Council" revelou os cinco novos membros da hololive em inglês e anunciou uma grande estreia agendada para o próximo fim de semana. Embora o termo tradicional "geração" não tenha sido oficialmente usado para se referir aos novos membros, que foram chamados de "hololive English Generation 2" pelos fãs, os novos membros formaram um grupo conhecido como "-Council-".</p>

            <p>Após a conclusão do PV de estreia de Council, as contas do Twitter e do YouTube de todos os cinco novos membros foram reveladas, e cada um fez seu primeiro tweet.</p>

            <p>Em 17 de agosto de 2021, cerca de 24 horas após o anúncio inicial, Ceres Fauna atingiu 100.000 inscritos no YouTube antes de sua estreia. No entanto, o YouTube logo removeu cerca de metade desse número, possivelmente devido ao crescimento repentino de inscritos em um canal ainda sem vídeos, o que pode ter acionado um algoritmo antibot do YouTube.</p>

            <h3>Estréia</h3>
            <p>A estreia do Ceres Fauna estava marcada para 22 de agosto. No entanto, as estreias do "Council" foram adiadas por 24 horas devido a problemas técnicos não especificados, que os membros, brincando, atribuíram à "maldição EN", uma tendência percebida dos membros da Hololive English sofrerem com problemas técnicos inesperados. As estreias foram remarcadas para o mesmo horário no domingo, 22 de agosto (horário dos EUA/Europa) ou na segunda-feira, 23 de agosto (horário do Japão).</p>

            <p>A transmissão de estreia de Fauna recebeu mais de 92.000 espectadores em seu pico, e seu canal atingiu 100.000 inscritos quando a transmissão começou. Ela concluiu cantando Sweets Parade do anime Inu x Boku SS.</p>

            <h3>Promise</h3>
            <p>Em 9 de outubro de 2023, IRyS, Ceres Fauna, Ouro Kronii, Nanashi Mumei e Hakos Baelz anunciaram que formariam a nova unidade "hololive English -Promise-". Combinando o grupo Council com Project: HOPE. Embora não declarado na colaboração 3D, o encerramento do "Project: HOPE" foi anunciado no site da hololive logo depois.</p>
            
            <h3>Aposentadoria</h3>
            <p>Em 30 de novembro de 2024, Fauna anunciou que se formaria no hololive em 3 de janeiro de 2025 devido a diferenças com a administração. Seu conteúdo no YouTube permaneceu online e, em uma atitude incomum, seu conteúdo exclusivo para membros foi tornado público.</p>

            <p>Em 14 de dezembro, -Promise- realizou seu musical: "hololive English -Promise- 1st Anniversary Musical: The Broken Promise."</p>

            <p>Em 25 de dezembro, durante uma transmissão de karaokê não arquivada, Fauna estreou sua fantasia de Papai Noel 3D. A fantasia tem duas versões, vermelha e branca.</p>

            <p>Em 27 de dezembro, Fauna atingiu 1.000.000 de inscritos no YouTube. Isso a torna a 50ª integrante da hololive e a quinta e última integrante do -Promise- a atingir esse marco. Isso também faz de -Promise- a 9ª geração da hololive em que todas as integrantes atingiram esse marco.</p>

            <p>Em 3 de janeiro de 2025, Fauna realizou sua última transmissão no YouTube. A transmissão contou com ligações de vários membros do Hollive e terminou com uma apresentação musical. Atingiu 131.076 espectadores no pico e arrecadou mais de US$ 59.000 em superchats.
            </p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Ouro Kronii',
        descricao: `<p>Ouro Kronii é autoconfiante, sarcástica e afiada, com um senso de humor seco que a diferencia de muitas de suas colegas mais efusivas. Não hesita em se elogiar — frequentemente de forma exagerada — mas por trás de seu narcisismo performático há uma autoconsciência surpreendente e, às vezes, uma melancolia assumida. Ela mesma já listou “medo existencial” como hobby.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Com uma voz grave e envolvente, Kronii transmite a presença de uma “irmã mais velha” ou até de uma “tia descolada” — um contraste intencional com sua verdadeira natureza, muitas vezes marcada por frustrações cômicas, falta de sorte e reações explosivas em jogos. Seu alcance vocal, porém, vai muito além disso, transitando entre o tom solene e o agudo com facilidade quando provocado.</p>

        <p>Apesar de sua fachada arrogante, Kronii é brincalhona com seu público e demonstra carinho à sua maneira, inclusive sendo receptiva com colegas da hololive Council. Seu "gap moe" — aquele contraste encantador entre imagem e atitude — aparece nos momentos de nervosismo ou vulnerabilidade, revelando um lado inesperadamente fofo.</p>

        <p>Famosa por conselhos como “simplesmente seja melhor”, ela costuma provocar seus espectadores com ironia, mas recebe a mesma energia de volta quando precisa de ajuda. Ceres Fauna a descreveu como descolada, hilária e perfeita para ler histórias para dormir, enquanto Hakos Baelz brincou chamando-a de “vovó tsundere” — um resumo justo para alguém que oscila entre o sarcasmo mordaz e o carinho contido.</p>
        </details>`,
        aniversario: '14 de Março',
        altura: '168cm',
        ilustrador: 'WADARCO',
        nomeFas: 'Kronies',
        grupo: 'Council / Promise',
        canal: '@OuroKronii',
        outfits: [
            `${pastaFotosPefil}/kronii.png`,
            `${pastaFotosPefil}/kronii2.png`,
            `${pastaFotosPefil}/kronii3.png`,
            `${pastaFotosPefil}/kronii4.png`,
        ],
        clipes: [
            '6W749jRBg-4?si=I1A-vVfz-zLkFhoo', // daydream
            'sTxcH54jhPk?si=dun8eiHjFduicMJQ', // souten ni moyu
            'O5h6haVYSYQ?si=wERcSVwOurYMmZRH', // suki suki daisuki
            idRise
        ],
        historia: `<h3>Audição</h3>
            <p>Após o sucesso da hololive English em 2020 e 2021, a COVER Corporation anunciou audições para um segundo lote de membros de 12 de fevereiro a 26 de março de 2021. As contas do Twitter para os cinco novos membros foram criadas em junho de 2021 e as contas do YouTube foram criadas em 26 de julho de 2021.</p>

            <p>Os vídeos teaser para a nova geração começaram no canal oficial da hololive em inglês no YouTube em agosto de 2021. Em 1º de agosto, "Prelude" revelou uma história de deuses criando os quatro conceitos de espaço, natureza, tempo e civilização. Em 14 de agosto, "Omen" descreveu a criação de avatares desses quatro conceitos mais o da força primordial do Caos, revelando cinco silhuetas. Em 17 de agosto, "Council" revelou os cinco novos membros da hololive em inglês e anunciou uma grande estreia agendada para o próximo fim de semana. Embora o termo tradicional "geração" não tenha sido oficialmente usado para se referir aos novos membros, que foram chamados de "hololive English Generation 2" pelos fãs, os novos membros formaram um grupo conhecido como "-Council-".</p>

            <p>Após a conclusão do PV de estreia de Council, as contas do Twitter e do YouTube de todos os cinco novos membros foram reveladas, e cada um fez seu primeiro tweet. O Twitter rapidamente restringiu as contas de Kronii e Nanashi Mumei devido ao aumento repentino de seguidores.</p>

            <p>Em 17 de agosto de 2021, cerca de 24 horas após o anúncio inicial, Ouro Kronii atingiu 100.000 inscritos no YouTube antes de sua estreia. No entanto, o YouTube logo removeu cerca de metade desse número, possivelmente devido ao crescimento repentino de inscritos em um canal ainda sem vídeos, o que pode ter acionado um algoritmo antibot do YouTube. Sua contagem de inscritos foi reduzida novamente depois que ela atingiu 200.000 inscritos no YouTube pela primeira vez.</p>

            <h3>Estréia</h3>
            <p>A estreia do Ouro Kronii estava marcada para domingo, 22 de agosto. No entanto, as estreias do "Council" foram adiadas por 24 horas devido a problemas técnicos não especificados, que os membros, brincando, atribuíram à "maldição do EN", uma tendência percebida pelos membros da Hololive English de sofrerem com problemas técnicos inesperados. As estreias foram remarcadas para o mesmo horário no domingo, 22 de agosto (horário dos EUA/Europa) ou na segunda-feira, 23 de agosto (horário do Japão).</p>

            <p>Kronii fez sua estreia na transmissão na segunda-feira, 23 de agosto de 2021, às 5h JST (22 de agosto, 13h PDT ou 21h BST). Ela foi a terceira integrante da hololive -Council- a estrear. Sua estreia atingiu um pico de audiência de mais de 90.000 espectadores, e ela alcançou 115.000 inscritos no YouTube no início da transmissão. Na transmissão, Kronii provocou uma música e concluiu a transmissão cantando Butterfly, o tema de abertura japonês do anime Digimon Adventure.</p>
            
            <h3>Promise</h3>
            <p>Em 9 de outubro de 2023, IRyS, Ceres Fauna, Ouro Kronii, Nanashi Mumei e Hakos Baelz anunciaram que formariam a nova unidade "hololive English -Promise-". Combinando o grupo Council com Project: HOPE. Embora não declarado na colaboração 3D, o encerramento do "Project: HOPE" foi anunciado no site da hololive logo depois.</p>
            
            <h3>Em 2025</h3>
            <p>Em 9 de março de 2025, ela estreou seu Traje de ídolo 3D na hololive 6th fes. Color Rise Harmony durante o dia 2 do evento, ESTÁGIO 3. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 26 de março, Kronii estreou seu quinto traje 2D. Kronii tem cachos ondulados e twintails trançados longos e baixos com fitas brancas perto das pontas. Ela pode usar uma touca branca de renda. Kronii usa uma fantasia de empregada. Kronii usa um vestido preto longo com mangas compridas e saia que cobre um pouco acima dos pés. A saia tem um padrão decorativo. Por cima, ela pode usar um longo avental branco complementado com uma gola da mesma cor, que tem cortes de padrão em formas florais perto da parte inferior. Kronii carrega um relógio de bolso dourado pendurado na cintura. Suas meias são brancas e seus sapatos pretos. Kronii também pode segurar suas tranças até o rosto, em um gesto nervoso ou tímido.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Ouro_Kronii">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Nanashi Mumei',
        descricao: `<p>Graduada - Mumei estreou como uma garota doce, tímida e de fala mansa, contrastando com suas colegas. Com o tempo, revelou uma persona marcada por uma dualidade curiosa: um lado calmo e relaxante, e outro caótico e psicopata, muitas vezes expressando humor macabro e fascínio pelo grotesco. Essa dicotomia se manifesta especialmente em seus desenhos, que tendem ao sombrio e perturbador, mesmo com temas inocentes — algo que os fãs atribuem ao fardo de carregar os pecados da civilização.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Apesar disso, Mumei demonstra grande carinho pelos fãs. Durante suas transmissões comemorativas, emocionou-se com o apoio recebido e deixou claro que valoriza profundamente o tempo dedicado a acompanhá-la, mesmo mais do que dinheiro. Ela frequentemente expressa gratidão, encoraja os fãs a descansarem e celebra quando se sentem inspirados por ela.</p>

        <p>Embora tenha momentos de alta energia (sobretudo com cafeína), se define como alguém de "baixa energia" e desajeitada, recorrendo a ruídos e cantorias improvisadas para lidar com o silêncio. Ela admite ter atenção curta e dificuldades com multitarefa, o que reforça sua imagem levemente caótica.</p>

        <p>Reconhecida por sua voz fofa — descrita como a mais adorável da hololive -Council- por Hakos Baelz — Mumei também surpreende com gritos agudos e uma extensão vocal inesperada. Seu jeito gentil despertou instintos protetores em fãs e colegas como Ceres Fauna, embora seu comportamento imprevisível tenha invertido essa dinâmica com o tempo.</p>
        </details>`,
        aniversario: '04 de Agosto',
        altura: '156cm',
        ilustrador: 'azure',
        nomeFas: 'Hoomans',
        grupo: 'Council / Promise',
        canal: '@NanashiMumei',
        canalSecreto: '@shachimu',
        dataGraduacao: '27 de Abril de 2025',
        outfits: [
            `${pastaFotosPefil}/mumei.png`,
            `${pastaFotosPefil}/mumei2.png`,
            `${pastaFotosPefil}/mumei3.png`,
            `${pastaFotosPefil}/mumei4.png`,
        ],
        clipes: [
            'Py21QCndbxc?si=i9eVxNgc5AG1fftu', // a new start
            'oA0CpI0vCK4?si=oJWZgMx58xsQOwXw', // mumei
            'Apgmr-SggVQ?si=N_rxXTMvbJ5LHcOy', // idol
            idNotAPhase
        ],
        historia: `<h3>Audição</h3>
            <p>Após o sucesso da hololive English em 2020 e 2021, a COVER Corporation anunciou audições para um segundo lote de membros ingleses de 12 de fevereiro a 26 de março de 2021. As contas do Twitter para os cinco novos membros foram criadas em junho de 2021 e as contas do YouTube foram criadas em 26 de julho de 2021.</p>

            <p>Os vídeos teaser para a nova geração começaram no canal oficial da hololive em inglês no YouTube em agosto de 2021. Em 1º de agosto, "Prelude" revelou uma história de deuses criando os quatro conceitos de espaço, natureza, tempo e civilização. Em 14 de agosto, "Omen" descreveu a criação de avatares desses quatro conceitos mais o da força primordial do Caos, revelando cinco silhuetas. Em 17 de agosto, "Council" revelou os cinco novos membros da hololive em inglês e anunciou uma grande estreia agendada para o próximo fim de semana. Embora o termo tradicional "geração" não tenha sido oficialmente usado para se referir aos novos membros, que foram chamados de "hololive English Generation 2" pelos fãs, os novos membros formaram um grupo conhecido como "-Council-".</p>

            <p>Após a conclusão do PV de estreia de Council, as contas do Twitter e do YouTube de todos os cinco novos membros foram reveladas, e cada um fez seu primeiro tweet. O Twitter rapidamente restringiu as contas de Nanashi Mumei e Ouro Kronii devido ao aumento repentino de seguidores.</p>

            <p>Em 17 de agosto de 2021, cerca de 24 horas após o anúncio inicial, Nanashi Mumei atingiu 100.000 inscritos no YouTube antes de sua estreia. No entanto, o YouTube logo removeu cerca de metade desse número, possivelmente devido ao crescimento repentino de inscritos em um canal ainda sem vídeos, o que pode ter acionado um algoritmo antibot do YouTube.</p>

            <h3>Estréia</h3>
            <p>A estreia de Nanashi Mumei estava marcada para 22 de agosto. No entanto, as estreias do "Council" foram adiadas por 24 horas devido a problemas técnicos não especificados, que os membros, brincando, atribuíram à "maldição EN", uma tendência percebida dos membros da hololive English sofrerem com problemas técnicos inesperados. As estreias foram remarcadas para o mesmo horário no domingo, 22 de agosto (horário dos EUA/Europa) ou na segunda-feira, 23 de agosto (horário do Japão).</p>

            <p>Mumei fez sua transmissão de estreia na segunda-feira, 23 de agosto, às 6h30 JST (22 de agosto de 2021, às 14h30 PDT, 22h30 BST). Ela foi a quarta integrante do -Council- a estrear. A transmissão teve um pico de audiência de mais de 90.000 pessoas, e ela alcançou mais de 100.000 inscritos no início. Ela apresentou uma prévia de uma música original sem nome, que mais tarde foi lançada como "A New Start".</p>
            
            <h3>Promise</h3>
            <p>Em 9 de outubro de 2023, IRyS, Ceres Fauna, Ouro Kronii, Nanashi Mumei e Hakos Baelz anunciaram que formariam a nova unidade "hololive English -Promise-". Combinando o grupo Council com Project: HOPE. Embora não declarado na colaboração 3D, o encerramento do "Project: HOPE" foi anunciado no site da hololive logo depois.</p>
            
            <h3>Aposentadoria</h3>
            <p>Em 27 de março de 2025, Mumei anunciou que se formará na hololive em 28 de abril de 2025, devido a desalinhamentos internos com a agência e problemas de saúde crônicos.</p>

            <p>Em 26 de abril, Mumei realizou sua última transmissão ao vivo de bate-papo, na qual recebeu ligações e votos de felicidades dos membros da hololive. A transmissão atingiu 55.760 espectadores no pico e recebeu US$ 39.817,47 em doações do Superchat. Ela também lançou um cover de One Voice.</p>

            <p>Em 27 de abril, ela realizou sua transmissão final, um evento de formatura 3D pré-gravado. A transmissão atingiu 124.095 espectadores no pico e recebeu mais US$ 22.639 em receita do Superchat. O evento incluiu uma apresentação do single de 2023 de Mumei, "mumei", com todos os membros atuais da hololive English. A transmissão foi posteriormente sujeita a uma remoção de direitos autorais pela Sony Music Entertainment.</p>

            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Nanashi_Mumei">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Hakos Baelz',
        descricao: `<p>Hakos Baelz pode carregar o título de "Caos" no lore da hololive Council, mas na prática é frequentemente a mais centrada de seu grupo — mesmo que viva cercada pelo caos gerado pelos outros. Extrovertida e energética, com uma risada contagiante e presença vibrante, ela surpreende ao revelar um lado introvertido e discreto em interações mais próximas, o que torna suas trocas sociais frequentemente desajeitadas, mas encantadoras.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Baelz cultiva um senso de humor único, como demonstra seu hábito de escrever de cabeça para baixo — um aceno brincalhão à sua origem australiana, que inspirou inúmeras fanarts e piadas internas entre fãs. Apesar disso, ela possui pouca familiaridade com referências da cultura pop mais ampla, o que rendeu o apelido de “zoomer” e fez dela uma espécie de contraponto moderno a talentos como Noir Vesper.</p>

        <p>Seu relacionamento com IRyS é marcado por uma química caótica e imprevisível, oscilando entre rivalidade e camaradagem em um ciclo constante de “casamento” e “divórcio” encenado com humor. Apesar de suas brigas fictícias, a afinidade entre as duas é evidente.</p>

        <p>Baelz também demonstra forte orgulho por sua cultura natal, chegando a criar o programa "BAE-GEMITE" para introduzir outros membros ao famigerado vegemite. Ainda que cheia de energia e disposição para a brincadeira, ela também pode ser vulnerável, como visto em sua aracnofobia declarada — algo que não combinou bem com os hábitos culinários inusitados de Haachama.</p>

        <p>Em essência, Baelz é um caos cuidadosamente equilibrado entre ousadia e sensibilidade — uma figura central que transita entre o papel de encrenqueira e de alvo das travessuras alheias com um charme que conquista.</p>
        </details>`,
        aniversario: '29 de Fevereiro',
        altura: '149cm',
        ilustrador: 'Mika Pikazo',
        nomeFas: 'Brats',
        grupo: 'Council / Promise',
        canal: '@HakosBaelz',
        outfits: [
            `${pastaFotosPefil}/baelz.png`,
            `${pastaFotosPefil}/baelz2.png`,
            `${pastaFotosPefil}/baelz3.png`,
            `${pastaFotosPefil}/baelz4.png`,
        ],
        clipes: [
            'na6bysYNuS0?si=RBomPVz8vVPmrBfx', // play dice
            '7WXVFl-N6-o?si=HzESP4nM5rZcxvAH', // r x r x r x
            'xnX8Lk-iSCo?si=2kCi_AHuPOQH8dpE', // psycho
            'lcVyYmVOi1U?si=TmkJPGW-p0CC1TgJ', // our promise
        ],
        historia: `<h3>Audição</h3>
            <p>Após o sucesso da hololive English em 2020 e 2021, a COVER Corporation anunciou audições para um segundo lote de membros de 12 de fevereiro a 26 de março de 2021. As contas do Twitter para os cinco novos membros foram criadas em junho de 2021 e as contas do YouTube foram criadas em 26 de julho de 2021.</p>

            <p>Os vídeos teaser para a nova geração começaram no canal oficial da hololive em inglês no YouTube em agosto de 2021. Em 1º de agosto, "Prelude" revelou uma história de deuses criando os quatro conceitos de espaço, natureza, tempo e civilização. Em 14 de agosto, "Omen" descreveu a criação de avatares desses quatro conceitos mais o da força primordial do Caos, revelando cinco silhuetas. Em 17 de agosto, "Council" revelou os cinco novos membros da hololive em inglês e anunciou uma grande estreia agendada para o próximo fim de semana. Embora o termo tradicional "geração" não tenha sido oficialmente usado para se referir aos novos membros, que foram chamados de "hololive English Generation 2" pelos fãs, os novos membros formaram um grupo conhecido como "-Council-".</p>

            <p>Após a conclusão do PV de estreia de Council, as contas do Twitter e do YouTube de todos os cinco novos membros foram reveladas, e cada um fez seu primeiro tweet.</p>

            <p>Em 17 de agosto de 2021, cerca de 24 horas após o anúncio inicial, Hakos Baelz atingiu 100.000 inscritos no YouTube antes de sua estreia. No entanto, o YouTube logo removeu cerca de metade desse número, possivelmente devido ao crescimento repentino de inscritos em um canal ainda sem vídeos, o que pode ter acionado um algoritmo antibot do YouTube.</p>

            <h3>Estréia</h3>
            <p>A estreia de Hakos Baelz foi originalmente agendada para 22 de agosto, no horário do Japão. Uma colaboração do grupo -Council- em seu canal foi provisoriamente agendada para duas horas depois. No entanto, as estreias do -Council- foram adiadas por 24 horas devido a problemas técnicos não especificados, que os membros, brincando, atribuíram à "maldição EN", uma tendência percebida dos membros da hololive English de sofrerem com problemas técnicos inesperados. As estreias foram remarcadas para o mesmo horário no domingo, 22 de agosto (horário dos EUA/Europa) ou na segunda-feira, 23 de agosto (horário do Japão).</p>

            <p>A transmissão de estreia de Baelz ocorreu na segunda-feira, 23 de agosto de 2021, às 8h JST (22 de agosto de 2021, às 15h PDT ou meia-noite BST). Ela é a quinta e última integrante da hololive -Council- a estrear. Sua transmissão de estreia atingiu um pico de mais de 90.000 espectadores, e ela já havia alcançado 135.000 inscritos no YouTube quando a transmissão começou. Ela encerrou a transmissão cantando Fuwa Fuwa Time, uma popular música de inserção do anime K-On!, na qual ela personificou os personagens Mio e Yui daquela série. Uma transmissão colaborativa da hololive -Council- foi agendada em seu canal uma hora depois.</p>
            
            <h3>Promise</h3>
            <p>Em 9 de outubro de 2023, IRyS, Ceres Fauna, Ouro Kronii, Nanashi Mumei e Hakos Baelz anunciaram que formariam a nova unidade "hololive English -Promise-". Combinando o grupo Council com Project: HOPE. Embora não declarado na colaboração 3D, o encerramento do "Project: HOPE" foi anunciado no site da hololive logo depois.</p>
            
            <h3>Em 2025</h3>
            <p>Em 20 de fevereiro de 2025, Baelz lançou uma atualização 3.0 para seu modelo 2D principal. Com este novo modelo, Baelz tem muito mais movimento. Os novos recursos incluem a capacidade de mudar a aparência dos olhos (olhos em forma de coração, remover o brilho ou ficar mais vermelho), chorar, mostrar a língua, usar um teclado, segurar um controle e criar emotes.</p>

            <p>Em 28 de fevereiro, Baelz lançou sua nova música original "FEAST".</p>

            <p>Em 8 de março, ela estreou seu Traje de ídolo 3D hololive 6th fes. Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 2. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Hakos_Baelz">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Shiori Novella',
        descricao: `<p>Shiori pode ser melhor descrita como alegre e nerd. Ela é bondosa, embora frequentemente provoque aqueles com quem tem proximidade, especialmente seus genmates. Suas transmissões são em sua maioria aconchegantes e tranquilas, embora ela frequentemente se empolgue com coisas aleatórias.</p>

        <p>Shiori é bem conhecida entre os fãs por suas tangentes — discussões divagantes sobre qualquer assunto estranho que lhe venha à cabeça. Podem ser desde traumas de infância a gravidez e canibalismo. Os fãs brincam que seu gerente ("Henmama") está perdendo o sono e/ou a sanidade tentando evitar que Shiori fique muito desequilibrada. Um dos emotes disponíveis para os membros do canal de Shiori no YouTube é o emote "bonk", para ser usado sempre que os espectadores acharem que ela merece ser controlada.</p>`,
        aniversario: '02 de Maio',
        altura: '163cm',
        ilustrador: 'KAYAHARA',
        nomeFas: 'Novelites',
        grupo: 'Advent',
        canal: '@ShioriNovella',
        outfits: [
            `${pastaFotosPefil}/shiori.png`,
            `${pastaFotosPefil}/shiori2.png`,
            `${pastaFotosPefil}/shiori3.png`,
        ],
        clipes: [
            'xEuupOGazwg?si=RbtQ3Wybl5l0adyP', // dark night
            'QvXPvj61crA?si=vpsgJFmhNG-tnVkh', // hoshi wo wataru
            'zI_kkSCX8vM?si=RysmGclF4Y2elfNT', // rainy boots
            idSirens
        ],
        historia: `<h3>Audição</h3>
            <p>Após a estreia da segunda geração da hololive English -Council-, a hololive English anunciou uma página permanente de audição em inglês em 30 de dezembro de 2021. Uma atualização da página de audição em 7 de setembro de 2022 gerou especulações sobre uma futura terceira geração da holoEN.</p>

            <p>Shiori descobriu a hololive pela primeira vez por meio de clipes não traduzidos de Inugami Korone no YouTube. Ela decidiu participar por vários motivos, incluindo seu desejo de criar coisas. Ela estava com a família quando recebeu o e-mail de aceitação e esperou um pouco antes de elaborar uma resposta formal.</p>

            <p>As contas do YouTube e do Twitter de Shiori Novella foram criadas originalmente em 11 de maio de 2023, embora não contivessem nenhum conteúdo naquele momento.</p>

            <p>A terceira geração da hololive em inglês, -Advent-, foi inicialmente anunciada na conta do Twitter da hololive em inglês com um pequeno vídeo em 22 de julho de 2023. Isso foi seguido por outro vídeo teaser em 23 de julho, mostrando cinco novos personagens.</p>

            <p>Em 25 de julho, o canal do YouTube da hololive em inglês postou um vídeo intitulado Wanted!, revelando os cinco membros do -Advent- e anunciando suas próximas estreias. Ao mesmo tempo, Shiori também postou um pequeno vídeo teaser e fez seu primeiro tweet, consistindo em uma única imagem.</p>

            <p>As contas de Shiori no Twitter e no YouTube foram descobertas acidentalmente por alguns fãs algumas horas antes do anúncio oficial, embora ainda não tivessem fotos de perfil ou conteúdo. Sua conta no YouTube recebeu mais de mil inscritos antes do lançamento oficial.</p>

            <p>Os canais do YouTube de todos os membros do Advent alcançaram 100.000 assinantes em doze horas após o anúncio.</p>

            <h3>Estréia</h3>
            <p>A transmissão de estreia de Shiori ocorreu em 30 de julho de 2023, das 12h às 12h45 (sábado, 29 de julho, das 20h às 20h45 PDT). A transmissão atingiu mais de 126.000 espectadores simultâneos no pico. Ela também alcançou mais de 200.000 inscritos no YouTube durante a transmissão. Shiori também revelou que pode tirar o casaco.</p>

            <p>Seguindo a tradição da hololive, isso foi seguido pelo grupo colaborativo Generation, composto por todos os membros. Isso, por sua vez, foi seguido pelo lançamento da primeira música do grupo, "Rebellion".</p>
            
            <h3>Em 2025</h3>
            <p>Em 6 de janeiro de 2025, Shiori atingiu 600.000 inscritos em seu canal do YouTube.</p>

            <p>Em 13 de janeiro, Shiori estreou seu terceiro traje 2D. Shiori tem dois penteados, cabelo longo com franja estilizada para a esquerda e um rabo de cavalo curto. Ela pode usar um chapéu preto. Shiori usa um vestido vermelho com detalhes pretos e renda, com uma fita preta como decoração. Sob o peito, Shiori tem um espartilho preto. Sua saia tem muitos cintos pretos. Shiori usa meias longas e pretas com aberturas na parte superior amarradas com pequenas fitas. As aberturas têm renda cruzada, parcialmente transparente, que se estende acima das meias. Shiori usa sapatos pretos. Shiori também pode usar uma capa preta acima do vestido e mover a mão direita até o rosto.</p>

            <p>Em 27 de fevereiro, durante um teste de amizade do Advent com seus trajes casuais, cada integrante trocou de penteado. Shiori tem o penteado principal de Nerissa, incluindo os chifres.</p>

            <p>Em 8 de março, ela estreou seu Traje de ídolo 3D na hololive 6th fes. Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 1. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 1º de abril, Shiori, Nerissa e Bijou estrearam modelos 3D.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Shiori_Novella">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Koseki Bijou',
        descricao: `<p>Biboo é animada, amigável e, muitas vezes, se empolga facilmente. Ela tem um vasto conhecimento de memes da Geração Z (o que muitas vezes deixa seus colegas um pouco mais velhos e outros membros da hololive um tanto perplexos) e frequentemente diverte seus colegas e espectadores com suas travessuras infantis. Devido a essas travessuras bobas, ela acaba soltando piadas que levam os espectadores a provocá-la carinhosamente. Ela é conhecida por "colecionar mães", usando sua fofura para fazer com que outros membros concordem em ser sua mãe.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Ela também é conhecida por suas habilidades em RPGs e jogos de ação (muitas vezes criando desafios para tornar jogos difíceis que ela já terminou ainda mais difíceis) e demonstrou conhecimento em mods de jogos, como quando substituiu Sans de Undertale por Mori Calliope em sua audição hololive.</p>

        <p>Apesar de sua propensão a memes e jogos de ação, ela é uma das integrantes mais "seiso" da hololive English; ela se recusa conscientemente a xingar durante as transmissões, dizendo literalmente "bip" no lugar de um palavrão, mesmo ao ler textos de mídia que contenham palavrões. Ela também usa consistentemente "dang it!" para expressar frustração em vez de linguagem mais áspera e, consequentemente, tornou-se conhecida por manter a calma e a compostura mesmo diante de desafios de jogos que deixariam a maioria dos outros membros de qualquer ramo irremediavelmente enfurecidos e chateados. Um de seus emotes de bate-papo é até mesmo um "BEEP" em letras maiúsculas e, embora não seja uma regra oficial do canal, ela pede que Pebbles também se abstenha de palavrões no bate-papo durante as transmissões, se possível.</p>
        </details>`,
        aniversario: '14 de Abril',
        altura: '140cm',
        ilustrador: 'Kitada mo',
        nomeFas: 'Pebbles',
        grupo: 'Advent',
        canal: '@KosekiBijou',
        outfits: [
            `${pastaFotosPefil}/bijou.png`,
            `${pastaFotosPefil}/bijou2.png`,
            `${pastaFotosPefil}/bijou3.png`,
        ],
        clipes: [
            'Akn_Gdi05Ys?si=8oNDFNXtFV3EFppP', // kyoumen no nami
            'NfhJK602XdE?si=1HRKBUnPqGQODLYi', // love it
            'M3pjFfKBonI?si=9N1XTkrED082kMWg', // prism no mahou
            idRebellion,
        ],
        historia: `<h3>Audição</h3>
            <p>Após a estreia da segunda geração da hololive English -Council-, a hololive English anunciou uma página permanente de audição em inglês em 30 de dezembro de 2021. Uma atualização da página de audição em 7 de setembro de 2022 gerou especulações sobre uma futura terceira geração da holoEN.</p>

            <p>Bijou descobriu a hololive por meio de clipes do YouTube após a estreia de "Myth" em 2020. Ela se inspirou a fazer um teste para a hololive, apesar de não ter experiência com streaming na época. Apesar de ter sido inicialmente rejeitada, ela decidiu concentrar todos os seus esforços em seu objetivo de participar. Ela se candidatou três vezes antes de ser aprovada.</p>

            <p>Na audição, Bijou demonstrou seu talento técnico, de jogabilidade e criativo ao jogar seu próprio mod feito por um fã de Undertale, derrotando o chefe Sans, que ela havia substituído por Mori Calliope. Mais tarde, ela lembra que quando soube que havia sido selecionada para se juntar ao hololive, ela estava ouvindo a música I Really Want to Stay at Your House do jogo Cyberpunk 2077.</p>

            <p>As contas do YouTube e do Twitter de Koseki Bijou foram criadas originalmente em 11 de maio de 2023, embora não contivessem nenhum conteúdo neste momento.</p>

            <p>A terceira geração da hololive em inglês, -Advent-, foi inicialmente anunciada na conta do Twitter da hololive em inglês com um pequeno vídeo em 22 de julho de 2023. Isso foi seguido por outro vídeo teaser em 23 de julho, mostrando cinco novos personagens.</p>

            <p>Em 25 de julho, o canal do YouTube da hololive em inglês postou um vídeo intitulado Wanted!, revelando os cinco membros do -Advent- e anunciando suas próximas estreias. Ao mesmo tempo, Bijou também postou um pequeno vídeo teaser em seu canal do YouTube e fez seu primeiro tweet.</p>

            <p>Os canais do YouTube de todos os membros do Advent alcançaram 100.000 assinantes em doze horas após o anúncio.</p>

            <h3>Estréia</h3>
            <p>Bijou fez sua estreia na transmissão em 30 de julho de 2023, das 12h45 às 13h30 JST (sábado, 29 de julho de 2023, das 20h45 às 21h30 PDT). A transmissão atingiu mais de 128.000 espectadores no pico, apresentando uma abertura com uma garota mágica e uma apresentação em PowerPoint. Foi seguido pelo lançamento de seu primeiro cover, "Kyoumen no Nami". Ela alcançou mais de 200.000 inscritos no YouTube durante sua transmissão de estreia.</p>

            <p>Seguindo a tradição da hololive, isso foi seguido pelo grupo colaborativo Generation, composto por todos os membros. Isso, por sua vez, foi seguido pelo lançamento da primeira música do grupo, "Rebellion".</p>

            <p>Bijou não ensaiou muito para sua estreia, acreditando que uma abordagem natural e improvisada seria a melhor. No entanto, ela se esforçou para preparar tudo para o evento e tinha um plano geral.</p>
            
            <h3>Em 2025</h3>
            <p>Em 16 de janeiro de 2025, Bijou estreou seu terceiro traje 2D. Bijou tem dois penteados, corte de cabelo bob e twintails altos e longos, ambos têm sua franja cobrindo seu olho esquerdo, que também pode ser coberto por um tapa-olho preto. Em seu rosto, ela também pode usar vários band-aids. Bijou usa uma alça, top preto com vários cintos e babados. Ela usa uma minissaia preta com um grande zíper na lateral com um cinto preto diagonal que carrega uma katana. Bijou tem meias assimétricas em preto e cinza. Bijou usa tênis cobertos de pedras preciosas. Bijou pode usar uma jaqueta preta com um capuz em forma de GEOW, o interior é azul tornassol, na frente a jaqueta tem alguns remendos, incluindo um Moai e o código 81800. Ela também pode segurar sua katana, mas não desembainhá-la.</p>

            <p>Em 27 de fevereiro, durante um teste de amizade do Advent com suas fantasias casuais, cada integrante trocou de penteado. Bijou tem o penteado principal de Mococo, incluindo as orelhas de cachorro.</p>

            <p>Em 28 de fevereiro, Ina, Bijou, Gigi e Raora estrearam novos mascotes Palico como parte de um patrocínio do jogo Monster Hunter Wilds.</p>

            <p>Em 8 de março, ela estreou seu Traje de ídolo 3D na hololive 6th fes. Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 1. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 22 de março, ela alcançou 800.000 inscritos em seu canal no YouTube.</p>

            <p>Em 1º de abril, Shiori, Nerissa e Bijou estrearam modelos 3D.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Koseki_Bijou">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Nerissa Ravencroft',
        descricao: `Com um profundo amor pela música, Nerissa Ravencroft é “O Demônio do Som”. Seu amor poderoso se transformou em um poder sombrio que habitava seu canto, dando à sua música o potencial de enlouquecer o mundo inteiro. Os deuses, temerosos de sua bela voz, decidiram selá-la por toda a eternidade, mas isso não selou seu desejo de cantar para os outros. Enquanto ela estava selada, ela conheceu a cultura otaku japonesa e atualmente é fascinada por canções de ídolos e lanternas. Talvez a vida dela na prisão não tenha sido tão ruim assim.`,
        aniversario: '21 de Novembro',
        altura: '175cm',
        ilustrador: 'ebplus',
        nomeFas: 'Jailbirds',
        grupo: 'Advent',
        canal: '@NerissaRavencroft',
        outfits: [
            `${pastaFotosPefil}/nerissa.png`,
            `${pastaFotosPefil}/nerissa2.png`,
            `${pastaFotosPefil}/nerissa3.png`,
        ],
        clipes: [
            'RWU3o_kDixc?si=DQ4InEmrx22bxnQF', // love me love me love me,
            'WLMlYZdynxE?si=EIA5I5hS4ppve6cr', // sweetest scarlet
            'x_fkTc7Hlp0?si=4QP73aCAfc1TxTH-', // say my name
            idRebellion
        ],
        historia: `<h3>Audição</h3>
            <p>Após a estreia da segunda geração da hololive English -Council-, a hololive English anunciou uma página permanente de audição em inglês em 30 de dezembro de 2021. Uma atualização da página de audição em 7 de setembro de 2022 gerou especulações sobre uma futura terceira geração da HoloEN.</p>

            <p>Nerissa fez o teste três vezes antes de ser finalmente aceita. Sua primeira audição recebeu algumas visualizações da equipe, mas não foi aceita. Para sua segunda audição, ela tentou afetar uma voz fofa, mas a inscrição foi imediatamente rejeitada após ouvir por um segundo. Sua terceira tentativa de audição consistiu em um segmento onde ela conversou com o ouvinte em um tom familiar, seguido por uma amostra de sua habilidade de cantar. Ela ficou maravilhada quando soube que havia sido bem-sucedida.</p>

            <p>As contas de Nerissa Ravencroft no YouTube e no Twitter foram criadas originalmente em 11 de maio de 2023, embora não contivessem nenhum conteúdo neste momento.</p>

            <p>A terceira geração da hololive em inglês, -Advent-, foi inicialmente anunciada na conta do Twitter da hololive em inglês com um pequeno vídeo em 22 de julho de 2023. Isso foi seguido por outro vídeo teaser em 23 de julho, mostrando cinco novos personagens.</p>

            <p>Em 25 de julho, o canal do YouTube da hololive em inglês postou um vídeo intitulado Wanted!, revelando os cinco membros do -Advent- e anunciando suas próximas estreias. Ao mesmo tempo, Nerissa também postou um pequeno vídeo teaser em seu canal do YouTube e fez seu primeiro tweet, dizendo "Ope?!"</p>

            <p>As contas de Nerissa no Twitter e no YouTube foram descobertas acidentalmente por alguns fãs algumas horas antes do anúncio oficial, embora ainda não tivessem fotos de perfil ou conteúdo. Sua conta no YouTube recebeu mais de mil inscritos antes do lançamento oficial. Além disso, a prévia do clipe de Wanted! no YouTube revelou acidentalmente o nome, o título e a aparência de Nerissa com antecedência.</p>

            <p>Os canais do YouTube de todos os membros do Advent alcançaram 100.000 assinantes em doze horas após o anúncio. Em 30 de julho, antes de sua estreia, Nerissa atingiu 200.000 assinantes.</p>

            <h3>Estréia</h3>
            <p>A transmissão de estreia de Nerissa Ravencroft  ocorreu em 31 de julho, das 12h às 12h45 JST (segunda-feira, 30 de julho, das 20h às 20h45 PDT). Sua estreia contou com mais de 107.000 espectadores no pico. Em seguida, foi lançado seu primeiro cover, a música "Love Me, Love Me, Love Me", do Vocaloid, com letra em inglês escrita por ela.</p>

            <p>Seguindo a tradição da hololive, isso foi seguido pelo grupo colaborativo Generation, composto por todos os membros. Isso, por sua vez, foi seguido pelo lançamento da primeira música do grupo, "Rebellion".</p>

            <h3>Em 2025</h3>
            <p>Em 14 de janeiro, Nerissa estreou seu terceiro traje 2D. Nerissa tem dois penteados, cabelo curto com a franja estilizada para os lados expondo sua testa, o outro é um longo rabo de cavalo. Nerissa tem alguma maquiagem usando sombra e blush. Ela pode ter olhos em formato de coração. Nerissa usa uma roupa de senhora do escritório, usando uma blusa branca de manga comprida com botões e contorno pretos e um alfinete de pena. Ela tem uma saia preta justa que inclui um cinto de tecido xadrez e botões prateados. Suas pernas são cobertas com meias pretas e ela tem saltos pretos. Nerissa também pode usar uma jaqueta azul com um forro xadrez rosa, a jaqueta também tem um padrão de penas na seção inferior. Ela tem um lenço preto com um padrão xadrez. Nerissa também pode usar óculos e levantar a mão para ajustá-los, segurar um microfone e segurar uma garrafa de soju.</p>

            <p>Em 27 de fevereiro, durante um teste de amizade do Advent com suas fantasias casuais, cada integrante trocou de penteado. Nerissa tem o penteado principal de Fuwawa, incluindo as orelhas de cachorro.</p>

            <p>Em 8 de março, ela estreou seu Traje de ídolo 3D na hololive 6th fes. Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 1. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 1º de abril, Shiori, Nerissa e Bijou estrearam modelos 3D.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Nerissa_Ravencroft">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Fuwawa Abyssgard',
        descricao: `<p>Apesar da reputação das irmãs mais velhas de serem confiáveis, Fuwawa é meio cabeça de vento. Ela é boba por natureza e costuma dizer coisas estranhas. Ela é ruim em ortografia e matemática, descuidada e frequentemente desastrada em videogames. No entanto, isso não é problema, pois ela é excepcionalmente fofa.</p>

        <details>
        <summary>Ler mais</summary>
        <p>Ela é bondosa e gentil. No entanto, Fuwawa às vezes parece ser a "gêmea má" e, ocasionalmente... Ela pode ser um pouco egoísta às vezes e, ocasionalmente, demonstra um lado "yandere".</p>

        <p>Ela se importa muito com sua irmã gêmea Mococo. Mococo diz que Fuwawa é confiável e a ajuda a se acalmar. No entanto, Fuwawa também parece ter um complexo de irmã.</p>

        <p>Ambas as irmãs são especialmente talentosas em canto e dança, são trabalhadoras e nunca desistem.</p>
        </details>`,
        aniversario: '01 de Fevereiro',
        altura: '155cm',
        ilustrador: 'ICOMOCHI',
        nomeFas: 'Ruffians',
        grupo: 'Advent',
        canal: '@FUWAMOCOch',
        outfits: [
            `${pastaFotosPefil}/fuwawa.png`,
            `${pastaFotosPefil}/fuwawa2.png`,
            `${pastaFotosPefil}/fuwawa3.png`,
        ],
        clipes: [
            idBauDol,
            '-wzgy7uTuSk?si=vKKtIQRFI2TrDGmt', // lifetime showtime
            'B9qgXaihce8?si=jI55Sf4G4xcqPncj', // identity
            idSirens
        ],
        historia: `<h3>Audição</h3>
            <p>Após a estreia da segunda geração da hololive English -Council-, a hololive English anunciou uma página permanente de audição em inglês em 30 de dezembro de 2021. Uma atualização da página de audição em 7 de setembro de 2022 gerou especulações sobre uma futura terceira geração da HoloEN.</p>

            <p>Fuwawa e Mococo descobriram a hololive pela primeira vez depois de ver uma foto de Akai Haato no Twitter, que inicialmente confundiram com um personagem de uma visual novel. Eles foram aceitos no hololive como uma dupla após se inscreverem em quatro ou mais ocasiões diferentes. Eles se inscreveram de várias maneiras, tanto como uma dupla quanto individualmente, e em inglês e japonês. Em uma inscrição malsucedida, eles enviaram um cover de Kimi ga Tame, uma música que eles fariam um cover em seu showcase 3D de 2024.</p>

            <p>As contas do FUWAMOCO no YouTube e no Twitter foram criadas originalmente em 12 de maio de 2023, um dia depois das demais contas do grupo, embora não contivessem conteúdo até então. Fuwawa e Mococo compartilham uma conta. Contas separadas no YouTube também foram criadas para Fuwawa e Mococo, mas permaneceram sem uso.</p>

            <p>A terceira geração da hololive em inglês, -Advent-, foi inicialmente anunciada na conta do Twitter da hololive em inglês com um pequeno vídeo em 22 de julho de 2023. Isso foi seguido por outro vídeo teaser em 23 de julho, mostrando cinco novos personagens.</p>

            <p>Em 25 de julho, o canal do YouTube da hololive em inglês postou um vídeo intitulado Wanted!, revelando os cinco membros do -Advent- e anunciando suas próximas estreias. Ao mesmo tempo, a dupla FUWAMOCO também postou um pequeno vídeo teaser e fez seu primeiro tweet.</p>

            <p>Os canais do YouTube de todos os membros do -Advent- atingiram 100.000 assinantes em doze horas após o anúncio. Em 30 de julho, o canal FUWAMOCO atingiu 200.000 assinantes antes da estreia das irmãs.</p>

            <h3>Estréia</h3>
            <p>Fuwawa e Mococo fizeram sua transmissão de estreia em 31 de julho, das 12h45 às 13h30 JST (domingo, 30 de julho de 2023, das 20h45 às 21h30 PDT). Sua estreia atingiu mais de 119.000 espectadores no pico. Durante a transmissão, elas também deram uma prévia de sua primeira música original, "Lifetime Showtime". A transmissão foi seguida pelo lançamento de seu primeiro cover, "KAIBUTSU".</p>

            <p>Fuwawa e Mococo foram os últimos membros da hololive -Advent- a estrear. Seguindo a tradição da hololive, isso foi seguido pelo grupo de colaboração Generation, com todos os membros, e pelo lançamento de sua primeira música em grupo, "Rebellion".</p>
            
            <h3>Em 2025</h3>
            <p>Em 15 de janeiro de 2025, Fuwawa estreou seu terceiro traje 2D. Fuwawa tem dois penteados, cabelo mais curto e ondulado com tranças nas laterais e twintails, ambos decorados com fitas pretas e grampos brancos, um em forma de asa de morcego. Fuwawa usa uma alça, xadrez, top azul com alças pretas cruzadas nas laterais. Ela tem uma saia branca de tábua. Fuwawa usa meias assimétricas brancas, a maior tem uma liga com um coração azul curto e uma fita preta. Seus sapatos são pretos e as tiras do tornozelo têm asas curtas de morcego. Fuwawa também pode usar um suéter azul com fitas brancas decorativas à direita e aberturas nas mangas também amarradas com fitas, uma bolsa branca em forma de Pero e óculos de armação branca.</p>

            <p>Em 27 de fevereiro, durante um teste de amizade do Advent com seus trajes casuais, cada integrante trocou de penteado. Fuwawa tem o penteado principal de Bijou, incluindo a tiara de joias.</p>

            <p>Em 8 de março, ela estreou seu Traje de ídolo 3D na hololive 6th fes. Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 1. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 18 de março, a FUWAMOCO anunciou um hiato temporário. A seguinte transmissão matinal da FUWAMOCO estava agendada para 30 de março.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Fuwawa_Abyssgard">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Mococo Abyssgard',
        descricao: `<p>Mococo, a irmã mais nova, é enérgica, otimista e especialmente amigável. Ela tem uma atitude positiva e anima os espectadores com suas Mococo Pup Talks. Ela é gentil com os outros, embora ocasionalmente possa causar problemas quando fica superexcitada. Ela também é muito sensível e bastante carente. Ela fica incomodada quando as pessoas a chamam por apelidos estranhos.</p>

        <details>
        <summary>Ler mais</summary>
        <p>De acordo com sua irmã Fuwawa, Mococo pode ser teimosa, mas no fundo ela tem um grande coração. Mococo se importa muito com sua irmã, embora elas ocasionalmente discutam. Ela se sente solitária quando elas estão separadas, e Mococo quase nunca transmite sem sua irmã.</p>

        <p>Ambas as irmãs são especialmente apaixonadas por canto e dança. São apaixonadas, trabalhadoras e têm uma atitude de nunca desistir.</p>
        </details>`,
        aniversario: '02 de Fevereiro',
        altura: '155cm',
        ilustrador: 'ICOMOCHI',
        nomeFas: 'Ruffians',
        grupo: 'Advent',
        canal: '@FUWAMOCOch',
        outfits: [
            `${pastaFotosPefil}/mococo.png`,
            `${pastaFotosPefil}/mococo2.png`,
            `${pastaFotosPefil}/mococo3.png`,
        ],
        clipes: [
            idBauDol,
            'XYmZUh_YAq0?si=NezhwB-Wylkpm-6F', // cute na kanojo
            'D8YflSQi1Vk?si=K47dg-JvGFmrxM_T', // white love
            idSirens
        ],
        historia: `<h3>Audição</h3>
            <p>Após a estreia da segunda geração da hololive English -Council-, a hololive English anunciou uma página permanente de audição em inglês em 30 de dezembro de 2021. Uma atualização da página de audição em 7 de setembro de 2022 gerou especulações sobre uma futura terceira geração da HoloEN</p>

            <p>Fuwawa e Mococo descobriram a hololive pela primeira vez depois de ver uma foto de Akai Haato no Twitter, que inicialmente confundiram com um personagem de uma visual novel. Eles foram aceitos na hololive como uma dupla após se inscreverem em quatro ou mais ocasiões diferentes. Eles se inscreveram de várias maneiras, tanto como uma dupla quanto individualmente, e em inglês e japonês. Em uma inscrição malsucedida, eles enviaram um cover de Kimi ga Tame, uma música que eles fariam um cover em seu showcase 3D de 2024.</p>

            <p>As contas do FUWAMOCO no YouTube e no Twitter foram criadas originalmente em 12 de maio de 2023, um dia depois das demais contas do grupo, embora não contivessem conteúdo até então. Fuwawa e Mococo compartilham uma conta. Contas separadas no YouTube também foram criadas para Fuwawa e Mococo, mas permaneceram sem uso.</p>

            <p>A terceira geração da hololive em inglês, -Advent-, foi inicialmente anunciada na conta do Twitter da hololive em inglês com um pequeno vídeo em 22 de julho de 2023. Isso foi seguido por outro vídeo teaser em 23 de julho, mostrando cinco novos personagens.</p>

            <p>Em 25 de julho, o canal do YouTube da hololive em inglês postou um vídeo intitulado Wanted!, revelando os cinco membros do -Advent- e anunciando suas próximas estreias. Ao mesmo tempo, a dupla FUWAMOCO também postou um pequeno vídeo teaser e fez seu primeiro tweet.</p>

            <p>Os canais do YouTube de todos os membros do -Advent- atingiram 100.000 assinantes em doze horas após o anúncio. Em 30 de julho, o canal FUWAMOCO atingiu 200.000 assinantes antes da estreia das irmãs.</p>

            <h3>Estréia</h3>
            <p>Fuwawa e Mococo fizeram sua transmissão de estreia em 31 de julho, das 12h45 às 13h30 JST (domingo, 30 de julho de 2023, das 20h45 às 21h30 PDT). Sua estreia atingiu mais de 119.000 espectadores no pico. Durante a transmissão, elas também apresentaram uma prévia de sua primeira música original, "Lifetime Showtime". A transmissão foi seguida pelo lançamento de seu primeiro cover, "KAIBUTSU".</p>

            <p>Fuwawa e Mococo foram os últimos membros da hololive -Advent- a estrear. Seguindo a tradição da hololive, isso foi seguido pelo grupo de colaboração Generation, com todos os membros, e pelo lançamento de sua primeira música em grupo, "Rebellion".</p>
            
            <h3>Em 2025</h3>
            <p>Em 15 de janeiro de 2025, Mococo estreou seu terceiro traje 2D. Mococo tem dois penteados, um cabelo um pouco mais curto com franja reta e tranças nas laterais com as pontas lembrando maria-chiquinhas curtas, e maria-chiquinhas curtas e baixas com scrunchies brancos e fofos. Mococo usa uma blusa branca com gola e alças rosa com babados, a blusa tem uma estampa que diz "MOGOGO" com uma asa de morcego acima e uma estrela abaixo. Ela tem uma saia azul estilo demin com uma borda branca fofa, complementada com fitas azuis e vários acessórios brancos. Mococo usa meias brancas assimétricas, a maior tem uma borda rosa com um pequeno coração rosa e uma fita, a outra é listrada em rosa. Mococo usa sapatos azul-claros com saltos rosa. Mococo também pode usar uma jaqueta rosa com fitas brancas decorativas e óculos de armação branca.</p>

            <p>Em 27 de fevereiro, durante um teste de amizade do Advent com seus trajes casuais, cada membro trocou de penteado. Mococo tem o penteado principal de Shiori.</p>

            <p>Em 8 de março, ela estreou seu Traje de ídolo 3D na hololive 6th fes. Color Rise Harmony durante o dia 1 do evento, ESTÁGIO 1. O traje tem algumas variantes, pode ser preto ou branco, complementado com uma cor representativa do talento. A barriga pode ser coberta ou não. Uma variante tem uma saia, enquanto a outra usa calças, com uma perna exposta. Além do design apresentado no material promocional, o traje também inclui uma jaqueta curta.</p>

            <p>Em 18 de março, a FUWAMOCO anunciou um hiato temporário. A seguinte transmissão matinal da FUWAMOCO estava agendada para 30 de março.</p>

            <p>Em 18 de abril, Mococo anunciou uma nova atualização para seu modelo 3D.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Mococo_Abyssgard">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Elizabeth Rose Bloodflame',
        descricao: `<p>Elizabeth tem uma atitude direta e bondosa. Ela é educada e amigável, e se dá bem com os outros membros. Ela possui uma confiança silenciosa, além de talento para o drama e um ótimo senso de humor. Ela é uma lutadora corajosa e trabalhadora diligente, e raramente xinga. Ela é uma apoiadora leal dos outros membros da Justice, embora tenha uma admiração não tão secreta por Nerissa Ravencroft, membro do Advent.</p>

        <p>Ela tem um talento especial para imitação de voz, que ocasionalmente usa para pregar peças. Ela também é uma cantora talentosa e tem o hábito de cantarolar. Ela costuma trollar membros da hololive e da HOLOSTARS, demonstrando um lado mais brincalhão.</p>`,
        aniversario: '25 de Abril',
        altura: '171cm',
        ilustrador: 'MEPHISTO',
        nomeFas: 'Rosarians',
        grupo: 'Justice',
        canal: '@holoen_erbloodflame',
        outfits: [
            `${pastaFotosPefil}/liz.png`,
            `${pastaFotosPefil}/liz2.png`,
        ],
        clipes: [
            'zZXW_iXIrss?si=Fcjs1LNdx_6uSYUm', // otonablue
            'QAPasXCYkPU?si=IpfcTcIL314J0yKh', // love-song
            'jqFPgcMt_Jo?si=M2eckEF-cy68lBT7', // mephisto,
            idAboveBelow,
        ],
        historia: `<h3>Nova Geração</h3>
            <p>Elizabeth foi anunciada como uma das quatro integrantes da hololive English -Justice- em 18 de junho de 2024, em um vídeo intitulado "A Missão Começa!". Elizabeth fez seu primeiro tweet logo depois. Isso foi seguido por um breve vídeo de perfil, intitulado "Justiça, não é mesmo?".</p>

            <p>Seu canal no YouTube foi criado em 3 de abril de 2024. Sua conta no Twitter foi registrada no mesmo mês.</p>

            <p>O anúncio da quarta geração da hololive em inglês pegou a maior parte da comunidade VTuber de surpresa. A geração anterior em inglês, Advent, havia estreado menos de um ano antes, e o último relatório trimestral da Cover sugeria uma estratégia de estreias menos frequentes de Vtubers. Os nomes dos novos membros vazaram por meio de registro de marca algumas horas antes do anúncio oficial.</p>

            <p>Antes da estreia, os membros do Justice gravaram uma série de áudios de "missões" onde visitaram um santuário para desejar uma estreia de sucesso, visitaram uma casa mal-assombrada, visitaram um maid café e se encontraram com FUWAMOCO para obter conselhos. Os clipes só seriam lançados em dezembro de 2024.</p>

            <h3>Estréia</h3>
            <p>Elizabeth fez sua transmissão de estreia em 21 de junho de 2024, às 20h (horário do Pacífico). Ela foi a primeira de sua geração a estrear. A transmissão teve mais de 120.000 espectadores no pico. Ela alcançou 108.000 inscritos no YouTube pouco antes da estreia da transmissão e atingiu 135.000 inscritos ao final de sua estreia.</p>

            <p>A estreia foi imediatamente seguida pelo lançamento de um cover de OTONABLUE. A estreia de Gigi Murin veio logo em seguida.</p>

            <p>Em 22 de junho, Elizabeth atingiu 200.000 inscritos em seu canal do YouTube. O evento de estreia do Justice foi concluído com o lançamento de seu primeiro single original, "ABOVE BELOW" , e a primeira colaboração do Justice no mesmo dia, às 21h30 PDT.</p>
            
            <h3>Em 2025</h3>
            <p>Em 1 de janeiro de 2025, Elizabeth estreou sua fantasia de ano novo. Elizabeth tem um rabo de cavalo com várias mechas, ela tem um kogai em forma de espada, à direita ela tem um kanzashi com flores azuis, brancas e amarelas e uma fita preta. Liz tem brincos de nó de botão vermelho. Ela usa tiras finas, pretas, cruzadas, que parecem segurar seu quimono pelas costas. Elizabeth usa sarashi branco . Seu quimono vermelho tem vários padrões de galhos, folhas e rosas brancas e azuis. Seu obi é grande e tem duas fitas em camadas em branco e vermelho, a fita vermelha tem um padrão de pássaro voando branco e um nó de botão roxo no centro. A saia do quimono tem um corte no meio expondo suas pernas, a saia é em camadas com uma seção superior de renda branca e uma seção interna com o mesmo padrão de sua parte superior do corpo, com uma borda preta com babados. Liz usa sandálias pretas e vermelhas. Ela também pode segurar um leque, um microfone e um coquetel verde.</p>

            <p>Em 15 de março, ela atingiu 500.000 inscritos no YouTube, tornando-se o 66º membro da hololive e também o primeiro membro do -Justice- a atingir o marco.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Elizabeth_Rose_Bloodflame">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Gigi Murin',
        descricao: `<p>Gigi é uma gamer e adora a emoção de vencer. Ela tem energia de "gremlin" e é barulhenta, enérgica, imprevisível, caótica e às vezes irritante.</p>

        <p>Ela é obsessiva e determinada. Ela é incessante com memes e pedidos, principalmente "boat goes binted" e seus planos para convencer Mori Calliope a jogar League of Legends. Ela também faz piadas grosseiras de vez em quando. No entanto, ela não é maldosa e faz de tudo para fazer os outros rirem. Ela se descreveria como "caótica e boa" em alinhamento.</p>

        <p>Ela também tem um lado gentil e é dedicada aos seus Grems. É amiga íntima de Cecilia Immergreen, que serve como contraponto às suas explosões malucas.</p>`,
        aniversario: '18 de Outubro',
        altura: '153cm',
        ilustrador: 'Makihitsuji',
        nomeFas: 'Grems',
        grupo: 'Justice',
        canal: '@holoen_gigimurin',
        outfits: [
            `${pastaFotosPefil}/gigi.png`,
            `${pastaFotosPefil}/gigi2.png`,
        ],
        clipes: [
            'bmT_cEfOTJE?si=lxmY-ie1mjSOUxkp', //hitomania
            'B_N1uEAHk10?si=IOfMVzrnjGJY05S0', //igaku
            't3tIj88yzLM?si=4r4dIONOxHIY4Z79', // kyu-kurarin
            idAboveBelow
        ],
        historia: `<h3>Nova Geração</h3>
            <p>Gigi conheceu a hololive em 2020, com a estreia do Myth. Ela se inspirou para ser uma criadora de conteúdo, e se candidatou quatro vezes para ingressar na hololive antes de ser aceita como membro da quarta geração da hololive em inglês.</p>

            <p>O canal de Gigi no YouTube foi criado em 3 de abril de 2024. Sua conta no Twitter foi registrada no mesmo mês.</p>

            <p>Gigi foi anunciada como uma das quatro integrantes da hololive English -Justice- em 18 de junho de 2024, em um vídeo intitulado "A Missão Começa!". Gigi fez seu primeiro tweet logo depois. Isso foi seguido por um pequeno vídeo de perfil, intitulado "Gigi: GG NOOBS!!! 😝".</p>

            <p>O anúncio da quarta geração da hololive em inglês pegou a maior parte da comunidade VTuber de surpresa. A geração anterior em inglês, Advent, havia estreado menos de um ano antes, e o último relatório trimestral da Cover sugeria uma estratégia de estreias menos frequentes de Vtubers. Os nomes dos novos membros vazaram por meio de registro de marca algumas horas antes do anúncio oficial.</p>

            <p>Antes da estreia, os membros do Justice gravaram uma série de áudios de "missões" onde visitaram um santuário para desejar uma estreia de sucesso, visitaram uma casa mal-assombrada, visitaram um maid café e se encontraram com FUWAMOCO para obter conselhos. Os clipes só seriam lançados em dezembro de 2024.</p>

            <h3>Estréia</h3>
            <p>Gigi fez sua transmissão de estreia em 21 de junho de 2024, às 20h45 PDT. A transmissão apresentou um cenário estilo RPG, onde os jogadores votavam no resultado de uma história, e um videogame estilo Frogger, controlado pelo chat, no estilo Twitch Plays Pokémon. Atingiu mais de 120.000 espectadores no pico. Seu canal no YouTube atingiu 128.000 inscritos ao final da transmissão.</p>

            <p>A transmissão de estreia foi seguida por um cover da música Hito Mania.</p>

            <p>O evento de estreia do Justice foi concluído com o lançamento de seu primeiro single original, "ABOVE BELOW", e a primeira colaboração do Justice em 22 de junho às 21h30 PDT.</p>
            
            <h3>Em 2025</h3>
            <p>Em 1º de janeiro de 2025, Gigi estreou sua fantasia de ano novo. Gigi tem cabelo curto com um twintail curto à direita, na franja esquerda, ela tem um grampo de cabelo dourado com os olhos fechados e a língua para fora. Gigi pode usar um kanzashi com uma flor branca e laranja. Ela também pode usar um grande chapéu kagami mochi, a laranja no topo é na verdade seu mascote Popo usando um chapéu. Gigi usa um quimono branco com um padrão de flores laranja. Seu obi é em camadas em branco e vermelho com uma fita ao lado e um cinto moderno laranja caindo para o lado. Gigi tem um mini hakama amarelo, decorado com padrões vermelhos e brancos perto da borda, incluindo flores de glória da manhã. Por baixo, Gigi usa shorts de segurança pretos. Gigi usa luvas curtas, pretas e sem dedos. Ela tem vários band-aids amarelos e laranja nas pernas. Suas meias são meias brancas e suas sandálias vermelhas e pretas.</p>

            <p>Em 22 de fevereiro, ela atingiu 400.000 inscritos no YouTube.</p>

            <p>Em 28 de fevereiro, Ninomae Ina'nis, Koseki Bijou, Gigi e Raora estrearam novos mascotes Palico como parte de um patrocínio da Monster Hunter Wilds.</p>

            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Gigi_Murin">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Cecilia Immergreen',
        descricao: `<p>Cecilia é uma streamer inteligente e direta. Ela pode ser teimosa e combativa, e frequentemente usa sarcasmo. Às vezes, ela gosta de pregar peças em seus parceiros de colaboração, mas apenas por diversão. Seu objetivo é entreter seus espectadores.</p>

        <p>Ela é excepcionalmente criativa e conhecida por programar "Imersões" únicas em transmissões, seja diminuindo sua altura para ficar igual à do protagonista de Legend of Zelda , criando uma tela verde para si mesma no jogo ou programando seus próprios minijogos controlados por chat. Ela também é conhecida por seu talento musical e toca violino com maestria.</p>

        <p>Ela é boa amiga de Gigi Murin, e as duas formam uma dupla cômica, com Cecilia como contraparte. Às vezes, elas são mais como cúmplices no crime.</p>`,
        aniversario: '11 de Novembro',
        altura: '162cm',
        ilustrador: 'DSmile',
        nomeFas: 'Otomos',
        grupo: 'Justice',
        canal: '@holoen_ceciliaimmergreen',
        outfits: [
            `${pastaFotosPefil}/ceci.png`,
            `${pastaFotosPefil}/ceci2.png`,
        ],
        clipes: [
            'twto2g0FwTQ?si=-Cf5g-zJwDQ0dyTR', // forgotten worlds
            'QDhCNXYgdJc?si=zMk9I6ex9eGQtTvF', // above below far-east
            'tBzZss_kh_0?si=fmeLnwdvCzwwUFCP', // snow halation
            idAboveBelow,
        ],
        historia: `<h3>Nova Geração</h3>
            <p>Cecilia conheceu a hololive através do infame clipe de band-aid de Natsuiro Matsuri de 2019. Ela é fã da VTuber desde então. Ela acompanha a hololive em inglês desde a primeira geração e entrou na competição de remixes de Mori Calliope em 2020.</p>

            <p>Ela se candidatou ao hololive em duas ocasiões antes de ser aprovada. Em um processo de audição de várias etapas, ela estava excepcionalmente nervosa na segunda etapa, onde preparou um evento de transmissão. Ela o descreve como um evento de dramatização "muito, muito bobo", onde sequestrou funcionários. Eram 4 da manhã no horário dela, então ela passou dez minutos dançando e girando por dez minutos para acordar e se animar.</p>

            <p>A conta de Cecilia no YouTube foi criada em 3 de abril de 2024. Sua conta no Twitter foi registrada no mesmo mês.</p>

            <p>Cecilia foi anunciada como uma das quatro integrantes da hololive English -Justice- em 18 de junho de 2024, em um vídeo intitulado "A Missão Começa!". Cecilia fez seu primeiro tweet logo depois. Isso foi seguido por um breve vídeo de perfil, intitulado "Que este conjunto comece!" 🎶 #holoJustice</p>

            <p>O anúncio da quarta geração da hololive em inglês pegou a maior parte da comunidade VTuber de surpresa. A geração anterior em inglês, Advent, havia estreado menos de um ano antes, e o último relatório trimestral da Cover sugeria uma estratégia de estreias menos frequentes de Vtubers. Os nomes dos novos membros vazaram por meio de registro de marca algumas horas antes do anúncio oficial.</p>

            <p>Antes da estreia, os membros do Justice gravaram uma série de áudios de "missões" onde visitaram um santuário para desejar uma estreia de sucesso, visitaram uma casa mal-assombrada, visitaram um maid café e se encontraram com FUWAMOCO para obter conselhos. Os clipes só seriam lançados em dezembro de 2024.</p>

            <p>Cecilia atingiu 100.000 inscritos no YouTube antes de sua estreia.</p>

            <h3>Estréia</h3>
            <p>Cecilia fez sua primeira transmissão em 22 de junho de 2024, às 20h (horário do Pacífico). A transmissão contou com um jogo controlado por chat no estilo Pokémon do Twitch Plays, que ela mesma programou, e uma apresentação de violino com "Run", de Spice and Wolf, e "A Beautiful Song", de NieR: Automata. A transmissão atingiu mais de 112.000 espectadores no pico.</p>

            <p>Foi seguido pela estreia de um cover da música Forgotten Words.</p>

            <p>O evento de estreia do Justice foi concluído com o lançamento de seu primeiro single original, "ABOVE BELOW", e a primeira colaboração do Justice em 22 de junho às 21h30 PDT.</p>

            <h3>Em 2025</h3>
            <p>Em 1º de janeiro de 2025, Cecilia estreou sua fantasia de ano novo. Cecilia tem coques de cabelo com fitas vermelhas curtas e usa um kanzashi com duas grandes flores verdes e cinco pequenas flores brancas. Cecilia usa um quimono verde-menta de mangas compridas com um padrão de diamante. Seu quimono tem um padrão de rosas rosa e vermelhas e padrões de rodas dentadas. Seu obi é vermelho com um padrão de diamante e tem uma engrenagem dourada e uma joia de rubi, segurando um xale branco no lugar. Por baixo, seu quimono tem tiras pretas cruzadas. A parte inferior de seu quimono tem um corte diagonal revelando uma seção branca em camadas e com babados, semelhante à borda das mangas. Cecilia usa luvas brancas. Ela usa sapatos brancos. Cecilia pode carregar um guarda-chuva branco. Durante a transmissão, Cecilia também disse que, embora seu equipamento de base seja o mesmo, ela equipou essa roupa e cabelo.</p>

            <p>Em 14 de março, Cecília atingiu 400 mil inscritos em seu canal do YouTube.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Cecilia_Immergreen">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    },
    {
        nome: 'Raora Panthera',
        descricao: `<p>A Artista dos Olhos de Deus, Raora Panthera é dotada de proezas investigativas e descritivas. Seus meios de coleta de informações são diversos, utilizando não apenas sua agilidade e habilidades sociais, mas também diversas plataformas de mídia social e outros métodos únicos.</p>

        <details>
        <summary>Ler mais</summary>
        <p>As composições faciais que ela desenha com base nas informações que coleta são conhecidas por sua precisão, quase como se ela estivesse olhando diretamente para os criminosos enquanto desenha.</p>

        <p>No entanto, hoje em dia, seu olhar é direcionado para encontrar novas pizzarias e desfrutar da cultura pop do extremo leste.</p>
            
        <p>Raora é alegre, paciente e amigável. Ela tem uma atitude suave e reconfortante, e seu riso é contagiante. Ela é sempre positiva e meio cabeça-de-vento, e não xinga. Embora geralmente gentil no comportamento, ela não tem medo de impor sua postura em assuntos importantes: ingredientes de pizza, cozinhar macarrão ou as constantes exigências dos Chattini para receber jetpacks.</p>
        </details>`,
        aniversario: '11 de Maio',
        altura: '158cm',
        ilustrador: 'Nekojira',
        nomeFas: 'Chattini',
        grupo: 'Justice',
        canal: '@holoen_raorapanthera',
        outfits: [
            `${pastaFotosPefil}/raora.png`,
            `${pastaFotosPefil}/raora2.png`,
        ],
        clipes: [
            'UwIhbV_wuKI?si=qmSWYmmBGLDCtc7r', // hibana
            'pqqhKj6Sh-E?si=ADX7fBjFDxyxAMew', // echo
            'ILpEFrK1F5I?si=cFeGNrhlq48s5A2A', // matryoshika
            idAboveBelow
        ],
        historia: `<h3>Nova Geração</h3>
            <p>O canal de Raora no YouTube foi criado em 3 de abril de 2024. Sua conta no Twitter foi registrada no mesmo mês. No início da produção, seu codinome era "Pizza".</p>

            <p>Raora foi anunciada como uma das quatro integrantes da hololive English -Justice- em 18 de junho de 2024, em um vídeo intitulado "A Missão Começa!". Raora fez seu primeiro tweet logo depois. Isso foi seguido por um breve vídeo de perfil, intitulado "Eu te vejo!".</p>

            <p>O anúncio da quarta geração da hololive em inglês pegou a maior parte da comunidade VTuber de surpresa. A geração anterior em inglês, Advent, havia estreado menos de um ano antes, e o último relatório trimestral da Cover sugeria uma estratégia de estreias menos frequentes de VTubers. Os nomes dos novos membros vazaram por meio de registro de marca algumas horas antes do anúncio oficial.</p>

            <p>Antes da estreia, os membros do Justice gravaram uma série de áudios de "missões" onde visitaram um santuário para desejar uma estreia de sucesso, visitaram uma casa mal-assombrada, visitaram um maid café e se encontraram com FUWAMOCO para obter conselhos. Os clipes só seriam lançados em dezembro de 2024.</p>

            <p>Raora atingiu 100.000 inscritos no YouTube antes da estreia.</p>

            <h3>Estréia</h3>
            <p>Raora fez sua transmissão de estreia em 22 de junho de 2024, às 20h45 (horário do Pacífico). A audiência foi de mais de 110.000 espectadores no pico.</p>

            <p>Foi seguido pelo lançamento de seu cover da música Hibana de DECO*27.</p>

            <p>Imediatamente após isso, o evento de estreia do Justice foi concluído com o lançamento de seu primeiro single original, "ABOVE BELOW", e a primeira colaboração do Justice em 22 de junho às 21h30 PDT.</p>
            
            <h3>Em 2025</h3>
            <p>Em 1º de janeiro de 2015, Raora estreou sua fantasia de ano novo. Raora tem rabos de cavalo longos e altos, decorados com fitas brancas e douradas. À esquerda, ela usa uma máscara branca com a forma de uma pantera. Raora usa uma gargantilha preta com uma fita rosa e dois pequenos corações bicolores pendurados em um alfinete circular dourado, duas cordas são presas a este alfinete e descem pelo decote. Raora usa um quimono branco de mangas compridas, sem ombros, com bordas douradas e rosa. As mangas têm uma seção larga, branca e fofa e as bordas têm um padrão semicircular em rosa. Seu obi é em camadas com uma camada de botões rosa e uma camada superior preta com padrão dourado, ao lado do obi tem uma fita azul e branca semelhante em forma a um cata-vento. Sua saia tem um corte na lateral, revelando sua perna e que a seção interna é rosa, do outro lado o quimono tem o padrão de uma pantera cor-de-rosa. Raora usa meias longas brancas e sandálias pretas. Raora pode carregar um Chattino usando um haori e segurar uma escova.</p>

            <p>Em 28 de fevereiro, Ina, Bijou, Gigi e Raora estrearam novos mascotes Palico como parte de um patrocínio do jogo Monster Hunter Wilds.</p>

            <p>Em 26 de março, ela atingiu 500.000 inscritos em seu canal do YouTube durante uma transmissão do jogo Galaxy Burger com Mori Calliope. Raora é o 67º membro da hololive e também o segundo membro do Justice a atingir o marco.</p>
            
            <p>Fonte:
            <a href="https://virtualyoutuber.fandom.com/wiki/Raora_Panthera">Virtual YouTuber Wiki | Fandom</a>
            </p>`
    }
];

const fotos = [
    [ // Myth
        [`${pastaFotosPefil}/mori.png`, 'Calli'], [`${pastaFotosPefil}/kiara.png`, 'Kiara'], [`${pastaFotosPefil}/ina.png`, 'Ina'], 
        [`${pastaFotosPefil}/gura.png`, 'Gura'], [`${pastaFotosPefil}/ame.png`, 'Amelia']
        /* Essa é a ordem que as imagens vão ser exibidas. */
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
];

export const musicas = [
    {
        nome: 'Journey Like a Thousand Years',
        src: `${pastaMusicas}/journeythousand.mp3`,
        capa: `${pastaCapas}/thousand.webp`,
    },
    {
        nome: 'Non-Fiction',
        src: `${pastaMusicas}/nonfiction.mp3`,
        capa: `${pastaCapas}/nonfiction.jpg`,
    },
    {
        nome: 'ReUnion',
        src: `${pastaMusicas}/reunion.mp3`,
        capa: `${pastaCapas}/reunion.jpg`,
    },
    {
        nome: 'Rise',
        src: `${pastaMusicas}/rise.mp3`,
        capa: `${pastaCapas}/rise.png`,
    },
    {
        nome: 'Connect the World',
        src: `${pastaMusicas}/connect.mp3`,
        capa: `${pastaCapas}/connect.jpg`
    },
    {
        nome: 'Breaking Dimensions',
        src: `${pastaMusicas}/breakingdimensions.mp3`,
        capa: `${pastaCapas}/breakingdimensions.jpg`
    },
    {
        nome: 'Odyssey',
        src: `${pastaMusicas}/odyssey.mp3`,
        capa: `${pastaCapas}/odyssey.jpg`
    }
]

export const [ Myth, Promise, Advent, Justice ] = fotos;
/* Desestruturando o array matriz de fotos para cada grupo e então criando um objeto abaixo para mapear esses vetores. */

export const mapaFotosGrupos = {
    'Myth': Myth,
    'Promise': Promise,
    'Advent': Advent,
    'Justice': Justice
};

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
};
/* Mapeando cada item do vetor para acessar com mais facilidade as informações dos talentos. */

export { nomesGrupos, talentos };