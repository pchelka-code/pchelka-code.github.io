// function odwrocenie(param1) {
//     let text = param1.split('')
//     let text2 = text.reverse('')
//     let text3 = text2.join('')
//     return text3
// }

// let wynik = odwrocenie('Akademia108');
// console.log('Wynik', wynik)

//wersja skórocna
function odwrocenie(param1) {
    let text = param1.split('').reverse('').join('')
    return text
}

let wynik = odwrocenie('Akademia108');
console.log('Wynik funkcji:', wynik)