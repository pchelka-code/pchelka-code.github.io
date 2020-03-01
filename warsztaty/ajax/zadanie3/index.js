// podpinamy funkcję do guzika
// pobrać dane z 4 pól o różnych wartościach - w momencie kliknięcia
// vent do guzika oblicz
//działanie matematyczne obliczające
// dodanie wyniku do diva

// parsetIn zmienia stringa na numer


function oblicz () {
    let wplata = parseInt(document.getElementById('wplata').value)
    let okresKapitalizacj = parseInt(document.getElementById('czestotliwosc').value)
    let liczbaLat = parseInt(document.getElementById('lata').value)
    let stopaZwrotu = parseInt(document.getElementById('stopa').value)
    let wynik = (wplata * Math.pow((1 + stopaZwrotu/100), liczbaLat/okresKapitalizacj)).toFixed(2)

    console.log("wynik", wynik)
    
    let divWynik = document.getElementById('wynik')
    divWynik.innerText = wynik
}
