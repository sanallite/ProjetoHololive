import {  Myth, Promise, Advent, Justice } from "./bancoTalentos.js";
import { nomesGrupos } from "./bancoTalentos.js";

function exibirGrupos() {
    for (let i = 0; i < nomesGrupos.length; i++) {
       /*  console.log(nomesGrupos[i]) */
        exibirItens(nomesGrupos[i])
    }
}

function exibirItens(grupo) {
    for (let i = 0; i < grupo.length; i++) {       
        console.log(grupo[i])
        
        /* const fotoPerfil = document.createElement('img');

        fotoPerfil.src = grupo[i];

        fotoPerfil.style.width = '50px';
        fotoPerfil.style.height = '50px';

        document.body.appendChild(fotoPerfil); */
    }
}

function exibirInfoTalentos(grupo) {
    for (let i = 0; i < grupo.length; i++) {
        for (let index = 0; index < 1; index++) {
           for (let index3 = 0; index3 < grupo[i][2].length; index3++) {
             /* console.log(grupo[i][2][index3]); */

            
           }
        }
    }
}

/* exibirItens(myth); */

exibirGrupos();

/* exibirNomesGrupos();
exibirItens(myth);
exibirItens(promise);
exibirItens(advent);
exibirItens(justice); */