// Szkoła potrzebuje programu służącego do obliczania wyników uczniów.
// System wyświetla listę (załączony plik index.html),w której znajdują się dane: uczeń, oceny z przedmiotów, zajęcia dodatkowe i średnia.
// Twoim zadaniem jest stworzenie skryptu, który będzie:
// - Liczył średnią dla każdego ucznia i wpisywał ją do pola span.srednia
// Szkoła chce aby do średniej wliczany był udział w zajęciach dodatkowych - jeżeli uczeń brał w nich udział, ocena z danego przedmiotu zostaje podwyższona o 0,5 stopnia (pod warunkiem, że ocena nie jest już maksymalna, czyli 6).
// - Zaznaczał zielonym tłem osoby, których średnia wynosi przynajmniej 4,75.
// - Zaznaczał czerwonym tłem osoby, które mają przynajmniej jedną ocenę niedostateczną.
// Stylowanie dowolne (mile widziane).
// Obliczanie jest odpalane przyciskiem button#oblicz
'use strict'

function srednia () {
    // let uczniowie = document.getElementById('pracownicy').children
    // console.log(uczniowie)
    let mat = document.getElementsByClassName('matematyka')
    let pol = document.getElementsByClassName('polski')
    let biol = document.getElementsByClassName('biologia')
    let geo = document.getElementsByClassName('geografia')
    let fiz = document.getElementsByClassName('fizyka')
    let chem = document.getElementsByClassName('chemia')
    let inf = document.getElementsByClassName('informatyka')
    let srednia = document.getElementsByClassName('srednia')

    for (let i=1; i<mat.length; i++) {
        let wynik = (Number(mat[i].value)+Number(pol[i].value)+Number(biol[i].value)+Number(geo[i].value)+Number(fiz[i].value)+Number(chem[i].value)+Number(inf[i].value))/7;
        srednia[i].innerHTML = wynik.toFixed(2);
    }
};

// function srednia () {
//     let i = 1
//     let mat = Number(document.getElementsByClassName('matematyka')[i].value)
//     let pol = Number(document.getElementsByClassName('polski')[i].value)
//     let biol = Number(document.getElementsByClassName('biologia')[i].value)
//     let geo = document.getElementsByClassName('geografia')
//     let fiz = document.getElementsByClassName('fizyka')
//     let chem = document.getElementsByClassName('chemia')
//     let inf = document.getElementsByClassName('informatyka')
//     let srednia = document.getElementsByClassName('srednia')

//     for (let i=1; i<srednia.length; i++) {
//         let wynik = (mat+Number(pol[i].value)+Number(biol[i].value)+Number(geo[i].value)+Number(fiz[i].value)+Number(chem[i].value)+Number(inf[i].value))/7;
//         srednia[i].innerHTML = wynik.toFixed(2);
//     }
// };

document.getElementById('oblicz').addEventListener('click', srednia);