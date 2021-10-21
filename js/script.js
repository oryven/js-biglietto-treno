/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

// chiedere all'utente quanti anni ha

let age = prompt ("Quanti anni hai ?");

// chiedere all'utente quanti chilometri deve percorrere

let chilometri = prompt ("Quanti kilometri deve percorrere ?");

// calcolare il prezzo del biglietto

let costoBiglietto = chilometri * 0.21;
console.log(costoBiglietto);

// calcolare lo sconto in base all'età

let prezzoMinorenne = costoBiglietto * 20 / 100;
console.log(prezzoMinorenne);

let prezzoOver65 = costoBiglietto * 40 / 100;
console.log(prezzoOver65);

// scegliere il prezzo in base all'età




// stampare il biglietto





