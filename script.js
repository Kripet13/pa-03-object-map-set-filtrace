/* seznam filmů */

const filmy = [
  { nazev: "Pelíšky", reziser: "Jan Hřebejk", rok: 1999, cena: 249, zanr_kod: "K" },
  { nazev: "Vratné lahve", reziser: "Jan Svěrák", rok: 2007, cena: 219, zanr_kod: "K" },
  { nazev: "Želary", reziser: "Ondřej Trojan", rok: 2003, cena: 199, zanr_kod: "D" },
  { nazev: "Šarlatán", reziser: "Agnieszka Holland", rok: 2020, cena: 329, zanr_kod: "D" },
  { nazev: "Čertí brko", reziser: "Marek Najbrt", rok: 2018, cena: 279, zanr_kod: "P" },
  { nazev: "Osmy", reziser: "Jan Hřebejk", rok: 2014, cena: 259, zanr_kod: "H" }
];

/* slovník žánrů */
const zanry = {
  K: "Komedie",
  D: "Drama",
  H: "Historický",
  P: "Pohádka"
};

/* SET: jedineční režiséři */
console.log("SET – jedineční režiséři:");

const reziseriSet = new Set();

for (let i = 0; i < filmy.length; i++) {
  reziseriSet.add(filmy[i].reziser);
}

console.log(reziseriSet);

/* MAP: film podle názvu */
console.log("MAP – dohledání filmu podle názvu:");

const filmMap = new Map();

for (let i = 0; i < filmy.length; i++) {
  filmMap.set(filmy[i].nazev, filmy[i]);
}

console.log("Detail filmu 'Pelíšky':");
console.log(filmMap.get("Pelíšky"));

/* FILTRACE: filmy od roku 2010 */
console.log("FILTRACE – filmy od roku 2010:");

const filmy2010 = [];

for (let i = 0; i < filmy.length; i++) {
  if (filmy[i].rok >= 2010) {
    filmy2010.push(filmy[i]);
  }
}

console.log(filmy2010);

/* PŘEVOD: doplnění názvu žánru */
console.log("PŘEVOD – doplnění názvu žánru:");

for (let i = 0; i < filmy2010.length; i++) {
  filmy2010[i].zanr = zanry[filmy2010[i].zanr_kod];
}

console.log(filmy2010);

/* AGREGACE: průměr, min, max ceny */
console.log("AGREGACE – ceny:");

let soucet = 0;
let min = filmy2010[0].cena;
let max = filmy2010[0].cena;

for (let i = 0; i < filmy2010.length; i++) {
  soucet += filmy2010[i].cena;

  if (filmy2010[i].cena < min) {
    min = filmy2010[i].cena;
  }

  if (filmy2010[i].cena > max) {
    max = filmy2010[i].cena;
  }
}

const prumer = Math.round(soucet / filmy2010.length);

console.log("Průměr:", prumer);
console.log("Minimum:", min);
console.log("Maximum:", max);

/* VYHLEDÁVÁNÍ */
console.log("VYHLEDÁVÁNÍ:");

let existujeSarlatan = false;
let existujePanPrstenu = false;

for (let i = 0; i < filmy.length; i++) {
  if (filmy[i].nazev === "Šarlatán") {
    existujeSarlatan = true;
  }

  if (filmy[i].nazev === "Pán prstenu") {
    existujePanPrstenu = true;
  }
}

console.log("Existuje film 'Šarlatán'?", existujeSarlatan);
console.log("Existuje film 'Pán prstenu'?", existujePanPrstenu);

/* TŘÍDĚNÍ PODLE NÁZVU (čeština) */
console.log("TŘÍDĚNÍ – podle názvu:");

filmy.sort(function (a, b) {
  return a.nazev.localeCompare(b.nazev, "cs-CZ");
});

console.log(filmy);