/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

let element = document.getElementById('prezzo-biglietto');

// chiedere all'utente quanti anni ha

let age = parseInt(prompt ("Quanti anni hai ?"));

// chiedere all'utente quanti chilometri deve percorrere

let chilometri = parseInt (prompt ("Quanti kilometri deve percorrere ?"));

// calcolare il prezzo del biglietto

let costoBiglietto = chilometri * 0.21;
console.log(costoBiglietto);

// calcolare lo sconto in base all'età

if (age < 18) {
    let price = costoBiglietto - (costoBiglietto * 20 / 100);
    console.log(price);
    element.innerHTML = 'Il prezzo del biglietto per te che sei minorenne è di ' + price;
} else if (age > 64) {
    let price = costoBiglietto - (costoBiglietto * 40 / 100);
    console.log(price);
    element.innerHTML = 'Il prezzo del biglietto per te che sei over 65 è di ' + price;
} else {
    element.innerHTML = 'Il prezzo del biglietto per te è di ' + costoBiglietto;
}






