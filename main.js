console.log("Üzenet");

/* Adatszerkezetek */
/* Vezérlőszerkezetek */
var szoveg1 = "első";
let szoveg2 = "2";
const SZOVEG3 = "harmadik";

/* const állandó,nem változtatható mneg */

//pl: SZOVEG3="flds"

/*ennek adható */

let vmi = 2; /*kap értéket is*/
/*let, var és cont hatókört jelent - hol látható az adott vál */
console.log(typeof vmi);
console.log(vmi + 2);
console.log(typeof szoveg2);
console.log(szoveg2 * 5);
console.log(Number(szoveg2) + 2);
let vaneJoKedvem = false;
console.log(vaneJoKedvem);

var a; /*deklaráltam de nem kap változót , hiba*/
console.log(2 * a);

/* Összetett adattípusok */
/* lista */
let lista = [];
lista = [12, 14, 45, 78];
console.log(lista);
console.log(typeof lista);

/* elágazások */
if (lista[0] % 2 == 0) {
  console.log("Páros");
} else {
  console.log("Páratlan");
}

/* a === a tipust is ellenorzi */
let valt = "2";
if (valt === 2) {
  console.log("egyenlő");
} else {
  console.log("nem egyenlő");
}

/* Többágú elágazás */
let hetNapja = 7;
switch (hetNapja) {
  case 1:
    console.log("Hétfő");
    break;
  case 2:
    console.log("Kedd");
    break;
  case 3:
    console.log("Szerda");
    break;
  case 4:
    console.log("Csütörtök");
    break;
  case 5:
    console.log("Péntek");
    break;
  case 6:
    console.log("Szombat");
    break;
  case 7:
    console.log("Vasárnap");
    break;
  default:
    console.log("Nincs ilyen nap");
    break;
}

if (hetNapja == 1) {
  console.log("Hétfő");
} else if (hetNapja == 2) {
  console.log("Kedd");
}

/* számlálós */
for (let index = 0; index < lista.length; index++) {
  console.log(lista[index]);
}

/* objektum */
let kutya1 = {
  nev: "Morzsa",
  nem: "kan",
  kor: 12,
  suly: 25,
};
let kuytaLista = [
  { nev: "Morzsa", nem: "kan", kor: 12, suly: 25 },
  { nev: "Bali", nem: "kan", kor: 2, suly: 4 },
  { nev: "Kini", nem: "szuka", kor: 7, suly: 10 },
];

console.log(kuytaLista[0].nev);

/* hány kutyánk van? */

function feladat0(lista) {
  return lista.length;
}

let db = feladat0(kuytaLista);

console.log("A kutyák száma: " + db);
console.log(`A kutyák száma: ${db}`); // Alt Gr 7 , formázott kiirás

/* Mekkora a kutyák átlagéletkora */

function feladat1(lista) {
  let osszKor = 0;
  for (let index = 0; index < lista.length; index++) {
    osszKor += lista[index].kor;
  }
  return osszKor / lista.length;
}
console.log(`A kutyák átlagkora: ${feladat1(kuytaLista)}`);

/* Hány kan kutya van */

function feladat2(lista) {
  let kan = 0;
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].nem == "kan") {
      kan++;
    }
  }
  return kan;
}
console.log(`Kan kutyából: ${feladat2(kuytaLista)}`);

/* A legnagyobb sulyu kutya neve */

function feladat3(lista) {
  let legnagyobb = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].suly > lista[legnagyobb].suly) {
      legnagyobb = i;
    }
  }
  return legnagyobb;
}

let leg = feladat3(kuytaLista);

console.log(`A legnehezebb kutya kutya neve: ${kuytaLista[leg].nev}`);
