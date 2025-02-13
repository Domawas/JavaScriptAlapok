import { kuytaLista } from "./adat.js";


/*  html manipulacio 

html dom - lekepezi a htmlt egy dokument object modell szerkezetbe
elfogjuk erni a html elemeket ha van id=""

*/

let koszonElem = document.getElementById("koszon");
console.log(koszonElem);
koszonElem.innerHTML = "Szép az élet!";


/* Article lembe ird bele egy h2 tagbe az elso kutya nevet */
let artElem = document.getElementById("art");
console.log(artElem);
artElem.innerHTML=`<div class ="kutya>"
                    <h2>${kuytaLista[0].nev}</h2>  
                    <p>${kuytaLista[0].nem}</p>
                    <p>kor:${kuytaLista[0].kor}</p>
                    <p>Súly:${kuytaLista[0].suly}</p>
                </div>`