import { nomesGrupos, myth, promise, advent, justice } from "./bancoTalentos.js";

function exibirNomesGrupos() {
    for (let i = 0; i < nomesGrupos.length; i++) {
        console.log(nomesGrupos[i]);
    }
}

function exibirItens(grupo) {
    for (let i = 0; i < grupo.length; i++) {
        /* console.log(grupo[i]); */

        for (let index = 0; index < 2; index++) {
            console.log(grupo[i][index]);
        }
    }
}

function exibirInfoTalentos(grupo) {
    for (let i = 0; i < grupo.length; i++) {
        for (let index = 0; index < 1; index++) {
           for (let index3 = 0; index3 < grupo[i][2].length; index3++) {
             console.log(grupo[i][2][index3]);
           }
        }
    }
}

exibirInfoTalentos(myth);

/* exibirNomesGrupos();
exibirItens(myth);
exibirItens(promise);
exibirItens(advent);
exibirItens(justice); */