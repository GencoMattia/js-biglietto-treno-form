// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
let travelDistance;

// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
let userAge;

// il prezzo del biglietto è definito in base ai km (0.267113 € al km)


// va applicato uno sconto del 24.552% per gli under 21
const minorAge = 21;
const minorDiscount = 24.552;

// va applicato uno sconto del 37.893% per gli over 63.
const elderAge = 63;
const elderDiscount = 37.893;

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

const pricePerKm = 0.267113;

submitButton = document.querySelector ("div.form>button");

console.log (submitButton);

submitButton.addEventListener("click", function(){
    travelDistance = Number.parseFloat(document.querySelector ("input#travel-distance").value);
    userAge = Number.parseInt(document.querySelector ("input#user-age").value);

    const fullPrice = pricePerKm * travelDistance;
    let discount;
    
    if (userAge < minorAge) {
        discount = (fullPrice * minorDiscount) / 100;
    } else if (userAge > elderAge) {
        discount = (fullPrice * elderDiscount) / 100;
    } else {
        discount = 0;
    }

    const ticketPrice = fullPrice - discount
    document.querySelector ("span.ticket-price").innerHTML = ticketPrice.toFixed(2); 
    document.querySelector ("span.discount-percentage").innerHTML = fullPrice.toFixed(2); 
    document.querySelector ("span.discount-number").innerHTML = discount.toFixed(2); 


    console.log (travelDistance, userAge);
    console.log (ticketPrice)
})