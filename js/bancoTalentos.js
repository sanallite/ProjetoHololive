const nomesGrupos =  [ 'Myth', 'Promise','Advent', 'Justice' ];

const grupos = [ 
    [ /* Myth */
        ['Gawr Gura', 
            `Gura é amigável e prontamente agradável, e muitas vezes diverte seus espectadores com travessuras tolas. Ela não tem senso de direção, muitas vezes escreve e pronuncia palavras incorretamente, tem problemas para se lembrar de sua própria idade e sempre falha em resolver problemas básicos de matemática, levando os espectadores a chamá-la afetuosamente de "tubarão burro". De forma memorável, um espectador declarou que "Gura tem um coração de ouro e uma cabeça de osso.`,
            [ '20 de Junho', '141cm', 'Amashiro Natsuki', 'chumbuds' ]
        ],

        ['Amelia Watson',
            `Amelia é uma garota bastante excêntrica que costuma ser vista se misturando ou provocando seus colegas membros do holoMito. Ela geralmente é gentil, solidária e doce, como mostrado quando frequentemente assiste aos streams de seus colegas e muitas vezes ajuda Gura de bom grado no Minecraft. No entanto, Amelia também gosta de brincar com os outros membros e, às vezes, até fazer comentários obscenos, como nomear uma de suas minas no Minecraft "Gura's Backdoor".`,
            [ '06 de Janeiro', '150cm', 'Nabi', 'teamates' ]
        ],

        ['Takanashi Kiara',
            `Kiara é entusiasmada, amigável e aberta com seus sentimentos. Ela se preocupa muito com seus amigos e familiares e sente muita falta deles enquanto está no exterior. Embora enérgica e às vezes caótica por natureza, e ansiosa para colaborar com outros membros, ela é secretamente bastante tímida. Ela às vezes tem cérebro de pássaro, sendo esquecida ou tendo um curto período de atenção. Ela prefere videogames com objetivos fixos, como RPGs, em vez de jogos de mundo aberto como Minecraft.`
            ,['']
        ],

        ['Mori Calliope',
            `Calliope está igualmente empolgada com o rap e com a "colheita". Suas armas favoritas incluem sua foice (apelidada de "Ricky") e o mangual, uma arma medieval feita de uma bola de metal com pontas em uma corrente.<br>
            Calliope é conhecido por ter uma das vozes mais graves do hololive, ainda mais do que Nekomata Okayu, Tokoyami Towa e A-chan. Embora fluente em inglês, Calliope muitas vezes não consegue entender os modos de fala atuais, como o uso de contrações ou gírias modernas. Ela é facilmente perturbada pelo romance, levando alguns a chamá-la de "tsundereaper".`,
            ['']
        ],

        [`Ninomae Ina'nis`,
            `Ina é uma garota gentil, pacífica e pé no chão, tanto que reverte o estresse e a insanidade de seus espectadores, em vez de encorajá-los, apesar de seu papel Lovecraftiano como "a donzela que fala pelos antigos deuses".<br>
            Ela é atenciosa e gentil; Takanashi Kiara relata que, quando ela está deprimida, Ina é sempre a primeira a enviar uma mensagem para ela. Em total contraste com o gremlin salgado Amelia, Ina tem paciência quase infinita e é amplamente considerada o membro mais bem-comportado de sua geração.`,
            ['']
        ]
    ],

    [ /* Council + Irys / Promise */
        ['Irys'],
        ['Tsukumo Sana'],
        ['Ceres Fauna'],
        ['Ouro Kronni'],
        ['Nanashi Mumei'],
        ['Hakos Baelz']
    ],

    [ /* Advent */
        ['Shiori Novella'],
        ['Koseki Bijou'],
        ['Nerissa Ravencroft'],
        ['Fuwawa Abyssgard'],
        ['Mococo Abyssgard']
    ],

    [ /* Justice */
        ['Elizabeth Rose Bloodflame'],
        ['Gigi Murin'],
        ['Cecilia Immergreen'],
        ['Raora Panthera']
    ]
];

const pastaFotosPefil =  '../assets/img/perfis';

const fotos = [
    [ // Myth
        `${pastaFotosPefil}/gura.png`, `${pastaFotosPefil}/ame.png`, `${pastaFotosPefil}/ina.png`, 
        `${pastaFotosPefil}/mori.png`, `${pastaFotosPefil}/kiara.png` 
    ],
    
    [ // Council / Promise
        `${pastaFotosPefil}/irys.png`, `${pastaFotosPefil}/sana.png`, `${pastaFotosPefil}/fauna.png`,
        `${pastaFotosPefil}/kronni.png`, `${pastaFotosPefil}/mumei.png`, `${pastaFotosPefil}/baelz.png`
        
    ],

    [ // Advent
        `${pastaFotosPefil}/shiori.webp` 
        
    ],

    [ // Justice
        `${pastaFotosPefil}/liz.png` 

    ]
]

/* export const [ nomesGrupos, myth, promise, advent, justice ]  = grupos; */
export const [ Myth, Promise, Advent, Justice ] = fotos;

export const mapaFotosGrupos = {
    "Myth": Myth,
    "Promise": Promise,
    "Advent": Advent,
    "Justice": Justice
}

export { nomesGrupos };