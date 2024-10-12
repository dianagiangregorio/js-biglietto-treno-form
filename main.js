//prendere il form

const myForm = document.getElementById('calculator-form');

//campi del form

const userAge = document.getElementById('user-age');
const userKm = document.getElementById('user-km');
const resultContainer = document.getElementById('result-container');
const resultText = resultContainer.querySelector('h3')


//invio il form e leggo i dati

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Età del passeggero:', userAge.value);
    console.log('Km da percorrere:', userKm.value);

    //converto i valori in numeri per poter fare i calcoli

    const passengerAge = Number(userAge.value);
    const numberOfKm = Number(userKm.value)

    //Verifico che entrambi i valori siano effettivamente dei numeri
    //eseguo il calcolo del costo del biglietto

    if (!isNaN(numberOfKm) && !isNaN(passengerAge)) {
        if (passengerAge < 18) {
            const ticketCost = numberOfKm * 0.21;
            const discountUnder18 = (ticketCost * 20)/100;
            const ticketCostUnder18 = ticketCost - discountUnder18;
            console.log(`I passeggeri Under 18 hanno uno sconto del 20%, quindi il costo del biglietto è ${ticketCostUnder18.toFixed(2)}`);
        }
        else if (passengerAge > 65) {
            const ticketCost = numberOfKm * 0.21;
            const discountOver65 = (ticketCost * 40)/100;
            const ticketCostOver65 = ticketCost - discountOver65;
            console.log(`I passeggeri Over 65 hanno uno sconto del 40%, quindi il costo del biglietto è ${ticketCostOver65.toFixed(2)}`);
        }
        else {
            const ticketCost = numberOfKm * 0.21;
            console.log(`Il costo del biglietto è ${ticketCost.toFixed(2)}`);
        }
    }
    else {
        console.log('I valori inseriti non sono corretti')
    }

    //dopo tutte le operazioni resetto il form
    userAge.value = '';
    userKm.value = '';

    //visualizzo il costo in pagina

    resultText.innerHTML = 'Il costo del biglietto è stato calcolato'
    resultContainer.classList.remove('d-none');

})